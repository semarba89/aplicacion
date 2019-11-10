const express = require('express')
const paisesController = require('../controller/paisesController')

const router = express.Router()

router.route('/paises')
.get(paisesController.listarPaises)



module.exports = router