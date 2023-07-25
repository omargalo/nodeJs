// express es para asignar el framework de express
// require es para importar dependencias de terceros
const express = require('express')
// Importando mongoose
const mongoose = require('mongoose')

// Importando user.controller.js
const user = require('./user.controller')

// Ejecutamos la funcion express
const app = express()
// Indicamos en que puerto queremos que nuestra
// aplicación se ejecute
const port = 3000

// Un midleware es una función que se va a ejecutar cuando
// realizemos alguna petición en nuestra aplicación para
// poder realizar validaciones.
// Toma todas la peticiones que vengan en formato JSON
// para transformarlas en un objeto JavaScript y las
// va a asignar a la propiedad de body.
app.use(express.json())

// Cadena de conexión a mongodb
mongoose.connect('mongodb+srv://omargarcialopez13:chips2023@clusteroga.iw9gwgc.mongodb.net/miapp?retryWrites=true&w=majority')

// Creamos una aplicación sencilla:
// Le indicamos a express cual es la ruta del
// navegador que tenemos que escribir para que
// se ejecute la función que le vamos a pasar a
// esta misma funcion pero como segundo argumento

// request: donde viene toda la petición de un cliente
// response: sirve para enviarle cosas al usuario.

// Un endpoint es una ruta a la cual uno puede
// acceder a traves de una petición realizada por
// un explorador web o una aplicación móvil.

// 200 Ok y regresar datos al cliente
// 201 Ok creado y opcionalmente se puede regresar el id creado
// 204 Ok No content (Regresa absolutamente nada)
// 204 Usado comunmente en PUT, PATCH Y DELETE

// endpoint GET
// Nos permite accesar a la ruta a traves del explorador web

// Agregamos Endpoint utilizando el modulo externo

app.get('/', user.list)
app.get('/:id', user.get)
app.post('/', user.create)
app.put('/:id', user.update)
app.patch('/:id', user.update)
app.delete('/:id', user.destroy)


/*
app.get('/', (req, res) => {
    res.status(200).send('Hola Evelyn')
})


// endpoint GET:id
app.get('/:id', (req, res) => {
    console.log(req.params)
    res.status(200).send(req.params)
})

// endpoint POST
// No podemos acceder directamente en la barra de navegación
// Solo se puede acceder a traves de postman o desde la terminal
app.post('/', (req, res) => {
    res.status(201).send('Creando Evelyn')
})

// endpoint PUT
app.put('/:id', (req, res) => {
    console.log(req.params)
    res.sendStatus(204)
})

// endpoint PATCH
app.patch('/:id', (req, res) => {
    res.sendStatus(204)
})

// endpoint DELETE
app.delete('/:id', (req, res) => {
    res.sendStatus(204)
})
*/

// Habilitamos la aplicación para que escuche las
// peticiones desde un explorador.
app.listen(port, () => {
    console.log('Arrancando la aplicación')
})
