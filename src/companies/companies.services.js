const companiesControllers = require('./companies.controllers')

const getAllCompanies = (req, res) => {
    companiesControllers.showAllCompanies()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err=> {
            res.status(400).json({message: err.message})
        })
}

const getCompanyById = (req, res) => {
    const id = req.params.id
    companiesControllers
    .showCompanyById(id)
        .then((data) => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(400).json({message: 'Invalid Id', id})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postCompany = (req, res) => {
    const { name } = req.body

    if(name){
        companiesControllers.createCompany({name})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({message: 'All fields must be completed', fields: {
                name: 'string'
            }})
    }
}

const destroyCompany = (req, res) => {
    const id = req.params.id 
    companiesControllers.removeCompany(id)
        .then(data => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })

}

module.exports = {
    getAllCompanies,
    getCompanyById,
    postCompany,
    destroyCompany
}