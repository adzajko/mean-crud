const Sequelize = require('sequelize');
const sequelize = require('../util/database/db');
const Author = sequelize.define('authors', {
  id: {
    autoIncrement: true,
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  first_name: {
    type: Sequelize.DataTypes.STRING(50),
    allowNull: false
  },
  last_name: {
    type: Sequelize.DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: Sequelize.DataTypes.STRING(100),
    allowNull: false,
    unique: 'email'
  },
  birthdate: {
    type: Sequelize.DataTypes.DATEONLY,
    allowNull: false
  },
  added: {
    type: Sequelize.DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
});

module.exports = Author;
