// Gestionar usuarios
const User = {
    get: (req, res) => {
        res.status(200).send('Este es un usuario')
    },
    list: (req, res) => {
        res.status(200).send('¡Hola Evelyn!')
    },
    create: (req,res) => {
        res.status(201).send('Creando usuario')
    },
    update: (req, res) => {
        res.status(204).send('Actualizando usuario')
    },
    destroy: (req,res) => {
        res.status(204).send('Eliminando usuario')
    }
}

module.exports = User