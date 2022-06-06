const express = require('express')
const app = express()

app.use(express.json())

const routeUser = require('./routes/user')

routeUser(app)

app.listen(3000, () => console.log('Servidor de pé: http://localhost:3000'))
