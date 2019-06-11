const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()

const serveMiddleware = serveStatic(path.resolve(__dirname, 'static'))


function rootHandler (request, response) {
    response.set ('Content-Type', 'text/plain')
    response.status(201)
    response.send('<h1>Hello World</h1')
}

function searchHandler (request, response) {
    response.send(request.query.q)

}
//dependencia de desarrollo: brindan utileria para hacer trabajo más agil
// dependencia de producción: necesaria y parte del producto

app.use('/assets', serveMiddleware)

app.all('/', rootHandler)

app.get('/search', searchHandler)

app.listen(9000)
