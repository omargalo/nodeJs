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
    const user = new User({username: 'ender', edad: 6})
    const savedUser = await user.save()
    console.log(savedUser)
}

//crear()

// Buscar todo lo que esta dentro de una colección
const buscarTodo = async () => {
    const users = await User.find()
    console.log(users)
}

//buscarTodo()

// Buscar un elemento en específico (Regresa un array)
const buscar = async () => {
    const user = await User.find({username:'evelyn'})
    console.log(user)
}

//buscar()

// Buscar solamente un elemento (Regresa un objeto)
const buscarUno = async () => {
    const user = await User.findOne({username:'evelyn'})
    console.log(user)
}

// buscarUno()

// Actualizar un elemento
const actualizar = async () => {
    const user = await User.findOne({username:'omar'})
    console.log(user)
    user.edad = 18
    await user.save()
}

//actualizar()

// Eliminar un elemento
const eliminar = async () => {
    const user = await User.findOne({username:'alex'})
    console.log(user)
    if (user){
        await user.deleteOne()
    }
}

//eliminar()

