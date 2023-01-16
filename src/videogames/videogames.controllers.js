// - Dependencias - // 
const uuid = require('uuid')

const Games = require('../models/videogames.models')

// -- Ver todas los videojuegos -- //
// -- Ver un videojuego en especifico -- //
// -- Registrar un videojuego -- //
// -- Eliminar un videojuego -- //

const getAllGames = async () => {
    const data = await Games.findAll()
    return data
}

const getGameById = async (id) => {
    const data = await Games.findOne({
        where: {
            id: id
        }
    })
    return data
}

const registerGame = async (data) => {
    const newGame = await Games.create({
        id: uuid.v4(),
        name: data.name,
        description: data.description,
        relaseDate: data.releaseDate,
        urlImg: data.urlImg,
        userId: data.userId,
        companyId: data.companyId
    })
    return newGame
}

const updateGame = async (id, data) => {
    const result = await Games.update(data, {
        where: {
            id
        }
    })
    return result
}

const removeGame = async (id) => {
    const data = await Game.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllGames,
    getGameById,
    registerGame,
    updateGame,
    removeGame
}
