const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const {development,production,test} = require('../config/config');
const db = {};
const User = require('./user.model');
const Plant = require('./plant.model');
const Tag = require('./tag.model');

const sequelize = new Sequelize(development.database,development.username,development.password,development);
db.sequelize = sequelize;

db.User = User;
db.Plant = Plant;
db.Tag = Tag;

User.init(sequelize);
User.associate(db);

Plant.init(sequelize);
Plant.associate(db);

Tag.init(sequelize);
Tag.associate(db);

//추후 각 모델을 init & associate 하는 로직을 추가해야 합니다.
// const fs = require('fs);
// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

module.exports = db;
