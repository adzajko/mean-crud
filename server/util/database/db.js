const Sequelize = require('sequelize');

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD; // Change this field with your DB password


const sequelize = new Sequelize(process.env.DB_NAME, dbUsername, dbPassword, {
  dialect: 'mysql',
  host: process.env.DB_HOSTNAME, // The default opt,
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
