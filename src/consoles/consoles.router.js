const router = require('express').Router()

const consolesServices = require('./consoles.services')

// - / - //
// - /:id - //

router.route("/")
.get(consolesServices.getAllConsoles)
.post(consolesServices.postConsole)

router.route("/:id")
.get(consolesServices.getConsoleById)
.delete(consolesServices.destroyConsole)

module.exports = router