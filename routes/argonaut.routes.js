const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const Argonaut = require('../models/Argonaut')
const router = Router()

class ArgoService {
	getAll(owner) {
		return Argonaut.find({ owner }).sort({ $natural: -1 }) 
	}

	getPerPage(owner, page = 1, numPerPage = 10, search = '', sort = '') {
		const PAGE_SIZE = numPerPage					// Similar to 'limit'
		const skip = (page - 1) * PAGE_SIZE		// For page 1, the skip is: (1 - 1) * 10 => 0 * 10 = 0

		switch(sort) {
			case '':
				return Argonaut.find({
									owner,
									name: { $regex: search, $options: 'i' }
								})
								.skip(skip)          	// Same as before, always use 'skip' first
								.limit(PAGE_SIZE)
								.sort({ $natural: -1 }) // Similar to 'reverse'
			case 'name':
				return Argonaut.find({
								owner,
								name: { $regex: search, $options: 'i' }
							})
							.skip(skip)
							.limit(PAGE_SIZE)
							.sort({ name: 1 })
			case 'date':
				return Argonaut.find({
								owner,
								name: { $regex: search, $options: 'i' }
							})
							.skip(skip)
							.limit(PAGE_SIZE)
							.sort({ date: 1 })
		}
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
		const { name, img, boarding } = req.body
		const owner = req.user.userId

		const existing = await Argonaut.findOne({ name, owner })

		if (existing) {
			return res.json({message: `Vous avez dèja ${existing.name} à bord` })
		}

		const argonaut = new Argonaut({
			name,
			img,
			owner
		})

		await argonaut.save()

		if(boarding) {
			res.status(201).json({
				argonaut
			})
		} else {
			res.status(201).json({
				argonaut,
				message: `${name} embarqué avec succès !`
			})

	}
	} catch (e) {
		res.status(500).json({
			message: `${req.body.name} n'a pas pu être embarqué`,
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
		const sort = req.query.sort

		let argonauts = []
		let size = 0
		
		if(!isNaN(page) || !isNaN(numPerPage)) {
			argonauts = await argoService.getPerPage(owner, page, numPerPage, search, sort)
			size = await argoService.getCollectionSize(owner, search)
		} else {
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

// router.get('/:id', auth, async (req, res) => {
// 	try {
// 		const argonaut = await Argonaut.findById(req.params.id)
// 		res.status(200).json(argonaut)
// 	} catch (e) {
// 		res.status(404).json({
// 			message: 'Cet argonaute n\'a pas été trouvé',
// 			error: e
// 		})
// 	}
// })

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
			message: `L'argonaute porte désormais le nom ${newName} !`
		})
	} catch (e) {
		res.status(500).json({
			message: `L'argonaute n'a pas pu être modifié`,
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
			message: 'Les argonautes n\'ont pas pu être débarqués',
			error: e
		})
	}
})

router.delete('/:id', auth, async (req, res) => {
	try {
		const argonaut = await Argonaut.findById({ _id: req.params.id })
		await Argonaut.deleteOne({ _id: req.params.id })
		res.status(200).json({
			message: `${argonaut.name} a été débarqué avec succès !`
		})
	} catch (e) {
		res.status(500).json({
			message: `L'argonaute n\'a pas pu être débarqué`,
			error: e
		})
	}
})

module.exports = router