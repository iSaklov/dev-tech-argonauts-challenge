const { Router } = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Adresse email incorrecte').isEmail(),
    check(
      'password',
      'Le mot de passe doit comprendre au moins 8 caractères'
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: errors.errors[0].msg,
        })
      }

      const { email, password } = req.body
      const candidate = await User.findOne({ email })

      if (candidate) {
        return res
          .status(400)
          .json({ message: 'Cet argonaute est déjà embarqué' })
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      const user = new User({ email, password: hashedPassword })

      await user.save()

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
        expiresIn: '1h',
      })

      res
        .status(201)
        .json({
          token,
          userId: user.id,
          message: 'Nouvel argonaute a été embarqué avec succès',
        })
    } catch (e) {
      res
        .status(500)
        .json({
          message: 'Quelque chose ne va pas, veuillez réessayer ultérieurement',
        })
    }
  }
)

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Veuillez saisir un email correcte')
      .normalizeEmail()
      .isEmail(),
    check('password', 'Veuillez saisir votre mot de passe').exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: errors.errors[0].msg,
        })
      }

      const { email, password } = req.body
      const user = await User.findOne({ email })

      if (!user) {
        return res
          .status(401)
          .json({ message: `Cet argonaute n'a pas été trouvé` })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res
          .status(401)
          .json({
            message:
              "Nous n'arrivons pas à vous identifier, veuillez essayer encore",
          })
      }

      const token = jwt.sign({ userId: user.id }, config.get('jwtSecret'), {
        expiresIn: '1h',
      })

      res.json({
        token,
        userId: user.id,
        message: 'Vous vous êtes connecté avec succès',
      })
    } catch (e) {
      res
        .status(500)
        .json({
          message: 'Quelque chose ne va pas, veuillez réessayer ultérieurement',
        })
    }
  }
)

module.exports = router
