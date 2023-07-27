const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const User = require('./user')

mongoose.connect('mongodb+srv://omargarcialopez13:chips2023@clusteroga.iw9gwgc.mongodb.net/auth?retryWrites=true&w=majority')

const app = express()

app.use(express.json())
// Encriptando el _id con JWT
const signToken = _id => jwt.sign({ _id }, 'secreto')

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
        // Encriptamos el _id del usuario
        // El string 'secreto' debe de estar oculto
        /*
        La funcionalidad signed para firmar nuestros JWT tambien la vamos a
        usar en una función de inicio de sesión asi qeu la vamos a
        reemplazar por la función signToken
        */
        //const signed = jwt.sign({ _id: user._id }, 'secreto')
        const signed = signToken(user._id)
        res.status(201).send(signed)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
})

// Agregando endpoint inicio de sesión
app.post('/login', async (req, res) => {
    const { body } = req
    try {
        const user = await User.findOne({ email: body.email })
        if(!user) {
            res.status(403).send('Usuario y/o contraseña inválida')
        } else {
            const isMatch = await bcrypt.compare(body.password, user.password)
            if(isMatch) {
                const signed = signToken(user._id)
                res.status(200).send(signed)
            } else {
                res.status(403).send('Usuario y/o contraseña inválida')
            }
        }
    } catch(err) {
        res.status(500).send(err.message)
    }
})

app.listen(3000, () => {
    console.log('listening in port 3000')
})
