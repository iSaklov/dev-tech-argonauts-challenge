const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const Argonaut = require('../models/Argonaut')
const router = Router()

class ArgoService {
	getAll(owner) {
		return Argonaut.find({ owner }) 
	}

	getPerPage(page = 1, owner) {
		const PAGE_SIZE = 3               		// Similar to 'limit'
		const skip = (page - 1) * PAGE_SIZE		// For page 1, the skip is: (1 - 1) * 10 => 0 * 10 = 0
		return Argonaut.find({ owner })  
										.skip(skip)          	// Same as before, always use 'skip' first
										.limit(PAGE_SIZE)
	}

	getCollSize(owner) {
		return Argonaut.find({ owner }).countDocuments()
	}
}

router.post('/add', auth, async (req, res) => {
	try {
		const { name, img } = req.body

		const existing = await Argonaut.findOne({ name })

		if (existing) {
			return res.json({ argonaut: existing })
		}

		const argonaut = new Argonaut({
			name,
			img,
			owner: req.user.userId
		})

		await argonaut.save()

		res.status(201).json({
			argonaut,
			message: 'Argonaute embarqué avec succès !'
		})
	} catch (e) {
		res.status(500).json({
			message: 'Argonaute \'a pas pu être embarqué',
			error: e
		})
	}
})

router.get('/', auth, async (req, res) => {
	try {
		const owner =  req.user.userId
		const page = parseInt(req.query.page) // Make sure to parse the page to number
		// console.log(`page : ${page}`)
		const argoService = new ArgoService()
		let argonauts

		if(isNaN(page)) {
			argonauts = await argoService.getAll(owner)
		} else {
			argonauts = await argoService.getPerPage(page, owner)
		}

		const size = await argoService.getCollSize(owner)
		console.log(`size : ${size}`)

		// const argonauts = await Argonaut.find({ owner })

		// res.status(200).json(argonauts)
		res.status(200).json({
			argonauts : argonauts,
			size : size
		})
	} catch (e) {
		res.status(500).json({
			message: 'Quelque chose tourne mal, veuillez rafraîchir la page',
			error: e
		})
	}
})

// router.get('/', auth, async (req, res) => {
// 	try {
// 		const owner =  req.user.userId

// 		const argonauts = await Argonaut.find({ owner }) 

// 		res.status(200).json(argonauts)
// 	} catch (e) {
// 		res.status(500).json({
// 			message: 'Quelque chose tourne mal, veuillez rafraîchir la page',
// 			error: e
// 		})
// 	}
// })

router.get('/:id', auth, async (req, res) => {
	try {
		const argonaut = await Argonaut.findById(req.params.id)
		res.status(200).json(argonaut)
	} catch (e) {
		res.status(404).json({
			message: 'Cet argonaute n\'a pas été trouvé',
			error: e
		})
	}
})

router.put('/:id', auth, async (req, res) => {
	try {
		const { newName } = req.body
		const argonaut = new Argonaut({
			_id: req.params.id,
			name: newName,
			// imageUrl: req.body.imageUrl,
			owner: req.user.userId
		})

		await Argonaut.updateOne({_id: req.params.id}, argonaut)

		res.status(201).json({ 
			argonaut,
			message: 'Argonaute vient d\'être modifié avec succès !'
		})
	} catch (e) {
		res.status(500).json({
			message: 'Argonaute n\' a pas pu être modifié',
			error: e
		})
	}
})

router.delete('/:id', auth, async (req, res) => {
	try {
		await Argonaut.deleteOne({ _id: req.params.id })
		res.status(200).json({
			message: 'L\'argonaute a été débarqué avec succès !'
		})
	} catch (e) {
		res.status(500).json({
			message: 'Argonaute n\' a pas pu être supprimé',
			error: e
		})
	}
})

module.exports = router