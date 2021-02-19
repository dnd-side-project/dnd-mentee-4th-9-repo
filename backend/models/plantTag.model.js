const Sequelize = require('sequelize');

module.exports = class PlantTags extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        type: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        imagePath: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamp: false,
        underscored: false,
        modelName: 'PlantTag',
        tableName: 'plantTags',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
  static associate(db) {}
};
