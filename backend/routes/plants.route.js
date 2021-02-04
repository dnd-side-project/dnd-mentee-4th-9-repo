const express = require('express');

const router = express.Router()

router.post('/curating',(req,res)=>{
    switch(req.body.plant){
        case '몬스테라':
            return res.json({
                "plant":"몬스테라",
                "image_url":"https://cdn.imweb.me/upload/S201905295cee7c0f94cee/823c3ee408e80.jpeg",
                "title":"바쁜 일상 속 특별한 순간을 선물할게요",
                "maintext":"꽃이 피거나 감각적인 식물을 보고 걸음을 멈춘 적 있는 당신~~~~~test test test 테스트 mock data 입니다  몬스테라와 친구가 되어 보세요"
            })
        case '아레카야자':
            return res.json({
                "plant":"아레카야자",
                "image_url":"https://thumbnail.10x10.co.kr/webimage/image/basic600/240/B002401749.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false",
                "title":"바쁜 일상 속 아레카야자를 선물할게요",
                "maintext":"으아아아아아아아아아 이걸 언제 다 작성해 귀찮아"
            })
        case '아이비':
            return res.json({
                "plant":"아이비",
                "image_url":"https://cdn.pixabay.com/photo/2018/05/28/18/13/ivy-3436643_960_720.jpg",
                "title":"바쁜 일상 속 아이비를 선물할게요",
                "maintext":"흐어어어어어어 아이비 아이비 아이비"
            })
        case '관음죽':
            return res.json({
                "plant":"관음죽",
                "image_url":"https://m.eppflower.com/web/product/big/201704/1600_shop1_416235.jpg",
                "title":"바쁘다 바빠 이번엔 관음죽이다",
                "maintext":"으으 이게 마지막 목데이타,,"
            })
    }
   
})

module.exports = router;