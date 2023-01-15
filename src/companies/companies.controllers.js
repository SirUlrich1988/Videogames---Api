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

    })
}

const createCompany = async (name) => {
    const data = await Companies.create({
        name
    })
    return data
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