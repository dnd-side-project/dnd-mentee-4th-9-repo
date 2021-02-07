const path = require('path');
const Plant = require('../models/plant.model');
const Tag = require('../models/tag.model');

const getListPlants = async (queryString) => {
    switch (queryString) {
        case "recent":
            return await Plant.findAll({
                include: Tag,
                order : [['createdAt', 'DESC']]
            })
        case "like":
            return await Plant.findAll({
                include: Tag,
                order: [['likes', 'DESC']]
            })
        case "view":
            return await Plant.findAll({
                include: Tag,
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
        include : Tag
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