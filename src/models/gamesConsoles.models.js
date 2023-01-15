const { DataTypes } = require('sequelize')
const db = require('../tools/database')

const Games = require('./videogames.models')
const Consoles = require('./consoles.models')

const GamesConsoles = db.define('gamesconsoles', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    consoleId : {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'console_id',
        references: {
            key: 'id',
            models: Consoles
        }
    },
    gameId : {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'game_id',
        references: {
            key: 'id',
            models: Games
        }
    }
})

module.exports = GamesConsoles

