// Importamos nuestro modelo de Users
const Users = require('./User')

// Gestionar usuarios
const User = {
    get: async (req, res) => {
        // Object destructuring
        const {id} = req.params
        const user = await Users.findOne({_id: id})
        res.status(200).send(user)
    },
    list: async (req, res) => {
        const users = await Users.find()
        res.status(200).send(users)
    },
    create: async (req,res) => {
        const user = new Users(req.body)
        const savedUser = await user.save()
        res.status(201).send(savedUser._id)
    },
    update: async (req, res) => {
        const {id} = req.params
        const user = await Users.findOne({_id: id})
        // Reemplazamos los datos que se encuentra en el usuario
        // pero que vengan dentro del body de la petición
        Object.assign(user, req.body)
        await user.save()
        res.sendStatus(204)
    },
    destroy: async (req,res) => {
        const {id} = req.params
        const user = await Users.findOne({_id: id})
        if(user) {
            user.deleteOne()
        }
        res.sendStatus(204)
    }
}

module.exports = User