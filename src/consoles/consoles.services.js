const consolesControllers = require('./consoles.controllers')

const getAllConsoles = (req, res) => {
    consolesControllers.showAllConsoles()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err=> {
            res.status(400).json({message: err.message})
        })
}

const getConsoleById = (req, res) => {
    const id = req.params.id
    consolesControllers.showConsoleById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(400).json({message: `ID: ${id}, not exists`})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postConsole = (req, res) => {
    const { name } = req.body

    if(name){
        consolesControllers.createConsole(name)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err=> {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({
            message: 'Invalid data',
            fields: {
                name: 'string'
            }
        })
    }
}

const destroyConsole = (req, res) => {
    const id = req.params.id 
    consolesControllers.removeConsole(id)
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
    getAllConsoles,
    getConsoleById,
    postConsole,
    destroyConsole
}