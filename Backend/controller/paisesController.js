const Pais = require('../modells/paisesModel')

const paisesController = {
    listarPaises: async(req, res) => {
            const data = await Pais.find()
            res.json(data)
    },

    agregarPaises: async (req,res) => {
        const agregar_pais = new Pais({contenido: req.body.contenido})
        await agregar_pais.save()
        res.json("Agregado pais")
    },

    borrarPaises: async (req,res) => {
        await Pais.findOneAndDelete({_id: req.params.id})
        res.json("Eliminado pais")
    },

    modificarPaises: async (req,res) => {
        await Pais.findOneAndUpdate({_id: req.oarams.id}, {contenido:req.body.contenido})
        res.json("Modificado Pais")
    }

}

module.exports= paisesController