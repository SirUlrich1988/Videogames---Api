const router = require('express').Router()

const companiesServices = require('./companies.services')

// - / - //
// - /:id - //

router.route("/")
.get(companiesServices.getAllCompanies)
.post(companiesServices.postCompany)

router.route("/:id")
.get(companiesServices.getCompanyById)
.delete(companiesServices.destroyCompany)

module.exports = router