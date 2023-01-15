const { DataTypes } = require('sequelize')
const db = require('../tools/database')

const Games = require('./videogames.models')
const Consoles = require('./consoles.models')

const GamesConsoles = db.define('gamesconsoles', {
    console_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'console_id',
        references: {
            key: 'id',
            models: Consoles
        }
    },
    game_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'game_id',
        references: {
            key: 'id',
            models: Games
        }
    }
}, { timestamps: false }
)

module.exports = GamesConsoles

