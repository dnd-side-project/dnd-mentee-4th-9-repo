const express = require('express');

const router = express.Router()
const {quratingResult} = require('../controllers/plant.controller');

router.get('/curating',quratingResult);

module.exports = router;