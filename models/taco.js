const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tacoSchema = new Schema ({
    name: String,
    ingredients: [String],
    tasty: Boolean,
},{
    timestamps: true
})

module.exports = mongoose.model('Taco', tacoSchema)