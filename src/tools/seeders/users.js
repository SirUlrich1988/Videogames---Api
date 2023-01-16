const Users = require('../../models/users.models')

Users.bulkCreate([
    {
        firstName: "Jose",
        lastName: "Vallejo",
        email: "pepe@pruebas.com",
        password: "pepe1234",
        phone: "+529985555555",
        birthday: "1964/11/05"
    },
    {
        firstName: "Jesus",
        lastName: "Fernandez",
        email: "chuchin@pruebas.com",
        password: "chuchin1234",
        phone: "+529984444444",
        birthday: "1986/07/09"
    },
    {
        firstName: "Luis",
        lastName: "Vallejo",
        email: "licho@pruebas.com",
        password: "licho1234",
        phone: "+529983333333",
        birthday: "1988/07/09"
    },
    {
        firstName: "Santiago",
        lastName: "Colli",
        email: "santi@pruebas.com",
        password: "santi1234",
        phone: "+529982222222",
        birthday: "1999/09/08"
    },
    {
        firstName: "Fernanda",
        lastName: "Camarena",
        email: "fer@pruebas.com",
        password: "fer1234",
        phone: "+529981111111",
        birthday: "2002/02/14"
    },

])