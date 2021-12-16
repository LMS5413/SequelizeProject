const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'database', 'user', 
    'password', 
    {
        dialect: 'mysql', 
        host: 'ip', 
        port: 3306, 
        logging: false, //Caso false ele não irá exibir as querys sendo executadas.
        define: {
            timestamps: false //Caso true ele irá criar as colunas createdAt e updatedAt
        }, 
    });

module.exports = sequelize