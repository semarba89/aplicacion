const express = require('express')
const router = express.Router()
const paisesController = require('../controllers/paisesController')

router.route('/paises')
.get(paisesController.listarPaises);

router.route('/agregar')
.post(paisesController.cargarPaises)



module.exports = router