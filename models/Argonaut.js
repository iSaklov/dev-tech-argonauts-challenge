const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
	name: {type: String, required: true, unique: true},
	date: {type: Date, default: Date.now},
	imageUrl: {type: String},
	owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Argonaut', schema)