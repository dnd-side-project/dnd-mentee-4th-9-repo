const express = require('express');
const { searchTag } = require('../controllers/tag.controller');
const router = express.Router()

router.get('/search', searchTag);
//querty string : /tags/serach?keyworkd=#그늘에서

module.exports = router;