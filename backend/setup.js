const db = require('./models');

const reset = async () => {
    console.log('Will rewrite the mysql example database, adding some dummy data.');
    await db.sequelize.sync({ force : true });
    await db.Plant.bulkCreate([
        {
            name : "몬스테라",
            feature : "1. <꽃> 꽃과 열매를 맺을 수 있어 열매의 맛은 바나나와 파인애플의 중간맛이에요.\n" +
                "2. <잎> 큰 녹색의 구멍난 잎을 가지고 있으며 수경재배가 가능한 식물이에요.",
            warning: "1. 추위에 약해 겨울철에는 실내에서 키우는 걸 추천해요!\n" +
                "2. 햇빛 방향에 따라 자라기 때문에 화분을 주기적으로 돌려주는 것이 좋아요.\n" +
                "3. 2~3년에 한번씩 배수가 잘 되는 흙으로 분갈이가 필요해요.",
            place: "실내 또는 실외의 그늘진 장소",
            grow: "빠르게 자라는 편",
            difficulty: "★☆☆",
            water: "-봄, 여름, 가을에는 겉흙이 마르면 듬뿍\n" +
                "-겨울에는 흙 전체가 마르면 듬뿍",
            height: "90~100cm",
            description: "바쁜 일상 속 조용한 힐링",
            ment: "몬스테라는 크고 특이하게 갈라진 잎이 매력적인 친구이며, 크기도 적당해서 플랜테리어 식물로 유명하답니다. 또한 관리가 쉽고 환경 변화에 크게 예민하지 않아 식물을 키운 경험이 적은 초보 식물 집사에게 인기가 많아요. 예쁘게 자라는 모습도 눈에 잘 들어옵니다. 단, 직사광선보다는 밝은 창가가, 많은 물을 필요로 하지 않는 만큼 과습에 주의해준다면 더욱 잘 자란답니다.",
            flower: true,
            temperature: "16~20℃",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1.png",
            thumbnailPath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1.png"
        }
    ]);
    await db.Tag.bulkCreate([
        { name : "💧💧💧" },
        { name: "#보통크기" },
        { name: "#꽃" },
        { name: "#열매" },
        { name : "#그늘에서" }
    ])
    const monstra = await db.Plant.findOne({
        where : {name : '몬스테라'}
    });
    const tag1 = await db.Tag.findOne({
        where : {name : '💧💧💧'}
    });
    const tag2 = await db.Tag.findOne({
        where : {name : '#그늘에서'}
    });
    await monstra.addTag(tag1);
    await monstra.addTag(tag2);

    console.log("done");
}

reset();