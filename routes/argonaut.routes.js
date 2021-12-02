const { Router } = require('express')
// const config = require('config')
const Argonaut = require('../models/Argonaut')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/add', auth, async (req, res) => {
	try {
		// const baseUrl = config.get('baseUrl')
		const {name} = req.body
		// const {from} = req.body

		const existing = await Argonaut.findOne({ name })

		if (existing) {
			return res.json({ argonaut: existing })
		}

		const argonaut = new Argonaut({
			name, owner: req.user.userId
		})

		await argonaut.save()

		res.status(201).json({ argonaut })
	} catch (e) {
		res.status(500).json({ message: 'Quelque chose ne va pas, on essaie encore' })
	}
})

router.get('/', auth, async (req, res) => {
	try {
		const argonauts = await Argonaut.find({ owner: req.user.userId })
		res.json(argonauts)
	} catch (e) {
		res.status(500).json({ message: 'Quelque chose ne va pas, on essaie encore' })
	}
})

router.get('/:id', auth, async (req, res) => {
	try {
		const argonaut = await Argonaut.findById(req.params.id)
		res.json(argonaut)
	} catch (e) {
		res.status(500).json({ message: 'Quelque chose ne va pas, on essaie encore' })
	}
})

module.exports = router