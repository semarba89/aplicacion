const Pais = require('../modells/paisesModel')

const paisesController = {
    listarPaises: async (req, res) => {
            const data = await Pais.find()
            res.json({"respuesta":data})
    }

}

module.exports= paisesController