// Importamos nuestro modelo de Users
const Users = require('./User')

// Gestionar usuarios
const User = {
    get: async (req, res) => {
        res.status(200).send('Este es un usuario')
    },
    list: async (req, res) => {
        const users = await Users.find()
        res.status(200).send(users)
    },
    create: async (req,res) => {
        console.log(req.body)
        res.status(201).send('Creando usuario')
    },
    update: async (req, res) => {
        res.status(204).send('Actualizando usuario')
    },
    destroy: async (req,res) => {
        res.status(204).send('Eliminando usuario')
    }
}

module.exports = User