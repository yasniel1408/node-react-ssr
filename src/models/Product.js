var Sequelize = require('sequelize');
var database = require('./database');

var Product = database.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  photo: Sequelize.STRING,
  description: Sequelize.TEXT,
  currency: Sequelize.DOUBLE,
  typeMoney: Sequelize.STRING
});

module.exports = Product
