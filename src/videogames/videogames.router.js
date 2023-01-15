const router = require('express').Router()
const passport = require('passport')

const videogamesServices = require('./videogames.services')
require('../middlewares/auth.middleware')(passport)

router.route('/')
.get(videogamesServices.showAllGames)
.post(
    passport.authenticate('jwt', {session: false}),
    videogamesServices.entryGame
)

router.route('/:game_id')
.get(videogamesServices.showGameById)
.patch(
    passport.authenticate('jwt', {session: false}),
    videogamesServices.changeGame
)
.delete(
    passport.authenticate('jwt', {session: false}),
    videogamesServices.deleteGame
)

module.exports = router