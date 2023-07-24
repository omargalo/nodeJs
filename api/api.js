// express es para asignar el framework de express
// require es para importar dependencias de terceros
const express = require('express')
// Ejecutamos la funcion express
const app = express()
// Indicamos en que puerto queremos que nuestra
// aplicación se ejecute
const port = 3000
// Creamos una aplicación sencilla:
// Le indicamos a express cual es la ruta del
// navegador que tenemos que escribir para que
// se ejecute la función que le vamos a pasar a
// esta misma funcion pero como segundo argumento

// request: donde viene toda la petición de un cliente
// response: sirve para enviarle cosas al usuario.
app.get('/', (req, res) => {
    res.status(200).send('Hola Evelyn')
})

// Habilitamos la aplicación para que escuche las
// peticiones desde un explorador.
app.listen(port, () => {
    console.log('Arrancando la aplicación')
})
