const pais = require('../modells/paisesModel')

const paisesController = {
    listarPaises: async(req, res) => {
            const data = await pais.find()
            res.json(data)
    }

}

module.exports= paisesController