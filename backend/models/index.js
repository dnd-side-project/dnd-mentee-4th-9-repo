const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const {development,production,test} = require('../config/config');
const db = {};
const User = require('./user.model');

const sequelize = new Sequelize(development.database,development.username,development.password,development);
db.sequelize = sequelize;

db.User = User;
User.init(sequelize);
User.associate(db);

module.exports = db;
