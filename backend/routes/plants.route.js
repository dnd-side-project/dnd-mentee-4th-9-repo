const express = require('express');

const router = express.Router()
const {quratingResult} = require('../controllers/plant.controller');

router.post('/curating',quratingResult);

module.exports = router;