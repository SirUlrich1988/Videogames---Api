const { DataTypes } = require('sequelize')
const db = require('../tools/database')

const Companies = db.define('companies', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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

module.exports = Companies