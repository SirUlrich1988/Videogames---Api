const uuid = require('uuid')

const Consoles = require('../models/consoles.models')

// -- Ver todas las consolas -- //
// -- Ver todas las consolas en especifico -- //
// -- Crear una consolas -- //
// -- Eliminar una consola -- //

const showAllConsoles = async ()=> {
    const data = await Consoles.findAll()
        return data
}

const showConsoleById = async (id)=> {
    const data = await Consoles.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createConsole = async (data) => {
    const newConsole = await Consoles.create({
        id: uuid.v4(),
        name: data.name
    })
    return newConsole
}

const removeConsole = async (id) => {
    const data = await Consoles.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    showAllConsoles,
    showConsoleById,
    createConsole,
    removeConsole
}