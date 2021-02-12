const db = require('./models');

const reset = async () => {
    console.log('Will rewrite the mysql example database, adding some dummy data.');
    await db.sequelize.sync({force: true});
    await db.Plant.bulkCreate([
        {
            name: "몬스테라",
            feature: "1. <꽃> 꽃과 열매를 맺을 수 있어 열매의 맛은 바나나와 파인애플의 중간맛이에요.\n" +
                "2. <잎> 큰 녹색의 구멍난 잎을 가지고 있으며 수경재배가 가능한 식물이에요.",
            warning: "1. 추위에 약해 겨울철에는 실내에서 키우는 걸 추천해요!\n" +
                "2. 햇빛 방향에 따라 자라기 때문에 화분을 주기적으로 돌려주는 것이 좋아요.\n" +
                "3. 2~3년에 한번씩 배수가 잘 되는 흙으로 분갈이가 필요해요.",
            description: "바쁜 일상 속 조용한 힐링",
            ment: "몬스테라는 크고 특이하게 갈라진 잎이 매력적인 친구이며, 크기도 적당해서 플랜테리어 식물로 유명하답니다. 또한 관리가 쉽고 환경 변화에 크게 예민하지 않아 식물을 키운 경험이 적은 초보 식물 집사에게 인기가 많아요. 예쁘게 자라는 모습도 눈에 잘 들어옵니다. 단, 직사광선보다는 밝은 창가가, 많은 물을 필요로 하지 않는 만큼 과습에 주의해준다면 더욱 잘 자란답니다.",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1.png",
            thumbnailPath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1.png"
        }
    ]);
    await db.Tag.bulkCreate([
        {
            name: "💧💧💧" // id : 1
        },
        {
            name: "💧" // id : 2
        },
        {
            name: "잎도촉촉히" // id : 3
        },
        {
            name: "#작은크기" // id : 4
        },
        {
            name: "#보통크기" // id : 5
        },
        {
            name: "#큰" // id : 6
        },
        {
            name: "#꽃" // id : 7
        },
        {
            name: "#열매" // id : 8
        },
        {
            name: "#그늘에서" // id : 9
        },
        {
            name: "#환한곳에서" // id : 10
        },
        {
            name: "#쑥쑥자라요" // id : 11
        },
        {
            name: "#처음모습그대로" // id : 12
        },
        {
            name: "#적당히포근하게" // id : 13
        },
        {
            name: "#따뜻하게" // id : 14
        },
        {
            name: "⭐" // id : 15
        },
        {
            name: "⭐⭐" // id : 16
        },
        {
            name: "⭐⭐⭐" // id : 17
        }
    ])

    await db.PlantTags.bulkCreate([
        // 몬스테라 시작

        {
            PlantId: 1, //몬스테라
            TagId: 1,
            type: "물주기",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1.png",
            description: "봄, 여름, 가을에는 겉흙이 마르면 듬뿍, 겨울에는 흙 전체가 마르면 듬뿍"
        },
        {
            PlantId: 1,
            TagId: 5,
            type: "크기",
        },
        {
            PlantId: 1,
            TagId: 9,
            type: "장소",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1.png",
            description: "실내 또는 실외의 그늘진 장소"
        },
        {
            PlantId: 1,
            TagId: 11,
            type: "속도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1.png",
            description: "빠르게 자라는 편"
        },
        {
            PlantId: 1,
            TagId: 13,
            type: "온도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1.png",
            description: "16~20℃"
        },
        {
            PlantId: 1,
            TagId: 15,
            type: "난이도"
        },
        {
            PlantId: 1,
            TagId: 7,
            type: "꽃/열매"
        },
        {
            PlantId: 1,
            TagId: 8,
            type: "꽃/열매"
        }

        // 몬스테라 끝

    ]);


    console.log("done");
}

reset();