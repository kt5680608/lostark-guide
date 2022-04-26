import { atom } from "recoil";
export const islandHeart = [
    {
        name: "외로운 섬 오페르",
        type: "월드퀘스트",
        quest: "없음",
        detail: "점핑 캐릭터는 이미 소유하고 있습니다.",
        color: "pink",
    },
    {
        name: "카마인의 주둔지",
        type: "월드퀘스트",
        quest: "없음",
        detail: "점핑 캐릭터는 이미 소유하고 있습니다.",
        color: "pink",
    },
    {
        name: "안개의 섬",
        type: "퀘스트",
        quest: "없음",
        detail:
            "필드 몬스터(큰 거미, 새, 나무)를 잡아서 쪽지 6개를 획득 후 퀘스트를 진행할 수 있습니다.",
        color: "purple",
    },
    { name: "비키니 아일랜드", type: "퀘스트", quest: "꿈이 가득한 섬으로" },
    {
        name: "휴양지 그라비스",
        type: "퀘스트",
        quest: "화려한 밤을 즐겨요",
        detail:
            "비키니 아일랜드 퀘스트 이후 연계 퀘스트 완료시 획득할 수 있습니다.",
        color: "purple",
    },
    {
        name: "왜곡된 차원의 섬",
        type: "퀘스트",
        quest: "없음",
        detail: "퀘스트 진행 중 큐브를 진행해야 됩니다.",
        color: "purple",
    },
    {
        name: "포모나 섬",
        type: "퀘스트",
        quest: "없음",
        detail: "미술품 30번을 얻을 수 있습니다.",
        color: "purple",
    },
    {
        name: "고요의 섬",
        type: "퀘스트",
        quest: "없음",
        detail:
            "퀘스트 진행이 오래걸리나 완료 보상에 스킬포인트 물약이 있습니다.",
        color: "purple",
    },
    {
        name: "거북 섬",
        type: "퀘스트",
        quest: "없음",
        detail: "부서진 빙하의 섬,별빛 등대 섬과 함께 진행하세요.",
        color: "purple",
    },
    {
        name: "부서진 빙하의 섬",
        type: "퀘스트",
        quest: "괜찮아 지금 당장 떠나",
        color: "purple",
    },
    { name: "별빛 등대 섬", type: "퀘스트", quest: "없음", color: "purple" },
    { name: "포르투나 섬", type: "랜덤", quest: "없음", color: "orange" },
    { name: "에스텔라", type: "랜덤", quest: "없음", color: "orange" },
    { name: "황금 물결 섬", type: "랜덤", quest: "없음", color: "orange" },
    { name: "무법자의 섬", type: "랜덤", quest: "없음", color: "orange" },
    { name: "슬라임 아일랜드 ", type: "랜덤", quest: "없음", color: "orange" },
    { name: "그림자의 섬", type: "타워", quest: "없음", color: "blue" },
    { name: "거대 버섯 섬", type: "생활", quest: "없음", color: "green" },
    { name: "세월의 섬", type: "생활", quest: "없음", color: "green" },
];

export const giantHeart = [
    {
        name: "첫 번째 거인의 심장",
        type: "퀘스트",
        method: "토토이크: 흩어진 다섯 형제",
    },
    {
        name: "네 번째 거인의 심장",
        type: "필드 보스",
        method: "머무른 시간의 호수 [타르실라] 처치 시 획득",
    },
    {
        name: "다섯 번째 거인의 심장",
        type: "물물교환",
        method: "검은이빨 주둔지 [항해사 로사]에게 교환",
        detail: "기에나 주화 3300개 필요",
    },
    {
        name: "여섯 번째 거인의 심장",
        type: "물물교환",
        method: "해적 마을 아틀라스 [암거래 상인]에게 교환",
        detail: "해적 주화 3300개 필요",
    },
    {
        name: "일곱 번째 거인의 심장",
        type: "에포나",
        method: "에포나 퀘스트 [두키왕을 잡아라] 평판 3단계 보상",
        detail:
            "30일을 진행해야 하며 호감도작이 가능하신 분들은 호감도 거인의 심장으로 대체 가능합니다.",
    },
    {
        name: "여덟 번째 거인의 심장",
        type: "물물교환",
        method: "자유의 섬 [검은이빨]에게 교환",
        detail: "기에나 주화 4000개",
    },
    {
        name: "열 번째 거인의 심장",
        type: "타워",
        method: "[타워 오브 쉐도우 35층] 보상",
    },
    {
        name: "열한 번째 거인의 심장",
        type: "에포나",
        method: "에포나 퀘스트 [땅 속의 불량배] 평판 3단계 보상",
        detail:
            "푸른 바람의 섬에서 15일을 진행해야 합니다. 호감도작이 가능하신 분들은 호감도 거인의 심장으로 대체 가능합니다.",
    },
    {
        name: "열두 번째 거인의 심장",
        type: "퀘스트",
        method: "[그림자 달 시장 섬] 섬의 마음 획득 시 거인의 심장 함께 획득",
        detail:
            "그림자 달 시장 섬의 [마음을 쥔 정령] 완료시 획득 가능합니다. 꽤 긴 시간이 걸리나 섬의 마음과 거인의 심장을 한번에 획득할 수 있습니다.",
    },
    {
        name: "열세 번째 거인의 심장",
        type: "타워",
        method: "[타워 오브 페이트 35층] 보상",
    },
];

export const levelGuide = [
    {
        setting: {
            name: "각인 세팅",
            carry: "원한 3 / 직업 각인 3 / 기타 유효 각인 3 ",
            sup: "각성 3 / 직업 각인 3 / 기타 유효 각인 3 ",
        },
        settings: [
            {
                id: 1370,
                name: "각인 세팅",
                carry: "원한 3 / 직업 각인 3 / 기타 유효 각인 3 이상",
                sup: "각성 3 / 직업 각인 3 / 기타 유효 각인 3 이상 ",
            },
            {
                id: 1415,
                name: "각인 세팅",
                carry:
                    "원한 3 / 직업 각인 3 / 기타 유효 각인 3 / 기타 유효 각인 3 이상",
                sup:
                    "각성 3 / 직업 각인 3 / 기타 유효 각인 3 / 기타 유효 각인 3 이상 ",
            },
            {
                id: 1415,
                name: "악세 및 보석 세팅",
                grade: "유물",
                equipSettings: "등급 이상의 악세사리 / 어빌리티 스톤",
                jewelry: "5레벨 이상의 보석",
                jewelrySettings: "모든 보석 슬롯에",
            },
            {
                id: 1445,
                name: "세팅",
                description:
                    "1445레벨에서는 세팅의 변화가 없습니다. 기존의 세팅을 유지해주세요.",
                description_detail:
                    "1445레벨은 1475레벨 달성에 맞춰 각인을 33333으로 변경해야하기 때문에 골드를 모으거나 필요한 전설각인서를 준비해나가야 합니다.",
            },
            {
                id: 1445,
                name: "부가 스펙업",
                description:
                    "1445레벨에서 기존의 세팅을 유지하며 보석, 카드, 스킬포인트, 스킬 룬, 트라이포드를 천천히 올려가시기 바랍니다. ",
            },
        ],
        available: [
            {
                name: 1370,
                availableContent: "아르고스 1페이즈",
                type: "[어비스 레이드]",
            },
            {
                name: 1385,
                availableContent: "벨가누스",
                type: "[가디언 토벌]",
            },
            {
                name: 1385,
                availableContent: "한밤중의 서커스 리허설(쿠크세이튼 리허설)",
                type: "[군단장 레이드]",
            },
            {
                name: 1385,
                availableContent: "아르고스 2페이즈",
                type: "[어비스 레이드]",
            },
            {
                name: 1400,
                availableContent: "아르고스 3페이즈",
                type: "[어비스 레이드]",
            },
            {
                name: 1415,
                availableContent: "데스칼루다",
                type: "[가디언 토벌]",
            },
            {
                name: 1415,
                availableContent: "발탄 노말",
                type: "[군단장 레이드]",
            },
            {
                name: 1430,
                availableContent: "비아키스 노말",
                type: "[군단장 레이드]",
            },
            {
                name: 1430,
                availableContent: "아브렐슈드 데자뷰",
                type: "[군단장 레이드]",
            },
            {
                name: 1445,
                availableContent: "발탄 하드",
                type: "[군단장 레이드]",
            },
            {
                name: 1460,
                availableContent: "쿤겔라니움",
                type: "[가디언 토벌]",
            },
            {
                name: 1460,
                availableContent: "비아키스 하드",
                type: "[군단장 레이드]",
            },
            {
                name: 1475,
                availableContent: "[군단장 레이드] 쿠크세이튼 노말",
            },
            {
                name: 1490,
                availableContent: "[가디언 토벌] 칼엘리고스",
            },
            {
                name: 1490,
                availableContent: "[군단장 레이드] 아브렐슈드 1, 2관문",
            },
            {
                name: 1500,
                availableContent: "[군단장 레이드] 아브렐슈드 1, 2관문",
            },
            {
                name: 1520,
                availableContent: "[군단장 레이드] 아브렐슈드 1, 2관문",
            },
        ],
        equip: [
            {
                id: 1370,
                name: "장비",
                description: [
                    {
                        description_detail:
                            "1370레벨부터는 전설 등급의 장비가 필요해집니다.",
                        color: "orange",
                    },
                    {
                        description_detail:
                            "[어비스 레이드] 아르고스를 클리어하면 '전설 등급 장비'를 제작할 수 있는 재료를 획득합니다.",
                    },
                    {
                        description_detail:
                            "[어비스 레이드] 아르고스 재료로 만들 수 있는 장비는 선택의 장비, 예정된 결단의 장비, 냉혹한 맹세의 장비 총 3가지입니다. ",
                    },
                    {
                        description_detail:
                            "전설 장비의 세트효과는 2세트, 5세트 단위로 활성화되기 때문에 보편적으로 [예정된 결단의 장비] 2부위와 [선택의 장비] 4부위를 장착하여 2세트 효과 2개를 활성화합니다.",
                    },
                ],
            },
            {
                id: 1415,
                name: "장비",
                description: [
                    {
                        description_detail:
                            "1415레벨 부터는 전설 등급의 군단장 장비를 제작할 수 있습니다.",
                        color: "orange",
                    },
                    {
                        description_detail:
                            "발탄 노말 획득 보상인 [마수의 힘줄]을 이용하여 무기, 머리, 상의, 하의를 제작할 수 있습니다.",
                        material: "[마수의 힘줄]",
                    },
                    {
                        description_detail:
                            "비아키스 노말 획득 보상인 [욕망의 송곳니]를 이용하여 어깨, 장갑을 제작할 수 있습니다. ",
                        material: "[욕망의 송곳니]",
                    },
                    {
                        description_detail:
                            "발탄 노말과 비아키스 노말에서 소량 얻을 수 있습니다. 이 재료들은 1445레벨에 [군단장 유물 장비]를 만드는데 필요한 재료이니 잘 모아두시기 바랍니다.",
                        material: "[마수의 뼈], [욕망의 날개]",
                    },
                ],
            },
            {
                id: 1445,
                name: "장비",
                description: [
                    {
                        description_detail:
                            "1445레벨 부터는 유물 등급의 군단장 장비를 제작할 수 있습니다. 자신이 필요로 하는 세트 효과를 확인 후 장비를 제작해주세요.",
                        color: "orange",
                    },
                    {
                        description_detail:
                            "발탄 하드 획득 보상인 [마수의 뼈]와 비아키스 하드 획득 보상인 [욕망의 날개]를 이용하여 유물 등급의 군단장 장비를 제작할 수 있습니다.",
                        material: "[마수의 뼈], [욕망의 날개]",
                    },
                    {
                        description_detail:
                            "직업, 각인, 플레이 스타일 등에 따라 선택해야 될 군단장 유물 장비가 다르기 때문에 유튜브, 커뮤니티 등에서 많이 찾아보고 결정하시는 것을 추천드립니다",
                        material: "[장비 세트 선택]",
                    },
                ],
            },
            { id: 1470 },
        ],
        equipNpc: [
            { id: 1370, name: "코스티아", type: "[어비스 장비 제작]" },
            { id: 1415, name: "크리에케", type: "[군단장 장비 제작]" },
            { id: 1372, name: "코스티아", type: "[어비스 장비 제작]" },
            { id: 1373, name: "코스티아", type: "[어비스 장비 제작]" },
        ],
        tip: [
            {
                id: 1370,
                description:
                    "1370레벨 달성 후 아르고스를 직접 클리어하지 않고 상위 레벨 유저들이 운영하는 아르고스 버스를 타게 되면 최초 클리어 보상으로 2배의 보상을 받을 수 있습니다.",
            },
            {
                id: 1370,
                description:
                    "이를 이용해 예정 장비 2부위 또는 예정 무기 1개를 직접 제작할 수 있게 됩니다. 버스를 타도 골드 이득을 얻을 수 있기 때문에 추천합니다.",
            },
            {
                id: 1370,
                description:
                    "골드보다 시간을 우선적으로 고려하는 유저라면 아르고스 장비를 직접 제작하지 않고 경매장을 통해 구입하는 방법을 추천합니다.",
            },
            {
                id: 1415,
                description:
                    "골드를 중요시 여기는 유저분들 혹은 하이퍼 익스프레스 유저분들은 1415레벨의 전설 등급 군단장 장비를 만들지 않고 1445레벨의 유물 등급 군단장 장비로 넘어가셔도 무방합니다",
            },
            {
                id: 1415,
                description:
                    "바로 33333 세팅을 맞추는 것도 상관 없습니다. 하지만 많은 골드를 소모하기 때문에 신중히 결정하세요. 3333+ 세팅으로 미리 해당 각인의 플레이 스타일을 즐겨본 후 유물 장비 제작시에 33333 세팅을 맞추시는 것을 강력히 추천합니다.",
            },
            {
                id: 1445,
                description:
                    "1475레벨을 달성하게 되면 [군단장 레이드] 쿠크세이튼 노말을 입장할 수 있습니다. 이 때 부터는 33333 각인이 필수로 요구되니 1445레벨부터 준비하여 많은 골드를 모아야합니다.",
            },
        ],
    },
];

export const NaesilOthers = [
    {
        name: "파푸니카 히든퀘스트",
        reward: "스킬포인트 물약",
        detail:
            "퀘스트는 1일 1회 진행이 가능하며 총 5일이 소요됩니다. 모든 퀘스트는 파푸니카 대륙 안에서 진행됩니다.",
        dateQuest: [
            {
                name: "레터스 투 파푸니카",
                day: 1,
                mapName: "니아마을",
                location:
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnkdEm%2Fbtri5HVBe4y%2FIDw3YvcWcf8Bh4OwGzakh1%2Fimg.png",
            },
            {
                name: "그 사랑 결말",
                day: 2,
                mapName: "니아마을",
                npc: "바넷사 할머니",
                location:
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpBHil%2Fbtri0ax0X3n%2FHuLH8dBkJmTruHKYsrZIp0%2Fimg.png",
            },
            {
                name: "오, 그대의사랑",
                day: 3,
                mapName: "니아마을",
                npc: "바넷사 할머니",
                location:
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpBHil%2Fbtri0ax0X3n%2FHuLH8dBkJmTruHKYsrZIp0%2Fimg.png",
            },
            {
                name: "빛나는 그대의 이름",
                day: 4,
                mapName: "별모래 해변",
                location:
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FswCdX%2Fbtri4Xkk6rD%2FfzZeyeMgscnhIfgexyQrck%2Fimg.jpg",
            },
            {
                name: "영원한 사랑",
                day: 5,
                mapName: "니아마을",
                npc: "집배원 앨리스",
                location:
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbSqu2y%2Fbtri1coRfnA%2FQoGSkuTNZ5i7LX8qQiKrwK%2Fimg.jpg",
            },
        ],
    },
];

export const Youtubers = [
    {
        name: "죠니월드",
        subscribers: "19.2만",
        content: "뉴비 가이드",
        thumbnail:
            "https://file.namu.moe/file/c9b16971ea7d4afa4237650de74081d756d89e13e15af8ca967ef9c58a6e2f5c",
        url:
            "https://www.youtube.com/c/%EC%A3%A0%EB%8B%88%EC%9B%94%EB%93%9C/featured",
        page: 1,
    },
    {
        name: "게임하는 인기",
        subscribers: "???",
        content: "전 직업 소개",
        thumbnail:
            "https://yt3.ggpht.com/Sdjs9S5LT1skQl_DD7kmoTmQtD7oCikUZNzwpeoYoFLl38o9KixhYMmXkoyF29An_FVQAMY4oA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/channel/UCawK5EIfr66Z7fjAlZgfB2g",
        page: 1,
    },
    {
        name: "에디니",
        subscribers: "2.53만",
        content: "커스터마이징",
        thumbnail:
            "https://yt3.ggpht.com/O3kVhGT54WrHwzpqZtiVBTLppW83AYPiDGS4SFc_jLmRgc2J3mlDaw6btZxkhDK_p6moxIzkdQ=s176-c-k-c0x00ffffff-no-rj-mo",
        url: "https://www.youtube.com/c/%EC%97%90%EB%94%94%EB%8B%88",
        page: 1,
    },
    {
        name: "갓냥이",
        subscribers: "1.87천",
        thumbnail:
            "https://yt3.ggpht.com/jFfyBLqbIqAwVZg4htrv_ApKxX0jMo2eyGyLTuLc-wRsEwgVUjs57fvHBgcD6h6Q8luvzYLJuTU=s176-c-k-c0x00ffffff-no-rj",
        content: "소식 정리",
        url: "https://www.youtube.com/c/%EA%B0%93%EB%83%A5%EC%9D%B4/videos",
        page: 1,
    },
    {
        name: "삼식",
        subscribers: "63.9만",
        content: "게임 플레이",
        thumbnail:
            "https://yt3.ggpht.com/bSxVGafwyBPpfdDpwPRlc8VFh0F6N4yPgqHt5Ry-qFzz2Bsa7UC6zjPB64fiW_6RV13P5AnItg=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/user/3castle1",
        page: 2,
    },
    {
        name: "다주",
        subscribers: "37만",
        content: "게임 플레이",
        thumbnail:
            "https://yt3.ggpht.com/ytc/AKedOLR1PRWi2K0u2VV85QZv6YQTr3U9mVo2oK6rrvCOdA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/c/ddddaju",
        page: 2,
    },
    {
        name: "노돌리",
        subscribers: "34.6만",
        content: "게임 플레이",
        thumbnail:
            "https://yt3.ggpht.com/ytc/AKedOLRIVaQ9vKUl_f7lyjiwSSA9fA4brbB4JiFxuNABtg=s176-c-k-c0x00ffffff-no-rj",

        url: "https://www.youtube.com/user/nodooly720",
        page: 2,
    },
    {
        name: "동수칸TV",
        subscribers: "29.5만",
        content: "게임 플레이",
        thumbnail:
            "https://yt3.ggpht.com/ytc/AKedOLRRAO08VDsKlrCdve_eDIPnlwp_S2qI5oM1tyLPQg=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/c/ukitivi",
        page: 2,
    },
    {
        name: "성대의 게임방송",
        subscribers: "4.57만",
        content: "게임 플레이",
        thumbnail:
            "https://yt3.ggpht.com/ytc/AKedOLS35wW2eogDKSCHJIvwlI_MoDm8Pzf14_hgsew9Xg=s176-c-k-c0x00ffffff-no-rj",
        url:
            "https://www.youtube.com/c/%EC%84%B1%EB%8C%80%EC%9D%98%EA%B2%8C%EC%9E%84%EB%B0%A9%EC%86%A1",
        page: 3,
    },

    {
        name: "박서림",
        subscribers: "2.96만",
        content: "게임 플레이",
        thumbnail:
            "https://yt3.ggpht.com/th-mNTJAfl2-8SEK1xz2arIW3dpsOdCI8bHD_dgg4TErfUJn5da3yMYpoQUui-NRkWOsgPW_K4A=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/c/%EB%B0%95%EC%84%9C%EB%A6%BC",
        page: 3,
    },
    {
        name: "로마러",
        subscribers: "2.57만",
        content: "게임 플레이",
        thumbnail:
            "https://yt3.ggpht.com/ytc/AKedOLQ0tziUQ6o2GGb95_iAEPaIkppqSOIOI5QTfLwSSA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/channel/UC9nWoDbRAl3-fvreBNeStKQ/videos",
        page: 3,
    },
    {
        name: "오소리",
        subscribers: "2.24만",
        content: "게임 플레이",
        thumbnail:
            "https://yt3.ggpht.com/UUH3zD-vKUD_HveZZ2qyo0s9NYxHwgjJukVL9K_pvA2hDEwJjnYT0ONCLTc5ku_wuks6SVyixA=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/c/%EC%98%A4%EC%86%8C%EB%A6%AC1023",
        page: 3,
    },
    {
        name: "베르앤도",
        subscribers: "1.68만",
        content: "게임 플레이",
        thumbnail:
            "https://yt3.ggpht.com/cAvUHr4vqy8fcXdquU9yrgNTJtpX4e90Fg_pgEgZS2PbhX1IXRESiv0W12cbZc76aN5EfL8bjMc=s176-c-k-c0x00ffffff-no-rj-mo",
        url: "https://www.youtube.com/channel/UCxDFqurIfjs62D-B4ExVwFw",
        page: 4,
    },
    {
        name: "유키냥",
        subscribers: "1.3만",
        content: "게임 플레이",
        thumbnail:
            "https://yt3.ggpht.com/ytc/AKedOLRPM3_v3oTVaU9-ZkIQCh5pdnGxrPtgkv0xfl-D=s176-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/channel/UCbUQ_T5EI16zVNXkEpKG7iQ",
        page: 4,
    },
    {
        name: "뇨롱이",
        subscribers: "1.09만",
        content: "게임 플레이",
        thumbnail:
            "https://yt3.ggpht.com/X4R0Mq9VZ52uhMFUSM5hFEMKut7qEwO-cuS-8Jg9sVoLWF6jzFLiNlVQwE2JNjuAw5qIA69tipQ=s176-c-k-c0x00ffffff-no-rj-mo",
        url: "https://www.youtube.com/channel/UCpnI4xHoIR2RJToBN89aaFw",
        page: 4,
    },
    {
        name: "디트오함마TV",
        subscribers: "7.2천",
        content: "게임 플레이",
        thumbnail:
            "https://yt3.ggpht.com/ytc/AKedOLQHcqMF9UABk5fb7DJPXvrJFJn6a17U9rEhzYBAyQ=s176-c-k-c0x00ffffff-no-rj-mo",
        url: "https://www.youtube.com/channel/UC23t1yd0XcNfQS_PYbyA0Cg",
        page: 4,
    },
];

export const Term = [
    {
        name: "bus",
        termDic: [
            {
                termName: "전각 미참",
                description:
                    "레이드 종료 후 진행되는 경매에서 '전설 각인서'가 나올 시 경매에 참여하지 않는 것",
            },
            {
                termName: "미참",
                description: "레이드 종료 후 어떠한 경매에도 참여하지 않는 것",
            },
            {
                termName: "독식",
                description:
                    "골드를 더 많이 지불하고 레이드 종료 후 경매에 나오는 아이템을 모두 가져가는 것",
            },
        ],
    },
    {
        name: "spec",
        termDic: [
            {
                termName: "3333+",
                description:
                    "3레벨 활성화 된 각인이 4개 이상임을 뜻함. 33331+, 33333+ 등도 각각 활성화 된 각인이 3레벨 4개, 1레벨 1개, 33333+의 경우 3레벨 활성화 각인이 5개를 뜻함.",
            },
            {
                termName: "매너 보석 / 보석",
                description:
                    "보통 보석 칸에 11개의 보석 모두 5LV 이상이라면 통과할 수 있다",
            },
            {
                termName: "트포",
                description: "트라이포드를 줄여서 말하는 것.",
            },
            {
                termName: "원정대",
                description:
                    "원정대 레벨을 뜻하며, 통상적으로 원정대 레벨이 높을수록 숙련도가 높다는 것으로 인지함. 빠른 클리어를 목표로 하는 숙제팟 등에서 숙련도 검증을 위해 이용하기도 함. ",
            },
            {
                termName: "유물 6셋",
                description:
                    "장비칸의 모든 장비가 유물 세트로 맞춰져 있음을 뜻함.",
            },
            {
                termName: "딜찍",
                description:
                    "패턴을 보지 않고 높은 딜로 레이드를 끝내는 것. 보통 뒤에 60+(템 레벨) 혹은 유물6셋 등 조건이 붙음.",
            },
        ],
    },
    {
        name: "item",
        termDic: [
            {
                termName: "방장 신파 나머지 회파",
                description:
                    "방장은 신호탄과 파괴폭탄, 나머지는 회오리 수류탄과 파괴폭탄(여러가지 응용버전이 있음).",
            },
            {
                termName: "1신호 / 1신",
                description:
                    "보통 가디언 토벌 레이드 입장시 파티 번호 1번인 사람이 신호탄을 던지는 문화가 있음.",
            },
        ],
    },
    {
        name: "jobs",
        termDic: [
            {
                termName: "랏폿",
                description:
                    "딜러 직업군은 모집이 완료되었으며,서포터 직업군만 필요로 함.",
            },
            {
                termName: "랏딜",
                description:
                    "서포터 직업군은 모집이 완료되었으며, 딜러 직업군만 필요로 함",
            },
            {
                termName: "곱삼 / 곱3",
                description:
                    "특정 레이드의 기믹에서 자신의 파티번호에 3을 곱하여 자리를 정함.(본인이 2번이면 6시, 이런식으로 사용됨)",
            },
        ],
    },
    {
        name: "proficiency",
        termDic: [
            {
                termName: "초행, 트라이",
                description: "처음 레이드를 도전해보는 파티(공략 영상 숙지).",
            },
            {
                termName: "학원",
                description:
                    "숙련자 1명 또는 여러명이 초행자과 함께 레이드를 돌며 알려주는 파티.",
            },
            {
                termName: "클경",
                description:
                    "레이드 클리어 경험이 있는 파티(보통 트라이 윗단계로 분류).",
            },
            {
                termName: "반숙",
                description: "어느정도 공략 숙지가 된 파티.",
            },
            {
                termName: "숙련, 빡숙",
                description:
                    "공략 숙지가 완벽하게 되어 빠른 시간 내에 클리어가 가능한 파티.",
            },
            {
                termName: "숙제",
                description:
                    "고인물들이 부캐릭터로 레이드를 가는 파티. 보통 원정대 레벨을 보고 구인을 함.",
            },
        ],
    },
    {
        name: "others",
        termDic: [
            {
                termName: "곱삼 / 곱3",
                description:
                    "특정 레이드의 기믹에서 자신의 파티번호에 3을 곱하여 자리를 정함.(본인이 2번이면 6시, 이런식으로 사용됨)",
            },
            {
                termName: "4종, 2수, 3수 등",
                description:
                    "해당 컨텐츠를 몇번 클리어 하는지를 뜻함('수'는 같은 레이드를 도는 것, '종'은 해당 컨텐츠에 속하는 여러 레이드를 연속적으로 도는 것)",
            },
            {
                termName: "1신호 / 1신",
                description:
                    "보통 가디언 토벌 레이드 입장시 파티 번호 1번인 사람이 신호탄을 던지는 문화가 있음.",
            },
            {
                termName: "곱삼 / 곱3",
                description:
                    "특정 레이드의 기믹에서 자신의 파티번호에 3을 곱하여 자리를 정함.(본인이 2번이면 6시, 이런식으로 사용됨)",
            },
            {
                termName: "디코 / 통디",
                description:
                    "음성 브리핑이 필요할 때 디스코드라는 음성 채팅 프로그램을 이용함. 보통 '로스트아크 통합 디스코드' 채널을 이용함.",
            },
        ],
    },
];

export const dayContent = [
    {
        name: "chaos",
        nameKor: "카오스 던전",
        compensation: [
            {
                name: "강화재료",
            },
            {
                name: "장비 아이템",
            },
            {
                name: "실링",
            },
            {
                name: "레벨 대 악세서리 및 어빌리티 스톤",
            },
            {
                name: "각인서",
            },
            {
                name: "보석",
            },
            {
                name: "큐브 및 회랑 입장권",
            },
        ],
        description: [
            {
                descriptionDetail:
                    "실링, 강화재료 등 스펙업에 필요한 기본 재료부터 입장권, 보석, 각인서 등 다양한 아이템을 얻을 수 있는 중요한 일일 컨텐츠입니다.",
            },
            {
                descriptionDetail:
                    "입장시에 공명의 기운 50이 필요하며 매일 06시에 공명의 기운이 최대치인 100으로 초기화됩니다.",
            },
            {
                descriptionDetail:
                    "입장 단계가 높을수록 더 높은 등급의 아이템을 얻을 수 있습니다. 입장 가능한 가장 높은 등급의 던전을 선택하는 것을 추천드립니다.",
            },
            {
                descriptionDetail:
                    "공명의 기운을 모두 소진하고 던전을 클리어할 경우 기존 보상 대신 정화의 파편을 얻습니다. 정화의 파편으로는 여러 아이템들을 교환할 수 있습니다. 효율이 좋지 않으니 입장횟수를 초과하여 던전을 도는 것은 추천드리지 않습니다.",
                npc: "주요 대도시에 위치한 [정화의 파편 교환] NPC",
            },
        ],
    },
    {
        name: "guardian",
        description: [
            {
                descriptionDetail:
                    "토벌 성공 시 하루 2회 가디언의 영혼을 수확하여 추가 보상을 획득할 수 있습니다.",
            },
            {
                descriptionDetail:
                    "영혼 수확을 체크한 상태로 입장하여 토벌에 성공하였으나 영혼을 수확하지 않은 경우에도 영혼 수확 횟수가 차감됩니다.",
            },
        ],
        compensation: [
            {
                name: "basic",
                compensationDetail: [
                    { name: "장신구" },
                    { name: "재련 재료" },
                    { name: "어빌리티 스톤" },
                    { name: "카드" },
                    { name: "스킬 룬" },
                ],
            },
            {
                name: "special",
                compensationDetail: [
                    { name: "돌파석, 파괴석, 수호석 등" },
                    { name: "악세사리" },
                    { name: "어빌리티 스톤" },
                ],
            },
        ],
        manner: [
            {
                descriptionManner:
                    "헤딩팟이 아닌 이상 공략 숙지는 모든 레이드의 기본입니다.",
            },
            {
                descriptionManner:
                    "레이드 입장시 화면 좌측에 생기는 번호 순서대로 돌아가며 신호탄을 던집니다.",
            },
        ],
    },
    {
        name: "epona",
        compensation: [
            { name: `인연의 돌` },
            { name: `파편` },
            { name: `돌파석` },
            { name: `실링` },
            { name: `강화 보조 재료 등` },
        ],
        description: [
            {
                descriptionDetail: `에포나는 [주간에포나]와 [일일에포나] 두 종류가 존재합니다.`,
            },
            {
                descriptionDetail: `[Alt + J]로 에포나 탭을 호출할 수 있습니다.`,
            },
            {
                descriptionDetail: `일일 의뢰는 캐릭터당 1일에 최대 3개까지 완료할 수 있습니다.`,
            },
            { descriptionDetail: `에포나 평판은 원정대가 모두 공유합니다` },
        ],
        reputationDescription: [
            {
                reputationDescriptionDetail: `일일 의뢰를 완료하면 10의 평판 포인트가 누적되어 해당 의뢰의 "평판" 단계가 상승합니다.`,
            },
            {
                reputationDescriptionDetail: `1회 이상 진행한 의뢰는 에포나 의뢰 게시판의 [평판 현황] 탭에서 해당 의뢰의 평판 정보 확인이 가능합니다.`,
            },
            {
                reputationDescriptionDetail: `평판 단계가 상승했을 때에는 의뢰 완료 보상과는 별개로 평판 단계 달성 보상을 획득합니다.`,
            },
            {
                reputationDescriptionDetail: `평판 등급 보상으로 섬의 마음, 미술품, 거인의 심장, 능력치 증가 물약, 스킬 포인트 등 내실에 도움이 되는 다양한 보상을 획득할 수 있습니다.`,
            },
        ],
        recommand: [
            {
                descriptionDetail: `본캐는 돌파석 수급 에포나를 추천합니다`,
            },
            {
                descriptionDetail: `부캐는 실링 수급 에포나 또는 내실 및 능력치 관련 에포나를 추천합니다.`,
            },
        ],
    },
];

export const weekContent = [
    {
        nameArr: [
            {
                name: "한밤중의 서커스 리허설",
                id: 0,
                correction: false,
                limit: 1385,
                compensation: "[광기의 표식]",
                compensationChange: [
                    { compensationDetail: "재련 재료" },
                    { compensationDetail: "카드" },
                    { compensationDetail: "호감도 아이템" },
                    { compensationDetail: "이모티콘 팩 등 각종 보상" },
                ],
                npc: "[군단장 레이드 교환] NPC",
            },
            {
                name: "몽환의 아스탤지어 데쟈뷰",
                id: 1,
                correction: false,
                limit: 1430,
                compensation: "몽환의 표식",
                compensationChange: [
                    { compensationDetail: "재련 재료" },
                    { compensationDetail: "카드" },
                    { compensationDetail: "호감도 아이템" },
                    { compensationDetail: "이모티콘 팩 등 각종 보상" },
                ],
                npc: "[군단장 레이드 교환] NPC",
            },
            {
                name: "군단장 레이드",
                id: 2,
                correction: false,
                limit: 1415,
                compensation: [
                    { compensationDetail: "골드(최소 3300G)" },
                    { compensationDetail: "유물 장비 제작 재료" },
                    { compensationDetail: "유물 악세사리" },
                    { compensationDetail: "각인서" },
                    { compensationDetail: "카드" },
                    { compensationDetail: "재봉 / 야금술" },
                ],
            },
            {
                name: "어비스 레이드",
                id: 3,
                correction: false,
                limit: 1370,
                compensation: [
                    { compensationDetail: "골드(최소 1600G)" },
                    { compensationDetail: "전설 악세사리" },
                    { compensationDetail: "선택 예정 전설 장비 제작 재료" },
                    { compensationDetail: "각인서" },
                    { compensationDetail: "카드" },
                    { compensationDetail: "재봉 / 야금술" },
                ],
            },
            {
                name: "도전 어비스 던전",
                id: 4,
                correction: true,
                limit: 960,
                compensation: [
                    { compensationDetail: "재련 재료" },
                    { compensationDetail: "재련 보조 재료" },
                    { compensationDetail: "카드" },
                ],
            },
            {
                name: "도전 가디언 토벌",
                id: 5,
                correction: true,
                limit: 460,
                compensation: [
                    { compensationDetail: "레벨대에 맞는 악세사리" },
                    { compensationDetail: "재련 재료" },
                    { compensationDetail: "현자의 가루" },
                    { compensationDetail: "각인서" },
                ],
            },
            {
                name: "어비스 던전",
                id: 6,
                correction: false,
                limit: 1325,
                compensation: [
                    { compensationDetail: "골드(최소 700G)" },
                    { compensationDetail: "악세사리" },
                    { compensationDetail: "각인서" },
                    { compensationDetail: "카드" },
                ],
            },
            { name: "주간 에포나", id: 8, correction: false },
        ],
    },
];

export const GoldSupplier = [
    {
        name: "oneTime",
    },
    {
        name: "everyTime",
        oneTimeSupplier: [
            {
                name: "어비스 던전",
                nameDetailNormal: "아이라의 눈 노말 / 오레하 프라바사 노말",
                goldAmountNormal: "500G + 600G (총 1100G)",
                nameDetailHard: "아이라의 눈 노말 / 오레하 프라바사 노말",
                goldAmountHard: "600G + 700G (총 1300G)",
            },
            {
                name: "어비스 레이드",
                nameDetailNormal: "아르고스",
                goldAmountNormal: "700G + 400G + 500G (총 1600G) ",
            },
            {
                name: "군단장 레이드",
                nameDetailArr: [
                    {
                        NameDetail: "발탄 노말",
                        goldAmount: "500G + 2000G (총 2500G)",
                    },
                    {
                        NameDetail: "발탄 하드",
                        goldAmount: "1000G + 3500G (총 4500G)",
                    },
                    {
                        NameDetail: "비아키스 노말",
                        goldAmount: "500G + 600G + 1400G (총 2500G)",
                    },
                    {
                        NameDetail: "비아키스 하드",
                        goldAmount: "1000G + 1000G + 2500G (총 4500G)",
                    },
                    {
                        NameDetail: "쿠크세이튼 노말",
                        goldAmount: "1000G + 1000G + 2500G (총 4500G)",
                    },
                    {
                        NameDetail: "아브렐슈드 노말",
                        goldAmount: "4500G + 1500G + 2500G (총 8500G)",
                    },
                    {
                        NameDetail: "아브렐슈드 하드",
                        goldAmount: "5500G + 2000G + 3000G (총 10500G)",
                    },
                ],
            },
        ],
    },
];

export const dayWork = [
    { name: "카오스 던전" },
    { name: "가디언 토벌" },
    { name: "일일 에포나 의뢰" },
];
export const weekWork = [
    { name: "발탄 노말" },
    { name: "발탄 하드" },
    { name: "비아키스 노말" },
    { name: "비아키스 하드" },
    { name: "쿠크세이튼" },
    { name: "아브렐슈드 노말" },
    { name: "아브렐슈드 하드" },
    { name: "도전 가디언 토벌" },
    { name: "어비스 던전" },
    { name: "어비스 레이드" },
    { name: "도전 어비스 던전" },
    { name: "주간 에포나 의뢰" },
];
