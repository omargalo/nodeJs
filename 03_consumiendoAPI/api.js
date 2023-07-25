const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

app.use(express.json())
mongoose.connect('mongodb+srv://omargarcialopez13:chips2023@clusteroga.iw9gwgc.mongodb.net/miapp?retryWrites=true&w=majority')

app.get('/users', user.list)
app.get('/users/:id', user.get)
app.post('/users', user.create)
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)

// Usamos un midleware con la función static para servir archivos
// que se encuentran en el directorio especificado
app.use(express.static('app'))
// Agregamos nuestra ruta de raiz para
// devolver un archivo html
app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req, res) => {
    res.status(404).send('Esta página no existe')
})

app.listen(port, () => {
    console.log('Arrancando la aplicación')
})
