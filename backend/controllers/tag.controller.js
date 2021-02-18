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

const getListTags = async(req, res, next) => {
    try {
        const result = await Tag.findAll({
            attributes: ['id', 'name', 'type']
        });

        const tagOrderMap = {
            '난이도' : [],
            '물주기' : [],
            '크기' : [],
            '꽃/열매': [],
            '속도': [],
            '장소': [],
            '온도': []
        }

        const makeMapOrder = (tagList) => {
            tagList
                .map(tagObj => tagObj.get({
                    plain: true
                }))
                .forEach(tags => {
                    tagOrderMap[tags.type].push(tags);
                })
        }

        makeMapOrder(result);

        const orderedList = Object.values(tagOrderMap).reduce((prev, curr) => {
            return prev.concat(curr);
        })

        res.json(orderedList);
    } catch (error) {
        next(error);
    }
}

module.exports = { searchTag, getListTags }