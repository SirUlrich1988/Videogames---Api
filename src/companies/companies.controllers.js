const uuid = require('uuid')

const Companies = require('../models/companies.models')

// -- Ver todas las compañias -- //
// -- Ver todas las compañia en especifico -- //
// -- Crear una compañia -- //
// -- Eliminar una compañia -- //

const showAllCompanies = async ()=> {
    const data = await Companies.findAll()
        return data
}

const showCompanyById = async (id)=> {
    const data = await Companies.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createCompany = async (data) => {
    const newCompany = await Companies.create({
        id: uuid.v4(),
        name: data.name
    })
    return newCompany
}

const removeCompany = async (id) => {
    const data = await Companies.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    showAllCompanies,
    showCompanyById,
    createCompany,
    removeCompany
}