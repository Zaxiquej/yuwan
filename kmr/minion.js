const minions = [
    {
        name: '空调宅男',
        id: 0,
        image: 'kmr/image/ktzn.png',
        voice: 'kmr/voice/ktzn.mp3',
        description: '致敬传奇双职业首任霸主ktzn',
        baseattack: 7,
        addattack: 6,
        attackSpeed: 2800, // in milliseconds
        basecost: 16,
        enhancecost: 7,
        supEnhancecost: 4,
        skills: [
            { level: 4, name: '素质家族', effect: '8%概率造成 2000% 伤害。' },
            { level: 24, name: '构筑带师', effect: '其他助战升级时，额外获得[该助战攻击力^(0.9)/30]点攻击力。' }
        ]
    },
    {
        name: '佐伯艾莉丝',
        id: 1,
        image: 'kmr/image/zbals.png',
        voice: 'kmr/voice/zbals.mp3',
        description: '群星杯版本答案牢艾',
        baseattack: 6,
        addattack: 4,
        attackSpeed: 1100, // in milliseconds
        basecost: 18,
        enhancecost: 8,
        supEnhancecost: 3,
        skills: [
            { level: 6, name: '冲击冠军', effect: '4%概率攻击时永久提升[0.1*该助战等级*(该助战攻击力)^(0.6)]点攻击。' },
            { level: 39, name: '永失吾艾', effect: '8%概率在其他助战攻击时，直接攻击。' }
        ]
    },
    {
        name: '梧桐',
        id: 2,
        image: 'kmr/image/amlls.png',
        voice: 'kmr/voice/amlls.mp3',
        description: '只会奶1的amlls梧桐🐷🐷',
        baseattack: 6,
        addattack: 3,
        attackSpeed: 1800, // in milliseconds
        basecost: 24,
        enhancecost: 6,
        supEnhancecost: 3.5,
        skills: [
            { level: 3, name: '奶1', effect: '33%概率在攻击时，额外获得等同于[该助战等级^2]的金币。' },
            { level: 24, name: '苦痛', effect: '所有其他助战攻击时，额外造成等同于[该助战攻击力*0.5]的伤害。' }
        ]
    },
    {
        name: '大栗QAQ',
        id: 3,
        image: 'kmr/image/lz.png',
        voice: 'kmr/voice/lz.mp3',
        description: '栗劳斯今天又没有开播',
        baseattack: 9,
        addattack: 9,
        attackSpeed: 2500, // in milliseconds
        basecost: 30,
        enhancecost: 11,
        supEnhancecost: 3.4,
        skills: [
            { level: 8, name: '开播！', effect: '该助战攻击时，额外造成等同于[金币^(0.66)*该助战等级/1000]的伤害。' },
            { level: 50, name: '白骨夫人', effect: '所有升级消费金币降低20%。（每100级额外减少1%，最高30%）' }
        ]
    },
    {
        name: '奈特温',
        id: 4,
        image: 'kmr/image/nv.png',
        voice: 'kmr/voice/nv.mp3',
        description: '本英雄由解析冠名赞助',
        baseattack: 7,
        addattack: 4,
        attackSpeed: 1200, // in milliseconds
        basecost: 25,
        enhancecost: 13,
        supEnhancecost: 3.7,
        skills: [
            { level: 6, name: '说书', effect: '攻击速度减少0.4s。' },
            { level: 30, name: '运气不如他们', effect: '其他助战成功触发一个概率低于20%的技能后，该助战永久获得[该助战攻击力^(0.6)/10]攻击力。' }
        ]
    },
    {
        name: '昨日之俗',
        id: 5,
        image: 'kmr/image/su.png',
        voice: 'kmr/voice/su.mp3',
        description: '鲁大师在人间的化身',
        baseattack: 35,
        addattack: 24,
        attackSpeed: 4800, // in milliseconds
        basecost: 24,
        enhancecost: 10,
        supEnhancecost: 3.2,
        skills: [
            { level: 5, name: '鲁智深', effect: '增加[40*等级]攻击力。此技能还会在每个25的倍数等级触发，首次触发时额外重复一次。' },
            { level: 24, name: '金牌陪练', effect: '攻击后，18%概率随机使一个其他助战永久获得[该助战攻击力/15]点攻击力，并令其立刻攻击一次，伤害视为该助战造成。' }
        ]
    },
    {
        name: '星野饼美',
        id: 6,
        image: 'kmr/image/bing.png',
        voice: 'kmr/voice/bing.mp3',
        description: '饼神伟大，无需多言',
        baseattack: 30,
        addattack: 18,
        attackSpeed: 6940, // in milliseconds
        basecost: 20,
        enhancecost: 8,
        supEnhancecost: 5,
        skills: [
            { level: 9, name: '五种打法', effect: '如果你连续20s没有进行任何操作，获得[5*你拥有的助战数*(当前周目数+1)]点攻击力。' },
            { level: 50, name: '每日饼之诗', effect: '每90s，使全部其他助战永久获得[该助战攻击力/25]点攻击力。' }
        ]
    },
    {
        name: '竹取玉白',
        id: 7,
        image: 'kmr/image/fox.png',
        voice: 'kmr/voice/fox.mp3',
        description: '狐神太热爱szb了，我哭死',
        baseattack: 7,
        addattack: 6,
        attackSpeed: 2250, // in milliseconds
        basecost: 22,
        enhancecost: 8,
        supEnhancecost: 3.4,
        skills: [
            { level: 6, name: '阴阳秘法', effect: '所有助战增加[3*该助战等级]攻击力。此技能还会在每个36的倍数等级触发，首次触发时额外重复一次。' },
            { level: 66, name: '次元超越', effect: '每40s，使全部其他助战攻击一次，伤害视为该助战造成。（[等级^0.8]每有100，减少1s倒数，最多减为25s）' }
        ]
    },
    {
        name: '璐缇雅',
        id: 8,
        image: 'kmr/image/lty.png',
        voice: 'kmr/voice/lty.mp3',
        description: '这是我们的超美丽官方牢头，你们的游戏有这种牢头吗',
        baseattack: 9,
        addattack: 7,
        attackSpeed: 2000, // in milliseconds
        basecost: 18,
        enhancecost: 6,
        supEnhancecost: 3.33,
        skills: [
            { level: 4, name: '+1+1', effect: '攻击后，有6%概率将攻击力转变为1.1倍，但攻击间隔也转变为1.08倍。' },
            { level: 40, name: '饿龙咆哮', effect: '每24s，造成等同于[攻击力*攻击间隔]的伤害。' }
        ]
    },
    {
        name: '一只小吾影',
        id: 9,
        image: 'kmr/image/51.png',
        voice: 'kmr/voice/51.mp3',
        description: '掌握郭楠之力的战士',
        baseattack: 7,
        addattack: 6,
        attackSpeed: 2200, // in milliseconds
        basecost: 24,
        enhancecost: 8,
        supEnhancecost: 3.5,
        skills: [
            { level: 8, name: '罕见', effect: '每50s，直接获得10%金币量的金币（获取量不能超过kmr单次受到的最高伤害）。' },
            { level: 30, name: 'GN', effect: '其他助战攻击触发其自己的技能时，该助战有10%概率增加等同于[其攻击力3%]的攻击力，随后该助战追加3次攻击。' }
        ]
    },
    {
        name: 'ZenX',
        id: 10,
        image: 'kmr/image/zenx.png',
        voice: 'kmr/voice/zenx.mp3',
        description: 'szb永远的上帝，兼任亚军',
        baseattack: 20,
        addattack: 16,
        attackSpeed: 3900, // in milliseconds
        basecost: 48,
        enhancecost: 18,
        supEnhancecost: 4.5,
        skills: [
            { level: 12, name: '掌控', effect: '每11s，有12.5%的概率使下一次攻击造成的伤害变为8倍。每次触发，使倍率增加4。' },
            { level: 60, name: '上帝', effect: '其他助战永久增加攻击力时，该助战也会永久获得增加量的12%。（至少1点）' },
        ]
    },
    {
        name: '清鱼',
        id: 11,
        image: 'kmr/image/fish.png',
        voice: 'kmr/voice/fish.mp3',
        description: 'szb最后的妖精使',
        baseattack: 11,
        addattack: 1,
        attackSpeed: 1900, // in milliseconds
        basecost: 9,
        enhancecost: 16,
        supEnhancecost: 5,
        skills: [
            { level: 11, name: '虫虫咬他', effect: '升级该角色后，永久提升[等级]点成长。' },
            { level: 33, name: '无尽连击', effect: '每当任何助战攻击，该助战获得等同于成长50%的临时攻击力。每30s，失去这些临时攻击力，但是有5%概率将其的10%转变为永久攻击力，且每50级提升1%概率（上限25%）。' }
        ]
    },
    {
        name: '一只小飘飘',
        id: 12,
        image: 'kmr/image/piao.png',
        voice: 'kmr/voice/piao.mp3',
        description: '可恶小票风',
        baseattack: 14,
        addattack: 9,
        attackSpeed: 3000, // in milliseconds
        basecost: 24,
        enhancecost: 9.6,
        supEnhancecost: 4.8,
        skills: [
            { level: 8, name: '一十九米肃清刀', effect: '每19s，造成等同于[攻击力*你拥有的助战数/2]的伤害。' },
            { level: 38, name: '电表白转', effect: '每当一个倒计时技能触发后，15%概率将其进度转变为50%，而不是从零开始。（每50级提高1%概率，最高40%）' }
        ]
    },
    {
        name: '美少女莉莉子',
        id: 13,
        image: 'kmr/image/lili.png',
        voice: 'kmr/voice/lili.mp3',
        description: '恐怖双🐷之lilipig',
        baseattack: 10,
        addattack: 7,
        attackSpeed: 2800, // in milliseconds
        basecost: 19,
        enhancecost: 6,
        supEnhancecost: 3,
        skills: [
            { level: 7, name: '身外化身', effect: '介绍中含有🐷的助战攻击后，10%概率令其重新攻击一次，伤害视为该助战造成。' },
            { level: 34, name: '双猪的羁绊', effect: '每当介绍中含有🐷的助战升级后，如果等级为5的倍数，使其攻击力增加[该助战等级*该助战攻击力^0.6/10]的数值。' }
        ]
    },
    {
        name: '5689eg09h',
        id: 14,
        image: 'kmr/image/5689.png',
        voice: 'kmr/voice/5689.mp3',
        description: '前面忘了，妖精的上策，后面忘了',
        baseattack: 33,
        addattack: 22,
        attackSpeed: 5689, // in milliseconds
        basecost: 28,
        enhancecost: 9.6,
        supEnhancecost: 4.8,
        skills: [
            { level: 8, name: '铁犀冲锋', effect: '每8s，4%概率造成[攻击力*(等级^0.6)]的伤害。' },
            { level: 56, name: '重返赛场', effect: '所有其他概率低于20%触发的技能如果触发失败，21%概率重新判定一次，不会重复发动。（每25级提升1%概率，最高50%）' }
        ]
    },
    {
        name: '阿万音铃羽',
        id: 15,
        image: 'kmr/image/0.png',
        voice: 'kmr/voice/0.mp3',
        description: '恐怖双🐷之0🐷',
        baseattack: 6,
        addattack: 5,
        attackSpeed: 1800, // in milliseconds
        basecost: 29,
        enhancecost: 8,
        supEnhancecost: 3.6,
        skills: [
            { level: 6, name: '光速上分', effect: '其他助战升级时，10%概率获得本次升级需求金币的30%。（每10级额外返还1%，上限100%）' },
            { level: 36, name: '双猪齐力', effect: '升级后，50%概率免费使一个随机其他介绍中含有🐷的助战升级。' }
        ]
    },
    {
        name: '八云橙汁',
        id: 16,
        image: 'kmr/image/ch.png',
        voice: 'kmr/voice/ch.mp3',
        description: '守关大将关云橙',
        baseattack: 20,
        addattack: 14,
        attackSpeed: 4000, // in milliseconds
        basecost: 24,
        enhancecost: 10,
        supEnhancecost: 4.2,
        skills: [
            { level: 8, name: '巨人', effect: '每32s，造成[全部助战攻击力之和*该助战攻击力位数/2]的伤害。' },
            { level: 42, name: '护国神橙', effect: '所有直接攻击外的伤害增加[20+等级^0.6]%。' }
        ]
    },
    {
        name: '红白睡不醒',
        id: 17,
        image: 'kmr/image/hb.png',
        voice: 'kmr/voice/hb.mp3',
        description: '本英雄由杜兰朵冠名赞助',
        baseattack: 12,
        addattack: 8,
        attackSpeed: 2200, // in milliseconds
        basecost: 24,
        enhancecost: 10,
        supEnhancecost: 4.2,
        skills: [
            { level: 10, name: '小猪存钱罐', effect: '降低40%解锁助战与重抽助战需要的金币。' },
            { level: 36, name: '日一皇', effect: '当你升级助战后，如果你的助战等级之和变为100的倍数，使全部助战攻击力与成长增加[等级之和/10]。' }
        ]
    },
    {
        name: '蕾米莉亚',
        id: 18,
        image: 'kmr/image/rem.png',
        voice: 'kmr/voice/rem.mp3',
        description: '蕾咪最终还是抽到了他最爱的大小姐',
        baseattack: 5,
        addattack: 3,
        attackSpeed: 1300, // in milliseconds
        basecost: 24,
        enhancecost: 10,
        supEnhancecost: 4.2,
        skills: [
            { level: 8, name: '复仇', effect: 'kmr的生命值低于一半时，该助战对其造成的伤害增加[50+等级^0.75]%。' },
            { level: 50, name: '操纵命运', effect: '每35s，使下2个概率低于20%触发的技能触发概率变为4倍。（每100级增加1个，上限12个）' }
        ]
    },
    {
        name: 'yokidou',
        id: 19,
        image: 'kmr/image/ykd.png',
        voice: 'kmr/voice/ykd.mp3',
        description: '🐷族大厨的命运抉择：入厂曲 或 谢幕曲',
        baseattack: 10,
        addattack: 10,
        attackSpeed: 2500, // in milliseconds
        basecost: 12,
        enhancecost: 6,
        supEnhancecost: 2.2,
        skills: [
            { level: 5, name: '下饭', effect: '10%的概率攻击时猪鼻，造成伤害改为回复kmr的生命值，但获得[攻击力位数]倍的金币。在此基础上，10%概率进入下饭模式，你接下来[攻击力位数]秒内获得的全部金币增加200%。（上限10秒，时间内再次触发改为延长时间）' },
            { level: 24, name: '成熟', effect: '每60s，失去1%等级，并使一个随机其他助战失去1%等级（至少1级，不会因此失去攻击力或失去已学会的技能，最多降为1级）。' }
        ]
    },
    {
        name: '雪亲王',
        id: 20,
        image: 'kmr/image/xqw.png',
        voice: 'kmr/voice/xqw.mp3',
        description: '靠运气走不了太远，但是祥瑞御免另说',
        baseattack: 12,
        addattack: 8,
        attackSpeed: 2200, // in milliseconds
        basecost: 12,
        enhancecost: 6,
        supEnhancecost: 3.2,
        skills: [
            { level: 6, name: '祥瑞', effect: '该助战与前/后一个助战攻击kmr时，其攻击力会在50%~200%内随机浮动。（每10级增加4%上限同时降低1%下限，下限最低为0%，上限最高为1000%。）' },
            { level: 33, name: '大梦仙尊', effect: '攻击后，0.5%概率使下5次你升级助战需要的金币数转变为0。（攻击力超过1024后，每到达2的一个次方，提升0.05%概率，上限2%。）' }
        ]
    },
    {
        name: '茶叶OMO',
        id: 21,
        image: 'kmr/image/ygg.png',
        voice: 'kmr/voice/ygg.mp3',
        description: 'ygg又败给了女人，我们皇家护卫什么时候才能站起来（bushi',
        baseattack: 8,
        addattack: 4,
        attackSpeed: 1000, // in milliseconds
        basecost: 18,
        enhancecost: 4,
        supEnhancecost: 3.25,
        skills: [
            { level: 8, name: '中速导师', effect: '你解锁或重抽助战后，立刻免费将其升1级，本次升级提升的攻击力为[该助战等级/2]倍。随后将其等级变回1。（保留获得的攻击力，不会因此获得技能）。' },
            { level: 36, name: '皇室荣耀', effect: '攻击时10%概率额外造成322点伤害。每当助战在升级时提升攻击力，该技能的伤害提升等量数值。' }
        ]
    },
    {
        name: '雪雪',
        id: 22,
        image: 'kmr/image/xx.png',
        voice: 'kmr/voice/xx.mp3',
        description: '热知识：我们敬爱的雪雪选手已在2023年打败了结晶教心魔',
        baseattack: 14,
        addattack: 7,
        attackSpeed: 2250, // in milliseconds
        basecost: 15,
        enhancecost: 6.4,
        supEnhancecost: 3.2,
        skills: [
            { level: 4, name: '打个教先', effect: '攻击时，70%概率造成200%伤害。（每15级，降低1%概率但增加10%伤害，最低降为20%概率，最高1000%伤害）' },
            { level: 44, name: '魔咒', effect: '每48s，使你下一次攻击不再判定[打个教先]，而是改为额外造成[本局游戏[打个教先]最高连续失败次数^2.25]倍的伤害。（目前最高连续失败次数为0）。' }
        ]
    },
    {
        name: '星导过星导',
        id: 23,
        image: 'kmr/image/xd.png',
        voice: 'kmr/voice/xd.mp3',
        description: '这里是不务正业又犯🐷病的屑作者🐷导',
        baseattack: 7,
        addattack: 6,
        attackSpeed: 1700, // in milliseconds
        basecost: 17,
        enhancecost: 7,
        supEnhancecost: 3.25,
        skills: [
            { level: 5, name: '不稳定的传送门', effect: '解锁新助战时重抽次数由2次转变为3次，下3次重抽变为免费。' },
            { level: 32, name: '逆境被动', effect: '每12s，该助战有0%概率获得[其他助战中最大的[攻击力/攻击间隔]/10]点攻击力，且追加0次攻击。每有一个总伤害高于该助战的其他助战，触发概率增加2%，并追加2次攻击。' }
        ]
    },
    {
        name: '英梨梨的男友',
        id: 24,
        image: 'kmr/image/yll.png',
        voice: 'kmr/voice/yll.mp3',
        description: '接下来我要点名一名柚子厨',
        baseattack: 10,
        addattack: 10,
        attackSpeed: 3200, // in milliseconds
        basecost: 27,
        enhancecost: 12,
        supEnhancecost: 3.75,
        skills: [
            { level: 11, name: '造谣', effect: '每14s，随机使1名助战攻击力的随机1位数字增加1（不视作增加攻击，非首位的9会变为0，首位则会变为10）（等级每有50，额外重复1次）。' },
            { level: 34, name: '黄油品鉴', effect: '攻击时，10%概率使随机1名具有倒计时技能助战的技能倒计时加快3s，溢出部分不会结算至下一循环。（每100级，增加1s，上限8s）' }
        ]
    },
    {
        name: '梦生白涅',
        id: 25,
        image: 'kmr/image/meng.png',
        voice: 'kmr/voice/meng.mp3',
        description: '梦子什么时候cos水银灯',
        baseattack: 11,
        addattack: 7,
        attackSpeed: 2400, // in milliseconds
        basecost: 22,
        enhancecost: 11,
        supEnhancecost: 3.6,
        skills: [
            { level: 8, name: '偶像', effect: '攻击时，7%概率使所有己方助战在接下来10s内攻击时，额外造成[20+本次攻击伤害位数*2]%的伤害（可叠加）。' },
            { level: 55, name: '人偶使', effect: '攻击时，8%概率令1个随机不具有此技能的助战攻击，触发3次，伤害视为该助战造成。如果正处于[偶像]的状态中，每有一层则额外增加3次。' }
        ]
    },
    {
        name: '热乎闹闹',
        id: 26,
        image: 'kmr/image/nao.png',
        voice: 'kmr/voice/nao.mp3',
        description: '最爱钻研独门构筑的闹闹🐷',
        baseattack: 8,
        addattack: 7,
        attackSpeed: 1800, // in milliseconds
        basecost: 26,
        enhancecost: 7,
        supEnhancecost: 3.4,
        skills: [
            { level: 4, name: '汲取兄弟', effect: '每25s，有15%概率获得一个随机其他介绍中带有🐷的助战的攻击力的2%（至少1点），并使其失去3等级（不会因此失去攻击力或失去已学会的技能，最多降为1级）。' },
            { level: 36, name: '闹系列', effect: '升级后，如果等级变为质数，接下来8s内，[汲取兄弟]的触发概率变为45%，且所有介绍中带有🐷的助战攻击后，下一秒[汲取兄弟]倒计时立刻归零（时间内再次触发改为延长时间）。' }
        ]
    },
    {
        name: '折光成影',
        id: 27,
        image: 'kmr/image/zhe.png',
        voice: 'kmr/voice/zhe.mp3',
        description: 'szb指定涅尔瓦单推人',
        baseattack: 11,
        addattack: 11,
        attackSpeed: 2311, // in milliseconds
        basecost: 28,
        enhancecost: 9.6,
        supEnhancecost: 4.8,
        skills: [
            { level: 9, name: '乾坤一掷', effect: '攻击后，有3%概率附加2600点伤害；在此基础上，3%概率将本技能的伤害转变为[kmr单次受到的最高伤害/11]点伤害（不会低于原本伤害）。' },
            { level: 65, name: '终将降临的肃清', effect: '[乾坤一掷]中的任何一项触发失败后，30%概率重新判定一次。每次[乾坤一掷]重新判定依然失败，使该部分成功率增加0.3%。成功后，消除该部分的额外成功率。（每50级增加1%改判概率，最高100%）' }
        ]
    },
    {
        name: '第六天宅王',
        id: 28,
        image: 'kmr/image/6z.png',
        voice: 'kmr/voice/6z.mp3',
        description: '灌注大宅喵，灌注大宅谢谢喵',
        baseattack: 24,
        addattack: 16,
        attackSpeed: 4000, // in milliseconds
        basecost: 22,
        enhancecost: 12,
        supEnhancecost: 3.6,
        skills: [
            { level: 8, name: '鼙鼓时间！', effect: '每48s，在接下来的6s内，所有助战攻击后，5%概率再次进行1次攻击（可重复触发，时间内再次触发改为延长时间）。每100级，减少1s倒计时（下限36s）' },
            { level: 46, name: '卓绝的契约', effect: '每局游戏仅限一次，主动或自动将一个助战升到2级时，如果你的助战数为7以上，使其攻击间隔永久减少20%，成长变为10倍，并且攻击力永久增加[该助战的攻击力]的数值。' }
        ]
    },
    {
        name: '龙魂仓鼠',
        id: 29,
        image: 'kmr/image/cangshu.png',
        voice: 'kmr/voice/cangshu.mp3',
        description: '我们至今仍不知道🐉 👻 🐹使用T1的胜率',
        baseattack: 14,
        addattack: 11,
        attackSpeed: 3200, // in milliseconds
        basecost: 22,
        enhancecost: 12,
        supEnhancecost: 3.6,
        skills: [
            { level: 7, name: '理解不行', effect: '攻击后，5%概率获得[10*等级^2]的金币，并失去1等级。攻击力每有1位数，增加1%概率，上限25%。（不会因此失去攻击力或失去已学会的技能，最多降为1级）。' },
            { level: 59, name: '恭顺', effect: '每当一个助战等级降低，使1名具有倒计时技能助战的技能倒计时加快2s，溢出部分不会结算至下一循环。优先加快已倒计时时间最长的助战技能。' }
        ]
    },
    {
        name: 'kaga',
        id: 30,
        image: 'kmr/image/kaga.png',
        voice: 'kmr/voice/kaga.mp3',
        description: '别吵 打箱子呢.png',
        baseattack: 14,
        addattack: 11,
        attackSpeed: 2100, // in milliseconds
        basecost: 29,
        enhancecost: 14,
        supEnhancecost: 4.5,
        skills: [
            { level: 8, name: '死灵艺术', effect: '每当一个倒计时技能触发后，15%概率造成[攻击力*(周目数+1)^0.5]点伤害。' },
            { level: 69, name: '做法', effect: '当一个其他助战获得永久攻击力时，如果增加的数值不足[该随从攻击力的1%]，20%概率将其提升至该数值。（不能超过原数值的4倍。）' }
        ]
    },
    {
        name: '卖火柴的可可亚',
        id: 31,
        image: 'kmr/image/ya.png',
        voice: 'kmr/voice/ya.mp3',
        description: '本英雄的介绍文字被口住了',
        baseattack: 12,
        addattack: 8,
        attackSpeed: 2200, // in milliseconds
        basecost: 15,
        enhancecost: 10,
        supEnhancecost: 5,
        skills: [
            { level: 6, name: '弹幕机器人', effect: '每当一个倒计时技能触发后，8%概率在接下来的8s内，攻击时25%概率额外造成300%伤害。（可叠加，复数伤害叠加）' },
            { level: 52, name: '鸭皇旋风斩！', effect: '如果当前有光环效果（具有持续时长的效果）进行中，攻击时，25%概率使攻击力临时增加[所有助战中最高的攻击力*(0.1*当前光环效果数)]点。' }
        ]
    },
    {
        name: '达拉斯泰尔',
        id: 32,
        image: 'kmr/image/da.png',
        voice: 'kmr/voice/da.mp3',
        description: '智慧的星光，照不亮你心中的蛮荒；午后的虫鸣，找不回你冲分的热情。打牌吗，我是达拉斯泰尔',
        baseattack: 8,
        addattack: 5,
        attackSpeed: 1500, // in milliseconds
        basecost: 32,
        enhancecost: 12,
        supEnhancecost: 4.6,
        skills: [
            { level: 9, name: '虫法之王', effect: '每当一个倒计时技能触发后，使一个随机助战获得1*[该助战攻击力^(0.4)]点攻击力。每次触发，使倍率+1。' },
            { level: 44, name: '法神的宣告', effect: '每60s，造成[X*攻击力]点伤害，将[Y]s分配到其他倒计时上（溢出部分不会结算至下一循环），立刻触发[Z]次[虫法之王]。XYZ的数值为随机指定，其和为[你拥有的助战数]。' }
        ]
    },
    {
        name: '仓仓国の茶馆',
        id: 33,
        image: 'kmr/image/cang.png',
        voice: 'kmr/voice/cang.mp3',
        description: '😎',
        baseattack: 8,
        addattack: 8,
        attackSpeed: 2500, // in milliseconds
        basecost: 24,
        enhancecost: 16,
        supEnhancecost: 4,
        skills: [
          { level: 10, name: '马纳利亚时刻', effect: '该技能为一个随机其他助战的技能。进入新周目后，切换随机技能。（会与技能原持有者共享技能相关变量与光环（具有持续时长的效果）收益，不会随机到一次性技能）' },
          { level: 50, name: '素材奖励', effect: 'kmr的生命值每周目第一次降到1/3以下与2/3以下时，也会切换随机技能。每当你切换到一个已有其他助战学会的技能，使其永久获得本助战攻击力的20%。' }
        ]
    },
    {
        name: '天宇技师',
        id: 34,
        image: 'kmr/image/tyjs.png',
        voice: 'kmr/voice/tyjs.mp3',
        description: '20个优胜，最高32连胜，SNC冠军，wgp梦碎者，现在还是人生导师',
        baseattack: 14,
        addattack: 7,
        attackSpeed: 2000, // in milliseconds
        basecost: 19,
        enhancecost: 12,
        supEnhancecost: 4.6,
        skills: [
            { level: 5, name: '知名皇黑', effect: '每当解锁或重抽助战后，接下来的30s内，kmr受到的伤害增加60%。（时间内再次触发改为延长时间）' },
            { level: 66, name: '记忆殿堂', effect: '每72s，重新获得本局游戏中每种光环（具有持续时长的效果）最后一次获得时的效果。' }
        ]
    },
    {
        name: 'Saki',
        id: 35,
        image: 'kmr/image/saki.png',
        voice: 'kmr/voice/saki.mp3',
        description: '一个不会卖虫的男人',
        baseattack: 19,
        addattack: 14,
        attackSpeed: 3800, // in milliseconds
        basecost: 23,
        enhancecost: 13,
        supEnhancecost: 4.8,
        skills: [
            { level: 8, name: '终轮常客', effect: '每40s，在接下来的20s内，攻击时额外造成[100+该助战等级^0.5]%伤害，但是攻击时有2%概率直接失去此状态并永久增加[2*该助战攻击力^0.9]点攻击力。（可叠加）' },
            { level: 45, name: '咲夜的怀表', effect: '攻击后，1%概率使全部当前光环（具有持续时长的效果）持续时长增加2s。如果处于[终轮常客]状态下，则改为增加4s。' }
        ]
    },
    {
        name: '祈雅喵哒',
        id: 36,
        image: 'kmr/image/zhumiao.png',
        voice: 'kmr/voice/zhumiao.mp3',
        description: '🐷喵->🐷神->🐷喵->？',
        baseattack: 15,
        addattack: 15,
        attackSpeed: 3600, // in milliseconds
        basecost: 16,
        enhancecost: 7,
        supEnhancecost: 3.2,
        skills: [
            { level: 7, name: '老实猪猪', effect: '介绍中带有🐷的助战升级时增加的攻击力额外增加20%。' },
            { level: 77, name: '红娘', effect: '每局游戏仅限一次，下2个你手动升级的助战将结婚。结婚的助战其中一方由于升级增加攻击力时，另一方也会提升增加量20%的攻击力。' }
        ]
    },
    {
        name: '千代田桃',
        id: 37,
        image: 'kmr/image/tao.png',
        voice: 'kmr/voice/tao.mp3',
        description: '著有著名小说：《🍑🐷之死》',
        baseattack: 8,
        addattack: 6,
        attackSpeed: 2300, // in milliseconds
        basecost: 10,
        enhancecost: 5,
        supEnhancecost: 2.2,
        skills: [
            { level: 6, name: '管人痴', effect: '介绍中带有🐷的助战升级消费的金币变为原本的^(0.95)。' },
            { level: 24, name: '小说家', effect: '你可以将字体特效变得 <em>炫酷</em>！在1秒内快速连续点击kmr3次以开启/关闭。' }
        ]
    },
    {
        name: '天然呆的龙',
        id: 38,
        image: 'kmr/image/dl.png',
        voice: 'kmr/voice/dl.mp3',
        description: '请选择你的英雄：DDK night or DD Knight',
        baseattack: 12,
        addattack: 10,
        attackSpeed: 2800, // in milliseconds
        basecost: 16,
        enhancecost: 11,
        supEnhancecost: 4.4,
        skills: [
            { level: 13, name: '比武招亲', effect: '每当一个助战造成直接攻击外的伤害，5%概率造成[0.02*攻击力*(总计经过时间^0.5)]点伤害。' },
            { level: 65, name: '雷维翁之力', effect: '每当一个助战造成直接攻击外的伤害，使其攻击力永久提升[(此伤害^0.8)*0.002]点。' }
        ]
    },
    {
        name: '真白',
        id: 39,
        image: 'kmr/image/mashiro.png',
        voice: 'kmr/voice/mashiro.mp3',
        description: '感谢真白的大地之母为饼神挡住了贼尼克斯的诅咒',
        baseattack: 8,
        addattack: 7,
        attackSpeed: 1900, // in milliseconds
        basecost: 14,
        enhancecost: 8,
        supEnhancecost: 4.2,
        skills: [
            { level: 8, name: '硬实力冠军', effect: '每40s，每有一个攻击力超过该助战的其他助战，提升[0.1*双方攻击力差距^0.9]的攻击力。' },
            { level: 60, name: '大地之子', effect: '每当一个助战造成直接攻击外的伤害，1%概率在接下来的5s内，每当有助战攻击，使其伤害增加1%，再使此数值增加1%。此光环结束后增伤变回1%。（可叠加，全部大地之子光环最多使单次攻击伤害变为1000倍。）' }
        ]
    },
    {
        name: 'L_ost',
        id: 40,
        image: 'kmr/image/lost.png',
        voice: 'kmr/voice/lost.mp3',
        description: '爬皇最终还是没能逃过围攻光明顶的命运',
        baseattack: 10,
        addattack: 8,
        attackSpeed: 2500, // in milliseconds
        basecost: 18,
        enhancecost: 6,
        supEnhancecost: 4.1,
        skills: [
            { level: 8, name: '行为艺术', effect: '每随机10s~70s，攻击X次，加速下一个该技能Ys，接下来Zs你的攻击将会造成酷炫的特效（不叠加，复数延长时长）。XYZ的数值为随机指定，其和为3。每当任意一项为0，永久增加本技能XYZ的和1点。' },
            { level: 40, name: '太上皇', effect: '随机将一名其他助战招募进战队。战队中的助战对kmr造成的全部伤害变为300%。每当一个XYZ技能中，Z不低于X与Y之和，重新触发此技能，但如战队人数超过[你拥有的助战数^0.5]人后就会解散。' }
        ]
    },
    {
        name: 'Foyria',
        id: 41,
        image: 'kmr/image/fy.png',
        voice: 'kmr/voice/fy.mp3',
        description: '也许有另一条世界线fy没能阻止ktzn夺得WGP2021冠军',
        baseattack: 12,
        addattack: 4,
        attackSpeed: 2100, // in milliseconds
        basecost: 18,
        enhancecost: 11,
        supEnhancecost: 4.4,
        skills: [
            { level: 12, name: '亚军传承', effect: '该助战提升攻击力时，还会将[增加量^0.8]*6%的数值加给成长（至少1点）。' },
            { level: 65, name: '炎孕恐怖分子', effect: '每28s，使所有角色提升[成长]点攻击。' }
        ]
    },
    {
        name: '艺の年',
        id: 42,
        image: 'kmr/image/yn.png',
        voice: 'kmr/voice/yn.mp3',
        description: '艺年试图抢夺上帝亚军的计划以失败告终',
        baseattack: 18,
        addattack: 7,
        attackSpeed: 2900, // in milliseconds
        basecost: 30,
        enhancecost: 14,
        supEnhancecost: 5.4,
        skills: [
            { level: 9, name: '虽强但弱', effect: '每当攻击力最高的其他助战提升攻击力，该助战与攻击力最低的其他助战也提升该数值20%的攻击力（至少1点）。' },
            { level: 44, name: '卡场绝杰', effect: '每49s，造成[0.2*(上一次该倒计时结束后，助战总攻击次数)^1.2*攻击力]点伤害。' }
        ]
    },
    {
        name: '六月絮雨',
        id: 43,
        image: 'kmr/image/xuyu.png',
        voice: 'kmr/voice/xuyu.mp3',
        description: '女装.png 一只小飘飘 赞了',
        baseattack: 20,
        addattack: 14,
        attackSpeed: 3200, // in milliseconds
        basecost: 25,
        enhancecost: 15,
        supEnhancecost: 5,
        skills: [
            { level: 8, name: '南梁的祝福', effect: '每60s，使一名助战在接下来的15s内，造成的全部伤害变为400%。每50级增加1s，上限30s。每次触发，此技能的目标切换至下一名助战。（可叠加）' },
            { level: 48, name: '新春会', effect: '每当一个倒计时技能触发后，5%概率使全部其他助战永久获得[该助战成长/24]点成长（至少1点）。）' }
        ]
    }
];
