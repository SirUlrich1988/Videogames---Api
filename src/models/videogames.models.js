const { DataTypes } = require('sequelize')

const db = require('../tools/database')
const Users = require('./users.models')
const Companies = require('./companies.models')

const Games = db.define('games', {
    id : {
        primaryKey: true, 
        type: DataTypes.UUID,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    relaseDate:{
        type: DataTypes.DATE,
        allowNull: false,
        field: 'release_date'
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
    },
    companyId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'company_id',
        references: {
            key: 'id',
            model: Companies
        }
    },
    urlImg: {
        type: DataTypes.STRING,
        field: "url_img",
        validate: {
          isUrl: true,
        }
      }
    },
    { timestamps: false }
  )

  module.exports = Games