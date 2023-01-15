const videogamesControllers = require('./videogames.controllers')

const showAllGames = (req, res) => {
    videogamesControllers.getAllGames()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err=> {
            res.status(400).json({message: err.message})
        })
}

const showGameById = (req, res) => {
    const id = req.params.id
    videogamesControllers.getGameById(id)
    .then(data => {
        if(data){
            res.status(200).json(data)
        } else {
            res.status(400).json({message: `ID: ${id}, not exists`})
        }
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
}

const entryGame = (req, res) => {
    const { name, description, relaseDate, urlImg, userId, companyId } = req.body
    if (
        name &&
        description &&
        relaseDate &&
        urlImg &&
        userId &&
        companyId
    ) {
        videogamesControllers.registerGame({
            name, description, relaseDate, urlImg, userId, companyId
        })
        .then( data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json(err.message)
        })
    } else {
        res.status(400).json({message: 'All fields must be completed', fields: {
            name: 'string',
            description: 'string',
            relaseDate: 'YYYY/MM/DD',
            urlImg: 'string',
            userId: 'number',
            companyId: 'number'
        }})
    }
}

const changeGame = (req, res) => {
    const id = req.params.id
    const { name, description, relaseDate, urlImg, userId, companyId } = req.body

    videogamesControllers.updateGame(id, { name, description, relaseDate, urlImg, userId, companyId })
    .then((data) => {
        if (data[0]) {
            res.status(200).json({message: `The game registration ${id} has been updated!`})
        } else {
            res.status(404).json({message: "Invalid Id"})
        }
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const deleteGame = (req, res) => {
    const id = req.params.id
    videogamesControllers.removeGame(id)
    .then((data) => {
        if (data) {
          res.status(204).json();
        } else {
          res.status(404).json({ message: "Invalid ID" })
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err.message })
      })
}

module.exports = {
    showAllGames,
    showGameById,
    entryGame,
    changeGame,
    deleteGame
}