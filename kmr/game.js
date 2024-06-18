const kmr = document.getElementById('kmr');
const kmrHealth = document.getElementById('kmr-health');
//const hitSound = document.getElementById('hit-sound');
const coinsDisplay = document.getElementById('coins');

const timePlayedDisplay = document.getElementById('time-played');
const totalClickDamageDisplay = document.getElementById('total-click-damage');
const minionDamagesDisplay = document.getElementById('minion-damages');
const victoryMessage = document.getElementById('victory-message');
const totalTimeDisplay = document.getElementById('total-time');
const totalTimeDisplay2 = document.getElementById('total-time2');
const curLevelDisplay = document.getElementById('total-level');
const finalStatsDisplay = document.getElementById('final-stats');


let kmrHealthValue = 500000;
let level = 0;
let coins = 0;
let dps = 0;
let timePlayed = 0;
let totalClickDamage = 0;
let rindex = 0;
let minionDamages = {};
let minionsState = [];
let unlockedMinions = [];
let totaltimePlayed = 0;
let burning = 0;
let skilled = false;
let zenxLV = 0;
let zenxActive = false;
let autoing = false;
let remluck = 0;
let lastTlv = 0;
let ykd = 0;
//minions.map(minion => ({
//    ...minion,
//    level: 0,
//    totalDamage: 0,
//    learnedSkills: [],
//}));

function unlockMinion(minion){
  unlockedMinions.push(minion.name);
  minion = {
      ...minion,
      level: 1,
      attack: minion.baseattack,
      tempAtk: 0,
      totalDamage: 0,
      learnedSkills: [],
  }

  let intervalId = setInterval(() => minionAttack(minion), minion.attackSpeed);
  minion.intervalId = intervalId;
  minionsState = minionsState.concat(minion)
}

function showEffect(x, y, effectClass) {
    const effect = document.createElement('div');
    effect.className = effectClass;
    effect.style.left = `${x - 10}px`;
    effect.style.top = `${y - 10}px`;
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 1000);
}

function showDamage(x, y, damage) {
    const damageEffect = document.createElement('div');
    if (damage > 0){
      damageEffect.className = 'damage-effect';
      damageEffect.innerText = `-${damage}`;
    } else {
      damageEffect.className = 'heal-effect';
      damageEffect.innerText = `${-damage}`;
    }

    damageEffect.style.left = `${x - 10}px`;
    damageEffect.style.top = `${y - 20}px`;
    document.body.appendChild(damageEffect);
    setTimeout(() => damageEffect.remove(), 1000);
}

function showWord(x, y, word) {
    const wordEffect = document.createElement('div');
    wordEffect.className = 'gold-effect';
    wordEffect.innerText = `${word}`;
    wordEffect.style.left = `${x - 10}px`;
    wordEffect.style.top = `${y - 20}px`;
    document.body.appendChild(wordEffect);
    setTimeout(() => wordEffect.remove(), 1000);
}

function showSkillWord(minion, word) {
  if (autoing){
    return;
  }
    let im = document.getElementById(`image-${unlockedMinions.indexOf(minion.name)}`);
    var position = im.getBoundingClientRect();

    let x = position.left + (Math.random()*position.width);
    let y = position.top + (Math.random()*position.height);
    const wordEffect = document.createElement('div');
    wordEffect.className = 'word-effect';
    wordEffect.innerText = `${word}`;
    wordEffect.style.left = `${x - 10}px`;
    wordEffect.style.top = `${y - 20}px`;
    document.body.appendChild(wordEffect);
    setTimeout(() => wordEffect.remove(), 1000);
}

function updateHealth(health) {
    const healthElement = document.getElementById('kmr-health');
    const maxHealth = 500000*Math.pow(10,level); // 假设最大血量为500,000
    kmrHealthValue = parseInt(kmrHealthValue)
    const healthPercentage = (kmrHealthValue / maxHealth) * 100;
    healthElement.style.width = healthPercentage + '%';
    healthElement.textContent = health.toLocaleString();
}

function updateDisplays() {
  if (autoing){
    return;
  }
    kmrHealth.textContent = kmrHealthValue.toLocaleString();
    coinsDisplay.textContent = formatNumber(coins);
    timePlayedDisplay.textContent = `${timePlayed}s`;
    totalClickDamageDisplay.textContent = totalClickDamage;
    minionDamagesDisplay.innerHTML = Object.keys(minionDamages)
        .map(name => `<li>${name}: ${minionDamages[name]}</li>`).join('');
    if (unlockedMinions.length > 0){
      refreshMinionDetails()
    }

    minionDamagesDisplay.innerHTML = '';

    // 将 Object.entries(minionDamages) 转换为数组，并按 damage 从大到小排序
    const sortedMinionDamages = Object.entries(minionDamages)
        .sort(([, damageA], [, damageB]) => damageB - damageA);

    for (const [minion, damage] of sortedMinionDamages) {
        const li = document.createElement('li');
        li.textContent = `${minion}: ${formatNumber(damage)}`;
        minionDamagesDisplay.appendChild(li);
    }
    updateHealth(kmrHealthValue);
    document.getElementById(`unlockButton`).textContent = "抽取助战 (金币:" + formatNumber(unlockCost(unlockedMinions.length)) +")";
}

// 创建伤害数字动画
function createDamageNumber(damage) {
    const damageNumber = document.createElement('div');
    damageNumber.className = 'damage-number';
    damageNumber.textContent = `-${damage}`;
    damageNumber.style.left = `${Math.random() * 100}%`;
    damageNumber.style.top = `${Math.random() * 100}%`;
    kmr.parentElement.appendChild(damageNumber);

    setTimeout(() => {
        damageNumber.remove();
    }, 1000);
}

function gainCoin(c){
  if (ykd > 0){
    c = parseInt(c * 2);
  }
  coins += c;
}

function clickKmr() {
    burning = 0;
    kmrHealthValue -= 1;
    totalClickDamage += 1;
    var position = kmr.getBoundingClientRect();
    let x = position.left + (Math.random()*kmr.width);
    let y = position.top + (Math.random()*kmr.height);
    showEffect(x,y, 'hit-effect');
    showDamage(x,y, 1);
    const hitSound = new Audio('kmr/hit.ogg');
    hitSound.play();
    gainCoin(1);
    updateDisplays();
    checkVictory();
}

function damageKmr(dam,minion) {
    if (kmrHealthValue <= 0) return;
    for (let m of minionsState){
      if (m.name != minion.name && m.learnedSkills.includes("护国神橙")){
        dam = parseInt(dam*(1 + 0.2 + 0.02*parseInt(m.level/5)));
      }
    }
    kmrHealthValue -= dam;
    minion.totalDamage += dam;
    if (!minionDamages[minion.name]){
      minionDamages[minion.name] = 0;
    }
    var position = kmr.getBoundingClientRect();
    let x = position.left + (Math.random()*kmr.width);
    let y = position.top + (Math.random()*kmr.height);
    showEffect(x,y, 'hit-effect');
    showDamage(x,y, dam);
    minionDamages[minion.name] += dam;
    const hitSound = new Audio(minion.voice);
    hitSound.play();
    gainCoin(dam);
    updateDisplays();
    checkVictory();
}

function formatNumber(num) {
    if (num == Infinity){
      return num;
    }
    const units = ['万', '亿', '兆', '京', '垓', '秭', '穰', '沟', '涧', '正', '载', '极', '恒河沙', '阿僧祗', '那由他', '不可思议', '无量', '大数'];
    const threshold = 10000; // 万的阈值

    if (num < threshold) {
        return num.toString(); // 小于万，直接返回数字
    }

    let unitIndex = -1;
    let formattedNum = num;

    while (formattedNum >= threshold && unitIndex < units.length) {
        formattedNum /= threshold;
        unitIndex++;
    }

    if (unitIndex < units.length) {
        return `${formattedNum.toFixed(2)}${units[unitIndex]}`;
    } else {
        return num.toExponential(2); // 超过最大单位，使用科学计数法
    }
}

function checkVictory() {
    if (kmrHealthValue <= 0) {
      autoing = false;
      totaltimePlayed = totaltimePlayed + timePlayed;
        victoryMessage.classList.remove('hidden');
        totalTimeDisplay.textContent = timePlayed;
        totalTimeDisplay2.textContent = totaltimePlayed;
        curLevelDisplay.textContent = level;
        finalStatsDisplay.innerHTML = `
            <li>点击伤害: ${totalClickDamage}</li>
            ${[...minionsState] // 创建 minionsState 的副本
                .sort((a, b) => b.totalDamage - a.totalDamage) // 按 totalDamage 从大到小排序
                .map(minion => `<li>${minion.name}: ${formatNumber(minion.totalDamage)}</li>`)
                .join('')}
        `;

    }
}

function restartGame() {
    level = level +1;
    kmrHealthValue = 500000 * Math.pow(10,level);
    timePlayed = 0;
    //totalClickDamage = 0;
    //let rindex = 0;
    //let minionDamages = {};
    //let minionsState = [];
    //let unlockedMinions = [];
    victoryMessage.classList.add('hidden');
    updateDisplays();
    //initMinions(); // Initialize minions again after restarting game
}

function getattack(minion){
  let atk = minion.attack;
  for (let m of minionsState){
    if (m.name != minion.name && m.learnedSkills.includes("苦痛")){
      atk += parseInt(m.attack*0.8);
    }
  }
  if (minion.learnedSkills.includes("素质家族")){
    if (checkLuck(0.1)) {
      atk*=10;
      skilled = true;
      showSkillWord(minion, "素质家族");
    }
  }
  if (minion.learnedSkills.includes("复仇")){
    const maxHealth = 500000*Math.pow(10,level); // 假设最大血量为500,000
    const healthPercentage = (kmrHealthValue / maxHealth) * 100;
    if (healthPercentage <= 50) {
      atk*= 1 + 0.5 + 0.01*minion.level;
      showSkillWord(minion, "复仇");
    }
  }
  if (minion.learnedSkills.includes("掌控") && zenxActive){
    zenxActive = false;
    atk*= 8 + zenxLV*4;
    zenxLV = zenxLV + 1;
    skilled = true;
  }
  if (minion.learnedSkills.includes("开播！")){
    skilled = true;
    atk += parseInt(Math.pow(coins,0.6)/1000*minion.level);
  }
  return atk;
}


function checkLuck(r) {
  let re = 0;
  let pass = Math.random() < r;
  if (r <= 0.2 && remluck > 0){
    remluck--;
    pass = true;
  }
  for (let m of minionsState){
    if (m.learnedSkills.includes("重返赛场") && !pass){
      let luck = Math.min(0.5,0.21 + 0.01*parseInt(m.level/25));
      if (Math.random() < luck){
        showSkillWord(m, "重返赛场");
        pass = Math.random() < r;
      }
    }
  }
  if (pass) {
    for (let m of minionsState){
      if (m.learnedSkills.includes("运气不如他们") && r <= 0.2){
        showSkillWord(m, "运气不如他们");
        raiseAtk(m,Math.max(3,parseInt(m.level/12)));
        document.getElementById(`attack-${unlockedMinions.indexOf(m.name)}`).textContent = m.attack;
      }
    }
    return true;
  } else {
    return false;
  }
}

function minionAttack(minion) {
    if (kmrHealthValue <= 0) return;
    skilled = false;
    let dam = getattack(minion)

    if (minion.learnedSkills.includes("下饭")){
      if (checkLuck(0.1)) {
        dam = - dam;
        gainCoin(dam*(parseInt(getBaseLog(10,minion.attack)) - 1));
        showSkillWord(minion, "下饭");
        if (checkLuck(0.1)) {
          ykd = parseInt(getBaseLog(10,minion.attack));
          showSkillWord(minion, "进入下饭状态！");
        }
      }
    }
    kmrHealthValue -= dam;
    minion.totalDamage += dam;
    if (!minionDamages[minion.name]){
      minionDamages[minion.name] = 0;
    }
    var position = kmr.getBoundingClientRect();
    let x = position.left + (Math.random()*kmr.width);
    let y = position.top + (Math.random()*kmr.height);
    showEffect(x,y, 'hit-effect');
    showDamage(x,y, dam);
    minionDamages[minion.name] += dam;
    const hitSound = new Audio(minion.voice);
    hitSound.play();
    gainCoin(dam);

    if (minion.learnedSkills.includes("冲击冠军")){
      if (checkLuck(0.03)) {
        raiseAtk(minion,minion.level);
        skilled = true;
        document.getElementById(`attack-${unlockedMinions.indexOf(minion.name)}`).textContent = minion.attack;
        showSkillWord(minion, "冲击冠军");
      }
    }
    if (minion.learnedSkills.includes("+1+1")){
      if (checkLuck(0.06)) {
        skilled = true;
        minion.attack = parseInt(minion.attack*1.15)
        minion.attackSpeed = parseInt(minion.attackSpeed*1.1)
        document.getElementById(`attack-${unlockedMinions.indexOf(minion.name)}`).textContent = minion.attack;
        document.getElementById(`attack-speed-${unlockedMinions.indexOf(minion.name)}`).textContent = (minion.attackSpeed / 1000).toFixed(1)+"s";
        clearInterval(minion.intervalId)
        let intervalId = setInterval(() => minionAttack(minion), minion.attackSpeed);
        minion.intervalId = intervalId;
        showSkillWord(minion, "+1+1");
      }
    }
    if (minion.learnedSkills.includes("金牌陪练") && unlockedMinions.length > 1){
      if (checkLuck(0.18)) {
        skilled = true;
        let r = parseInt(Math.random()*(unlockedMinions.length - 1));
        if (r >= unlockedMinions.indexOf(minion.name)){
          r += 1;
        }
        raiseAtk(minionsState[r],parseInt(minion.attack/15));
        document.getElementById(`attack-${unlockedMinions.indexOf(minionsState[r].name)}`).textContent = minionsState[r].attack;
        showSkillWord(minion, "金牌陪练");
      }
    }
    if (minion.learnedSkills.includes("奶1")){
      if (checkLuck(0.33)) {
        skilled = true;
        gainCoin(parseInt(Math.pow(minion.level,1.5)));
        showSkillWord(minion, "奶1");
      }
    }
    for (let m of minionsState){
      if (m.name != minion.name && m.learnedSkills.includes("永失吾艾")){
        if (checkLuck(0.08)) {
          minionAttack(m);
          showSkillWord(m, "永失吾艾");
        }
      }
      if (minion.description.includes("🐷") && m.learnedSkills.includes("身外化身")){
        if (checkLuck(0.1)) {
          minionAttack(minion);
          showSkillWord(m, "身外化身");
        }
      }
      if (skilled && m.name != minion.name && m.learnedSkills.includes("GN")){
        if (checkLuck(0.1)) {
          raiseAtk(m, parseInt(minion.attack*0.01));
          minionAttack(m);
          minionAttack(m);
          minionAttack(m);
          showSkillWord(m, "GN");
        }
      }
      if (m.name != minion.name && m.learnedSkills.includes("无尽连击")){
        m.attack += parseInt(m.addattack/2);
        m.tempAtk += parseInt(m.addattack/2);
        document.getElementById(`attack-${unlockedMinions.indexOf(m.name)}`).textContent = m.attack;
        showSkillWord(m, "无尽连击");
      }
    }
    updateDisplays();
    checkVictory();
}

function refMinions() {
    const minionsContainer = document.getElementById('minions-container');
    minionsContainer.innerHTML = ''; // Clear existing minions
    let minionsSubs = [];
    minionsState.forEach((minion, index) => {
        const minionElement = document.createElement('div');
        minionElement.className = 'minion';
        minionElement.innerHTML = `
            <img id="image-${index}" src="${minion.image}" alt="${minion.name}">
            <div>${minion.name}</div>
            <div>等级: <span id="level-${index}">${minion.level}</span></div>
            <div>攻击: <span id="attack-${index}">${minion.attack}</span></div>
            <div>攻速: <span id="attack-speed-${index}">${(minion.attackSpeed / 1000).toFixed(1)}s</span></div>
            <button id="cost-${index}" onclick="upgradeMinion(${index})" >升级 (${formatNumber(mupgradeCost(minion))})</button>
        `;
        minionElement.addEventListener('click', () => {
            showMinionDetails(index);
        });
        minionsContainer.appendChild(minionElement);

    });

    document.getElementById(`unlockButton`).textContent = "抽取助战 (金币:" + unlockCost(unlockedMinions.length) +")";
}

function unlockCost(n) {
  if (minions.length == unlockedMinions.length){
    return Infinity;
  }
  let cost = 9 + 12*n + 6*n*n + parseInt(2.5*Math.pow(n,3.25) + Math.pow(2.5,n));
  for (let m of minionsState){
    if (m.learnedSkills.includes("连协之力")){
      cost = parseInt(0.75*cost)
    }
  }
  return cost;
}

function unlockRandMinion() {
  if (kmrHealthValue <= 0){return;}
  burning = 0;
    const uCost = unlockCost(unlockedMinions.length)
    if (coins >= uCost) {
      coins -= uCost;
        let r = parseInt(Math.random() * (minions.length - unlockedMinions.length));
        let restMinions = minions.filter((m) => !unlockedMinions.includes(m.name));
        unlockMinion(restMinions[r]);
        refMinions();
        updateDisplays();
    } else {
      const mi = document.getElementById(`unlockButton`);
      var position = mi.getBoundingClientRect();
      let x = position.left + (0.5*position.width);
      let y = position.top + (0.5*position.height);
      showWord(x,y, "金币不足！");
    }
}


function showMinionDetails(index) {
    rindex = index;
    refreshMinionDetails();
}

function refreshMinionDetails() {
  const minion = minionsState[rindex];
  const detailsContainer = document.getElementById('selected-minion-details');
  let code = "升级";

  if (minion.level == 0){
    code = "解锁"
  }
  detailsContainer.innerHTML = `
      <h3>${minion.name}</h3>
      <img src="${minion.image}" alt="${minion.name}">
      <p>${minion.description}</p>
      <div>等级: ${minion.level}</div>
      <div>攻击: ${minion.attack}</div>
      <div>攻速: ${(minion.attackSpeed / 1000).toFixed(1)}s</div>
      <div>升级+攻击: ${minion.addattack}</div>
      <button onclick="upgradeMinion(${rindex})" >${code} (金币: ${formatNumber(mupgradeCost(minion))})</button>
      <h4>技能</h4>
      <ul>
          ${minion.skills.map(skill => `<li>等级 ${skill.level}: ${skill.name} - ${getEff(skill)}</li>`).join('')}
      </ul>
  `;
}

function getEff(skill){
  switch (skill.name){
    case "掌控":
      return "每11s，有12.5%的概率使下一次攻击造成的伤害变为"+(8+4*zenxLV)+"倍。每次触发，使倍率增加4。";
    default:
      return skill.effect
  }

}
function mupgradeCost(minion){
  let cost = (minion.basecost + minion.level * minion.enhancecost + minion.level*minion.level * minion.supEnhancecost);
  cost = Math.pow(cost,1 + minion.level/10000)
  cost = parseInt(cost);
  for (let m of minionsState){
    if (m.learnedSkills.includes("白骨夫人")){
      cost = parseInt(0.8*cost)
    }
  }
  return cost;
}

function zeroCountDown(c) {
  for (let m of minionsState){
    if (m.learnedSkills.includes("电表白转")){
      let luck = 0.2 + 0.01*Math.min(20,parseInt(m.level/50));
      if (checkLuck(luck)){
        return parseInt(c/2);
      }
    }
  }
  return 0;
}
function updateCounts() {
  if (kmrHealthValue <= 0){return;}
  let need = false;
  if (ykd > 0){
    ykd = Math.max(0,ykd - 1);
  }
  for (let m of minionsState){
    if (m.learnedSkills.includes("五种打法")){
      burning ++;
      if (burning >= 20){
        burning = zeroCountDown(20);
        raiseAtk(m,5*unlockedMinions.length);
        document.getElementById(`attack-${unlockedMinions.indexOf(m.name)}`).textContent = m.attack;
        need = true;
        showSkillWord(m, "五种打法");
      }
    }
    if (m.learnedSkills.includes("操纵命运")){
      if (!m.count){m.count = 0};
      m.count ++;
      if (m.count >= 45){
        m.count = zeroCountDown(45);
        remluck = Math.min(8,2 + parseInt(m.level/100))
        showSkillWord(m, "操纵命运");
        need = true;
      }
    }
    if (m.learnedSkills.includes("成熟")){
      if (!m.count){m.count = 0};
      m.count ++;
      if (m.count >= 30){
        m.count = zeroCountDown(30);
        remluck = Math.min(6,2 + parseInt(m.level/100))
        let r = parseInt(Math.random()*(unlockedMinions.length - 1));
        if (r >= unlockedMinions.indexOf(m.name)){
          r += 1;
        }
        minionsState[r].level -= Math.max(1,parseInt(minionsState[r].level*0.01));
        m.level -= Math.max(1,parseInt(m.level*0.01));
        minionsState[r].level = Math.max(1,minionsState[r].level);
        m.level = Math.max(1,m.level);
        showSkillWord(m, "成熟");
        need = true;
      }
    }

    if (m.learnedSkills.includes("每日饼之诗")){
      if (!m.count){m.count = 0};
      m.count ++;
      if (m.count >= 60){
        m.count = zeroCountDown(60);
        for (let mi of minionsState){
          if (mi.name != m.name){
            raiseAtk(mi,parseInt(m.attack/40));
          }
        }
        showSkillWord(m, "每日饼之诗");
        need = true;
      }
    }
    if (m.learnedSkills.includes("罕见")){
      if (!m.count){m.count = 0};
      m.count ++;
      if (m.count >= 50){
        m.count = zeroCountDown(50);
        gainCoin(parseInt(coins/10));
        skilled = true;
        showSkillWord(m, "罕见");
        need = true;
      }
    }
    if (m.learnedSkills.includes("无尽连击")){
      if (!m.count){m.count = 0};
      m.count ++;
      if (m.count >= 30){
        m.count = zeroCountDown(30);
        m.attack -= m.tempAtk;
        m.attack = Math.max(0,m.attack);
        let luck = 0.05 + 0.01*parseInt(m.level/50);
        if (checkLuck(luck)){
          raiseAtk(m,parseInt(m.tempAtk/10));
        }
        m.tempAtk = 0;
        showSkillWord(m, "无尽连击");
        need = true;
      }
    }
    if (m.learnedSkills.includes("掌控")){
      if (!m.count){m.count = 0};
      m.count ++;
      if (m.count >= 11){
        m.count = zeroCountDown(11);
        if (checkLuck(0.125)){
          zenxActive = true;
          showSkillWord(m, "掌控");
        }
      }
    }
    if (m.learnedSkills.includes("龙之咆哮")){
      if (!m.count){m.count = 0};
      m.count ++;
      if (m.count >= 24){
        m.count = zeroCountDown(24);
        let dam = parseInt(2*m.attack*m.attackSpeed/1000);
        damageKmr(dam,m);
        showSkillWord(m, "龙之咆哮");
      }
    }
    if (m.learnedSkills.includes("铁犀冲锋")){
      if (!m.count){m.count = 0};
      m.count ++;
      if (m.count >= 8){
        m.count = zeroCountDown(8);
        if (checkLuck(0.04)){
          let dam = parseInt(m.attack*m.level);
          damageKmr(dam,m);
          showSkillWord(m, "铁犀冲锋");
        }
      }
    }
    if (m.learnedSkills.includes("一十九米肃清刀")){
      if (!m.count){m.count = 0};
      m.count ++;
      if (m.count >= 19){
        m.count = zeroCountDown(19);
        let dam = parseInt(m.attack*unlockedMinions.length);
        damageKmr(dam,m);
        showSkillWord(m, "一十九米肃清刀");
      }
    }
    if (m.learnedSkills.includes("巨人")){
      if (!m.count){m.count = 0};
      m.count ++;
      if (m.count >= 24){
        m.count = zeroCountDown(24);
        let dam = 0;
        for (let mi of minionsState){
          dam += mi.attack;
        }
        dam*= parseInt(getBaseLog(10,m.attack));
        damageKmr(dam,m);
        showSkillWord(m, "巨人");
      }
    }
    if (m.learnedSkills.includes("次元超越")){
      let c = 30;
      c -= Math.max(0,Math.min(10,parseInt(m.level/100)));
      if (!m.count){m.count = 0};
      m.count ++;
      if (m.count >= c){
        m.count = zeroCountDown(c);
        for (let mi of minionsState){
          if (mi.name != m.name){
            minionAttack(mi);
          }
        }
        showSkillWord(m, "次元超越");
        need = true;
      }

    }
  }
  if (need){
    updateDisplays();
  }
}

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

function raiseAtk(minion,amount){
  minion.attack += amount;
  for (let m of minionsState){
    if (m.name != minion.name && m.learnedSkills.includes("上帝")){
      m.attack += Math.max(1,parseInt(amount*0.12));
      document.getElementById(`attack-${unlockedMinions.indexOf(m.name)}`).textContent = m.attack;
      showSkillWord(m, "上帝");
    }
  }
}

function autoupgradeMinion(){
  autoing = true;
  let enough = true;
  while (enough){
    enough = false;
    for (let i = 0; i < unlockedMinions.length; i++){
      if (upgradeMinion(i,true)){
        enough = true;
      }
    }
  }
  autoing = false;
  updateDisplays();
}
function upgradeMinion(index,auto,free) {
  if (kmrHealthValue <= 0 && !free){return;}

    burning = 0;
    const minion = minionsState[index];
    let upgradeCost = mupgradeCost(minion);
    if (free){
      upgradeCost = 0;
    }
    if (coins >= upgradeCost) {
        coins -= upgradeCost;
        minion.level += 1;
        raiseAtk(minion,minion.addattack); // Increase attack by 2 for each level
        for (let m of minionsState){
          if (m.name != minion.name && m.learnedSkills.includes("构筑带师")){
            raiseAtk(minion,parseInt(m.attack/30));
            showSkillWord(m, "构筑带师");
          }
          if (minion.level%5 == 0 && minion.description.includes("🐷") && m.learnedSkills.includes("双猪的羁绊")){
            raiseAtk(minion,parseInt(Math.pow(m.level,1.1)));
            showSkillWord(m, "双猪的羁绊");
          }
        }
        for (let s of minion.skills){
          if (minion.level == s.level && !minion.learnedSkills.includes(s.name)){
            minion.learnedSkills.push(s.name);
            if (s.name == "说书"){
              minion.attackSpeed -= 400;
              clearInterval(minion.intervalId)
              let intervalId = setInterval(() => minionAttack(minion), minion.attackSpeed);
              minion.intervalId = intervalId;
            }
            if (s.name == "鲁智深"){
              raiseAtk(minion,400);
            }
            if (s.name == "阴阳秘法"){
              for (let m of minionsState){
                raiseAtk(m,36);
              }
            }
          }
        }
        if (minion.learnedSkills.includes("虫虫咬他") && minion.level%2 == 1){
          showSkillWord(minion, "虫虫咬他");
          minion.addattack += 1;
        }

        if (minion.learnedSkills.includes("双猪齐力")){
          let unlockedPigs = 0;
          for (let m of minionsState){
            if (m.description.includes("🐷")){
              unlockedPigs++;
            }
          }
          if (unlockedPigs > 1 && checkLuck(0.5)) {
            skilled = true;
            let r = parseInt(Math.random()*(unlockedPigs - 1)) + 1;
            for (let m of minionsState){
              if (m.description.includes("🐷") && m.name != minion.name){
                r -= 1;
                if (r == 0){
                  upgradeMinion(unlockedMinions.indexOf(m.name),undefined,true);
                }
              }
            }
            showSkillWord(minion, "双猪齐力");
          }
        }
        document.getElementById(`level-${index}`).textContent = minion.level;
        document.getElementById(`attack-${index}`).textContent = minion.attack;
        document.getElementById(`attack-speed-${index}`).textContent = (minion.attackSpeed / 1000).toFixed(1)+"s";
        document.getElementById(`cost-${index}`).textContent = "升级 ("+mupgradeCost(minion)+")";
        for (let m of minionsState){
          if (m.name != minion.name && m.learnedSkills.includes("光速上分")){
            if (checkLuck(0.1)){
              gainCoin(parseInt(upgradeCost * Math.min(1,0.3 + 0.01*parseInt(m.level/10))));
              showSkillWord(m, "光速上分");
            }
          }
          if (m.name != minion.name && m.learnedSkills.includes("杀出重围")){
            let tlv = 0;
            for (let mi of minionsState){
              tlv += mi.level;
            }
            if (tlv%100 == 0 && tlv > lastTlv){
              lastTlv = tlv;
              for (let mi of minionsState){
                mi.attack += parseInt(0.03*(mi.attack - mi.tempAtk));
              }
              showSkillWord(m, "杀出重围");
            }
          }
        }
        if (!auto){
          updateDisplays();
          showMinionDetails(index);
        }

        return true;
    } else {
      if (auto){
        return false;
      }
      const mi = document.getElementById(`cost-${index}`);
      var position = mi.getBoundingClientRect();
      let x = position.left + (0.5*position.width);
      let y = position.top + (0.5*position.height);
      showWord(x,y, "金币不足！");
      return false;
    }
}

// Update game state every second
setInterval(() => {
    timePlayed += 1;
    updateCounts();
    updateDisplays();
}, 1000);

kmr.addEventListener('click', clickKmr);
refMinions();
updateDisplays();
