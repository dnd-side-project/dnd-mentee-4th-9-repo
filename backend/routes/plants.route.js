const express = require('express');
const { getListPlants, getDetailPlant,quratingResult,keywordSearch} = require('../controllers/plant.controller');
const router = express.Router()


router.get('/', getListPlants) //쿼리스트링. /plants?order=recent});

router.post('/curating',quratingResult);

router.post('/encyclopedia/keyword',keywordSearch);

router.get('/:plantId', getDetailPlant) //for detail

module.exports = router;