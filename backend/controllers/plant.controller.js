const path = require('path');
const Plant = require('../models/plant.model');
const Tag = require('../models/tag.model');

const getListPlants = async (queryString) => {
    switch (queryString) {
        case "recent":
            return await Plant.findAll({
                include : [{
                    model: Tag,
                    through: {
                        attributes: [] // junction Table (PlantTags)로부터 쓸데없는 정보를 받지 않기 위한 옵션
                    }
                }],
                order : [['createdAt', 'DESC']]
            })
        case "like":
            return await Plant.findAll({
                include : [{
                    model: Tag,
                    through: {
                        attributes: []
                    }
                }],
                order: [['likes', 'DESC']]
            })
        case "view":
            return await Plant.findAll({
                include : [{
                    model: Tag,
                    through: {
                        attributes: []
                    }
                }],
                order: [['views', 'DESC']]
            })
        default:
            return await Plant.findAll({
                include: Tag,
                order : [['createdAt', 'DESC']]
            })
        //default action is same as recently order
    }
}

const getDetailPlant = async (plantId) => {
    const response = await Plant.findByPk((plantId), {
        include : [{
            model: Tag,
            through: {
                attributes: []
            }
        }]
    });
    const views = response["views"];
    //조회수 업데이트
    await Plant.update({
        views: views + 1
    }, {
        where: { id : plantId }
    });
    return response;
}


module.exports = { getListPlants , getDetailPlant };