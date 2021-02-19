const Sequelize = require('sequelize');
const Plant = require('../models/plant.model');
const config = require('../config/config')['test'];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

describe('Plant 모델', () => {
  test('static init 메서드 호출', () => {
    expect(Plant.init(sequelize)).toBe(Plant);
  });
});
