const Sequelize = require('sequelize');

module.exports = class Tag extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name:{
                type: Sequelize.STRING(50),
                allowNull: false,
            }
        }, {
            sequelize,
            timestamp: false,
            underscored: false,
            modelName: 'Tag',
            tableName: 'tags',
            paranoid:false,
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db){
        Tag.belongsToMany(db.Plant, {
            through: 'PlantTags'
        });
    }
}