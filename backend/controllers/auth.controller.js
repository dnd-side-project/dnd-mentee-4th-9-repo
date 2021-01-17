const passport = require('passport');

const loginProcess = passport.authenticate('kakao');

const loginFail = passport.authenticate('kakao',{failureRedirect:'/'});

const loginSuccess = (req,res)=>{
    res.redirect('/');
}

const logout = passport.authenticate('kakao',(req,res)=>{
    req.logout();
    req.session.destroy();
    res.redirect('/');
 })

module.exports = {loginProcess,loginFail,loginSuccess,logout};