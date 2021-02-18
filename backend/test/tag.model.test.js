const Sequelize = require('sequelize');
const Tag = require('../models/tag.model');
const config = require('../config/config')['test'];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

describe('Tag 모델', () => {
  test('static init 메서드 호출', () => {
    expect(Tag.init(sequelize)).toBe(Tag);
  });
});
