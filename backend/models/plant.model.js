const Sequelize = require('sequelize');

module.exports = class Plant extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name:{
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            feature:{
                type: Sequelize.STRING(2000),
            },
            imagePath:{
                type: Sequelize.STRING(500),
                allowNull: false
            }
            //그 외 속성 추가해야 합니다.
        }, {
            sequelize,
            timestamp: false,
            underscored: false,
            modelName: 'Plant',
            tableName: 'plants',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db){
        Plant.belongsToMany(models.Tag, {
            through: 'PlantTags'
        });
        //N:M 관게를 PlantTags라는 Junction Table을 만들어 관리합니다.
        //PlantTags라는 테이블은 Plant의 id와 Tag의 id를 외래키로 갖고
        //두 외래키의 조합을 PK로 사용하는 테이블입니다.
    }
}