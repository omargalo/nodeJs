# nodeJs
Apuntes Node JS

## Instrucciones
* mkdir api
* cd api
* npm init -y
* crear archivo: api.js
* npm install -S express
* crear la api en el archivo api.js

## Package-lock.json
Contiene todas las dependencias que se instalaron en nuestro proyecto.

## Probando la aplicación
* node api.js
* Abre un explorador con la ruta localhost:3000

## Creando Endpoints
Revisa api.js

## Creando modulo personalizado
* Crear archivo user.controller.js
* Mover la lógica a este nuevo archivo
* Importar user.controller.js en api.js

## MongoDB
* Atlas
* Libreria Mongoose
* npm install mongodb
* npm i -S mongoose

## Crear index.js
Agregar cadena de conexión:
mongodb+srv://<usuario>:<password>@clusteroga.iw9gwgc.mongodb.net/miapp?retryWrites=true&w=majority

## Crear modelo

## Postman
En postman accesamos a localhost:3000/register
utilizamos el verbo POST
HEADERS Content-Type application/json
BODY raw
{
    "email": "omar@ogadevs.com"
    "password": ""
}

## JWT
Cuando el usuario se haya creado con exito, mondoDB nos generara un _id pero ya que este _id que nos genera mongoDB no esta encriptado en el siguiente paso vamos a encriptar este _id con un Jason Web Token (JWT)

## Variables de entorno
En la terminal
```
export SECRET=mi-string-secreto
env
```
