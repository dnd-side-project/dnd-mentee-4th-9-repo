const path = require('path');
const Plant = require('../models/plant.model');

const getListPlants = async (req, res) => {
    //추후 로직 작성
    //최신순, 인기순 정렬을 구현 쿼리 스트링 이용? 혹은 path param?
    try {
        const result = await Plant.findAll({
            order: ['createdAt', 'DESC']
        });
        return res.json(result);
    } catch (err) {
        return res.status(500).json(err);
    }
}

const getDetailPlant = (req, res) => {
    //특정 식물의 자세한 내용을 리턴하는 로직 작성 필요
}


module.exports = { getListPlants , getDetailPlant };