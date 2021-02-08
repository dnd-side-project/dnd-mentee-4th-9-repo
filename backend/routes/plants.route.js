const express = require('express');
const { getListPlants, getDetailPlant,quratingResult,keywordSearch} = require('../controllers/plant.controller');
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const result = await getListPlants(req.query.order); //쿼리스트링. /plants?order=recent
        res.json({
            success: true,
            message : result
        });
    } catch (err) {
        res.json({
            success: false,
            message: err
        });
    }
});

router.post('/curating',quratingResult);
router.post('/encyclopedia/keyword',keywordSearch);

router.get('/:plantId', async (req, res) => {
    try {
        const result = await getDetailPlant(req.params.plantId);
        res.json({
            success: true,
            message : result
        })
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }
})

module.exports = router;