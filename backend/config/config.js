require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'dnd',
    host: '3.34.87.77',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'dnd',
    host: '3.34.87.77',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    database: 'dnd',
    host: '3.34.87.77',
    dialect: 'mysql',
  },
};
