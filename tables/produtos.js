const connect = require('./connect.js');
const sequelize = require('sequelize');

const produto = connect.define('produtos', {
    nome: {
        type: sequelize.STRING,
        allowNull: true
    },
    preco: {
        type: sequelize.INTEGER,
        defaultValue: 0
    }
})
module.exports = produto;