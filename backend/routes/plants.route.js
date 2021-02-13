const express = require('express');
const { getListPlants, getDetailPlant,curatingResult,keywordSearch,tagSearch} = require('../controllers/plant.controller');
const router = express.Router()

/**
 * @swagger
 * /plants:
 *   get:
 *     tags:
 *       - plants
 *     description: Returns all plants
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: order
 *         description: recent / view 두가지. recent는 최신순 view는 인기순
 *         in: query
 *         type: string
 *     responses:
 *       200:
 *         description: An array of plants
 */
router.get('/', getListPlants) //쿼리스트링. /plants?order=recent});

/**
 * @swagger
 * /plants/curating:
 *   post:
 *     tags:
 *       - plants
 *     description: 큐레이팅 결과 식물의 내용을 반환
 *     operationId: get test result
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     requestBody:
 *        content:
 *          application/json:
 *              schema:
 *               type: object
 *               properties:
 *                plant:
 *                  type: string
 *               example:
 *                plant: 몬스테라
 *     responses:
 *       200:
 *         description: 큐레이팅 결과 식물 반환
 */
router.post('/curating',curatingResult);

router.post('/encyclopedia/keyword',keywordSearch);
router.post('/encyclopedia/tag',tagSearch);

router.get('/:plantId', getDetailPlant) //for detail

module.exports = router;