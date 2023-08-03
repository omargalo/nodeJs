const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Animal = require('./animal.controller')
// Object destructuring
const { Auth, isAuthenticated } = require('./auth.controller')
const port = 5500

mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://omargarcialopez13:chips2023@clusteroga.iw9gwgc.mongodb.net/auth?retryWrites=true&w=majority')

app.use(express.json())

app.get('/animals', isAuthenticated, Animal.list)
app.post('/animals', isAuthenticated, Animal.create)
app.put('/animals/:id', isAuthenticated, Animal.update)
app.patch('/animals/:id', isAuthenticated, Animal.update)
app.delete('/animals/:id', isAuthenticated, Animal.destroy)

app.post('/login', Auth.login)
app.post('/register', Auth.register)

app.use(express.static('app'))

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`)
})
app.get('*', (req, res) => {
	res.status(404).send('Esta página no existe :(')
})

app.listen(port, () => {
	console.log('Arrancando la aplicación!')
})
