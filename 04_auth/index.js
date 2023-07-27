const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const User = require('./user')

mongoose.connect('mongodb+srv://omargarcialopez13:chips2023@clusteroga.iw9gwgc.mongodb.net/auth?retryWrites=true&w=majority')

const app = express()

app.use(express.json())

// Creando endpoint register
app.post('/register', async (req, res) => {
    const { body } = req
    console.log({ body })
    try {
        const isUser = await User.findOne({ email: body.email })
        if(isUser) {
            return res.status(403).send('El usuario ya existe')
        }
        // Creamos el salt
        const salt = await bcrypt.genSalt()
        // Encriptamos la contraseña
        const hashed = await bcrypt.hash(body.password, salt)
        const user = await User.create({ email: body.email, password: hashed, salt })
        res.send({ _id: user._id })
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

app.listen(3000, () => {
    console.log('listening in port 3000')
})
/*
Cuando el usuario se haya creado con exito, mondoDB nos generara
un _id pero ya que este _id que nos genera mongoDB no esta encriptado
en el siguiente paso vamos a encriptar este _id con un Jason Web Token
(JWT)
*/
