const Sequelize = require('sequelize');

module.exports = class Plant extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name:{
                type:Sequelize.STRING(25),
                allowNull:false,
                required:true,
            },
            feature:{
                type:Sequelize.TEXT,
            },
            flower:{
                type:Sequelize.BOOLEAN,
                allowNull:false,
            },
            warning:{
                type:Sequelize.TEXT,
            },
            bunting:{
                type:Sequelize.TEXT
            },
            place:{
                type:Sequelize.STRING(45)
            },
            grow:{
                type:Sequelize.STRING(45),
            },
            description:{
                type:Sequelize.TEXT,
            },
            ment:{
                type:Sequelize.TEXT,
            },
            difficulty:{
                type:Sequelize.STRING(50),
            },
            height:{
                type:Sequelize.STRING(20),
            },
            imageUrl:{
                type:Sequelize.TEXT,
            },
        },{
            sequelize,
            timestamps:false,
            underscored:false,
            modelName:'Plant',
            tableName:'plants',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db){}
    
}
