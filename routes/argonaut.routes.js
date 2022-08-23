const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const Argonaut = require('../models/Argonaut')
const router = Router()

class ArgoService {
	getAll(owner) {
		return Argonaut.find({ owner }).sort({ $natural: -1 }) 
	}

	getPerPage(owner, page = 1, numPerPage = 10, search = '') {
		const PAGE_SIZE = numPerPage					// Similar to 'limit'
		const skip = (page - 1) * PAGE_SIZE		// For page 1, the skip is: (1 - 1) * 10 => 0 * 10 = 0
		return Argonaut.find({
											owner,
											name: { $regex: search, $options: 'i' }
										})
										.skip(skip)          	// Same as before, always use 'skip' first
										.limit(PAGE_SIZE)
										.sort({ $natural: -1 }) // Similar to 'reverse'
	}

	getCollectionSize(owner, search = '') {
		return Argonaut.find({
											owner,
											name: { $regex: search, $options: 'i' }
										})
										.countDocuments()
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
		const argoService = new ArgoService()
		const owner =  req.user.userId
		const page = parseInt(req.query.page)
		const numPerPage = parseInt(req.query.numperpage)
		const search = req.query.search

		let argonauts = []
		let size = 0
		
		if(!isNaN(page) || !isNaN(numPerPage)) {
			console.log('--- IF ---')
			argonauts = await argoService.getPerPage(owner, page, numPerPage, search)
			size = await argoService.getCollectionSize(owner, search)
		} else {
			console.log('--- ELSE ---')
			argonauts = await argoService.getAll(owner)
			size = await argoService.getCollectionSize(owner)
		}

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

router.delete('/', auth, async (req, res) => {
	try {
		await Argonaut.deleteMany({ owner: req.user.userId })
		res.status(200).json({
			message: 'Tous les argonautes ont été débarqués!'
		})
	} catch (e) {
		res.status(500).json({
			message: 'Les argonautes n\' ont pas pu être débarqués',
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