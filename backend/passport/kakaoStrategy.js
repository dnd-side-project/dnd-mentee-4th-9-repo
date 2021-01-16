const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

module.exports = () => {
    passport.use(new KakaoStrategy({
        clientID:process.env.KAKAO_ID,
        callbackURL:'/auth/kakao/callback',
    },kakaoAsync()));
};

export const kakaoAsync = async(accessToken,refreshToken,profile,done)=>{
    console.log('kakao profile',profile);
    try{
        
    }
}