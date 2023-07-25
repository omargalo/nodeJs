const loadInitialTemplate = () => {
    // Template string
    const template = `
        <h1>Usuarios</h1>
        <form id="user-form">
            <div>
                <label>Nombre</label>
                <input name="name" />
            </div>
            <div>
                <label>Apellido</label>
                <input name="lastname" />
            </div>
            <button type="submit">Enviar</button>
        </form>
        <ul id="user-list"></ul>
    `
    // Adjuntamos el html dentro de la etiqueta de body
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = template
}

const getUsers = async () => {
    const response = await fetch('/users')
    const users = await response.json()
    // Creamos plantilla para poder mostrar el listado de recursos
    const template = user => `
        <li>
            ${user.name} ${user.lastname} <button data-id="${user._id}">Eliminar</button>
        </li>
    `
    const userList = document.getElementById('user-list')
    userList.innerHTML = users.map(user => template(user)).join('')
    // Agregamos un event listener para poder eliminar los recursos
    users.forEach(user => {
        const userNode = document.querySelector(`[data-id="${user._id}"]`)
        userNode.onclick = async e => {
            await fetch(`/users/${user._id}`, {
                method: 'DELETE',
            })
            userNode.parentNode.remove()
            alert('Usuario eliminado con éxito')
        }
    })
}

const addFormListener = () => {
    const userForm = document.getElementById('user-form')
    userForm.onsubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(userForm)
        // Pasar los valores de un formulario a un objeto
        const data = Object.fromEntries(formData.entries())
        // Enviar los datos a nuestra API para que cree el recurso en mongoDB
        await fetch('/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // Limpiar el formulario
        userForm.reset()
        // Buscar los usuarios a la base de datos para pintarlos dentro de la interfaz
        getUsers()
    }
}

window.onload = () => {
    loadInitialTemplate ()
    addFormListener()
    getUsers()
}