const Sequelize = require('sequelize');
const plantTag = require('../models/plantTag.model');
const config = require('../config/config')['test'];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

describe('plantTag 모델', () => {
  test('static init 메서드 호출', () => {
    expect(plantTag.init(sequelize)).toBe(plantTag);
  });
});
