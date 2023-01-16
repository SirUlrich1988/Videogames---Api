// - Auth va a contener las rutas de autorizacion y autenticacion - //
// - Login - //
// - Register - //
// - Recovery Password - //
// - Verify User - //

const router = require('express').Router()
const authServices = require('./auth.services')
const { registerUser } = require('../users/users.services')

// - /api/v1/auth/register - //
// - /api/v1/auth/login - //

router.post('/register', registerUser)

router.post('/login', authServices.login)

module.exports = router