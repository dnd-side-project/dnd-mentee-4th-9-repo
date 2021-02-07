const Sequelize = require('sequelize');

module.exports = class Plant extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name:{ //꽃의 이름
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            feature:{ //반전매력
                type: Sequelize.STRING(2000)
            },
            warning: {//주의할점
                type: Sequelize.STRING(2000)
            },
            place : { //장소
                type: Sequelize.STRING(2000)
            },
            grow : { //성장속도
                type: Sequelize.STRING(2000)
            },
            difficulty : { //난이도
                type: Sequelize.STRING(50)
            },
            water : { //물 주기
                type : Sequelize.STRING(50)
            },
            height : { //크기
                type: Sequelize.STRING(2000)
            },
            description : { //한문장 요약
                type: Sequelize.STRING(100)
            },
            ment : { //멘트
                type: Sequelize.STRING(2000)
            },
            flower : { //개화여부
                type : Sequelize.BOOLEAN
            },
            temperature: { //온도
                type: Sequelize.STRING(50)
            },
            views : { //추후 조회수 기반 정렬을 위해 구현
                type : Sequelize.INTEGER,
                defaultValue: 0
            },
            likes : { //추후 인기순 기반 정렬을 위해 구현
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            imagePath:{ // 디테일 화면 메인 이미지
                type: Sequelize.STRING(500),
                allowNull: false
            },
            thumbnailPath:{ //리스트로 볼때의 썸네일 이미지
                type: Sequelize.STRING(500),
                allowNull: false
            }
        }, {
            sequelize,
            timestamp: true,
            underscored: false,
            modelName: 'Plant',
            tableName: 'plants',
            paranoid:false,
            charset:'utf8mb4',
            collate:'utf8mb4_general_ci',
        });
    }
    static associate(db){
        Plant.belongsToMany(db.Tag, {
            through: 'PlantTags'
        });
        //N:M 관게를 PlantTags라는 Junction Table을 만들어 관리합니다.
        //PlantTags라는 테이블은 Plant의 id와 Tag의 id를 외래키로 갖고
        //두 외래키의 조합을 PK로 사용하는 테이블입니다.
    }
}