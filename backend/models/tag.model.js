const Sequelize = require('sequelize');
const PlantTags = require('./plantTag.model')

module.exports = class Tag extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name:{
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            type: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            order : {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            timestamp: false,
            underscored: false,
            modelName: 'Tag',
            tableName: 'tags',
            paranoid:false,
            charset:'utf8mb4',
            collate:'utf8mb4_general_ci',
        });
    }
    static associate(db){
        Tag.belongsToMany(db.Plant, {
            through: PlantTags
        });
    }
}