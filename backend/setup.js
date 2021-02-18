const db = require('./models');

const reset = async () => {
    console.log('Will rewrite the mysql example database, adding some dummy data.');
    await db.sequelize.sync({force: true});
    await db.Plant.bulkCreate([
        // 몬스테라 id : 1
        {
            name: "몬스테라",
            feature: "꽃:꽃과 열매를 맺을 수 있어 열매의 맛은 바나나와 파인애플의 중간맛이에요.\n" +
                "잎: 큰 녹색의 구멍난 잎을 가지고 있으며 수경재배가 가능한 식물이에요.",
            warning: "추위에 약해 겨울철에는 실내에서 키우는 걸 추천해요!\n" +
                "햇빛 방향에 따라 자라기 때문에 화분을 주기적으로 돌려주는 것이 좋아요.\n" +
                "2~3년에 한번씩 배수가 잘 되는 흙으로 분갈이가 필요해요.",
            description: "바쁜 일상 속 조용한 힐링",
            ment: "몬스테라는 크고 특이하게 갈라진 잎이 매력적인 친구이며, 크기도 적당해서 플랜테리어 식물로 유명하답니다. 또한 관리가 쉽고 환경 변화에 크게 예민하지 않아 식물을 키운 경험이 적은 초보 식물 집사에게 인기가 많아요. 예쁘게 자라는 모습도 눈에 잘 들어옵니다. 단, 직사광선보다는 밝은 창가가, 많은 물을 필요로 하지 않는 만큼 과습에 주의해준다면 더욱 잘 자란답니다.",
            imagePath: "https://resources.seeat-plant.com/몬스테라_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/몬스테라.png"
        },
        // 아레카야자 id : 2
        {
            name: "아레카야자",
            feature: "꽃:여름철에 흰색, 연노란색으로 꽃을 피워요.\n" +
                "잎:잎이 30~60개의 작은 잎으로 이루어져 있어요.",
            warning: "잔뿌리가 손상되면 물을 공급받지 못해 금방 죽을 수 있어요.\n" +
                "물을 너무 많이 주면 잎이 노랗게 변할 수 있으니 조심해주세요!\n" +
                "어린 아레카야자의 경우 1년에 한 번, 성체의 경우 2~3년에 한 번 분갈이가 필요해요.",
            description: "따뜻한 위로를 전하는 친구",
            ment: "아레카야자는 NASA에서 공기정화능력 1등으로 선정된 식물이에요. 큰 키는 대나무를 연상시켜 온화함을 주고, 증산량이 높아 건조한 실내를 촉촉하게 해준답니다. 식물 경험이 적은 초보자도 키우기 쉽지만, 통풍과 볕이 잘 드는 곳을 요구하며 분무기로 잎은 촉촉하게 해주는 등 관리는 필요해요. 나의 정성만큼 빠르게 성장하는 아레카야자를 보면 오늘의 걱정을 잠시 잊게 될 거에요.",
            imagePath: "https://resources.seeat-plant.com/아레카야자_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/아레카야자.png",
        },
        // 아이비 id : 3
        {
            name: "아이비",
            feature: "꽃:실내에서는 거의 꽃이 피지 않지만, 만약 핀다면 별 모양의 노란 꽃을 피워요.\n" +
                "잎:벽을 타고 오르거나 땅을 기는 덩굴 식물이에요.",
            warning: "갑작스럽게 햇빛에 놓으면 잎이 타들어가므로 서서히 적응시켜주어야 해요!\n" +
                "1년 주기로 봄, 가을에 배양토로 분갈이를 해주세요.",
            description: "작고 귀여운 덩굴 식물",
            ment: "아이비는 품종이 500종 이상인 대표적인 플랜테리어 식물이에요. 잎이 하트 모양이거나 특이한 색(무늬)을 가져 귀여움을 자랑합니다. 아담한 사이즈로 길이가 길면 벽에 걸어두어 자연의 느낌을, 짧으면 미니 화분에 심을 수 있습니다. 초보자도 키우기 쉬우며 우수한 공기정화 능력은 덤이에요! 단, 햇빛이 잘 드는 장소에서 분무기로 물을 자주 주어야 하고, 수경 재배도 가능합니다.",
            imagePath: "https://resources.seeat-plant.com/아이비_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/아이비.png"
        },
        // 관음죽 id : 4
        {
            name: "관음죽",
            feature: "꽃:6월에 꽃이 피고, 황록색 또는 연황색 열매가 열려요.\n" +
                "기능:암모니아 가스 제거에 탁월해 화장실에 놓기에 좋아요",
            warning: "건조에 약해 습도가 낮으면 잎의 끝이 마를 수 있는데, 이 때는 마른 잎의 끝부분을 잘라주세요.\n" +
                "뿌리가 상하게 되면 가지가 늘어지므로 이 때에는 물을 줄이고 통풍이 잘 되는 곳에 두어야 합니다.\n" +
                "2년에 한 번씩 봄에 큰 화분이나 작은 화분에 포기나누기를 해주세요.",
            description: "진정한 반려 식물의 의미",
            ment: "관음죽은 긴 잎에 줄무늬를 가졌어요. 공기 정화와 암모니아 냄새 제거에 탁월하고 낮은 온도(그늘)에서도 잘 자랍니다. 오랜 정성을 들이면 드물게 피우는 꽃을 보며 행운을 느낄 수 있어요. 단, 번식력이 강해 포기를 나누고, 수액이 피부에 닿지 않게 주의하며, 갈변하는 잎 끝을 잘라내야 한답니다. 병충해에도 강해서 초보자도 약간의 관리만 해주면 튼튼하게 자라는 식물이에요.",
            imagePath: "https://resources.seeat-plant.com/관음죽_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/관음죽.png"
        },
        //스투키 id : 5
        {
            name: "스투키",
            feature: "잎:다육 식물 중 하나로 길쭉하고 두꺼운 잎을 가졌어요.\n" +
                "기능:스투키는 대표적인 공기 정화 식물 중 하나에요.",
            warning: "상태가 안 좋은 개체가 있다면 다른 개체에 영향 주지 않게 제거해야 해요.\n" +
                "뿌리가 상하게 되면 가지가 늘어지므로 이 때에는 물을 줄이고 통풍이 잘 되는 곳으로 옮겨주세요.\n" +
                "번식이 빠르기 때문에 새순이 나오면 바로 분갈이를 해야 해요.",
            description: "쾌적한 집콕 라이프 추천",
            ment: "스투키는 NASA에서 추천했을 정도로 탁월한 공기 정화 능력을 가지고 있어요. 스투키는 햇빛에도 강하고 집안 어디에서나 키워도 무리없이 잘 자라기 때문에 초보자가 키우기에 적합한 반려식물이랍니다. 비교적 추위에도 강한 편이지만 겨울엔 실내로 옮겨주시는 게 좋아요.  스투키는 매우 다양한 사이즈와 굵기를 가지고 있어요. 내 취향에 맞는 스투키를 찾아보는 것도 재미있는 여정이 될 거에요.",
            imagePath: "https://resources.seeat-plant.com/스투키_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/스투키.png"
        },
        //올리브 나무 id : 6
        {
            name: "올리브 나무",
            feature: "꽃:잎 근처에 흰 색 꽃이 피고 3~5세 이후부터 여름에 열매를 수확할 수 있어요.\n" +
                "기능:올리브 나무는 건강에 좋은 성분이 많아 신이 내린 선물, 평화와 행복을 상징해요. 빛을 좋아하고 건조해도 잘 자라는 식물이에요.",
            warning: "2개월 정도의 추위를 견딘 후 열매가 검은색이 된 것을 확인한 후 수확해주세요.\n" +
                "한 그루만으로 열매를 맺지 못하는 품종도 있으니 열매를 보고 싶다면 주의해서 구매해야 해요.\n" +
                "통풍이 꼭 필요해요.\n" +
                "2년에 한번 전체적인 분갈이를 진행해주면 적당해요.",
            description: "몸과 마음이 치유되는 사계절",
            ment: "올리브 나무는 그 잎을 사계절 내내 감상하는 것 만으로 매우 훌륭한 가치를 가지고 있는 반려식물이에요. 해외에서만 만날 수 있던 과거와 달리 요즘에는 일반 꽃집에서도 심심치 않게 볼 수 있을 정도로 친근해졌어요. 풍성한 꽃과 열매를 수확할 수 있는 것도 올리브 나무의 큰 장점이죠. 사계절 다양한 모습 올리브 나무와 함께라면 집에 있는 시간도 더 이상 지루하게 느껴지지 않을 거에요. ",
            imagePath: "https://resources.seeat-plant.com/올리브나무_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/올리브나무.png"
        },
        //행운목 id : 7
        {
            name: "행운목",
            feature: "꽃:7~10년에 한 번 꽃을 피워요.\n" +
                "잎:콘 플랜트(Corn plant)라는 영어 이름처럼 잎이 옥수수 잎과 닮았어요.",
            warning: "햇빛을 갑자기 많이 받으면 잎이 마르기 때문에 천천히 햇빛에 노출시켜 주세요.\n" +
                "어두운 곳에 오래 있으면 잎이 연약하고 면역력이 떨어져 노란색으로 변할 수 있어요.\n" +
                "꽃을 꼭 보고 싶다면 겨울철에 따뜻한 온도를 유지해주세요.\n" +
                "4~5년에 한 번 여름에 분갈이를 진행해 주세요.",
            description: "꽃을 기다리는 달콤한 시간",
            ment: "행운목은 몇 년에 한 번 긴 주기로 꽃을 피우는 식물이에요. 그렇기 때문에 행운목에 꽃이 피는 해는 행운이 가득하다고 해서 행운목이라는 이름이 붙었답니다. 행운목에 꽃이 피면 기분 좋은 달콤한 향을 느낄 수 있어요. 따스하게 행운목을 관리해주며 꽃을 기다려 보는 것도 좋은 추억이 될 거 같아요. 행운목과 함께라면 매일매일 기대감 넘치는 하루를 보낼 수 있지 않을까요? ",
            imagePath: "https://resources.seeat-plant.com/행운목_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/행운목.png"
        },
        //돈나무 id : 8
        {
            name: "돈나무",
            feature: "꽃:여름에 꽃이 피며, 향기가 매우 강해요. 가을에는 구슬 크기의 끈적끈적한 황색 열매가 열려요.\n" +
                "기능:가뭄과 해풍에도 잘 견디는 식물이에요. 한방에서는 종자와 뿌리껍질을 약재로 사용하기도 한답니다.",
            warning: "물을 너무 많이 주면 잎이 누렇게 변할 수 있어요.\n" +
                "잎에 독성이 있어 어린아이나 반려동물이 있는 경우 손이 닿지 않도록 주의가 필요해요.\n" +
                "1년에 한 번 정도 알뿌리에 손상이 가지 않게 분갈이를 진행해주세요.",
            description: "돈이 들어오는 행운의 나무",
            ment: "돈나무는 잎의 모양이 동전 모양을 닮아있어요. 그렇기 때문에 돈이 들어오는 나무라고 해서 금전수라고도 불러요. 그래서인지 돈나무는 집들이나 개업 선물로도 아주 인기가 많답니다. 다른 식물들에 비해 생명력이 아주 뛰어나서 직사광선 및 물주기만 조심해준다면 초보자도 충분히 키울 수 있어요. 자주 물을 줄 필요가 없고 꼼꼼한 관리 없이도 잘 자란다는 게 아주 큰 장점이죠. 돈나무와 함께 우리도 오늘부터 황금빛 미래를 그려볼까요? ",
            imagePath: "https://resources.seeat-plant.com/돈나무_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/돈나무.png"
        },
        //스파티필름 id : 9
        {
            name: "스파티필름",
            feature: "꽃:하얀색 꽃을 피워요.\n" +
                "기능:NASA가 발표한 공기정화식물로 실내 공기 오염물질을 분해하는 능력이 뛰어나요. 물에 꽂아 두기만 해도 가습기 역할을 하며, 물주기만 적당히 주의해주면 큰 문제 없이 잘 자라는 편이에요.",
            warning: "잎이 변색되면 해당 부분은 가지치기를 해주세요!\n" +
                "1~2년에 한 번 분갈이가 필요하며, 분갈이 직후에는 말뚝을 사용해 일정 기간동안 지지대를 만들어주세요.",
            description: "나사가 인정한 공기정화식물",
            ment: "덥고 습한 곳에서 잘 자라는 식물인 스파티필름은 내 방에서 함께할 수 있는 반려식물이에요. 스파티필름은 NASA에서 추천한 공기 정화 식물 중 하나기도 하답니다. 건조에는 약하고 습기에는 강하기 때문에 잎이 마르지 않도록 조심해주는 게 중요해요. 온도나 습도가 적당하면 언제든지 꽃을 피우는 식물이기 때문에, 꽃을 좋아하는 분이라면 스파티필름이 좋은 친구가 되어줄 거 같아요. ",
            imagePath: "https://resources.seeat-plant.com/스파티필름_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/스파티필름.png"
        },
        //필레아페페 id : 10
        {
            name: "필레아페페",
            feature: "잎:꽃이 피지는 않지만 사계절 내내 동글동글한 초록 잎을 볼 수 있어요. 줄기를 잘라서 삽목하면 여러 개의 화분을 만들 수 있답니다.\n" +
                "기능:전자파 제거에 매우 효과적인 식물이에요.",
            warning: "추위에 약하기 때문에 실내에서 재배해야 해요.\n" +
                "잎이 해를 향해 자라는 편이나 직사광선을 강하게 받으면 잎이 변색될 수 있어요.\n" +
                "일반 분갈이 흙과 마사를 7:3 정도의 비율로 섞어서 심으면 물 빠짐도 좋고 성장과 번식에도 도움이 돼요.",
            description: "전자파를 차단하는 싱그러움",
            ment: "필레아페페는 필레아 페페로미오이데스라는 멋진 풀네임을 가지고 있어요. 동그란 잎의 모양이 중국 동전을 닮았다고 해 중국동전풀이라는 별명이 있기도 해요. 필레아페페는 추위에 약한 식물이기 때문에 온도가 10도 이하로 떨어지지 않도록 주의해줘야 해요. 번식이 매우 잘되는 식물이기 때문에 땅에서 올라오는 자구를 삽목하면 필레아페페 대가족을 만들 수 있답니다! 훨씬 싱그러워진 우리 집을 발견할 수 있을 거에요. ",
            imagePath: "https://resources.seeat-plant.com/필레아페페_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/필레아페페.png"
        },
        //스킨답서스 id : 11
        {
            name: "스킨답서스",
            feature: "기능:공기 정화력이 뛰어난 식물이에요. 병충해에 강하고 햇빛을 많이 볼 필요가 없어서 키우기 수월한 식물 중 하나에요.",
            warning: "스킨답서스의 잎에 들어있는 성분은 애완동물에게는 독이 될 수 있기 때문에 반려동물을 키우는 집이라면 피하는 것이 좋아요.\n" +
                "분갈이 후 몸살이 있는 편이라 너무 자주 해주는 건 좋지 않아요.",
            description: "취향대로 고르는 즐거움",
            ment: "스킨답서스는 마블, 라임, 엔조이 등 색이나 무늬가 다른 여러 종류가 있어요. 그렇기 때문에 취향에 맞는 다양한 스킨답서스 친구들을 들일 수 있다는 게 아주 큰 장점이죠. 크게 신경써서 관리해야 할 부분이기 때문에 초보자에게 적합한 반려 식물 중 하나에요. 까다롭지 않은 친구지만 너무 추운 추위는 조심해줄 필요가 있어요. 식물 키우기에 자신이 없는 초보 분들이라면 스킨답서스를 첫 친구로 들여보시는 건 어떨까요?",
            imagePath: "https://resources.seeat-plant.com/스킨답서스_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/스킨답서스.png"
        },
        //트리안 id : 12
        {
            name: "트리안",
            feature: "잎:덩굴 식물답게 길게 길게 자라요. 잎이 작고 동글동글한 것이 특징이에요.",
            warning: "성장 속도가 빠르므로 원하는 모양으로 키우려면 틈틈히 잘라주어야 해요.\n" +
                "물을 많이 줄 경우 뿌리가 상할 수 있어요.\n" +
                "1~2년 주기로 분갈이를 해줘야 해요.",
            description: "섬세함으로 채워가는 공간",
            ment: "트리안은 모빌처럼 길게 늘어져 자라는 가늘고 섬세한 줄기가 매력적인 친구에요. 열대 지방 식물이기 때문에 따뜻한 기온을 유지해주는 것이 중요해요. 줄기를 잘라주면 새로운 줄기가 더 잘 자라는 특성을 갖고 있기 때문에 지속적으로 관리해주면 점점 더 멋진 모습으로 자라날 거에요. 트리안과 함께라면 우리 집도 개성만점 멋진 모습으로 재탄생할 수 있을 거 같아요!",
            imagePath: "https://resources.seeat-plant.com/트리안_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/트리안.png"
        },
        //마리모 id : 13
        {
            name: "마리모",
            feature: "잎:공 모양으로 뭉쳐서 자라요. 동그랗고 신기한 생김새 덕인지 애완 식물로 은근히 인기가 있는 편이에요. 1년에 약 5mm 자라요.",
            warning: "물 온도를 20℃ 정도로 맞춰주는 것이 좋아요.\n" +
                "가끔 마리모 볼을 회전시켜 빛이 여러 방향에 닿을 수 있도록 해주세요.\n" +
                "일주일에 한 번 물갈이를 해주세요.",
            description: "꼬물꼬물 귀여운 행운의 상징",
            ment: "대부분의 시간을 바닥에서 지내는 마리모는 어느 날 물 위로 동동 떠오르곤 해요. 사람들은 이를 보며 마리모가 기분이 좋아서 물 위로 떠오른다고 하죠. 또한 마리모가 물에 뜨면 그 날엔 행운이 찾아온다는 속설이 있어요. 마리모는 수족관에서도 잘 지내기 때문에 물고기를 키우는 집이라면 강력 추천! 다양한 유리병과 함께라면 마리모는 색다른 인상을 심어주는 좋은 친구가 되어주기도 해요. ",
            imagePath: "https://resources.seeat-plant.com/마리모_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/마리모.png"
        },
        //벵갈고무나무 id : 14
        {
            name: "벵갈고무나무",
            feature: "기능:공기 정화 능력이 매우 우수한 식물이에요.",
            warning: "성장속도가 빠르기 때문에 자주 가지치기를 해 줘야 해요. 가지치기를 할 경우 독성이 있는 수액이 나와서 주의해야 해요.\n" +
                "관리 난이도가 높아요. 한 여름 철의 땡볕은 꼭 피하고, 기온이 10℃ 미만으로 내려가지 않도록 주의하고, 겨울철에도 어느 정도 통풍에 신경써줘야 해요.",
            description: "당신을 위한 영원한 행복",
            ment: "뱅갈고무나무는 영원한 행복이라는 멋진 꽃말을 가지고 있어요. 인도에서는 장수와 풍요의 상징으로 신성시되는 나무 중 하나랍니다. 다른 반려 식물들에 비해 조금 관리에 노력을 쏟아야하는 친구에요. 가지가 잘 뻗고 옆으로 퍼지며 자라는 친구라 가정에서 키우기 적합해요. 겉모습이 큼직큼직해 시원하고 멋진 느낌을 주는 뱅갈고무나무와 새로운 도전을 시작해보는 건 어떨까요? ",
            imagePath: "https://resources.seeat-plant.com/벵갈고무나무_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/벵갈고무나무.png"
        },
        //디시디아 id : 15
        {
            name: "디시디아",
            feature: "꽃:따뜻한 온도와 빛이 있으면 2~3mm의 시트러스 향 흰색 꽃을 피워요.\n" +
            "기능:착생식물로 흙이 필요없고 걸어두기 때문에 인테리어 효과가 있어요.",
            warning: "줄기를 자를 시 독성이 있는 수액이 나오지만, 독성 자체는 미미해요.\n" +
                "너무 습하면 곰팡이가 생길 수 있으니 통풍에 신경 써주세요",
            description: "남들과 다른 독특한 매력",
            ment: "디시디아는 아직 국내에는 많이 알려지지 않은 레어한 반려식물이에요. 디시디아는 다른 나무에 붙어 살며 양분을 흡수하는 착생식물이랍니다. 흙 대신 코코넛 껍질 등에 뿌리를 내린 채 자라요. 흙을 필요로 하지 않고 화분이 필요하지 않으며, 길게 자라기 때문에 인테리어 식물로 각광받고 있어요. 남들과 다른 나만의 멋진 식물을 찾고 있다면 디시디아와 친구가 되어보는 건 어떨까요? ",
            imagePath: "https://resources.seeat-plant.com/디시디아_full.png",
            thumbnailPath: "https://resources.seeat-plant.com/디시디아.png"
        },
    ]);
    await db.Tag.bulkCreate([
        {
            name: "💧💧💧", // id : 1
            type: "물주기",
            order: 2
        },
        {
            name: "💧", // id : 2
            type: "물주기",
            order: 2
        },
        {
            name: "#잎도촉촉히", // id : 3
            type: "물주기",
            order: 2
        },
        {
            name: "#작은크기", // id : 4
            type: "크기",
            order: 3
        },
        {
            name: "#보통크기", // id : 5
            type: "크기",
            order: 3
        },
        {
            name: "#큰", // id : 6
            type: "크기",
            order: 3
        },
        {
            name: "#꽃", // id : 7
            type: "꽃/열매",
            order: 4
        },
        {
            name: "#열매", // id : 8
            type: "꽃/열매",
            order: 4
        },
        {
            name: "#그늘에서", // id : 9
            type: "장소",
            order: 5
        },
        {
            name: "#환한곳에서", // id : 10
            type: "장소",
            order: 5
        },
        {
            name: "#쑥쑥자라요", // id : 11
            type: "속도",
            order: 6
        },
        {
            name: "#처음모습그대로", // id : 12
            type: "속도",
            order: 6
        },
        {
            name: "#적당히포근하게", // id : 13
            type: "온도",
            order: 7
        },
        {
            name: "#따뜻하게", // id : 14
            type: "온도",
            order: 7
        },
        {
            name: "⭐", // id : 15
            type: "난이도",
            order: 1
        },
        {
            name: "⭐⭐", // id : 16
            type: "난이도",
            order: 1
        },
        {
            name: "⭐⭐⭐", // id : 17
            type: "난이도",
            order: 1
        }
    ])

    await db.PlantTags.bulkCreate([
        // 몬스테라
        {
            PlantId: 1, //몬스테라
            TagId: 1,
            type: "물주기",
            imagePath: "https://resources.seeat-plant.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1.png",
            description: "실내 또는 실외의 그늘진 장소"
        },
        {
            PlantId: 1,
            TagId: 11,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1.png",
            description: "빠르게 자라는 편"
        },
        {
            PlantId: 1,
            TagId: 13,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%86%E1%85%A9%E1%86%AB%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%84%85%E1%85%A1.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%85%E1%85%A6%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A3%E1%84%8C%E1%85%A1.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%85%E1%85%A6%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A3%E1%84%8C%E1%85%A1.png",
            description: "직사광선을 피한 실내 혹은 베란다의 따뜻하고 밝은 곳"
        },
        {
            PlantId: 2,
            TagId: 12,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%85%E1%85%A6%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A3%E1%84%8C%E1%85%A1.png",
            description: "느리게 자라는 편"
        },
        {
            PlantId: 2,
            TagId: 14,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%85%E1%85%A6%E1%84%8F%E1%85%A1%E1%84%8B%E1%85%A3%E1%84%8C%E1%85%A1.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "흙이 완전히 마르면 적당히"
        },
        {
            PlantId: 3,
            TagId: 3,
            type: "물주기",
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "여름은 베란다 정원\n겨울은 햇빛이 잘드는 실내"
        },
        {
            PlantId: 3,
            TagId: 11,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "빠르게 자라는 편"
        },
        {
            PlantId: 3,
            TagId: 13,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "화분의 겉흙이 말랐을 때 듬뿍"
        },
        {
            PlantId: 4,
            TagId: 3,
            type: "물주기",
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "직사광선을 피한 실내의 창가, 베란다"
        },
        {
            PlantId: 4,
            TagId: 12,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
            description: "느리게 자라는 편"
        },
        {
            PlantId: 4,
            TagId: 13,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B5.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%89%E1%85%B3%E1%84%90%E1%85%AE%E1%84%8F%E1%85%B5.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%89%E1%85%B3%E1%84%90%E1%85%AE%E1%84%8F%E1%85%B5.png",
            description: "바람이 잘 드는 실내"
        },
        {
            PlantId: 5,
            TagId: 12,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%89%E1%85%B3%E1%84%90%E1%85%AE%E1%84%8F%E1%85%B5.png",
            description: "느리게 자라는 편"
        },
        {
            PlantId: 5,
            TagId: 14,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%89%E1%85%B3%E1%84%90%E1%85%AE%E1%84%8F%E1%85%B5.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "- 햇빛을 좋아하므로 어두운곳은 부적합해요\n- 반양지를 가장 추천합니다."
        },
        {
            PlantId: 6,
            TagId: 12,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "느리게 자라는 편"
        },
        {
            PlantId: 6,
            TagId: 14,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "직사광선을 피하고 통풍이 잘 되는 실내"
        },
        {
            PlantId: 7,
            TagId: 11,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "빨리 자라는 편"
        },
        {
            PlantId: 7,
            TagId: 14,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%87%E1%85%B3%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%83%E1%85%A9%E1%86%AB%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
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
            imagePath: "https://resources.seeat-plant.com/%E1%84%83%E1%85%A9%E1%86%AB%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "직사광선을 피한 실내의 창가, 베란다"
        },
        {
            PlantId: 8,
            TagId: 11,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%83%E1%85%A9%E1%86%AB%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "빨리 자라는 편"
        },
        {
            PlantId: 8,
            TagId: 14,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%83%E1%85%A9%E1%86%AB%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "18~24°C"
        },
         //스파티필름
        {
            PlantId: 9,
            TagId: 15,
            type: "난이도"
        },
        {
            PlantId: 9,
            TagId: 2,
            type: "물주기",
            imagePath: "https://resources.seeat-plant.com/%E1%84%89%E1%85%B3%E1%84%91%E1%85%A1%E1%84%90%E1%85%B5%E1%84%91%E1%85%B5%E1%86%AF%E1%84%85%E1%85%B3%E1%86%B7.png",
            description: "- 흙이 건조해졌을 때 적당히\n"+"- 분무기로 잎에 물을 뿌려주면 좋음"
        },
        {
            PlantId: 9,
            TagId: 5,
            type: "크기"
        },
        {
            PlantId: 9,
            TagId: 7,
            type: "꽃/열매"
        },
        {
            PlantId: 9,
            TagId: 9,
            type: "장소",
            imagePath: "https://resources.seeat-plant.com/%E1%84%89%E1%85%B3%E1%84%91%E1%85%A1%E1%84%90%E1%85%B5%E1%84%91%E1%85%B5%E1%86%AF%E1%84%85%E1%85%B3%E1%86%B7.png",
            description: "간접 태양광이 드는 실내 따뜻한 방"
        },
        {
            PlantId: 9,
            TagId: 11,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%89%E1%85%B3%E1%84%91%E1%85%A1%E1%84%90%E1%85%B5%E1%84%91%E1%85%B5%E1%86%AF%E1%84%85%E1%85%B3%E1%86%B7.png",
            description: "빨리 자라는 편"
        },
        {
            PlantId: 9,
            TagId: 14,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%89%E1%85%B3%E1%84%91%E1%85%A1%E1%84%90%E1%85%B5%E1%84%91%E1%85%B5%E1%86%AF%E1%84%85%E1%85%B3%E1%86%B7.png",
            description: "18~24°C"
        },
        //필레아페페
        {
            PlantId: 10,
            TagId: 15,
            type: "난이도"
        },
        {
            PlantId: 10,
            TagId: 1,
            type: "물주기",
            imagePath: "https://resources.seeat-plant.com/%E1%84%91%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A6%E1%84%8B%E1%85%A1%E1%84%91%E1%85%A6%E1%84%91%E1%85%A6.png",
            description: "- 흙이 마를 때 급수\n"+"물을 좋아하기 때문에 수경재배도 가능"
        },
        {
            PlantId: 10,
            TagId: 4,
            type: "크기"
        },
        {
            PlantId: 10,
            TagId: 9,
            type: "장소",
            imagePath: "https://resources.seeat-plant.com/%E1%84%91%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A6%E1%84%8B%E1%85%A1%E1%84%91%E1%85%A6%E1%84%91%E1%85%A6.png",
            description: "실내에서 재배"
        },
        {
            PlantId: 10,
            TagId: 11,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%91%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A6%E1%84%8B%E1%85%A1%E1%84%91%E1%85%A6%E1%84%91%E1%85%A6.png",
            description: "빨리 자라는 편"
        },
        {
            PlantId: 10,
            TagId: 13,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%91%E1%85%B5%E1%86%AF%E1%84%85%E1%85%A6%E1%84%8B%E1%85%A1%E1%84%91%E1%85%A6%E1%84%91%E1%85%A6.png",
            description: "15°C내외"
        },
        //스킨답서스
        {
            PlantId: 11,
            TagId: 15,
            type: "난이도"
        },
        {
            PlantId: 11,
            TagId: 2,
            type: "물주기",
            imagePath: "https://resources.seeat-plant.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B5%E1%86%AB%E1%84%83%E1%85%A1%E1%86%B8%E1%84%89%E1%85%A5%E1%84%89%E1%85%B3.png",
            description: "흙이 마를 때 급수"
        },
        {
            PlantId: 11,
            TagId: 5,
            type: "크기"
        },
        {
            PlantId: 11,
            TagId: 6,
            type: "크기"
        },
        {
            PlantId: 11,
            TagId: 9,
            type: "장소",
            imagePath: "https://resources.seeat-plant.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B5%E1%86%AB%E1%84%83%E1%85%A1%E1%86%B8%E1%84%89%E1%85%A5%E1%84%89%E1%85%B3.png",
            description: "햇빛이 잘 들지 않는 방이나 거실에서도 키울 수 있는 식물이에요."
        },
        {
            PlantId: 11,
            TagId: 12,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B5%E1%86%AB%E1%84%83%E1%85%A1%E1%86%B8%E1%84%89%E1%85%A5%E1%84%89%E1%85%B3.png",
            description: "느리게 자라는 편"
        },
        {
            PlantId: 11,
            TagId: 14,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B5%E1%86%AB%E1%84%83%E1%85%A1%E1%86%B8%E1%84%89%E1%85%A5%E1%84%89%E1%85%B3.png",
            description: "18~24°C내외"
        },
        //트리안
        {
            PlantId: 12,
            TagId: 15,
            type: "난이도"
        },
        {
            PlantId: 12,
            TagId: 1,
            type: "물주기",
            imagePath: "https://resources.seeat-plant.com/%E1%84%90%E1%85%B3%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%AB.png",
            description: "흙이 마를 때 충분히 많이"
        },
        {
            PlantId: 12,
            TagId: 4,
            type: "크기"
        },
        {
            PlantId: 12,
            TagId: 5,
            type: "크기"
        },
        {
            PlantId: 12,
            TagId: 10,
            type: "장소",
            imagePath: "https://resources.seeat-plant.com/%E1%84%90%E1%85%B3%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%AB.png",
            description: "통풍이 잘 되고 햇빛이 잘 드는 실내"
        },
        {
            PlantId: 12,
            TagId: 11,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%90%E1%85%B3%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%AB.png",
            description: "빠르게 자라는 편"
        },
        {
            PlantId: 12,
            TagId: 14,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%90%E1%85%B3%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A1%E1%86%AB.png",
            description: "16~30°C내외"
        },
        //마리모
        {
            PlantId: 13,
            TagId: 15,
            type: "난이도"
        },
        {
            PlantId: 13,
            TagId: 1,
            type: "물주기",
            imagePath: "https://resources.seeat-plant.com/%E1%84%86%E1%85%A1%E1%84%85%E1%85%B5%E1%84%86%E1%85%A9.png",
            description: "물속에 넣어서 키워요"
        },
        {
            PlantId: 13,
            TagId: 4,
            type: "크기"
        },
        {
            PlantId: 13,
            TagId: 9,
            type: "장소",
            imagePath: "https://resources.seeat-plant.com/%E1%84%86%E1%85%A1%E1%84%85%E1%85%B5%E1%84%86%E1%85%A9.png",
            description: "그늘에서"
        },
        {
            PlantId: 13,
            TagId: 12,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%86%E1%85%A1%E1%84%85%E1%85%B5%E1%84%86%E1%85%A9.png",
            description: "매우 느리게 자라는 편"
        },
        {
            PlantId: 13,
            TagId: 13,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%86%E1%85%A1%E1%84%85%E1%85%B5%E1%84%86%E1%85%A9.png",
            description: "15~20°C내외"
        },
        //벵갈고무나무
        {
            PlantId: 14,
            TagId: 17,
            type: "난이도"
        },
        {
            PlantId: 14,
            TagId: 1,
            type: "물주기",
            imagePath: "https://resources.seeat-plant.com/%E1%84%87%E1%85%A6%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%86%E1%85%AE%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "- 물은 흠뻑 젖을 만큼 주고, 자주 줄 필요는 없음\n"+"- 10~15일 주기"
        },
        {
            PlantId: 14,
            TagId: 6,
            type: "크기"
        },
        {
            PlantId: 14,
            TagId: 10,
            type: "장소",
            imagePath: "https://resources.seeat-plant.com/%E1%84%87%E1%85%A6%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%86%E1%85%AE%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "통풍이 잘 되는 햇빛이 들어오는 거실 (일광이 적당해야 함)"
        },
        {
            PlantId: 14,
            TagId: 11,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%87%E1%85%A6%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%86%E1%85%AE%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "빠르게 자라는 편"
        },
        {
            PlantId: 14,
            TagId: 14,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%87%E1%85%A6%E1%86%BC%E1%84%80%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%86%E1%85%AE%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE.png",
            description: "21~25°C내외"
        },
        //디시디아
        {
            PlantId: 15,
            TagId: 15,
            type: "난이도"
        },
        {
            PlantId: 15,
            TagId: 2,
            type: "물주기",
            imagePath: "https://resources.seeat-plant.com/%E1%84%83%E1%85%B5%E1%84%89%E1%85%B5%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A1.png",
            description: "흙이 마르면 물을 주고 자주 분무"
        },
        {
            PlantId: 15,
            TagId: 3,
            type: "물주기",
            imagePath: "https://resources.seeat-plant.com/%E1%84%83%E1%85%B5%E1%84%89%E1%85%B5%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A1.png",
            description: "흙이 마르면 물을 주고 자주 분무"
        },
        {
            PlantId: 15,
            TagId: 4,
            type: "크기"
        },
        {
            PlantId: 15,
            TagId: 7,
            type: "꽃/열매"
        },
        {
            PlantId: 15,
            TagId: 9,
            type: "장소",
            imagePath: "https://resources.seeat-plant.com/%E1%84%83%E1%85%B5%E1%84%89%E1%85%B5%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A1.png",
            description: "직사광선을 피하고, 간접광에 둘 것"
        },
        {
            PlantId: 15,
            TagId: 12,
            type: "속도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%83%E1%85%B5%E1%84%89%E1%85%B5%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A1.png",
            description: "느리게 자라는 편"
        },
        {
            PlantId: 15,
            TagId: 14,
            type: "온도",
            imagePath: "https://resources.seeat-plant.com/%E1%84%83%E1%85%B5%E1%84%89%E1%85%B5%E1%84%83%E1%85%B5%E1%84%8B%E1%85%A1.png",
            description: "18~28°C내외"
        },
    ]);


    console.log("done");
}

reset();