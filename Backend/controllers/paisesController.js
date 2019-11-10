const Pais = require('../modells/paisesModel')

const paisesController = {
    listarPaises: async (req, res) => {
            const data = await Pais.find()
            res.json({"Paises":data})
    },

    cargarPaises: async (req, res) => {
        var country = req.body.country
        var city = req.body.city
        
        const nuevoPais = new Pais({
            country: country,
            city: city
        })
        await nuevoPais.save()
        res.json({"agregado": "ok"})
    },

}

module.exports= paisesController