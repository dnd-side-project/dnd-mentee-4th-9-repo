const Plant = require('../models/plant.model');
const Tag = require('../models/tag.model');
const sequelize = require('sequelize')
const Op = sequelize.Op;

const searchTag = async (req, res, next) => {
    try {
        const result = await Tag.findAll({
            where: {
                name: {
                    [Op.like]: `%${req.query.keyword ? req.query.keyword : ''}%` //키워드 인자를 주지 않을경우 전체 검색
                }
            },
            include: [{
                model: Plant,
                through: {
                    attributes: []
                }
            }]
        });
        res.json(result)
    } catch (error) {
        next(error);
    }
}

module.exports = { searchTag }