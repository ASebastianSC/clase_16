const express = require('express')
const app = express()

function rootHandler (request, response) {
    response.set ('Content-Type', 'text/plain')
    response.status(201)
    response.send('<h1>Hello World</h1')
}

//dependencia de desarrollo: brindan utileria para hacer trabajo más agil
// dependencia de producción: necesaria y parte del producto

app.use('/assets', express.static('static'))

app.all('/', rootHandler)

app.listen(9000)
