const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://omargarcialopez13:chips2023@clusteroga.iw9gwgc.mongodb.net/miapp?retryWrites=true&w=majority')

// Creamos el modelo de la BD
// User: Es la colección
// username, edad, etc., son los elementos de la colección
// Los modelos se escriben con Mayúscula "User"
const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

// Creamos la funcion asíncrona "crear"
// Al crear una instancia del modelo se crea con minúscula "user"
const crear = async () => {
    const user = new User({username: 'evelyn', edad: 9})
    const savedUser = await user.save()
    console.log(savedUser)
}

crear()
