const path = require('path');
const Plant = require('../models/plant.model');
const Tag = require('../models/tag.model');
const sequelize = require('sequelize');
const getListPlants = async (queryString) => {
    switch (queryString) {
        case "recent":
            return await Plant.findAll({
                include : [{
                    model: Tag,
                    through: {
                        attributes: [] 
                    }
                }],
                order : [['createdAt', 'DESC']]
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
    await Plant.update({
        views: sequelize.literal('views + 1')
    }, {
        where: { id : plantId }
    });
    return response;
}

const quratingResult = async (req,res,next)=>{
    try{
        const resultPlant = await Plant.findOne({
            attributes:['id','name','description','ment','imagePath'],
            where:{name:req.body.plant},
            include:[{
                model:Tag,
                attributes:['id','name'],
                through:{
                    attributes:[]
                }
            }]
        });
        res.json(resultPlant);
    }catch(error){
        next(error);
    }
}

const keywordSearch = async(req,res,next)=>{
    try{
        const searchResult = await Plant.findOne({
            attributes:['id','name','description','thumbnailPath'],
            where:{name:req.body.keyword},
            include:[{
                model:Tag,
                attributes:['id','name'],
                through:{
                    attributes:[]
                }
            }]
        });
        await Plant.update({
            views:sequelize.literal('views + 1')
        },{
            where:{name:req.body.keyword}
        })
        res.json(searchResult);
    }catch(error){
        next(error);
    }
}


module.exports = { getListPlants , getDetailPlant, quratingResult,keywordSearch};
