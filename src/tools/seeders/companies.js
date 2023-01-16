const Companies = require('../../models/companies.models')

Companies.bulkCreate([
    {id: 1, name: 'Annapurna Interactive'},
    {id: 2, name: 'Sega'},
    {id: 3, name: 'Activision Blizzard'},
    {id: 4, name: 'Microsoft'},
    {id: 5, name: 'Nintendo'}
])


