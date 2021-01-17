const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const User = require('../models/user.model');

module.exports = () => {
    passport.use(new KakaoStrategy({
        clientID:process.env.KAKAO_API,
        callbackURL:'/auth/kakao/callback',
    },kakaoAsync));
};

const kakaoAsync = async(accessToken,refreshToken,profile,done)=>{
    console.log('kakao profile',profile);
    try{
        const existedUser = await User.findOne({where:{kakaoId:profile.id,provider:'kakao'}});
        if(existedUser){
            done(null,existedUser);
        }else{
            const newUser = await User.create({
                name:profile.displayName,
                kakaoId:profile.id,
                profileImage:profile._json.properties.profile_image,
                provider:'kakao'
            });
            done(null,newUser);
        }
    }catch(error){
        console.error(error);
        done(error);
    }
};