// - Dependencias - //
const express = require('express')
const db = require('./tools/database')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')

// - Archivos - //
const swaggerDoc = require('../src/swagger.json')
const {port} = require('./config')

// - Rutas - //
const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const initModels = require('./models/initModels')
const companyRouter = require('./companies/companies.router')
const consoleRouter = require('./consoles/consoles.router')
const gameRouter = require('./videogames/videogames.router')

// - Configuraciones Iniciales - //
const app = express()

app.use(express.json())
app.use(cors())

db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database Synced . . .')
    })
    .catch(err => {
        console.log(err)
    })

initModels()

app.get('/',(req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${port}/api/v1/users`
    })
})

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/companies', companyRouter)
app.use('/api/v1/consoles', consoleRouter)
app.use('/api/v1/games', gameRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})

