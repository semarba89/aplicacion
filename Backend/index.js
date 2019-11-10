const express = require('express')
require('dotenv').config()
require('./src/database')
const cors= require('cors')

const app = express()
const router= express.Router()

app.use(cors())
app.use(express.json())

app.use('/api', require('./routes/routerPaises'))

app.listen(process.env.PORT, () => console.log('escuchando musica en puerto ' + process.env.PORT))