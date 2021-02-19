const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const {development, production, test} = require('../config/config');
const db = {};
const User = require('./user.model');
const Plant = require('./plant.model');
const Tag = require('./tag.model');

const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  development
);
db.sequelize = sequelize;

//models 디렉터리에 있는 index.js를 제외한 모든 model.js 파일에 대한 Init & associate 로직 추가
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    db[model.name] = model;
    model.init(sequelize);
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db;
