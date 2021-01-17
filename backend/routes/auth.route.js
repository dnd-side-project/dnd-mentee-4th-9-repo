const express = require('express');
const router = express.Router();
const {loginProcess,loginFail,loginSuccess,logout} = require('../controllers/auth.controller');

router.get('/kakao',loginProcess);

router.get('/kakao/callback',loginFail,loginSuccess);

router.get('/logout',logout);

module.exports = router;