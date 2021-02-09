const Plant = require('../models/plant.model');
const Tag = require('../models/tag.model');
const sequelize = require('sequelize');

const getListPlants = async (req, res, next) => {
    if (req.query.order === "recent") {
        try {
            const result = await Plant.findAll({
                include: [{
                    model: Tag,
                    through: {
                        attributes: [] 
                    }
                }],
                order: [['createdAt', 'DESC']]
            });
            res.json(result);
        } catch (error) {
            next(error)
        }
    } else if (req.query.order === "view") {
        try {
            const result = await Plant.findAll({
                include: [{
                    model: Tag,
                    through: {
                        attributes: []
                    }
                }],
                order: [['views', 'DESC']]
            })
            res.json(result);
        } catch (error) {
            next(error);
        }
    } else {
        try {
            const result = await Plant.findAll({
                include: [{
                    model: Tag,
                    through: {
                        attributes: []
                    }
                }],
                order: [['createdAt', 'DESC']]
            });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

const getDetailPlant = async (req, res, next) => {
    try {
        const result = await Plant.findByPk((req.params.plantId), {
            include: [{
                model: Tag,
                through: {
                    attributes: []
                }
            }]
        });
        
        await Plant.update({
            views: sequelize.literal('views + 1')
        }, {
            where: {id: req.params.plantId}
        });
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const quratingResult = async (req, res, next) => {
    try {
        const resultPlant = await Plant.findOne({
            attributes: ['id', 'name', 'description', 'ment', 'imagePath'],
            where: {name: req.body.plant},
            include: [{
                model: Tag,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            }]
        });
        res.json(resultPlant);
    } catch (error) {
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
