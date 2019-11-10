const express = require('express')
const router = express.Router()
const paisesController = require('../controllers/paisesController')

router.route('/paises')
.get(paisesController.listarPaises);

router.route('/agregar-paises')
.post(paisesController.agregarPaises);

router.route('/:id')
.delete(paisesController.borrarPaises)
.put(paisesController.modificarPaises);

module.exports = router