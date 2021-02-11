const Plant = require('../models/plant.model');
const Tag = require('../models/tag.model');
const sequelize = require('sequelize');
const Op = sequelize.Op;

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
        const baseResult = await Plant.findByPk((req.params.plantId), {
            attributes : {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [{
                model: Tag,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                through: {
                    where: { //PlantTags 에 있는 내용, 즉 태그의 특성이 없는 경우 (null) 제외하고 리턴
                        imagePath: {
                            [Op.ne]: null
                        },
                        description: {
                            [Op.ne]: null
                        }
                    },
                    attributes: ['type', 'imagePath', 'description'] //junction table(PlantTags 에서 받아올 내용)
                }
            }],
        });

        const additonalResult = await Plant.findByPk((req.params.plantId), { //모든 태그를 조회하기 위한 쿼리
            attributes: [],
            include: [{
                    model: Tag,
                    attributes: ['name'],
                through: {
                        attributes: []
                }
                }],
        })
        const result = {
            detail : baseResult,
            allTags : [...additonalResult.Tags]
        }

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

const curatingResult = async (req, res, next) => {
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

const keywordSearch = async (req, res, next) => {
    try {
        const searchResult = await Plant.findOne({
            attributes: ['id', 'name', 'description', 'thumbnailPath'],
            where: {name: req.body.keyword},
            include: [{
                model: Tag,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            }]
        });
        res.json(searchResult);
    } catch (error) {
        next(error);
    }
}

const tagSearch = async(req,res,next)=>{
    try{
        const tags = req.body.tags.split(',');
        const tagSearchResult = await Plant.findAll({
            attributes:['id','name','description','thumbnailPath'],
            include:[{
                model:Tag,
                where:{name:{[Op.or]:tags}},
                attributes:['id','name'],
                through:{
                    attributes:[]
                }
            }]
        });
        res.json(tagSearchResult);
    }catch(error){
        next(error);
    }
}


module.exports = { getListPlants , getDetailPlant, curatingResult,keywordSearch,tagSearch};
