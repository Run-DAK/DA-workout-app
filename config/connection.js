const Sequelize = require('sequelize');
//imports the ORm and dotenv to the environment 
require('dotenv').config();

//initializes a sequelize instance with env variables for security, uses postgreSQL for render
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

//export the sequelize instance
module.exports = sequelize;
