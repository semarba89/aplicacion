const mongoose = require('mongoose')

const paisesSchema = new mongoose.Schema({
    country: {type: String, required:true},
    city: {type: String},
    image: {type: String}
 
})

const Pais = mongoose.model('pais', paisesSchema)

module.exports = Pais