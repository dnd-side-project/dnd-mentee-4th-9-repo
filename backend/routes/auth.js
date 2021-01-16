const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/kakao',passport.authenticate('kakao'));

router.get('/kakao/callback',passport.authenticate('kakao',{failureRedirect:'/'}),(req,res)=>{
    res.redirect('/');
});

router.get('/logout',passport.authenticate('kakao',(req,res)=>{
    req.logout();
    req.session.destroy();
    res.redirect('/');
}))

module.exports = router;