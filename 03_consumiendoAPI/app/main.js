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

const addFormListener = () => {
    const userForm = document.getElementById('user-form')
    userForm.onsubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(userForm)
        // Pasar los valores de un formulario a un objeto
        const data = Object.fromEntries(formData.entries())
        console.log(data)
    }
}

window.onload = () => {
    loadInitialTemplate ()
    addFormListener()
}