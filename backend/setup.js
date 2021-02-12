const db = require('./models');

const reset = async () => {
    console.log('Will rewrite the mysql example database, adding some dummy data.');
    await db.sequelize.sync({force: true});
    await db.Plant.bulkCreate([
        // 몬스테라 id : 1
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
        },
        // 아레카야자 id : 2
        {
            name: "아레카야자",
            feature: "1. <꽃> 여름철에 흰색, 연노란색으로 꽃을 피워요.\n" +
                "2. <잎> 잎이 30~60개의 작은 잎으로 이루어져 있어요.",
            warning: "1. 잔뿌리가 손상되면 물을 공급받지 못해 금방 죽을 수 있어요.\n" +
                "2. 물을 너무 많이 주면 잎이 노랗게 변할 수 있으니 조심해주세요!\n" +
                "3. 어린 아레카야자의 경우 1년에 한 번, 성체의 경우 2~3년에 한 번 분갈이가 필요해요.",
            description: "따뜻한 위로를 전하는 친구",
            ment: "아레카야자는 NASA에서 공기정화능력 1등으로 선정된 식물이에요. 큰 키는 대나무를 연상시켜 온화함을 주고, 증산량이 높아 건조한 실내를 촉촉하게 해준답니다. 식물 경험이 적은 초보자도 키우기 쉽지만, 통풍과 볕이 잘 드는 곳을 요구하며 분무기로 잎은 촉촉하게 해주는 등 관리는 필요해요. 나의 정성만큼 빠르게 성장하는 아레카야자를 보면 오늘의 걱정을 잠시 잊게 될 거에요.",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%85%E1%85%A6%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A3%E1%84%8C%E1%85%A1.png",
            thumbnailPath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%85%E1%85%A6%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A3%E1%84%8C%E1%85%A1.png"
        },
        // 아이비 id : 3
        {
            name: "아이비",
            feature: "1. <꽃> 실내에서는 거의 꽃이 피지 않지만, 만약 핀다면 별 모양의 노란 꽃을 피워요.\n" +
                "2. <잎> 벽을 타고 오르거나 땅을 기는 덩굴 식물이에요.",
            warning: "1. 갑작스럽게 햇빛에 놓으면 잎이 타들어가므로 서서히 적응시켜주어야 해요!\n" +
                "2. 1년 주기로 봄, 가을에 배양토로 분갈이를 해주세요.",
            description: "작고 귀여운 덩굴 식물",
            ment: "아이비는 품종이 500종 이상인 대표적인 플랜테리어 식물이에요. 잎이 하트 모양이거나 특이한 색(무늬)을 가져 귀여움을 자랑합니다. 아담한 사이즈로 길이가 길면 벽에 걸어두어 자연의 느낌을, 짧으면 미니 화분에 심을 수 있습니다. 초보자도 키우기 쉬우며 우수한 공기정화 능력은 덤이에요! 단, 햇빛이 잘 드는 장소에서 분무기로 물을 자주 주어야 하고, 수경 재배도 가능합니다.",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            thumbnailPath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png"
        },
        // 관음죽 id : 4
        {
            name: "관음죽",
            feature: "1. <꽃> 6월에 꽃이 피고, 황록색 또는 연황색 열매가 열려요.\n" +
                "2. <기능> 암모니아 가스 제거에 탁월해 화장실에 놓기에 좋아요",
            warning: "1. 건조에 약해 습도가 낮으면 잎의 끝이 마를 수 있는데, 이 때는 마른 잎의 끝부분을 잘라주세요.\n" +
                "2.뿌리가 상하게 되면 가지가 늘어지므로 이 때에는 물을 줄이고 통풍이 잘 되는 곳에 두어야 합니다.\n" +
                "3. 2년에 한 번씩 봄에 큰 화분이나 작은 화분에 포기나누기를 해주세요.",
            description: "진정한 반려 식물의 의미",
            ment: "관음죽은 긴 잎에 줄무늬를 가졌어요. 공기 정화와 암모니아 냄새 제거에 탁월하고 낮은 온도(그늘)에서도 잘 자랍니다. 오랜 정성을 들이면 드물게 피우는 꽃을 보며 행운을 느낄 수 있어요. 단, 번식력이 강해 포기를 나누고, 수액이 피부에 닿지 않게 주의하며, 갈변하는 잎 끝을 잘라내야 한답니다. 병충해에도 강해서 초보자도 약간의 관리만 해주면 튼튼하게 자라는 식물이에요.",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%8C%E1%85%AE%E1%86%A8.png",
            thumbnailPath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%AA%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%B7%E1%84%8C%E1%85%AE%E1%86%A8.png"
        },
        //스투키 id : 5
        {
            name: "스투키",
            feature: "1. <잎> 다육 식물 중 하나로 길쭉하고 두꺼운 잎을 가졌어요.\n" +
                "2. <기능> 스투키는 대표적인 공기 정화 식물 중 하나에요.",
            warning: "1. 상태가 안 좋은 개체가 있다면 다른 개체에 영향 주지 않게 제거해야 해요.\n" +
                "2. 뿌리가 상하게 되면 가지가 늘어지므로 이 때에는 물을 줄이고 통풍이 잘 되는 곳으로 옮겨주세요.\n" +
                "3. 번식이 빠르기 때문에 새순이 나오면 바로 분갈이를 해야 해요.",
            description: "쾌적한 집콕 라이프 추천",
            ment: "스투키는 NASA에서 추천했을 정도로 탁월한 공기 정화 능력을 가지고 있어요. 스투키는 햇빛에도 강하고 집안 어디에서나 키워도 무리없이 잘 자라기 때문에 초보자가 키우기에 적합한 반려식물이랍니다. 비교적 추위에도 강한 편이지만 겨울엔 실내로 옮겨주시는 게 좋아요.  스투키는 매우 다양한 사이즈와 굵기를 가지고 있어요. 내 취향에 맞는 스투키를 찾아보는 것도 재미있는 여정이 될 거에요.",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%90%E1%85%AE%E1%84%8F%E1%85%B5.png",
            thumbnailPath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%90%E1%85%AE%E1%84%8F%E1%85%B5.png"
        },
        //올리브 나무 id : 6
        {
            name: "올리브 나무",
            feature: "1. <꽃> 잎 근처에 흰 색 꽃이 피고 3~5세 이후부터 여름에 열매를 수확할 수 있어요.\n" +
                "2. <기능> 올리브 나무는 건강에 좋은 성분이 많아 신이 내린 선물, 평화와 행복을 상징해요. 빛을 좋아하고 건조해도 잘 자라는 식물이에요.",
            warning: "1. 2개월 정도의 추위를 견딘 후 열매가 검은색이 된 것을 확인한 후 수확해주세요.\n" +
                "2. 한 그루만으로 열매를 맺지 못하는 품종도 있으니 열매를 보고 싶다면 주의해서 구매해야 해요.\n" +
                "3. 통풍이 꼭 필요해요.\n" +
                "4. 2년에 한번 전체적인 분갈이를 진행해주면 적당해요.",
            description: "몸과 마음이 치유되는 사계절",
            ment: "올리브 나무는 그 잎을 사계절 내내 감상하는 것 만으로 매우 훌륭한 가치를 가지고 있는 반려식물이에요. 해외에서만 만날 수 있던 과거와 달리 요즘에는 일반 꽃집에서도 심심치 않게 볼 수 있을 정도로 친근해졌어요. 풍성한 꽃과 열매를 수확할 수 있는 것도 올리브 나무의 큰 장점이죠. 사계절 다양한 모습 올리브 나무와 함께라면 집에 있는 시간도 더 이상 지루하게 느껴지지 않을 거에요. ",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            thumbnailPath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png"
        },
        //행운목 id : 7
        {
            name: "행운목",
            feature: "1. <꽃> 7~10년에 한 번 꽃을 피워요.\n" +
                "2. <잎> 콘 플랜트(Corn plant)라는 영어 이름처럼 잎이 옥수수 잎과 닮았어요.",
            warning: "1. 햇빛을 갑자기 많이 받으면 잎이 마르기 때문에 천천히 햇빛에 노출시켜 주세요.\n" +
                "2. 어두운 곳에 오래 있으면 잎이 연약하고 면역력이 떨어져 노란색으로 변할 수 있어요.\n" +
                "3. 꽃을 꼭 보고 싶다면 겨울철에 따뜻한 온도를 유지해주세요.\n" +
                "4. 4~5년에 한 번 여름에 분갈이를 진행해 주세요.",
            description: "꽃을 기다리는 달콤한 시간",
            ment: "행운목은 몇 년에 한 번 긴 주기로 꽃을 피우는 식물이에요. 그렇기 때문에 행운목에 꽃이 피는 해는 행운이 가득하다고 해서 행운목이라는 이름이 붙었답니다. 행운목에 꽃이 피면 기분 좋은 달콤한 향을 느낄 수 있어요. 따스하게 행운목을 관리해주며 꽃을 기다려 보는 것도 좋은 추억이 될 거 같아요. 행운목과 함께라면 매일매일 기대감 넘치는 하루를 보낼 수 있지 않을까요? ",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A2%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%86%E1%85%A9%E1%86%A8.png",
            thumbnailPath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A2%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%AB%E1%84%86%E1%85%A9%E1%86%A8.png"
        },
        //돈나무 id : 8
        {
            name: "돈나무",
            feature: "1. <꽃> 여름에 꽃이 피며, 향기가 매우 강해요. 가을에는 구슬 크기의 끈적끈적한 황색 열매가 열려요.\n" +
                "2. <기능> 가뭄과 해풍에도 잘 견디는 식물이에요. 한방에서는 종자와 뿌리껍질을 약재로 사용하기도 한답니다.",
            warning: "1. 물을 너무 많이 주면 잎이 누렇게 변할 수 있어요.\n" +
                "2. 잎에 독성이 있어 어린아이나 반려동물이 있는 경우 손이 닿지 않도록 주의가 필요해요.\n" +
                "3. 1년에 한 번 정도 알뿌리에 손상이 가지 않게 분갈이를 진행해주세요.",
            description: "돈이 들어오는 행운의 나무",
            ment: "돈나무는 잎의 모양이 동전 모양을 닮아있어요. 그렇기 때문에 돈이 들어오는 나무라고 해서 금전수라고도 불러요. 그래서인지 돈나무는 집들이나 개업 선물로도 아주 인기가 많답니다. 다른 식물들에 비해 생명력이 아주 뛰어나서 직사광선 및 물주기만 조심해준다면 초보자도 충분히 키울 수 있어요. 자주 물을 줄 필요가 없고 꼼꼼한 관리 없이도 잘 자란다는 게 아주 큰 장점이죠. 돈나무와 함께 우리도 오늘부터 황금빛 미래를 그려볼까요? ",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%AB%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            thumbnailPath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%AB%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png"
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
        // 몬스테라
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
        },
        // 아레카야자
        {
            PlantId: 2,
            TagId: 2,
            type: "물주기",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%85%E1%85%A6%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A3%E1%84%8C%E1%85%A1.png",
            description: "화분의 흙이 말랐을 때 적당히 급수"
        },
        {
            PlantId: 2,
            TagId: 5,
            type: "크기"
        },
        {
            PlantId: 2,
            TagId: 6,
            type: "크기"
        },
        {
            PlantId: 2,
            TagId: 7,
            type: "꽃/열매"
        },
        {
            PlantId: 2,
            TagId: 9,
            type: "장소",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%85%E1%85%A6%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A3%E1%84%8C%E1%85%A1.png",
            description: "직사광선을 피한 실내 혹은 베란다의 따뜻하고 밝은 곳"
        },
        {
            PlantId: 2,
            TagId: 12,
            type: "속도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%85%E1%85%A6%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A3%E1%84%8C%E1%85%A1.png",
            description: "느리게 자라는 편"
        },
        {
            PlantId: 2,
            TagId: 14,
            type: "온도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%85%E1%85%A6%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A3%E1%84%8C%E1%85%A1.png",
            description: "21~25℃"
        },
        {
            PlantId: 2,
            TagId: 15,
            type: "난이도"
        },
        //아이비
        {
            PlantId: 3,
            TagId: 15,
            type: "난이도"
        },
        {
            PlantId: 3,
            TagId: 1,
            type: "물주기",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "흙이 완전히 마르면 적당히"
        },
        {
            PlantId: 3,
            TagId: 3,
            type: "물주기",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "스프레이로 잎에 주 1회 분무"
        },
        {
            PlantId: 3,
            TagId: 4,
            type: "크기"
        },
        {
            PlantId: 3,
            TagId: 7,
            type: "꽃/열매"
        },
        {
            PlantId: 3,
            TagId: 10,
            type: "장소",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "여름은 베란다 정원\n겨울은 햇빛이 잘드는 실내"
        },
        {
            PlantId: 3,
            TagId: 11,
            type: "속도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "빠르게 자라는 편"
        },
        {
            PlantId: 3,
            TagId: 13,
            type: "온도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "16~20℃"
        },
        // 관음죽
        {
            PlantId: 4,
            TagId: 15,
            type: "난이도"
        },
        {
            PlantId: 4,
            TagId: 1,
            type: "물주기",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "화분의 겉흙이 말랐을 때 듬뿍"
        },
        {
            PlantId: 4,
            TagId: 3,
            type: "물주기",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "실내공기가 건조한 경우 스프래이로 잎에 분무"
        },
        {
            PlantId: 4,
            TagId: 5,
            type: "크기"
        },
        {
            PlantId: 4,
            TagId: 6,
            type: "크기"
        },
        {
            PlantId: 4,
            TagId: 7,
            type: "꽃/열매"
        },
        {
            PlantId: 4,
            TagId: 8,
            type: "꽃/열매"
        },
        {
            PlantId: 4,
            TagId: 9,
            type: "장소",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "직사광선을 피한 실내의 창가, 베란다"
        },
        {
            PlantId: 4,
            TagId: 12,
            type: "속도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "느리게 자라는 편"
        },
        {
            PlantId: 4,
            TagId: 13,
            type: "온도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "16~20℃"
        },
        //스투키
        {
            PlantId: 5,
            TagId: 16,
            type: "난이도"
        },
        {
            PlantId: 5,
            TagId: 2,
            type: "물주기",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%90%E1%85%AE%E1%84%8F%E1%85%B5.png",
            description: "한 달에 한 번 정도 잎이 말랑할 때"
        },
        {
            PlantId: 5,
            TagId: 4,
            type: "크기"
        },
        {
            PlantId: 5,
            TagId: 5,
            type: "크기"
        },
        {
            PlantId: 5,
            TagId: 6,
            type: "크기"
        },
        {
            PlantId: 5,
            TagId: 9,
            type: "장소",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%90%E1%85%AE%E1%84%8F%E1%85%B5.png",
            description: "바람이 잘 드는 실내"
        },
        {
            PlantId: 5,
            TagId: 12,
            type: "속도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%90%E1%85%AE%E1%84%8F%E1%85%B5.png",
            description: "느리게 자라는 편"
        },
        {
            PlantId: 5,
            TagId: 14,
            type: "온도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%90%E1%85%AE%E1%84%8F%E1%85%B5.png",
            description: "15~30℃"
        },
        //올리브 나무
        {
            PlantId: 6,
            TagId: 16,
            type: "난이도",
        },
        {
            PlantId: 6,
            TagId: 1,
            type: "물주기",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "물을 좋아하니 흠뻑"
        },
        {
            PlantId: 6,
            TagId: 6,
            type: "크기"
        },
        {
            PlantId: 6,
            TagId: 7,
            type: "꽃/열매"
        },
        {
            PlantId: 6,
            TagId: 8,
            type: "꽃/열매"
        },
        {
            PlantId: 6,
            TagId: 10,
            type: "장소",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "- 햇빛을 좋아하므로 어두운곳은 부적합해요\n- 반양지를 가장 추천합니다."
        },
        {
            PlantId: 6,
            TagId: 12,
            type: "속도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "느리게 자라는 편"
        },
        {
            PlantId: 6,
            TagId: 14,
            type: "온도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "15~28℃"
        },
        // 행운목
        {
            PlantId: 7,
            TagId: 16,
            type: "난이도"
        },
        {
            PlantId: 7,
            TagId: 1,
            type: "물주기",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "겉흙이 말랐을 때 듬뿍"
        },
        {
            PlantId: 7,
            TagId: 6,
            type: "크기"
        },
        {
            PlantId: 7,
            TagId: 7,
            type: "꽃/열매"
        },
        {
            PlantId: 7,
            TagId: 9,
            type: "장소",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "직사광선을 피하고 통풍이 잘 되는 실내"
        },
        {
            PlantId: 7,
            TagId: 11,
            type: "속도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "빨리 자라는 편"
        },
        {
            PlantId: 7,
            TagId: 14,
            type: "온도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "21~25℃"
        },
        //돈나무
        {
            PlantId: 8,
            TagId: 16,
            type: "난이도"
        },
        {
            PlantId: 8,
            TagId: 2,
            type: "물주기",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%AB%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "흙이 마르면 적당히"
        },
        {
            PlantId: 8,
            TagId: 6,
            type: "크기"
        },
        {
            PlantId: 8,
            TagId: 7,
            type: "꽃/열매"
        },
        {
            PlantId: 8,
            TagId: 8,
            type: "꽃/열매"
        },
        {
            PlantId: 8,
            TagId: 9,
            type: "장소",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%AB%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "직사광선을 피한 실내의 창가, 베란다"
        },
        {
            PlantId: 8,
            TagId: 11,
            type: "속도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%AB%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "빨리 자라는 편"
        },
        {
            PlantId: 8,
            TagId: 14,
            type: "온도",
            imagePath: "https://seeat-image-dev-image-bucket.s3.ap-northeast-2.amazonaws.com/%E1%84%83%E1%85%A9%E1%86%AB%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "18~24°C"
        }
        //TODO:이하 나머지 식물 추가 필요
    ]);


    console.log("done");
}

reset();