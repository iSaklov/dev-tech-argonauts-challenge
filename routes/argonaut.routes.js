const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const Argonaut = require('../models/Argonaut')
const router = Router()

router.post('/', auth, async (req, res) => {
	try {
		const { name } = req.body

		const existing = await Argonaut.findOne({ name })

		if (existing) {
			return res.json({ argonaut: existing })
		}

		const argonaut = new Argonaut({
			name, owner: req.user.userId
		})

		await argonaut.save()

		res.status(201).json({
			// argonaut
			message: 'Post saved successfully!'
		})
	} catch (e) {
		res.status(500).json({
			message: 'Quelque chose ne va pas, on essaie encore',
			error: e
		})
	}
})

router.get('/', auth, async (req, res) => {
	try {
		const argonauts = await Argonaut.find({ owner: req.user.userId })
		res.status(200).json(argonauts)
	} catch (e) {
		res.status(500).json({ message: 'Quelque chose ne va pas, on essaie encore' })
	}
})

router.get('/:id', auth, async (req, res) => {
	try {
		const argonaut = await Argonaut.findById(req.params.id)
		res.status(200).json(argonaut)
	} catch (e) {
		res.status(404).json({ message: 'Cet argonaute n\'a pas été trouvé' })
	}
})

router.put('/:id', auth, async (req, res) => {
	try {
		const { name } = req.body
		const argonaut = new Argonaut({
			_id: req.params.id,
			name: name,
			// imageUrl: req.body.imageUrl,
			owner: req.user.userId
		})

		await Argonaut.updateOne({_id: req.params.id}, argonaut)

		res.status(201).json({ 
			// argonaut
		message: 'Argonaut updated successfully !'
		})
	} catch (e) {
		res.status(500).json({
			message: 'Argonaute n\' a pas pu être modifié', e
		})
	}
})

router.delete('/:id', auth, async (req, res) => {
	try {
		await Argonaut.deleteOne({ _id: req.params.id })
		res.status(200).json({
			message: 'L\'argonaute a été débarqué avec succes !'
		})
	} catch (e) {
		res.status(500).json({ message: 'ERROR DELETE' })
	}
})

module.exports = router