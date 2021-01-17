const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name:{
                type:Sequelize.STRING(20),
                allowNull:false,
            },
            profileImage:{
                type:Sequelize.TEXT,
                allowNull:true,
            },
            kakaoId:{
                type:Sequelize.INTEGER,
                allowNull:false,
                required:true,
            },
            provider:{
                type:Sequelize.STRING(20),
                required:true,
            }
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'User',
            tableName:'users',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db){}
}