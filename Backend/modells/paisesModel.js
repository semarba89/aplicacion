const mongoose = require('mongoose')

const paisesSchema = new mongoose.Schema({
    contenido: {type: String}
 
})

const Pais = mongoose.model('pais', paisesSchema)

module.exports = Pais