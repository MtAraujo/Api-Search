const express = require('express')
const { getS } = require('../controller/user')
const app = express()
app.use(express.json())

module.exports = (app) => {
    app.get('/search', getS)
}