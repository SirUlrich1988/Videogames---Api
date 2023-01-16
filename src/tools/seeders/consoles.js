const Consoles = require('../../models/consoles.models')

Consoles.bulkCreate([
    {id: 1, name: 'PC'},
    {id: 2, name: 'PlayStation'},
    {id: 3, name: 'Xbox 360'},
    {id: 4, name: 'Xbox One'},
    {id: 5, name: 'Nintendo 64'}
])
