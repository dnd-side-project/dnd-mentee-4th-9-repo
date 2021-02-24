const Sequelize = require('sequelize');
const PlantTags = require('./plantTag.model');

module.exports = class Plant extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          //꽃의 이름
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        feature: {
          //반전매력
          type: Sequelize.TEXT,
        },
        warning: {
          //주의할점
          type: Sequelize.TEXT,
        },
        description: {
          //한문장 요약
          type: Sequelize.STRING(200),
        },
        testDescription: {
          type: Sequelize.STRING(200)
        },
        ment: {
          //멘트
          type: Sequelize.TEXT,
        },
        totalViews: {
          //추후 인기순 기반 정렬을 위해 구현
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        todayViews: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        yesterDayViews: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        imagePath: {
          // 디테일 화면 메인 이미지
          type: Sequelize.TEXT,
          allowNull: false,
        },
        thumbnailPath: {
          //리스트로 볼때의 썸네일 이미지
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamp: true,
        underscored: false,
        modelName: 'Plant',
        tableName: 'plants',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
  static associate(db) {
    Plant.belongsToMany(db.Tag, {
      through: PlantTags,
    });
    //N:M 관게를 PlantTags라는 Junction Table을 만들어 관리합니다.
    //PlantTags라는 테이블은 Plant의 id와 Tag의 id를 외래키로 갖고
    //두 외래키의 조합을 PK로 사용하는 테이블입니다.
  }
};
