const express = require('express')
const app = express()

function rootHandler (request, response) {
    console.log('root handler')
    response.set ('Content-Type', 'text/plain')
    response.status(201)
    response.send('<h1>Hello World</h1')
}

//dependencia de desarrollo: brindan utileria para hacer trabajo más agil
// dependencia de producción: necesaria y parte del producto

app.use('/assets', express.static('static'))

app.all('/', rootHandler)

function authenticationHandler (request, response) {
    console.log(request.body)
    response.send('auth')
}
app.use(express.json())
app.post('/auth', authenticationHandler)

app.listen(9000)
