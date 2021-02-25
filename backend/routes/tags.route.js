const express = require('express');
const {searchTag, getListTags} = require('../controllers/tag.controller');
const router = express.Router();

/**
 * @swagger
 * /tags:
 *   get:
 *     tags:
 *       - tags
 *     description: 모든 식물 태그 리스트를 조회
 *     parameters:
 *       - name: api-key
 *         description: API 키를 넣어 호출해야 합니다.
 *         required: true
 *         in: header
 *         type: string
 *         example: 28308fa3aca32470631c27377bbc3f43:a17bf428d90e22d3232e8e95bc4c5b1f
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 모든 태그에 대한 배열을 반환합니다.
 */
router.get('/', getListTags);

/**
 * @swagger
 * /tags/search:
 *   get:
 *     tags:
 *       - tags
 *     description: 해당 태그를 갖고있는 식물을 검색합니다.
 *     produces:
 *       - application/json
 *     parameters:
  *       - name: api-key
 *         description: API 키를 넣어 호출해야 합니다.
 *         required: true
 *         in: header
 *         type: string
 *         example: 28308fa3aca32470631c27377bbc3f43:a17bf428d90e22d3232e8e95bc4c5b1f
 *       - name: keyword
 *         description: 검색하고자 하는 태그를 쿼리스트링으로 입력합니다.
 *         in: query
 *         type: string
 *         example: 그늘에서
 *     responses:
 *       200:
 *         description: 해당 태그를 갖고있는 식물을 반환합니다.
 */
router.get('/search', searchTag);
//querty string : /tags/serach?keyword=그늘에서

module.exports = router;
