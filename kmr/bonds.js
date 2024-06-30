const bondData = [
    {
        id: 1,
        name: '双蛆之力',
        rarity: 'bronze',
        characters: ["空调宅男","佐伯艾莉丝"],
        benefit: '每级使羁绊中角色由于成长获得攻击力时，额外增加10点。',
        upgradeExtraA: 10
    },
    {
        id: 2,
        name: '出列！',
        rarity: 'bronze',
        characters: ["空调宅男","大栗QAQ"],
        benefit: '每级额外增加40%羁绊中角色造成的伤害。',
        extraDam: 0.4
    },
    {
        id: 3,
        name: '贴贴',
        rarity: 'bronze',
        characters: ["璐缇雅","大栗QAQ"],
        benefit: '每级额外增加40%羁绊中角色造成的伤害。',
        extraDam: 0.4
    },
    {
        id: 4,
        name: '圆桌组',
        rarity: 'bronze',
        characters: ["蕾米莉亚","竹取玉白"],
        benefit: '每级使[阴阳秘法]增加攻击力数值增加1倍，且触发时，还会使所有助战增加[该助战等级]成长。',
        skillPlus: ['阴阳秘法',1]
    },
    {
        id: 5,
        name: '皇家组',
        rarity: 'bronze',
        characters: ["红白睡不醒","茶叶OMO"],
        benefit: '每级使羁绊中角色增加攻击力时的数值增加3%。',
        extraAtkGain: 0.03
    },
    {
        id: 6,
        name: '车万内战',
        rarity: 'bronze',
        characters: ["八云橙汁","蕾米莉亚"],
        benefit: '每级额外增加20%羁绊中角色造成的伤害。',
        extraDam: 0.2
    },
    {
        id: 7,
        name: '怀疑胜率',
        rarity: 'bronze',
        characters: ["星野饼美","龙魂仓鼠"],
        benefit: '每级使[理解不行]额外增加2%触发概率。（超过20%的部分将衰减）',
        skillPlus: ['理解不行',[0.02,20,0.5]]
    },
    {
        id: 8,
        name: '宅字会导致0-2',
        rarity: 'bronze',
        characters: ["空调宅男","第六天宅王"],
        benefit: '每级使羁绊中角色增加攻击力时的数值增加3%。',
        extraAtkGain: 0.03
    },
    {
        id: 9,
        name: '蓝色按键',
        rarity: 'bronze',
        characters: ["梧桐","竹取玉白"],
        benefit: '每级额外增加20%羁绊中角色造成的伤害。',
        extraDam: 0.2
    },
    {
        id: 10,
        name: '大狐小狐',
        rarity: 'bronze',
        characters: ["竹取玉白","奇稻田狐"],
        benefit: '每级使羁绊中角色增加攻击力时的数值增加3%。',
        extraAtkGain: 0.03
    },
    {
        id: 1001,
        name: '夫妻上阵',
        rarity: 'silver',
        characters: ["5689eg09h","折光成影"],
        benefit: '每级使羁绊中角色其中一方由于升级增加攻击力时，另一方也会提升增长值6%的攻击力。（超过60%的部分将衰减）',
        upBond: [0.06,10,0.5]
    },
    {
        id: 1002,
        name: '恐怖双🐷',
        rarity: 'silver',
        characters: ["阿万音铃羽","美少女莉莉子"],
        benefit: '每级使羁绊中角色升级消费金钱减少5%。（超过25%的部分将衰减）',
        upgradeMinusCost: [0.05,5,0.5]
    },
    {
        id: 1003,
        name: '君权神授',
        rarity: 'silver',
        characters: ["ZenX","kaga"],
        benefit: '每级使[上帝]的增加量增加2%（超过10%的部分将衰减）',
        skillPlus: ['上帝',[0.02,5,0.4]]
    },
    {
        id: 1004,
        name: '新卡速递',
        rarity: 'silver',
        characters: ["yokidou","英梨梨的男友"],
        benefit: '每级使羁绊中角色升级消费金钱减少5%。（超过50%的部分将衰减）',
        upgradeMinusCost: [0.05,10,0.5]
    },
    {
        id: 1005,
        name: '双🐷把家还',
        rarity: 'silver',
        characters: ["热乎闹闹","祈雅喵哒"],
        benefit: '每级使羁绊中角色升级消费金钱减少5%。（超过50%的部分将衰减）',
        upgradeMinusCost: [0.05,10,0.5]
    },
    {
        id: 1006,
        name: '名言窃取',
        rarity: 'silver',
        characters: ["kaga","达拉斯泰尔"],
        benefit: '[虫法之王]使kaga增加攻击力时，每级使增加量额外增加50%且[虫法之王]的数值额外增加1。',
        skillPlus: ['虫法之王',0.5]
    },
    {
        id: 1007,
        name: '华容道义释Z神',
        rarity: 'silver',
        characters: ["八云橙汁","ZenX"],
        benefit: '[巨人]计算攻击力之和时，每级额外计算30% ZenX的攻击力。',
        skillPlus: ['巨人',0.3]
    },
    {
        id: 1008,
        name: '继承者',
        rarity: 'silver',
        characters: ["L_ost","大栗QAQ"],
        benefit: '[太上皇]战队解散时，每级使技能持有者获得[战队队员总攻击^0.9*0.1]点攻击力。',
        skillPlus: ['太上皇',0.1]
    },
    {
        id: 1009,
        name: '原初企划组',
        rarity: 'silver',
        characters: ["一只小飘飘","六月絮雨"],
        benefit: '每级使羁绊中角色升级消费金钱减少5%。（超过25%的部分将衰减）',
        upgradeMinusCost: [0.05,5,0.5]
    },
    {
        id: 1010,
        name: '三个臭皮匠',
        rarity: 'silver',
        characters: ["Minsaw丨Scarlet","铁血大教头m16","英梨梨的男友"],
        benefit: '每级使羁绊中角色升级消费金钱减少5%。（超过25%的部分将衰减）',
        upgradeMinusCost: [0.05,5,0.5]
    },
    {
        id: 2001,
        name: '53赛季',
        rarity: 'gold',
        characters: ["星导过星导","折光成影","雪雪"],
        benefit: '每级使全部角色升级消费金钱减少2%。',
        upgradeAllMinusCost: [0.02,20,0.5]
    },

    {
        id: 2002,
        name: 'ygg和女人的故事',
        rarity: 'gold',
        characters: ["茶叶OMO","大栗QAQ","折光成影"],
        benefit: '每级使[皇室荣耀]的伤害提升时，提升量增加50%。',
        skillPlus: ['皇室荣耀',0.5]
    },
    {
        id: 2003,
        name: '新卡发布',
        rarity: 'gold',
        characters: ["璐缇雅","星野饼美"],
        benefit: '每级使解锁/重抽助战消费金钱减少3%。（超过30%的部分将衰减）',
        unlockMinusCost: [0.03,10,0.8]
    },
    {
        id: 2004,
        name: '罕见太多了',
        rarity: 'gold',
        characters: ["一只小吾影","星导过星导","空调宅男","第六天宅王"],
        benefit: '每级使[罕见]获得的金币量增加10%。（超过100%的部分将衰减，依然不能超过最高伤害）',
        unlockMinusCost: [0.1,10,0.6]
    },
    {
        id: 2005,
        name: '暗杀饼神',
        rarity: 'gold',
        characters: ["一只小吾影","星野饼美","真白"],
        benefit: '每级使[转生]获得的以太数增加10%。',
        moreEther: 0.1
    },
    {
        id: 2006,
        name: '虫之羁绊',
        rarity: 'gold',
        characters: ["清鱼","达拉斯泰尔","艺の年"],
        benefit: '每级使[虫虫咬他]还会在由于升级增加攻击力时，使成长永久增加[(增加的攻击力)^0.9的1%]点（至少1点）',
        skillPlus: ['虫虫咬他',0.01]
    },
    {
        id: 2007,
        name: '三人行必有我🐷',
        rarity: 'gold',
        characters: ["Foyria","雪雪","一只小吾影"],
        benefit: '每级使[转生]获得的以太数增加10%。',
        moreEther: 0.1
    },
    {
        id: 3006,
        name: '最初的编年史',
        rarity: 'rainbow',
        characters: ["英梨梨的男友","永生的希望"],
        benefit: '每级使[造谣]触发的次数+1。',
        skillPlus: ['造谣',1]
    },
    {
        id: 3001,
        name: 'SNC2022',
        rarity: 'rainbow',
        characters: ["星导过星导","折光成影","蕾米莉亚","雪雪","八云橙汁","竹取玉白","一只小吾影","大栗QAQ"],
        benefit: '每级额外增加50%全部角色造成的伤害。',
        extraDamAll: 0.5
    },
    {
        id: 3002,
        name: '饼佬打的真是好',
        rarity: 'rainbow',
        characters: ["星野饼美","ZenX","一只小飘飘"],
        benefit: '每级使[每日饼之诗]的攻击力增加量增加25%。',
        skillPlus: ['每日饼之诗',0.25]
    },
    {
        id: 3003,
        name: '佐伯家族',
        rarity: 'rainbow',
        characters: ["佐伯艾莉丝","大栗QAQ","一只小吾影","雪雪","空调宅男","梧桐","阿万音铃羽","热乎闹闹","美少女莉莉子"],
        benefit: '每级使全部角色升级时增加的攻击力增加10%。(至少1点)',
        upgradeAllAPlus: 0.1
    },
    {
        id: 3004,
        name: '我们是亚军！',
        rarity: 'rainbow',
        characters: ["ZenX","Foyria","折光成影","阿万音铃羽"],
        benefit: '每级使总伤害排名为2或2的次方的角色获取的金币量增加100%。恰好为第2的改为增加300%。',
        RunnerUpGoldPlus: [1,3]
    },
    {
        id: 3005,
        name: 'WGP2019兄弟会',
        rarity: 'rainbow',
        characters: ["真白","ZenX","天然呆的龙","艺の年"],
        benefit: '每级使你前进周目时，如果周目是3的倍数，直接获得1以太。',
        threeGainEther: 1
    }
    // 添加更多羁绊信息
];
