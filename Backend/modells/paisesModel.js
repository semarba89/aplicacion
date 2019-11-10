const mongoose = require('mongoose')

const paisesSchema = new mongoose.Schema({
    pais: {type: String, required: true},
    ciudad: {type: String, required: true}
})

const Pais = mongoose.model('pais', paisesSchema)

module.exports = Pais