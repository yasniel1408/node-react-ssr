var Sequelize = require('sequelize');

const database = new Sequelize(
  'ventas', // name database
  'root', // user database
  '', // password database
  {
    host: '172.19.176.66',
    dialect: 'mysql' // mariadb / sqlite / postgres
  }
);

database.sync()

module.exports = database;