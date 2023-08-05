// Module
import express from 'express'
import path from 'path'
import sgMail from '@sendgrid/mail'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()

/* app.use(cors({
    methods: ['GET', 'POST','DELETE','UPDATE','PUT','PATCH']
})) */

/* app.use(cors({
    origin: ['http://localhost:3000']
})) */

app.use(cors({
    origin: '*'
}))

sgMail.setApiKey(process.env.SGKEY)

app.use(express.json())

app.use(express.static('app'))

app.get('/', (req, res) => {
    res.sendFile(`${path.resolve()}/index.html`)
    //SendGrid
    /* const msg = {
        to: 'omargarcialopez13@gmail.com', // Change to your recipient
        from: 'process.env.FROM', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    }) */
})

app.post('/send', (req, res) => {
    console.log(req.body)
    res.status(401).send('correo malo')
})

app.listen(3000, () => console.log('App mailer esta corriendo'))
