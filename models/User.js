const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	argonauts: [{ type: Types.ObjectId, ref: 'Argonaut' }]
})

module.exports = model('User', schema)