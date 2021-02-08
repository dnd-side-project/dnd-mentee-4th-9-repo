const express = require('express');
const { getListPlants, getDetailPlant,quratingResult} = require('../controllers/plant.controller');
const router = express.Router()


router.get('/', getListPlants) //쿼리스트링. /plants?order=recent});

router.post('/curating',quratingResult);

router.get('/:plantId', getDetailPlant) //for detail

module.exports = router;