# SKELETON ==> API DE VIDEOJUEGOS #

1. -Express
2. -PostgreSQL
3. -Sequelize ORM
4. -Autenticacion con Tokens
5. -Bcrypt para hashear contraseñas
6. -Uso de Json Web Token

---

- Rutas de Login y creacion de usuarios (register)
- Herramienta para publicar imagenes de perfil
- CRUD de usuarios con autenticacion y manejo de permisos

-/users/:id DELETE, PUT etc ...
-/users/me

Orden de creacion de archivos
1. app.js
2. .env
3. config.js
4. database.js
5. modelos
6. controladores
7. servicios
8. rutas

Librerias para Iniciar Skeleton

-- Skeleton Inicial --
1. npm init --y
2. npm i express
3. npm i uuid
4. npm install dotenv
5. npm install sequelize
6. npm install pg pg-hstore # postgres

7. npm i cors
8. npm i pg pg-hstore
9. npm i -D mocha chai chai-http
10. npm i @faker-js/faker --save-dev
11. npm i swagger-ui-express

11. npm i -D nodemon

Librerias para Autenticacion y Verificacion

12. npm install passport passport-jwt jsonwebtoken
13. npm i bcrypt

npm i swagger-ui-express

- Ruta para Registrar Usuario
- post : localhost:9000/api/v1/auth/register
- info para registro de usuario 
- post : localhost:9000/api/v1/auth/login
- info para logear usuario {
  "email": "chucho@pruebas.com",
  "password": "pepe1234"
    } esto arroja un token que se utiliza para Autorizacion
    se coloca "Authorization + JWT espacio y el token"

- get : localhost:9000/api/v1/users aqui se visualiza todos los usuarios solo despues de logear
- get, post : localhost:9000/api/v1/companies esta ruta para dar de alta compañias

