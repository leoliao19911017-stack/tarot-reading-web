// 示例塔罗牌数据 (你需要准备完整的塔罗牌数据)
const tarotDeck = [
    { id: 1, name: "I 魔法师", meaning: "正位：创造力、行动力、掌握；逆位：欺骗、缺乏力量、犹豫不决。", image: 'card-1.jpg' },
    { id: 2, name: "II 女祭司", meaning: "正位：直觉、智慧、秘密；逆位：肤浅、秘密暴露、判断失误。", image: 'card-2.jpg' },
    { id: 3, name: "III 皇后", meaning: "正位：丰收、母性、感性；逆位：贫瘠、不安全感、依赖他人。", image: 'card-3.jpg' },
    { id: 4, name: "IV 皇帝", meaning: "正位：权威、结构、父性；逆位：暴政、控制欲、缺乏纪律。", image: 'card-4.jpg' },
    { id: 5, name: "V 教皇", meaning: "正位：传统、道德、信仰；逆位：非传统、固执、教条主义。", image: 'card-5.jpg' },
    // 请在此处添加剩余的塔罗牌，至少有 78 张
];

const cardArea = document.querySelector('.card-area');
const drawButton = document.getElementById('draw-button');
const resultDisplay = document.getElementById('result-display');
const cardMeaning = document.getElementById('card-meaning');
let drawnCards = [];
let isCardSelected = false;

// 1. 抽牌函数
function drawThreeCards() {
    // 确保抽牌前卡牌区域是空的
    cardArea.innerHTML = '';
    resultDisplay.classList.add('hidden');
    drawButton.disabled = true; // 禁用按钮防止重复点击
    isCardSelected = false;

    // 随机抽取三张不重复的牌
    const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
    drawnCards = shuffled.slice(0, 3);
    
    // 生成卡牌元素并添加动画效果
    drawnCards.forEach((cardData, index) => {
        // 创建卡牌容器
        const card = document.createElement('div');
        card.className = 'tarot-card';
        card.dataset.index = index;
        
        // 创建背面
        const cardBack = document.createElement('div');
        cardBack.className = 'card-face card-back';

        // 创建正面
        const cardFront = document.createElement('div');
        cardFront.className = 'card-face card-front';
        cardFront.style.backgroundImage = `url(${cardData.image})`;

        card.appendChild(cardBack);
        card.appendChild(cardFront);

        // 插入到DOM中
        cardArea.appendChild(card);
        
        // --- 抽卡动画效果实现 ---
        // 初始位置设定在中央，模拟洗牌堆
        card.style.position = 'absolute';
        card.style.left = '50%';
        card.style.top = '50%';
        card.style.transform = 'translate(-50%, -50%) rotate(0deg)'; 
        card.style.zIndex = 100 - index; // 确保牌堆有层次感
        
        // 设定延迟和最终位置，实现逐张抽出动画
        setTimeout(() => {
            card.style.transition = 'all 1.5s ease-out';
            card.style.position = 'static'; // 移除绝对定位，让Flexbox接管布局
            
            // 重新设置 transform，使卡牌移动到 Flexbox 的位置
            card.style.transform = `translate(0, 0) rotate(${Math.random() * 6 - 3}deg)`; // 增加轻微的随机旋转
        }, 100 + index * 300); // 逐张延迟抽出

        // 动画完成后，添加点击事件监听
        setTimeout(() => {
            card.addEventListener('click', handleCardSelection);
            if (index === drawnCards.length - 1) {
                 drawButton.disabled = false; // 所有卡牌出现后，允许重新抽牌（但这次我们要用户选择，所以保持禁用）
                 drawButton.textContent = "请选择一张牌";
                 drawButton.disabled = true;
            }
        }, 1500 + index * 300); // 确保在动画结束后才启用点击
    });
}

// 2. 处理卡牌选择的函数
function handleCardSelection(event) {
    if (isCardSelected) return; // 已经选择过了

    const selectedCard = event.currentTarget;
    const cardIndex = parseInt(selectedCard.dataset.index);
    const cardData = drawnCards[cardIndex];

    // 1. 翻转被选中的卡牌
    selectedCard.classList.add('is-flipped');
    selectedCard.classList.add('is-selected');
    isCardSelected = true;

    // 2. 移除其他卡牌的点击事件，并翻转未选中的牌 (可选，增加戏剧性)
    document.querySelectorAll('.tarot-card').forEach(card => {
        card.removeEventListener('click', handleCardSelection);
        if (card !== selectedCard) {
             card.classList.add('is-flipped'); // 让未选中的牌也翻转
             card.style.opacity = 0.6; // 未选中的牌变暗
        }
    });

    // 3. 显示解读结果
    setTimeout(() => {
        resultDisplay.classList.remove('hidden');
        cardMeaning.innerHTML = `你选择了：**${cardData.name}**<br><br>**解读**：${cardData.meaning}`;
        drawButton.textContent = "重新抽牌";
        drawButton.disabled = false; // 允许重新抽牌
    }, 1000); // 翻转 1 秒后显示结果
}

// 3. 绑定按钮事件
drawButton.addEventListener('click', () => {
    // 如果按钮显示“重新抽牌”，则清除所有效果并重新抽牌
    if (drawButton.textContent === "重新抽牌" || drawButton.textContent === "开始抽牌") {
        drawThreeCards();
    }
});

// 首次加载
drawThreeCards();