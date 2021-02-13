const express = require('express');
const { getListPlants, getDetailPlant,curatingResult,searchByPlantName,searchByPlantTag} = require('../controllers/plant.controller');
const router = express.Router()


router.get('/', getListPlants) //쿼리스트링. /plants?order=recent});

router.get('/curating',curatingResult);

router.post('/encyclopedia/keyword',searchByPlantName);
router.post('/encyclopedia/tag',searchByPlantTag);

router.get('/:plantId', getDetailPlant) //for detail

module.exports = router;