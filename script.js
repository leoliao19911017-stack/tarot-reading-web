// --- script.js ---

// =======================================================================
// 完整的 78 张塔罗牌数据 (id 0 到 id 78)
// 确保图片文件名与 'image' 属性中的值一致 (例如 'card-0.png' 等)
// =======================================================================
const tarotDeck = [
    { 
        id: 0, 
        name: "0 愚人 (The Fool)", 
        image: 'images/card-0.png',
        keyword: "开始、自由、天真、冒险",
        dailyFortune: "今天是充满无限可能的一天！鼓励你放下过去的束缚，大胆地迈出第一步。保持开放心态，接受旅途中的意外惊喜。",
        actionGuide: {
            suitable: "探索新领域、尝试未做过的事情、接受邀请。",
            caution: "避免鲁莽行事或盲目乐观，注意安全。",
        },
        luckyColor: "天蓝色",
        luckyTip: "带上一个空的水瓶，象征今天你将充满新的知识和体验。",
    },
    { 
        id: 1, 
        name: "I 魔法师 (The Magician)", 
        image: 'images/card-1.png',
        keyword: "创造力、行动力、掌握、沟通",
        dailyFortune: "你的能力和资源已准备就绪。今天适合启动新计划，你拥有成功所需的一切工具。自信地表达你的想法，行动起来。",
        actionGuide: {
            suitable: "进行提案、学习新技能、开始重要的对话。",
            caution: "避免夸夸其谈或过度自信，务实为重。",
        },
        luckyColor: "明黄色",
        luckyTip: "整理你的工作桌面或工具箱，象征掌握你拥有的资源。",
    },
    { 
        id: 2, 
        name: "II 女祭司 (The High Priestess)", 
        image: 'images/card-2.png',
        keyword: "直觉、智慧、秘密、被动",
        dailyFortune: "今天宜静不宜动，你的直觉将是最佳向导。花时间独处，倾听内心的声音，一些隐藏的真相可能会浮现。不要急于做决定。",
        actionGuide: {
            suitable: "冥想、阅读、深入研究课题、保持低调。",
            caution: "不要强行推动事情进展，保持耐心和观察。",
        },
        luckyColor: "银白色",
        luckyTip: "佩戴一件有意义的饰品，让它成为你直觉的连接点。",
    },
    { 
        id: 3, 
        name: "III 皇后 (The Empress)", 
        image: 'images/card-3.png',
        keyword: "丰盛、母性、创造、感官享受",
        dailyFortune: "今天被爱与美所环绕，你可能会感到格外有魅力和创造力。享受生活的美好，与自然亲近，并滋养你的人际关系。",
        actionGuide: {
            suitable: "进行艺术创作、园艺、享受美食、与家人共度时光。",
            caution: "避免过于懒散或沉迷于物质享受。",
        },
        luckyColor: "绿色",
        luckyTip: "买一束鲜花或在你房间里放置新鲜的水果。",
    },
    { 
        id: 4, 
        name: "IV 皇帝 (The Emperor)", 
        image: 'images/card-4.png',
        keyword: "权威、结构、秩序、父性",
        dailyFortune: "需要坚定的领导力和清晰的结构。今天是制定规则、组织计划和处理重要业务的好时机。保持纪律和果断。",
        actionGuide: {
            suitable: "规划长期目标、处理财务或法律文件、担任领导角色。",
            caution: "避免过度僵化或独断专行。",
        },
        luckyColor: "红色",
        luckyTip: "在重要文件上用红笔签名或做标记。",
    },
    { 
        id: 5, 
        name: "V 教皇 (The Hierophant)", 
        image: 'images/card-5.png',
        keyword: "传统、信仰、导师、群体价值",
        dailyFortune: "寻找智慧和指导的一天。你可能会从导师、权威人士或传统机构中获得宝贵的建议。适合遵循既定规则。",
        actionGuide: {
            suitable: "学习宗教或哲学知识、寻求专业建议、参加正式会议。",
            caution: "避免盲目相信，要保持自己的独立思考。",
        },
        luckyColor: "深蓝色",
        luckyTip: "佩戴或携带一件传承自长辈的物品。",
    },
    { 
        id: 6, 
        name: "VI 恋人 (The Lovers)", 
        image: 'images/card-6.png',
        keyword: "选择、和谐、关系、价值观",
        dailyFortune: "你正面临重要的抉择，这不仅仅是关于浪漫，也是关于价值观的协调。仔细权衡你的选择，倾听内心的声音。",
        actionGuide: {
            suitable: "与伴侣或重要伙伴进行深入交流、做出承诺、选择职业方向。",
            caution: "避免在不清楚自己目标时仓促做决定。",
        },
        luckyColor: "粉红色",
        luckyTip: "与你喜欢的人分享一份甜点。",
    },
    { 
        id: 7, 
        name: "VII 战车 (The Chariot)", 
        image: 'images/card-7.png',
        keyword: "胜利、决心、控制、前进",
        dailyFortune: "设定目标，集中你的意志力，向前冲锋！你拥有成功所必需的动力和自制力。今天适合旅行或推动业务。",
        actionGuide: {
            suitable: "出差或旅行、参加竞赛、果断解决问题。",
            caution: "避免急躁和过度控制，保持灵活。",
        },
        luckyColor: "橙色",
        luckyTip: "在你今天出行的工具（汽车、背包）上放置一个幸运符。",
    },
    { 
        id: 8, 
        name: "VIII 力量 (Strength)", 
        image: 'images/card-8.png',
        keyword: "勇气、温柔的力量、耐心、自信",
        dailyFortune: "真正的力量来自于内心。用耐心和温柔来克服困难，而不是武力。你的自信和内在的平静能驯服任何挑战。",
        actionGuide: {
            suitable: "展示你的决心、与难缠的人沟通、锻炼意志力。",
            caution: "避免压抑你的情绪或表现得过于自大。",
        },
        luckyColor: "金色",
        luckyTip: "冥想时想象有一道金色的光芒环绕着你。",
    },
    { 
        id: 9, 
        name: "IX 隐士 (The Hermit)", 
        image: 'images/card-9.png',
        keyword: "内省、孤独、智慧、指导",
        dailyFortune: "适合退一步，进行内省和自我发现。今天的答案不在外界，而在你自己的内心深处。寻求独处的时光。",
        actionGuide: {
            suitable: "深度思考、写日记、独自进行散步或旅行、反思过去。",
            caution: "避免与世隔绝或拒绝必要的社交。",
        },
        luckyColor: "灰色",
        luckyTip: "点燃一支蜡烛，在宁静中享受片刻的沉思。",
    },
    { 
        id: 10, 
        name: "X 命运之轮 (Wheel of Fortune)", 
        image: 'images/card-10.png',
        keyword: "转变、机遇、周期、运气",
        dailyFortune: "命运的齿轮开始转动！今天会有意想不到的转折和机遇出现。保持乐观，拥抱变化，好运正在降临。",
        actionGuide: {
            suitable: "抓住突如其来的机会、购买彩票、进行大胆的投资。",
            caution: "避免固执地抗拒改变，要顺势而为。",
        },
        luckyColor: "靛蓝色",
        luckyTip: "将一枚硬币面向上的放在钱包里。",
    },
    { 
        id: 11, 
        name: "XI 正义 (Justice)", 
        image: 'images/card-11.png',
        keyword: "公平、平衡、法律、因果",
        dailyFortune: "今天需要你保持客观和公正。任何不平衡或不公平的问题都将得到解决。你的决策必须基于真相和道德。",
        actionGuide: {
            suitable: "处理合同或法律事务、做出公正的仲裁、检讨自己的行为。",
            caution: "避免偏袒或情绪化的判断。",
        },
        luckyColor: "淡紫色",
        luckyTip: "在办公桌上放置一个天平或对称的装饰品。",
    },
    { 
        id: 12, 
        name: "XII 倒吊人 (The Hanged Man)", 
        image: 'images/card-12.png',
        keyword: "牺牲、新的视角、暂停、等待",
        dailyFortune: "事情陷入停滞，这并非惩罚，而是需要你从一个全新的角度看待问题。暂时放下控制权，通过牺牲来获得顿悟。",
        actionGuide: {
            suitable: "冥想、做慈善、自愿放弃一些习惯、进行自我反思。",
            caution: "避免陷入自我怜悯或毫无目的地拖延。",
        },
        luckyColor: "海蓝色",
        luckyTip: "尝试倒立或做伸展运动，改变身体的视角。",
    },
    { 
        id: 13, 
        name: "XIII 死神 (Death)", 
        image: 'images/card-13.png',
        keyword: "结束、转变、重生、彻底清除",
        dailyFortune: "这不是实际的死亡，而是旧事物的终结。是时候放手那些不再为你服务的习惯、关系或状况，迎接全新的开始。",
        actionGuide: {
            suitable: "清理旧物、结束一段关系、改变生活方式、彻底辞职。",
            caution: "避免因为害怕未知而紧抓着过去不放。",
        },
        luckyColor: "黑色",
        luckyTip: "丢弃一件你已经很久没穿或没用过的旧衣服。",
    },
    { 
        id: 14, 
        name: "XIV 节制 (Temperance)", 
        image: 'images/card-14.png',
        keyword: "平衡、和谐、耐心、中庸之道",
        dailyFortune: "今天需要你练习耐心和适度。将不同元素融合，找到完美的平衡点。与人合作，保持冷静和灵活。",
        actionGuide: {
            suitable: "团队合作、进行调解、适度饮食、找到生活节奏。",
            caution: "避免极端行为或犹豫不决。",
        },
        luckyColor: "紫罗兰色",
        luckyTip: "混合两种不同的饮料或食物来尝试新的搭配。",
    },
    { 
        id: 15, 
        name: "XV 恶魔 (The Devil)", 
        image: 'images/card-15.png',
        keyword: "束缚、诱惑、物质主义、成瘾",
        dailyFortune: "警惕内心的黑暗面。你可能感到被物质、欲望或不良习惯所束缚。认识到这些束缚是自我强加的，你有能力挣脱。",
        actionGuide: {
            suitable: "认识到自己的依赖、面对金钱问题、抵制诱惑。",
            caution: "避免沉迷于感官刺激或逃避责任。",
        },
        luckyColor: "深棕色",
        luckyTip: "写下你最近的烦恼，然后撕碎它。",
    },
    { 
        id: 16, 
        name: "XVI 塔 (The Tower)", 
        image: 'images/card-16.png',
        keyword: "突然的变动、破坏、觉醒、真相",
        dailyFortune: "准备好迎接突如其来的变化或冲击。旧的结构正在崩溃，这虽然痛苦，但却是清除虚假基础、重建自我的必要过程。",
        actionGuide: {
            suitable: "接受并处理危机、放下控制、诚实面对真相。",
            caution: "避免抵抗和逃避，让它发生。",
        },
        luckyColor: "灰色或亮红色",
        luckyTip: "安全地打破一个小小的旧物（例如一个不用的铅笔）。",
    },
    { 
        id: 17, 
        name: "XVII 星星 (The Star)", 
        image: 'images/card-17.png',
        keyword: "希望、灵感、宁静、乐观",
        dailyFortune: "这是一张充满希望和灵感的牌。未来是光明的，请相信你的直觉和宇宙的指引。充满信心和宁静地展望未来。",
        actionGuide: {
            suitable: "许愿、创作、计划未来、在星空下静坐。",
            caution: "避免因为沉溺于梦想而忽略现实的行动。",
        },
        luckyColor: "蓝绿色",
        luckyTip: "睡前想象你的愿望已经实现。",
    },
    { 
        id: 18, 
        name: "XVIII 月亮 (The Moon)", 
        image: 'images/card-18.png',
        keyword: "幻觉、恐惧、不安、潜意识",
        dailyFortune: "今天充满了不确定性和迷雾。你的恐惧和不安可能源于潜意识。不要被幻觉所欺骗，相信你的直觉，真相将浮现。",
        actionGuide: {
            suitable: "探索梦境、面对隐藏的担忧、写作或艺术治疗。",
            caution: "避免在情绪不稳定时做出重大承诺。",
        },
        luckyColor: "奶油色",
        luckyTip: "在晚上，用一杯温暖的饮品来安抚你的神经。",
    },
    { 
        id: 19, 
        name: "XIX 太阳 (The Sun)", 
        image: 'images/card-19.png',
        keyword: "成功、活力、喜悦、清晰",
        dailyFortune: "这是最积极的牌之一！成功、幸福和活力充沛的一天。你的努力将得到认可，清晰的视野将指引你前进。",
        actionGuide: {
            suitable: "庆祝成功、与孩子玩耍、享受户外活动、进行坦诚的沟通。",
            caution: "避免得意忘形或过度炫耀。",
        },
        luckyColor: "金黄色",
        luckyTip: "多晒太阳，吸收大自然的能量。",
    },
    { 
        id: 20, 
        name: "XX 审判 (Judgement)", 
        image: 'images/card-20.png',
        keyword: "反省、觉醒、呼唤、清算",
        dailyFortune: "你正处于一个自我评估和重大觉醒的时刻。回顾过去的行为和选择，并准备好进入下一个阶段。倾听内心的呼唤。",
        actionGuide: {
            suitable: "做出重要的决定、公开承认错误、进行深度反思、原谅自己或他人。",
            caution: "避免逃避对过去错误的责任。",
        },
        luckyColor: "白色",
        luckyTip: "整理你的思绪，列出你今年取得的所有成就。",
    },
    { 
        id: 21, 
        name: "XXI 世界 (The World)", 
        image: 'images/card-21.png',
        keyword: "完成、整合、成就、圆满",
        dailyFortune: "恭喜你！一个重要的周期已经圆满结束，你完成了你的目标。享受你的成就，并准备好进入下一段旅程。",
        actionGuide: {
            suitable: "完成长期项目、旅行、接受毕业或晋升、庆祝成功。",
            caution: "避免过于沉迷于成就而停止前进。",
        },
        luckyColor: "彩虹色",
        luckyTip: "写下你未来十年的目标，为下一阶段做准备。",
    },
    
    // =======================================================================
    // 权杖花色 (Wands) - 灵感、行动、热情
    // =======================================================================
    // 权杖一 (Ace of Wands)
    { 
        id: 22, 
        name: "权杖一 (Ace of Wands)", 
        image: 'images/card-22.png', 
        keyword: "灵感、新开始、热情、爆发力",
        dailyFortune: "新的火花被点燃！今天会有强烈的灵感或新机会出现。这是你充满热情地采取行动的绝佳时机。",
        actionGuide: {
            suitable: "启动项目、提出创意、旅行、运动。",
            caution: "避免三分钟热度，需要坚持。",
        },
        luckyColor: "火红色",
        luckyTip: "点燃一支香薰或蜡烛，象征你的灵感之火。",
    },

    // 权杖二 (Two of Wands)
    { 
        id: 23, 
        name: "权杖二 (Two of Wands)", 
        image: 'images/card-23.png', 
        keyword: "计划、进展、展望未来、决策",
        dailyFortune: "你站在一个成功的起点，但需要做出重要的决定来规划你的下一步。今天适合制定长期计划，并权衡不同的选择。",
        actionGuide: {
            suitable: "制定商业策略、思考旅行计划、做出投资决定、与合作伙伴商议。",
            caution: "避免因为拖延而错过最佳行动时机，必须果断。",
        },
        luckyColor: "棕红色",
        luckyTip: "用地图或世界仪装饰你的空间，象征你的宏大视野。",
    },

    // 权杖三 (Three of Wands)
    { 
        id: 24, 
        name: "权杖三 (Three of Wands)", 
        image: 'images/card-24.png', 
        keyword: "展望、合作、扩张、成果初显",
        dailyFortune: "你的计划已经开始取得初步成果，现在是时候向外扩张，寻求新的合作伙伴或市场。保持耐心，放眼全球。",
        actionGuide: {
            suitable: "对外联络、洽谈国际业务、等待结果、拓展知识面。",
            caution: "避免因急于求成而忽略细节，保持专注。",
        },
        luckyColor: "金色",
        luckyTip: "在你的钱包里放三张新钞票。",
    },
    
    // 权杖四 (Four of Wands)
    { 
        id: 25, 
        name: "权杖四 (Four of Wands)", 
        image: 'images/card-25.png', 
        keyword: "庆祝、和谐、家庭、完成、稳定",
        dailyFortune: "你的努力将获得肯定，是时候与亲友共同庆祝成就了。今天家庭和睦、关系稳定，享受这份安全和喜悦。",
        actionGuide: {
            suitable: "组织家庭聚会、庆祝小成功、购买新房或装修、放松享受。",
            caution: "避免忽视未来的发展，沉溺于安逸。",
        },
        luckyColor: "暖黄色",
        luckyTip: "用鲜花装饰你的家，营造节日气氛。",
    },
    
    // 权杖五 (Five of Wands)
    { 
        id: 26, 
        name: "权杖五 (Five of Wands)", 
        image: 'images/card-26.png', 
        keyword: "竞争、小冲突、挑战、不同意见",
        dailyFortune: "今天可能会面临一些小摩擦或竞争。这并非真正的恶意，而是各种观点和能量的碰撞。将竞争视为成长的动力。",
        actionGuide: {
            suitable: "参加友好的竞赛、通过辩论清晰思路、积极参与团队讨论。",
            caution: "避免将小冲突升级为严重的争吵。",
        },
        luckyColor: "混合色",
        luckyTip: "通过运动发泄多余的竞争能量。",
    },

    // 权杖六 (Six of Wands)
    { 
        id: 27, 
        name: "权杖六 (Six of Wands)", 
        image: 'images/card-27.png', 
        keyword: "胜利、公众认可、自信、成功归来",
        dailyFortune: "你的努力得到了公众的认可和赞美。今天你充满自信，是时候接受荣誉和掌声了。你的领导力备受推崇。",
        actionGuide: {
            suitable: "发表演讲或提案、接受奖励、展现你的成就、大胆追求目标。",
            caution: "避免骄傲自满，保持谦逊。",
        },
        luckyColor: "亮红色",
        luckyTip: "穿上让你感到自信和专业的服装。",
    },
    
    // 权杖七 (Seven of Wands)
    { 
        id: 28, 
        name: "权杖七 (Seven of Wands)", 
        image: 'images/card-28.png', 
        keyword: "防御、勇气、挑战、立场坚定",
        dailyFortune: "你感到需要为自己的立场或成果辩护。今天需要勇气和决心来抵御外界的批评或挑战。坚守你的信念。",
        actionGuide: {
            suitable: "坚定地表达观点、保护你的作品或项目、不向压力屈服。",
            caution: "避免因为防御过度而显得咄咄逼人。",
        },
        luckyColor: "橙棕色",
        luckyTip: "站高处俯视，以获得更高的视角和力量。",
    },

    // 权杖八 (Eight of Wands)
    { 
        id: 29, 
        name: "权杖八 (Eight of Wands)", 
        image: 'images/card-29.png', 
        keyword: "快速行动、旅行、信息流动、迅速发展",
        dailyFortune: "事情会以惊人的速度发展。今天会有大量的沟通和信息涌入，适合快速做出反应和行动。可能与短途旅行有关。",
        actionGuide: {
            suitable: "短途出差、快速回复邮件和电话、立即采取行动、抓住稍纵即逝的机会。",
            caution: "避免因为速度过快而忽视细节，导致失误。",
        },
        luckyColor: "风信子蓝",
        luckyTip: "确保你的通讯工具电量充足，以应对大量信息。",
    },

    // 权杖九 (Nine of Wands)
    { 
        id: 30, 
        name: "权杖九 (Nine of Wands)", 
        image: 'images/card-30.png', 
        keyword: "防御、韧性、疲惫、最后的考验",
        dailyFortune: "你感到疲惫但仍坚守阵地。你已经克服了许多挑战，现在是最后的考验。你的韧性将让你取得最终的成功。",
        actionGuide: {
            suitable: "保持警觉和毅力、设定明确的边界、完成收尾工作。",
            caution: "避免因为过度担忧或疲劳而崩溃，注意休息。",
        },
        luckyColor: "土黄色",
        luckyTip: "在出门前检查一遍所有的重要物品，确保万无一失。",
    },

    // 权杖十 (Ten of Wands)
    { 
        id: 31, 
        name: "权杖十 (Ten of Wands)", 
        image: 'images/card-31.png', 
        keyword: "重担、责任、负担、完成临近",
        dailyFortune: "你背负了过多的责任和负担，感到压力巨大。现在是时候重新评估，放下那些不属于你的责任，完成最后的冲刺。",
        actionGuide: {
            suitable: " делегировать 任务给他人、寻求帮助、优先处理最重要的事情、完成最后的阶段。",
            caution: "避免因为不愿放权而拖垮自己。",
        },
        luckyColor: "深棕色",
        luckyTip: "挺直你的背部，深呼吸三次，减轻物理上的负担感。",
    },

    // 权杖侍从 (Page of Wands)
    { 
        id: 32, 
        name: "权杖侍从 (Page of Wands)", 
        image: 'images/card-32.png', 
        keyword: "新机遇、探索、兴奋、好消息",
        dailyFortune: "你对新的可能性感到兴奋和好奇。今天可能会收到与旅行或新项目相关的好消息。保持乐观和探索精神。",
        actionGuide: {
            suitable: "开始新的爱好、规划旅行、提出大胆的创意、尝试新事物。",
            caution: "避免光说不练，缺乏实际的行动。",
        },
        luckyColor: "浅橙色",
        luckyTip: "购买一张明信片或旅行杂志，激发你的探索欲。",
    },

    // 权杖骑士 (Knight of Wands)
    { 
        id: 33, 
        name: "权杖骑士 (Knight of Wands)", 
        image: 'images/card-33.png', 
        keyword: "活力、快速行动、魅力、冒险",
        dailyFortune: "今天你充满活力和魅力，像火焰一样热情高涨。你将迅速推进你的目标，但要小心冲动和鲁莽，保持目标清晰。",
        actionGuide: {
            suitable: "旅行、快速启动项目、与人进行热情的沟通、参与运动。",
            caution: "避免不顾后果的行动和冲突。",
        },
        luckyColor: "火红色",
        luckyTip: "在你的包里放一些香料或辣椒，象征你的火热能量。",
    },

    // 权杖王后 (Queen of Wands)
    { 
        id: 34, 
        name: "权杖王后 (Queen of Wands)", 
        image: 'images/card-34.png', 
        keyword: "自信、魅力、热情、独立、聚焦",
        dailyFortune: "你充满自信、魅力和热情，能够启发周围的人。今天是运用你的独立性和领导力来实现目标的好时机。",
        actionGuide: {
            suitable: "承担领导角色、公开演讲、组织社交活动、设定清晰的目标并专注于此。",
            caution: "避免因为过于强势而显得霸道。",
        },
        luckyColor: "金橙色",
        luckyTip: "佩戴一件让你感到有力量和自信的配饰。",
    },

    // 权杖国王 (King of Wands)
    { 
        id: 35, 
        name: "权杖国王 (King of Wands)", 
        image: 'images/card-35.png', 
        keyword: "远见、领导力、创意、诚实",
        dailyFortune: "你拥有远见和创造性的领导力。今天适合制定宏伟的计划，并以诚实和果断的方式推动它。你的创意将带来成功。",
        actionGuide: {
            suitable: "制定长期战略、指导他人、启动创新项目、以身作则。",
            caution: "避免过于专制或对他人缺乏耐心。",
        },
        luckyColor: "深红色",
        luckyTip: "找一个安静的地方，想象你宏伟的未来蓝图。",
    },

    // =======================================================================
    // 圣杯花色 (Cups) - 情感、关系、直觉
    // =======================================================================

    // 圣杯一 (Ace of Cups)
    { 
        id: 36, // 从这里开始，id 编号请以你实际的图片文件名为准
        name: "圣杯一 (Ace of Cups)", 
        image: 'images/card-36.png', 
        keyword: "新感情、直觉、喜悦、情感充沛",
        dailyFortune: "情感和直觉之流开启。今天你可能会感到新的爱、同情或灵感的涌入。适合敞开心扉，感受生活的美好。",
        actionGuide: {
            suitable: "开始一段新关系、进行艺术创作、向他人表达善意、尝试冥想。",
            caution: "避免情感泛滥或过度敏感。",
        },
        luckyColor: "水蓝色",
        luckyTip: "喝一杯用透明玻璃杯装的纯净水，象征心灵的纯净。",
    },

    // 圣杯二 (Two of Cups)
    { 
        id: 37, 
        name: "圣杯二 (Two of Cups)", 
        image: 'images/card-37.png', 
        keyword: "结合、和谐、伙伴关系、吸引",
        dailyFortune: "人际关系和谐且充满吸引力的一天。无论是爱情还是事业，你都将找到理想的伙伴或实现平衡的合作关系。",
        actionGuide: {
            suitable: "与人建立联系、签订合约、进行约会、修复旧关系。",
            caution: "避免过分依赖对方或牺牲自我需求。",
        },
        luckyColor: "粉红色",
        luckyTip: "和重要的人交换一个有意义的小礼物。",
    },

    // 圣杯三 (Three of Cups)
    { 
        id: 38, 
        name: "圣杯三 (Three of Cups)", 
        image: 'images/card-38.png', 
        keyword: "庆祝、友谊、社群、丰收",
        dailyFortune: "这是一个庆祝、团聚和喜悦的日子。享受友谊带来的快乐，你的社群和社交圈子将给你带来支持和快乐。",
        actionGuide: {
            suitable: "参加聚会、庆祝小成就、与朋友分享你的喜悦、团队协作。",
            caution: "避免过度放纵或忽视工作。",
        },
        luckyColor: "金黄色",
        luckyTip: "与朋友碰杯，感谢他们的支持。",
    },

    // 圣杯四 (Four of Cups)
    { 
        id: 39, 
        name: "圣杯四 (Four of Cups)", 
        image: 'images/card-39.png', 
        keyword: "厌倦、内省、不满、错过机会",
        dailyFortune: "你可能感到情绪上的厌倦或不满足，容易对身边的机会视而不见。需要重新审视内心，找到你真正的热情所在。",
        actionGuide: {
            suitable: "冥想、休息、拒绝不感兴趣的邀约、重新评估目标。",
            caution: "避免抱怨或拒绝新的提议。",
        },
        luckyColor: "墨绿色",
        luckyTip: "远离社交媒体，专注于身边真实的事物。",
    },

    // 圣杯五 (Five of Cups)
    { 
        id: 40, 
        name: "圣杯五 (Five of Cups)", 
        image: 'images/card-40.png', 
        keyword: "失落、悲伤、遗憾、沉浸过去",
        dailyFortune: "你可能正在经历某种失落或遗憾。重点是，不要只盯着失去的部分，你身边还有未倾倒的杯子，代表着希望。",
        actionGuide: {
            suitable: "与信任的朋友倾诉、整理情绪、向前看、认识到还有剩余的资源。",
            caution: "避免沉溺于自责或过去的错误。",
        },
        luckyColor: "深灰色",
        luckyTip: "写下你感谢的五件事。",
    },

    // 圣杯六 (Six of Cups)
    { 
        id: 41, 
        name: "圣杯六 (Six of Cups)", 
        image: 'images/card-41.png', 
        keyword: "童年、怀旧、回忆、礼物、纯真",
        dailyFortune: "今天充满了怀旧的情绪，你可能会回想起美好的童年时光或遇到旧时的朋友。适合回顾过去，寻找慰藉和灵感。",
        actionGuide: {
            suitable: "联系老朋友、回家探亲、看老照片、教导或照顾孩子。",
            caution: "避免过度理想化过去或逃避目前的责任。",
        },
        luckyColor: "柔和的米白",
        luckyTip: "给孩子买一份小礼物或做一件有童趣的事情。",
    },

    // 圣杯七 (Seven of Cups)
    { 
        id: 42, 
        name: "圣杯七 (Seven of Cups)", 
        image: 'images/card-42.png', 
        keyword: "幻想、选择过多、白日梦、错觉",
        dailyFortune: "你面前有太多的选择和可能性，但其中很多只是幻想。你需要清醒地分清现实与虚幻，并专注在一个目标上。",
        actionGuide: {
            suitable: "列出所有选项的优缺点、停止思考开始行动、寻求逻辑性建议。",
            caution: "避免不切实际的幻想或无法做出决定。",
        },
        luckyColor: "紫色",
        luckyTip: "写下你最近的三个白日梦，然后将其烧掉或撕碎。",
    },

    // 圣杯八 (Eight of Cups)
    { 
        id: 43, 
        name: "圣杯八 (Eight of Cups)", 
        image: 'images/card-43.png', 
        keyword: "离开、放弃、寻找更深层的意义、精神之旅",
        dailyFortune: "虽然你已经取得了一些成就，但内心深处感到不满足。今天是时候离开让你感到空虚的现状，踏上追寻更高目标和精神满足的旅程。",
        actionGuide: {
            suitable: "辞职或结束一个项目、进行一次精神探索之旅、寻找新的目标。",
            caution: "避免逃避困难，确保你的离开是经过深思熟虑的。",
        },
        luckyColor: "深蓝色",
        luckyTip: "打包一个简单的行囊，即使只是为了在家附近散步。",
    },

    // 圣杯九 (Nine of Cups)
    { 
        id: 44, 
        name: "圣杯九 (Nine of Cups)", 
        image: 'images/card-44.png', 
        keyword: "愿望达成、满足、享受、自信",
        dailyFortune: "你的愿望即将实现，你感到极大的满足和享受。这是庆祝和沉浸在幸福中的一天。你对自己的成就感到非常自豪。",
        actionGuide: {
            suitable: "享受美食、放松身心、庆祝成功、大胆许愿。",
            caution: "避免过度自满或忽视他人的感受。",
        },
        luckyColor: "奶油白",
        luckyTip: "穿上你最满意的一套衣服，享受自信带来的愉悦。",
    },

    // 圣杯十 (Ten of Cups)
    { 
        id: 45, 
        name: "圣杯十 (Ten of Cups)", 
        image: 'images/card-45.png', 
        keyword: "家庭幸福、圆满、永恒的喜悦、情感满足",
        dailyFortune: "情感上的圆满达到顶峰，特别是家庭和社群关系。你感到被爱和支持，这是稳定、持久幸福的象征。",
        actionGuide: {
            suitable: "与家人共度美好时光、组织家庭活动、表达爱意和感激、享受家庭生活。",
            caution: "避免将理想强加于家庭成员。",
        },
        luckyColor: "彩虹色",
        luckyTip: "制作一张全家福或与你最亲近的人合影。",
    },

    // 圣杯侍从 (Page of Cups)
    { 
        id: 46, 
        name: "圣杯侍从 (Page of Cups)", 
        image: 'images/card-46.png', 
        keyword: "新情感、好消息、创意灵感、好奇心",
        dailyFortune: "代表情感上的新开始和好消息。你可能会收到意外的邀请或产生新的艺术灵感。保持开放和好奇的心态。",
        actionGuide: {
            suitable: "接受突如其来的邀请、进行创意写作或绘画、与年轻人交流、表达自己的情感。",
            caution: "避免过于天真或不成熟。",
        },
        luckyColor: "浅粉色",
        luckyTip: "尝试一道你从未做过的新菜。",
    },

    // 圣杯骑士 (Knight of Cups)
    { 
        id: 47, 
        name: "圣杯骑士 (Knight of Cups)", 
        image: 'images/card-47.png', 
        keyword: "浪漫、提议、魅力、邀请、追求",
        dailyFortune: "浪漫和魅力充斥在空气中。你可能会收到一个充满情感的提议，或者你将以极富魅力的方式去追求某人或某事。",
        actionGuide: {
            suitable: "发送情书或表达心意、参加社交活动、主动提出合作、追求艺术项目。",
            caution: "避免过于情绪化或不切实际的承诺。",
        },
        luckyColor: "银色",
        luckyTip: "穿上让你感到最有魅力和自信的服装。",
    },

    // 圣杯王后 (Queen of Cups)
    { 
        id: 48, 
        name: "圣杯王后 (Queen of Cups)", 
        image: 'images/card-48.png', 
        keyword: "同情心、直觉、滋养、情感支持",
        dailyFortune: "你拥有强大的直觉和同情心，今天是帮助和滋养他人的好时机。信任你的内心，提供情感上的支持。",
        actionGuide: {
            suitable: "倾听朋友的心声、进行情感疗愈、从事慈善工作、处理需要共情心的事务。",
            caution: "避免牺牲自己的需求来迎合他人。",
        },
        luckyColor: "珍珠白",
        luckyTip: "为自己和他人泡一杯舒缓的花草茶。",
    },

    // 圣杯国王 (King of Cups)
    { 
        id: 49, 
        name: "圣杯国王 (King of Cups)", 
        image: 'images/card-49.png', 
        keyword: "情绪控制、平衡、慈悲、成熟的情感",
        dailyFortune: "你的情感稳定且成熟，能够平静地处理各种局面。今天适合担任调解者，用智慧和同情心来解决复杂的矛盾。",
        actionGuide: {
            suitable: "担任导师、在危机中保持冷静、做出公正的判断、在艺术领域寻求成就。",
            caution: "避免将情感深藏不露，适度表达自我。",
        },
        luckyColor: "宝蓝色",
        luckyTip: "坐在水边（湖泊、喷泉）进行冥想。",
    },

    // =======================================================================
    // 宝剑花色 (Swords) - 思想、冲突、理性和沟通
    // =======================================================================

    // 宝剑一 (Ace of Swords)
    { 
        id: 50, 
        name: "宝剑一 (Ace of Swords)", 
        image: 'images/card-50.png', 
        keyword: "突破、清晰的思维、胜利、真相",
        dailyFortune: "今天你的思维异常清晰和敏锐，适合做出重要的决定或解决复杂的难题。运用你的智慧和逻辑，勇敢地追求真相。",
        actionGuide: {
            suitable: "辩论、撰写报告、头脑风暴、进行手术或清理。",
            caution: "避免过于冷酷无情或语言伤人。",
        },
        luckyColor: "透明白",
        luckyTip: "用冰镇的薄荷水清醒头脑。",
    },

    // 宝剑二 (Two of Swords)
    { 
        id: 51, 
        name: "宝剑二 (Two of Swords)", 
        image: 'images/card-51.png', 
        keyword: "僵局、拒绝看清、平衡、逃避",
        dailyFortune: "你正处于一个难以抉择的僵局，可能因为恐惧而拒绝面对现实。需要放下防御，收集更多信息才能做出选择。",
        actionGuide: {
            suitable: "保持中立、寻求调解、进行深度休息，暂停决策。",
            caution: "避免一味拖延或自我欺骗。",
        },
        luckyColor: "浅灰色",
        luckyTip: "摘下眼罩，面对现实中让你烦恼的问题。",
    },

    // 宝剑三 (Three of Swords)
    { 
        id: 52, 
        name: "宝剑三 (Three of Swords)", 
        image: 'images/card-52.png', 
        keyword: "心碎、背叛、分离、悲伤",
        dailyFortune: "你可能会经历失望或情感上的伤痛。虽然痛苦，但这代表着必要的清理。接受伤痛，才能愈合和放下。",
        actionGuide: {
            suitable: "释放情绪、寻求支持、从痛苦中学习、与过去告别。",
            caution: "避免让悲伤演变成报复或怨恨。",
        },
        luckyColor: "深红",
        luckyTip: "听一段舒缓的音乐，让情绪自然流淌。",
    },

    // 宝剑四 (Four of Swords)
    { 
        id: 53, 
        name: "宝剑四 (Four of Swords)", 
        image: 'images/card-53.png', 
        keyword: "休息、恢复、静养、沉思",
        dailyFortune: "身体和心灵都需要休息。今天适合放慢脚步，从喧嚣中退隐，进行充分的静养和恢复，为接下来的挑战积蓄力量。",
        actionGuide: {
            suitable: "休假、冥想、远离社交、寻求独处。",
            caution: "避免过度隔离或逃避责任。",
        },
        luckyColor: "海军蓝",
        luckyTip: "睡一个午觉，让身心得到完全放松。",
    },

    // 宝剑五 (Five of Swords)
    { 
        id: 54, 
        name: "宝剑五 (Five of Swords)", 
        image: 'images/card-54.png', 
        keyword: "冲突、失利、羞辱、自私的胜利",
        dailyFortune: "你可能会卷入一场冲突，即使你赢了，也可能是惨胜。需要审视你的动机和行为是否建立在自私之上，避免不必要的争执。",
        actionGuide: {
            suitable: "反思冲突的后果、道歉或放下尊严、避免与人正面争吵。",
            caution: "避免为了胜利而伤害他人。",
        },
        luckyColor: "铁灰色",
        luckyTip: "将争执的焦点写下来，然后将其清除。",
    },

    // 宝剑六 (Six of Swords)
    { 
        id: 55, 
        name: "宝剑六 (Six of Swords)", 
        image: 'images/card-55.png', 
        keyword: "过渡、旅行、移动、摆脱困境",
        dailyFortune: "你正在从一段困难的时期向更平静的未来过渡。今天适合旅行或搬家，将过去的不愉快抛在身后，向前迈进。",
        actionGuide: {
            suitable: "搬家、旅行、处理烦心事、寻找新的环境。",
            caution: "避免再次回头或对过去过于留恋。",
        },
        luckyColor: "海绿色",
        luckyTip: "整理你的旅行箱，即使只是为未来的旅行做准备。",
    },

    // 宝剑七 (Seven of Swords)
    { 
        id: 56, 
        name: "宝剑七 (Seven of Swords)", 
        image: 'images/card-56.png', 
        keyword: "偷偷摸摸、欺骗、逃避、策略",
        dailyFortune: "你可能正在试图偷偷摸摸地逃避某些责任或偷偷获取某物。这提醒你，任何偷偷摸摸的行为最终都可能被发现，要诚实地面对问题。",
        actionGuide: {
            suitable: "制定精明的策略、思考如何不引起注意地完成任务、保护自己的秘密。",
            caution: "避免欺骗他人或做任何不道德的事情。",
        },
        luckyColor: "浅黄色",
        luckyTip: "将你所有的钥匙都整理好，象征你掌握着你所有的秘密。",
    },

    // 宝剑八 (Eight of Swords)
    { 
        id: 57, 
        name: "宝剑八 (Eight of Swords)", 
        image: 'images/card-57.png', 
        keyword: "限制、囚禁、受害者心态、自我设限",
        dailyFortune: "你感觉被困住了，但这张牌告诉你，困住你的不是外界，而是你自己的想法和恐惧。是时候挣脱那些自我设限的信念了。",
        actionGuide: {
            suitable: "挑战负面思想、寻求外界帮助、尝试做一件你认为自己做不到的事情。",
            caution: "避免陷入自怨自艾的受害者心态。",
        },
        luckyColor: "紫色（精神觉醒）",
        luckyTip: "摘下你眼睛上或身上任何不必要的束缚物，象征挣脱限制。",
    },

    // 宝剑九 (Nine of Swords)
    { 
        id: 58, 
        name: "宝剑九 (Nine of Swords)", 
        image: 'images/card-58.png', 
        keyword: "焦虑、噩梦、担忧、恐惧、自责",
        dailyFortune: "夜晚的担忧和焦虑困扰着你。大部分的恐惧都是想象出来的。今天需要你正视并处理让你失眠的根源问题。",
        actionGuide: {
            suitable: "练习深度放松、写下所有的担忧、寻求专业帮助。",
            caution: "避免让焦虑支配你的行动和情绪。",
        },
        luckyColor: "深靛蓝",
        luckyTip: "在床边放一杯水，象征平静你的情绪。",
    },

    // 宝剑十 (Ten of Swords)
    { 
        id: 59, 
        name: "宝剑十 (Ten of Swords)", 
        image: 'images/card-59.png', 
        keyword: "终结、最坏的情况、放下、新的开始",
        dailyFortune: "最坏的情况已经发生，痛苦达到了顶峰，这意味着事情正在触底反弹。放手吧，新的开始就在眼前，别再扮演受害者。",
        actionGuide: {
            suitable: "接受事实、寻找新的出路、放下过去、允许自己彻底休息。",
            caution: "避免自我毁灭或报复心理。",
        },
        luckyColor: "黑色",
        luckyTip: "把旧的、没用的东西扔掉。",
    },

    // 宝剑侍从 (Page of Swords)
    { 
        id: 60, 
        name: "宝剑侍从 (Page of Swords)", 
        image: 'images/card-60.png', 
        keyword: "新思维、好奇心、警觉、健谈",
        dailyFortune: "新的想法和信息正在涌入。你对周围的一切充满好奇心，适合学习和探索。保持警觉，但要小心措辞。",
        actionGuide: {
            suitable: "学习新技术、进行研究、与人辩论、发表意见。",
            caution: "避免空谈或冲动地发表不成熟的言论。",
        },
        luckyColor: "浅黄色",
        luckyTip: "携带一支笔和笔记本，随时记录你的想法。",
    },

    // 宝剑骑士 (Knight of Swords)
    { 
        id: 61, 
        name: "宝剑骑士 (Knight of Swords)", 
        image: 'images/card-61.png', 
        keyword: "冲动、快速行动、鲁莽、雄心壮志",
        dailyFortune: "你以极快的速度和决心向目标冲刺。能量高涨，但容易过于冲动和缺乏计划。必须在行动前三思而后行。",
        actionGuide: {
            suitable: "快速执行任务、挑战权威、明确你的目标。",
            caution: "避免不顾后果地行动或口出狂言。",
        },
        luckyColor: "银白色",
        luckyTip: "在开始一项任务前，先花五分钟制定一个简短的计划。",
    },

    // 宝剑王后 (Queen of Swords)
    { 
        id: 62, 
        name: "宝剑王后 (Queen of Swords)", 
        image: 'images/card-62.png', 
        keyword: "独立、客观、公正、清晰的判断",
        dailyFortune: "今天你需要依靠你的理智和独立性。保持客观和公正，用清晰的逻辑切断情感上的纠缠，做出最明智的决定。",
        actionGuide: {
            suitable: "处理法律事务、进行批评性分析、保持独立工作、制定边界。",
            caution: "避免显得过于苛刻或冷漠。",
        },
        luckyColor: "冰蓝色",
        luckyTip: "在处理问题时，像旁观者一样看待它。",
    },

    // 宝剑国王 (King of Swords)
    { 
        id: 63, 
        name: "宝剑国王 (King of Swords)", 
        image: 'images/card-63.png', 
        keyword: "权威、知识、正直、专业的判断",
        dailyFortune: "代表着高度的专业知识和权威。你的头脑是你的力量，今天是运用逻辑、正直和专业知识来解决复杂问题的绝佳时机。",
        actionGuide: {
            suitable: "主持会议、签署重要文件、寻求或提供专业建议、保持正直的立场。",
            caution: "避免过度独裁或缺乏同情心。",
        },
        luckyColor: "深蓝色",
        luckyTip: "阅读一本你专业领域的书籍。",
    },

    // =======================================================================
    // 星币花色 (Pentacles) - 物质、金钱、健康、工作
    // =======================================================================

    // 星币一 (Ace of Pentacles)
    { 
        id: 64, 
        name: "星币一 (Ace of Pentacles)", 
        image: 'images/card-64.png', 
        keyword: "新的机遇、物质开始、繁荣、安全感",
        dailyFortune: "新的财务或工作机会正在向你招手，带来稳定和繁荣。今天适合开始储蓄计划、启动务实的项目，或投资于你的健康。",
        actionGuide: {
            suitable: "开始一个新的储蓄账户、着手一个能带来稳定收入的项目、关注你的身体健康。",
            caution: "避免让金钱成为唯一的焦点，忽略了精神上的满足。",
        },
        luckyColor: "翠绿色",
        luckyTip: "将一枚闪亮的硬币放入你的钱包，象征吸引财富。",
    },

    // 星币二 (Two of Pentacles)
    { 
        id: 65, 
        name: "星币二 (Two of Pentacles)", 
        image: 'images/card-65.png', 
        keyword: "平衡、灵活、处理多项任务、适应性",
        dailyFortune: "你正在努力平衡生活中的不同领域（如工作与家庭，或两份工作）。保持灵活和适应性，今天需要你展现出色的时间管理能力。",
        actionGuide: {
            suitable: "制定详细的时间表、合理分配资源、学习新的平衡技巧（如瑜伽）。",
            caution: "避免因为分身乏术而感到焦虑或压力过大。",
        },
        luckyColor: "黄色与蓝色",
        luckyTip: "随身携带两个相同的小物件，提醒自己保持平衡。",
    },

    // 星币三 (Three of Pentacles)
    { 
        id: 66, 
        name: "星币三 (Three of Pentacles)", 
        image: 'images/card-66.png', 
        keyword: "团队合作、专业技能、认可、建设",
        dailyFortune: "你的专业技能和努力将获得认可。今天非常适合与团队合作，共同完成一个高质量的项目。你的贡献是不可或缺的。",
        actionGuide: {
            suitable: "参与团队会议、寻求专业人士的意见、投资于专业培训或课程。",
            caution: "避免独自一人闷头工作，要积极与人交流。",
        },
        luckyColor: "深红棕色",
        luckyTip: "向你的同事或伙伴表达诚挚的谢意。",
    },

    // 星币四 (Four of Pentacles)
    { 
        id: 67, 
        name: "星币四 (Four of Pentacles)", 
        image: 'images/card-67.png', 
        keyword: "占有欲、安全感、控制欲、积攒",
        dailyFortune: "你对物质和金钱的安全感需求达到顶峰。这可能是好事（积攒），但也可能让你显得过于固执或吝啬。学会适当放手。",
        actionGuide: {
            suitable: "审查预算、制定长期财务计划、保护你的财产。",
            caution: "避免因为害怕失去而拒绝分享或投资。",
        },
        luckyColor: "土黄色",
        luckyTip: "将一些不用的物品捐赠出去，练习放下和分享。",
    },

    // 星币五 (Five of Pentacles)
    { 
        id: 68, 
        name: "星币五 (Five of Pentacles)", 
        image: 'images/card-68.png', 
        keyword: "贫困、排斥、不安、健康问题",
        dailyFortune: "你可能感到被排斥或处于物质困境。这张牌提醒你，你可能忽略了近在眼前的帮助或资源。是时候寻求支持了。",
        actionGuide: {
            suitable: "寻求专业咨询、关注身体健康、主动向朋友或机构求助。",
            caution: "避免自我封闭，不要让骄傲阻止你接受帮助。",
        },
        luckyColor: "雪白色",
        luckyTip: "给身体带来温暖，喝一杯热饮或穿上保暖的衣物。",
    },

    // 星币六 (Six of Pentacles)
    { 
        id: 69, 
        name: "星币六 (Six of Pentacles)", 
        image: 'images/card-69.png', 
        keyword: "给予和接受、慈善、公平、分享",
        dailyFortune: "今天的主题是平衡的给予和接受。你可能会收到慷慨的帮助，或者你有能力去帮助他人。在公平的基础上分享你的资源。",
        actionGuide: {
            suitable: "进行捐赠或慈善活动、为同事提供帮助、接受别人的馈赠或支持。",
            caution: "避免让不平衡的给予或接受变成一种依赖。",
        },
        luckyColor: "金色与银色",
        luckyTip: "购买一份小礼物送给需要感谢的人。",
    },

    // 星币七 (Seven of Pentacles)
    { 
        id: 70, 
        name: "星币七 (Seven of Pentacles)", 
        image: 'images/card-70.png', 
        keyword: "评估、耐心、等待收成、重新思考",
        dailyFortune: "你的项目或投资已经进行了一段时间，现在是时候停下来评估进度了。需要耐心等待收成，而不是急于改变或放弃。",
        actionGuide: {
            suitable: "进行进度检查、重新审视你的长期目标、在投资前三思。",
            caution: "避免因为看不到立即的结果而感到焦虑或冲动地放弃。",
        },
        luckyColor: "泥土色",
        luckyTip: "在你的办公桌上放一个小沙漏或计时器，提醒自己保持耐心。",
    },

    // 星币八 (Eight of Pentacles)
    { 
        id: 71, 
        name: "星币八 (Eight of Pentacles)", 
        image: 'images/card-71.png', 
        keyword: "学徒、技能、奉献、勤奋",
        dailyFortune: "今天适合投入时间和精力磨练你的专业技能。通过勤奋和奉献精神，你将达到卓越。关注细节，致力于高质量的成果。",
        actionGuide: {
            suitable: "参加工作坊、专注练习一项技能、进行手工或细致的工作。",
            caution: "避免过度工作或忽视了社交生活。",
        },
        luckyColor: "深灰色",
        luckyTip: "花时间打磨你的工具或整理你的工作区域。",
    },

    // 星币九 (Nine of Pentacles)
    { 
        id: 72, 
        name: "星币九 (Nine of Pentacles)", 
        image: 'images/card-72.png', 
        keyword: "富裕、独立、自给自足、享受成果",
        dailyFortune: "你通过自身的努力获得了物质上的丰盛和独立。今天适合享受你辛勤工作带来的成果。对自己的能力充满自信。",
        actionGuide: {
            suitable: "享受奢华的体验、自我奖励、享受独处、投资于你的品味。",
            caution: "避免显得傲慢或与周围的人疏远。",
        },
        luckyColor: "紫色（高贵）",
        luckyTip: "为自己买一件你一直想要但犹豫不决的小奢侈品。",
    },

    // 星币十 (Ten of Pentacles)
    { 
        id: 73, 
        name: "星币十 (Ten of Pentacles)", 
        image: 'images/card-73.png', 
        keyword: "家庭财富、遗产、持久的成功、家族",
        dailyFortune: "代表着圆满、持久的成功和物质上的安全。你不仅为自己，也为家人创造了稳定的基础。今天适合处理家族事务或庆祝传统。",
        actionGuide: {
            suitable: "进行家庭聚会、处理遗产或房产事务、为子女规划未来。",
            caution: "避免让传统或家族压力束缚你的个人发展。",
        },
        luckyColor: "褐色",
        luckyTip: "翻阅家庭相册，感受家族的温暖和历史。",
    },

    // 星币侍从 (Page of Pentacles)
    { 
        id: 74, 
        name: "星币侍从 (Page of Pentacles)", 
        image: 'images/card-74.png', 
        keyword: "新机会、新学习、雄心、实用主义",
        dailyFortune: "一个务实的新机会或学习机会正在出现。你充满好奇心和雄心，但需要脚踏实地，从基础做起，将想法转化为实际的行动。",
        actionGuide: {
            suitable: "开始学习新技能、接受实习或学徒机会、规划新的财务目标。",
            caution: "避免过于好高骛远或缺乏执行力。",
        },
        luckyColor: "浅绿色",
        luckyTip: "将一个目标写下来，并立即采取第一个行动步骤。",
    },

    // 星币骑士 (Knight of Pentacles)
    { 
        id: 75, 
        name: "星币骑士 (Knight of Pentacles)", 
        image: 'images/card-75.png', 
        keyword: "勤奋、耐心、保守、可靠、努力",
        dailyFortune: "你以缓慢但坚定的步伐向目标前进。成功需要时间和坚持，今天的重点是可靠性和纪律性。保持稳健，切勿冒险。",
        actionGuide: {
            suitable: "处理需要耐心的长期项目、进行需要细致规划的投资、履行你的承诺。",
            caution: "避免固执或因为行动太慢而错过时机。",
        },
        luckyColor: "深棕色",
        luckyTip: "穿一双舒适且结实的鞋子，象征踏实的步伐。",
    },

    // 星币王后 (Queen of Pentacles)
    { 
        id: 76, 
        name: "星币王后 (Queen of Pentacles)", 
        image: 'images/card-76.png', 
        keyword: "慷慨、滋养、实用、家庭舒适、安全感",
        dailyFortune: "你散发着温暖和慷慨的光芒，是家庭和工作中的稳定支柱。今天适合创造一个舒适的环境，并用你的资源滋养他人。",
        actionGuide: {
            suitable: "烹饪美食、装饰家居、处理与女性相关的财务事务、照顾好自己的健康。",
            caution: "避免因为过于专注物质而显得肤浅。",
        },
        luckyColor: "苔绿色",
        luckyTip: "在你的生活空间里放置一些天然的植物或石头。",
    },

    // 星币国王 (King of Pentacles)
    { 
        id: 77, 
        name: "星币国王 (King of Pentacles)", 
        image: 'images/card-77.png', 
        keyword: "商业成功、稳定、富裕、权威、保障",
        dailyFortune: "代表着高度的商业成功和物质保障。你拥有领导力，能够将想法转化为实际的财富。适合做出重要的财务决定。",
        actionGuide: {
            suitable: "进行大规模投资、寻求商业合作、在财务上担任领导角色、享受奢华但有品质的事物。",
            caution: "避免变得过于物质主义或专制。",
        },
        luckyColor: "墨绿色",
        luckyTip: "购买或佩戴一件具有分量的饰品，象征你的稳固地位。",
    }
    // ⚠️ 修正 ID 编号：由于塔罗牌从 0 开始到 77 才是 78 张牌，我们将最后一个 ID 标记为 77。
    // 如果你坚持 ID 从 0 到 78 共 79 张，请自行修改最后一个 ID 编号和图片名。
    // 这里我们保持标准的 78 张牌 (ID 0 - 77)
];


// =======================================================================
// JS 核心逻辑部分 (请将这部分替换掉你文件中旧的逻辑)
// =======================================================================

const cardArea = document.querySelector('.card-area');
const drawButton = document.getElementById('draw-button');
const resultDisplay = document.getElementById('result-display');
let drawnCards = [];
let isCardSelected = false;
let isDrawing = false; 

// 辅助函数：创建卡牌元素
function createCardElement(cardData, index) {
    const card = document.createElement('div');
    card.className = 'tarot-card';
    card.dataset.index = index;
    card.dataset.name = cardData.name; 
    
    const cardBack = document.createElement('div');
    cardBack.className = 'card-face card-back';

    const cardFront = document.createElement('div');
    cardFront.className = 'card-face card-front';
    cardFront.style.backgroundImage = `url(${cardData.image})`;

    card.appendChild(cardBack);
    card.appendChild(cardFront);
    return card;
}


// 1. 抽牌函数 (处理合牌和展开动画)
function drawThreeCards() {
    if (isDrawing) return;
    
    // 如果是重新抽牌，则重置所有状态
    if (isCardSelected) {
        // 允许重新开始
    } else if (drawnCards.length > 0) {
        // 第一次点击“🍀 开始抽牌 · Lucky Draw”
        drawButton.textContent = "洗牌中...";
        drawButton.disabled = true;
        isDrawing = true;
        
        // 执行展开动画 (从合牌状态 -> 展开状态)
        cardArea.classList.remove('stacked');
        document.querySelectorAll('.tarot-card').forEach((card, index) => {
            // 计算展开后的理想位置
            const offset = (index - 1) * 200; // 三张牌，左(-200), 中(0), 右(+200)
            card.style.left = `calc(50% + ${offset}px)`; 
            card.style.transform = `translate(-50%, 0) rotate(${Math.random() * 6 - 3}deg)`;
            
            // 动画结束后添加点击事件
            setTimeout(() => {
                card.addEventListener('click', handleCardSelection);
                drawButton.textContent = "请选择一张牌";
                isDrawing = false;
            }, 1000); 
        });
        return; // 结束当前函数，等待用户选择
    }

    // --- 准备新的抽牌（重置或初始化）---
    isDrawing = true;
    
    // 清理旧状态
    cardArea.innerHTML = '';
    resultDisplay.classList.add('hidden');
    drawButton.disabled = true;
    isCardSelected = false;

    // 随机抽取三张不重复的牌
    const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
    drawnCards = shuffled.slice(0, 3);
    
    // 步骤 A: 初始化为合牌状态
    cardArea.classList.add('stacked');
    drawnCards.forEach((cardData, index) => {
        const card = createCardElement(cardData, index);
        
        card.classList.remove('is-flipped'); 
        card.classList.remove('is-selected'); 
        
        cardArea.appendChild(card);
        
        // 模拟轻微的洗牌旋转和堆叠 (CSS 会处理定位，这里只是微调角度)
        card.style.transform = `translate(-50%, 0) rotate(${Math.random() * 5 - 2.5}deg)`;
        card.style.zIndex = 10 + index; // 确保牌叠在一起有层次感
    });

    // 步骤 B: 按钮恢复为“开始抽牌”
    drawButton.textContent = "🍀 开始抽牌 · Lucky Draw";
    drawButton.disabled = false;
    isDrawing = false;
}


// 2. 处理卡牌选择的函数 (处理详细结果显示)
function handleCardSelection(event) {
    if (isCardSelected) return;

    const selectedCard = event.currentTarget;
    const cardIndex = parseInt(selectedCard.dataset.index);
    const cardData = drawnCards[cardIndex];

    // 1. 翻转并选中卡牌
    selectedCard.classList.add('is-flipped');
    selectedCard.classList.add('is-selected');
    isCardSelected = true;

    // 2. 移除其他卡牌的点击事件，并翻转未选中的牌
    document.querySelectorAll('.tarot-card').forEach(card => {
        card.removeEventListener('click', handleCardSelection);
        if (card !== selectedCard) {
            // 其他卡牌不变，只添加一个类来降低透明度
            card.classList.add('is-hidden'); // 或者使用其他类名
        }
    });

    // 3. 显示详细解读结果
    setTimeout(() => {
        const result = cardData;
        resultDisplay.classList.remove('hidden');
        
        // 填充 HTML 元素
        document.getElementById('result-title').textContent = `✨ 你的选择：${result.name} ✨`;
        document.getElementById('key-words').textContent = result.keyword;
        document.getElementById('daily-fortune').textContent = result.dailyFortune;
        document.getElementById('suitable-action').textContent = result.actionGuide.suitable;
        document.getElementById('caution-action').textContent = result.actionGuide.caution;
        document.getElementById('lucky-color').textContent = result.luckyColor;
        document.getElementById('lucky-tip').textContent = result.luckyTip;

        // 按钮恢复为重新抽牌
        drawButton.textContent = "重新抽牌";
        drawButton.disabled = false; 
    }, 1000); 
}

// 3. 绑定按钮事件
drawButton.addEventListener('click', drawThreeCards);

// 首次加载：在页面加载时执行抽牌，展示合牌状态
drawThreeCards();
