const Users = require('./users.models')
const Consoles = require('./consoles.models')
const Companies = require('./companies.models')
const Games = require('./videogames.models')
const GamesConsoles = require('./gamesConsoles.models')

const initModels = ()=> {

    // - Users 1:M Games - //
    Users.hasMany(Games)
    Games.belongsTo(Users)

    // - Games M:M Consoles - //
    Games.belongsToMany(Consoles, { through: GamesConsoles})
    Consoles.belongsToMany(Games, { through: GamesConsoles})
    
    // - Companies 1:M Games - //
    Companies.hasMany(Games)
    Games.belongsTo(Companies)
}

module.exports = initModels