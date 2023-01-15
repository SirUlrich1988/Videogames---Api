const { DataTypes } = require('sequelize')
const db = require('../tools/database')

const Consoles = db.define('consoles', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
})

module.exports = Consoles