// - Dependencias - // 
const uuid = require('uuid')

const Games = require('../models/videogames.models')
const GamesConsoles = require('../models/gamesConsoles.models')
const Consoles = require('../models/consoles.models')
const Companies = require('../models/companies.models')

// -- Ver todas los videojuegos -- //
// -- Ver un videojuego en especifico y por usuario -- //
// -- Registrar un videojuego -- //
// -- Eliminar un videojuego -- //

const getAllGames = async () => {
    const data = await Games.findAll({
        attributes: {
            exclude: ['userId', 'companyId', 'createdAt', 'updatedAt']
        },
        include: [
            {
                model: Companies,
                attributes: ['name']
            },
            {
                model: GamesConsoles,
                include: {
                    model: Consoles,
                    attributes: ['name'] 
                }
            }
        ]
    })
    return data
}

const getGameById = async (id) => {
    const data = await Games.findOne({
        where: {
            id: id
        },
        attributes: {
            exclude: ['userId', 'companyId', 'createdAt', 'updatedAt']
        },
        include: [
            {
                model: Companies,
                attributes: ['name']
            },
            {
                model: GamesConsoles,
                include: {
                    model: Consoles,
                    attributes: ['name'] 
                }
            }
        ]
    })
    return data
}

const registerGame = async (data) => {
    const newGame = await Games.create({
        id: uuid.v4(),
        name: data.name,
        description: data.description,
        relaseDate: data.relaseDate,
        urlImg: data.urlImg,
        userId: data.userId,
        companyId: data.companyId
    })
    return newGame
}

const updateGame = async (id, data) => {
    const result = await Games.update(data, {
        where: {
            id: id
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

const getMyGames = async(userId) => {
    const gamesConsoles = await GamesConsoles.findAll({
        where: {
            userId: userId
        }
    })
}

module.exports = {
    getAllGames,
    getGameById,
    registerGame,
    getMyGames,
    updateGame,
    removeGame
}
