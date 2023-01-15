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

    })
}

const createConsole = async (name) => {
    const data = await Consoles.create({
        name
    })
    return data
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