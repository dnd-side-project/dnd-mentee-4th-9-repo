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
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
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
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
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
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
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
        });

        // Promise<Model>의 응답값을 JSON 오브젝트로 바꾸는 메서드 .get() 사용.
        const tags = additonalResult.get({
            plain: true
        });

        // ************추천 식물*********************
        
        const tagArray = Object.values(tags)[0];
        const recommendTag = [];
        for(i in tagArray){
            recommendTag.push(tagArray[i].name);
        }
        // tag객체에서 시퀄라이스 함수에서 사용하기 편하도록 배열로 뽑아냅니다. 
        // 배열에서 특정 태그를 슬라이싱하는 것은 나중에 합니다.
        const recommendPlants = await Plant.findAll({
            limit:5,
            attributes:['id','name','imagePath'],
            include:[{
                model:Tag,
                where:{
                    name:{[Op.or]:recommendTag}
                },
                attributes:['id','name'],
                through:{
                    attributes:[]
                }
            }]

        })

        // ****************************************

        const detailResult = baseResult.get({
            plain: true
        });

        detailResult.allTags = tags.Tags;
        detailResult.recommendPlants = recommendPlants;

        await Plant.update({
            views: sequelize.literal('views + 1')
        }, {
            where: {id: req.params.plantId}
        });
        res.json(detailResult);
    } catch (error) {
        next(error);
    }
}

const curatingResult = async (req, res, next) => {
    try {
        const resultPlant = await Plant.findOne({
            attributes: ['id', 'name', 'description', 'ment', 'imagePath'],
            where: {name: req.query.result},
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

const searchByPlantName = async (req, res, next) => {
    try {
        const searchResult = await Plant.findAll({
            attributes: ['id', 'name', 'description', 'thumbnailPath'],
            where: {name: {[Op.like]:`${req.body.keyword}%`}},
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

const searchByPlantTag = async(req,res,next)=>{
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


module.exports = { getListPlants , getDetailPlant, curatingResult,searchByPlantName,searchByPlantTag};
