function openModal(qipaoType) {
    const modal = document.getElementById('detailModal');
    const modalTitle = modal.querySelector('.modal-header h3');
    const modalProductTitle = document.getElementById('modalProductTitle');
    const modalMainImg = document.getElementById('modalMainImg');
    const modalFabricImg = document.getElementById('modalFabricImg');
    const modalCraftImg = document.getElementById('modalCraftImg');
    const modalPoemSection = document.getElementById('modalPoemSection');
    
    // 根据旗袍类型设置标题
    if (qipaoType) {
        modalTitle.textContent = `「${qipaoType}」宋锦旗袍详情`;
        modalProductTitle.textContent = `「${qipaoType}」宋锦旗袍`;
    } else {
        modalTitle.textContent = "宋锦旗袍详情";
        modalProductTitle.textContent = "「蝶恋花」宋锦旗袍";
    }
    
    // 根据旗袍类型设置图片与内容
    let poemTitle = '';
    let poemContent = '';
    let price = '';
    let originalPrice = '';
    
    switch(qipaoType) {
        case '蝶恋花':
            modalMainImg.src = "https://img0.baidu.com/it/u=3157561322,1096729703&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=652";
            modalFabricImg.src = "https://img1.baidu.com/it/u=2536327679,3822089939&fm=253&fmt=auto&app=138&f=JPEG?w=570&h=760";
            modalCraftImg.src = "https://img2.baidu.com/it/u=320919909,1956239350&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500";
            poemTitle = '《蝶恋花》';
            poemContent = '花褪残红青杏小<br>燕子飞时，绿水人家绕<br>枝上柳绵吹又少<br>天涯何处无芳草';
            price = '3,680';
            originalPrice = '4,280';
            break;
        case '清平乐':
            modalMainImg.src = "https://img1.baidu.com/it/u=153083015,326486681&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1320";
            modalFabricImg.src = "https://img1.baidu.com/it/u=4234267238,62791323&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=665";
            modalCraftImg.src = "https://img0.baidu.com/it/u=52726788,1340098799&fm=253&app=138&f=JPEG?w=800&h=1319";
            poemTitle = '《清平乐》';
            poemContent = '年年雪里<br>常插梅花醉<br>挼尽梅花无好意<br>赢得满衣清泪';
            price = '2,980';
            originalPrice = '3,580';
            break;
        case '如梦令':
            modalMainImg.src = "https://img0.baidu.com/it/u=2612396878,922396667&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667";
            modalFabricImg.src = "https://img2.baidu.com/it/u=2011868610,2634804624&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1319";
            modalCraftImg.src = "https://img2.baidu.com/https://img2.baidu.com/it/u=786253004,3401658414&fm=253&app=138&f=JPEG?w=800&h=1422it/u=579066535,1311224269&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1066";
            poemTitle = '《如梦令》';
            poemContent = '昨夜雨疏风骤<br>浓睡不消残酒<br>试问卷帘人<br>却道海棠依旧<br>知否，知否<br>应是绿肥红瘦';
            price = '4,280';
            originalPrice = '4,980';
            break;
        case '忆江南':
            modalMainImg.src = "https://img2.baidu.com/it/u=1082895263,736633428&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1319";
            modalFabricImg.src = "https://img1.baidu.com/it/u=778102152,4260871137&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1319";
            modalCraftImg.src = "https://img2.baidu.com/it/u=3586012090,338547227&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1319";
            poemTitle = '《忆江南》';
            poemContent = '江南好<br>风景旧曾谙<br>日出江花红胜火<br>春来江水绿如蓝<br>能不忆江南';
            price = '3,280';
            originalPrice = '3,880';
            break;
        case '念奴娇':
            modalMainImg.src = "https://t15.baidu.com/it/u=3206499370,2811226203&fm=224&app=112&f=JPEG?w=265&h=499";
            modalFabricImg.src = "https://img2.baidu.com/it/u=704480806,3399736370&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1320";
            modalCraftImg.src = "https://img1.baidu.com/it/u=3802250561,2583141567&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1733";
            poemTitle = '《念奴娇》';
            poemContent = '大江东去<br>浪淘尽<br>千古风流人物<br>故垒西边<br>人道是<br>三国周郎赤壁';
            price = '3,880';
            originalPrice = '4,580';
            break;
        default:
            modalMainImg.src = "https://img0.baidu.com/it/u=3157561322,1096729703&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=652";
            modalFabricImg.src = "https://img1.baidu.com/it/u=2536327679,3822089939&fm=253&fmt=auto&app=138&f=JPEG?w=570&h=760";
            modalCraftImg.src = "https://img2.baidu.com/it/u=320919909,1956239350&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500";
            poemTitle = '《玉兰》';
            poemContent = '玉兰<br>你已知道 我已长大<br>无论在何时何地<br>你恒久在我的心里<br>请宽恕我的不得已<br>爱你整整一个曾今<br>也会是整整一个将来';
            price = '3,680';
            originalPrice = '4,280';
            break;
    }
    
    // 更新诗词内容
    if (modalPoemSection) {
        const poemTitleElement = modalPoemSection.querySelector('.poem-title');
        const poemContentElement = modalPoemSection.querySelector('.poem-content');
        
        if (poemTitleElement) poemTitleElement.innerHTML = poemTitle;
        if (poemContentElement) poemContentElement.innerHTML = poemContent;
    }
    
    // 更新价格
    const productPriceElement = modal.querySelector('.product-price');
    if (productPriceElement) {
        productPriceElement.innerHTML = `¥${price} <span class="original">¥${originalPrice}</span>`;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // 滚动到顶部
    modal.querySelector('.modal-content').scrollTop = 0;
}

function closeModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// 添加横向滚动功能
function scrollProducts(direction) {
    const container = document.querySelector('.product-grid');
    const scrollAmount = 320; // 卡片宽度 + 间距
    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// 宋锦四绝相关函数
function showSongjinMasters() {
    document.getElementById('mastersModal').style.display = 'flex';
}

function showMasterImg(img, name) {
    var modal = document.getElementById('masterImgModal');
    var imgEl = document.getElementById('masterImgModalImg');
    var nameEl = document.getElementById('masterImgModalName');
    imgEl.src = img;
    imgEl.alt = name;
    nameEl.textContent = name;
    modal.style.display = 'flex';
    // 点击图片外区域关闭
    document.getElementById('masterImgModalBg').onclick = function() {
        modal.style.display = 'none';
    };
}

// 查看详情函数
function showDetails() {
    const details = [
        '面料：精选优质宋锦',
        '工艺：传统手工制作',
        '特点：立体剪裁，修身显瘦',
        '适用场合：重要场合、日常穿着'
    ];
    
    // 创建详情模态框
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        position: relative;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--text-color);
    `;
    
    const title = document.createElement('h3');
    title.textContent = '服装详情';
    title.style.cssText = `
        margin-bottom: 1.5rem;
        color: var(--primary-color);
        font-size: 1.5rem;
    `;
    
    const detailsList = document.createElement('ul');
    detailsList.style.cssText = `
        list-style: none;
        padding: 0;
    `;
    
    details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        li.style.cssText = `
            padding: 0.8rem 0;
            border-bottom: 1px solid #eee;
            color: var(--text-color);
        `;
        detailsList.appendChild(li);
    });
    
    content.appendChild(closeBtn);
    content.appendChild(title);
    content.appendChild(detailsList);
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// 视频模态框功能
function openVideoModal(bvid, title) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    `;
    
    // 创建视频容器
    const videoContainer = document.createElement('div');
    videoContainer.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 15px;
        width: 90%;
        max-width: 800px;
        position: relative;
    `;
    
    // 添加标题
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.style.cssText = `
        margin-bottom: 1.5rem;
        color: var(--primary-color);
        text-align: center;
    `;
    
    // 添加视频
    const videoWrapper = document.createElement('div');
    videoWrapper.style.cssText = `
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        border-radius: 10px;
    `;
    
    const iframe = document.createElement('iframe');
    iframe.src = `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1&danmaku=0${bvid === 'BV13W4y1Z7NJ' ? '&t=0&end=29' : ''}`;
    iframe.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    `;
    iframe.allowFullscreen = true;
    
    // 添加关闭按钮
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--text-color);
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
    `;
    
    closeBtn.onmouseover = function() {
        this.style.background = 'rgba(0, 0, 0, 0.1)';
    };
    
    closeBtn.onmouseout = function() {
        this.style.background = 'none';
    };
    
    // 组装模态框
    videoWrapper.appendChild(iframe);
    videoContainer.appendChild(titleElement);
    videoContainer.appendChild(videoWrapper);
    videoContainer.appendChild(closeBtn);
    modal.appendChild(videoContainer);
    document.body.appendChild(modal);
    
    // 添加关闭事件
    const closeModal = () => {
        modal.remove();
    };
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // 设置视频循环播放
    iframe.onload = function() {
        this.contentWindow.postMessage({
            type: 'setLoop',
            value: true
        }, '*');
        
        if (bvid === 'BV13W4y1Z7NJ') {
            this.contentWindow.postMessage({
                type: 'setPlaybackRange',
                value: {
                    start: 0,
                    end: 29
                }
            }, '*');
        }
    };
}

// 数据收集和分析功能
let data = {
    totalVisits: 0,
    productsClicks: 0,
    videoClicks: 0,
    storyClicks: 0,
    processClicks: 0,
    qipaoClicks: 0,
    fabricClicks: 0,
    craftClicks: 0,
    lastVisit: null,
    visitDuration: 0,
    favoriteSection: '',
    interestLevel: {
        products: 0,
        video: 0,
        story: 0,
        process: 0
    }
};

// 生成模拟数据
function generateMockData() {
    return {
        totalVisits: 156,
        productsClicks: 89,
        videoClicks: 45,
        storyClicks: 38,
        processClicks: 27,
        qipaoClicks: 67,
        fabricClicks: 42,
        craftClicks: 35,
        lastVisit: new Date().toISOString(),
        visitDuration: 4580, // 约76分钟
        favoriteSection: 'products',
        interestLevel: {
            products: 45,
            video: 23,
            story: 19,
            process: 13
        }
    };
}

// 初始化数据
function initData() {
    // 使用模拟数据
    data = generateMockData();
    saveData();
    startVisitTimer();
}

// 保存数据
function saveData() {
    localStorage.setItem('userPreferences', JSON.stringify(data));
    updateDisplay();
    analyzeData();
}

// 更新显示
function updateDisplay() {
    document.getElementById('totalVisits').textContent = data.totalVisits;
    document.getElementById('productsClicks').textContent = data.productsClicks;
    document.getElementById('videoClicks').textContent = data.videoClicks;
    document.getElementById('storyClicks').textContent = data.storyClicks;
    document.getElementById('processClicks').textContent = data.processClicks;
    document.getElementById('qipaoClicks').textContent = data.qipaoClicks;
    document.getElementById('fabricClicks').textContent = data.fabricClicks;
    document.getElementById('craftClicks').textContent = data.craftClicks;
}

// 分析数据
function analyzeData() {
    const analysis = document.getElementById('analysisContent');
    const totalClicks = data.productsClicks + data.videoClicks + data.storyClicks + data.processClicks;
    
    if (totalClicks === 0) {
        analysis.textContent = '暂无数据分析';
        return;
    }

    // 计算各模块的点击百分比
    const productsPercent = (data.productsClicks / totalClicks * 100).toFixed(1);
    const videoPercent = (data.videoClicks / totalClicks * 100).toFixed(1);
    const storyPercent = (data.storyClicks / totalClicks * 100).toFixed(1);
    const processPercent = (data.processClicks / totalClicks * 100).toFixed(1);

    // 计算用户兴趣度
    const interestLevel = calculateInterestLevel();

    // 生成分析报告
    let analysisText = '用户喜好分析报告：\n\n';
    
    // 访问行为分析
    analysisText += `1. 访问行为：\n`;
    analysisText += `   - 总访问次数：${data.totalVisits}次\n`;
    analysisText += `   - 平均停留时间：${(data.visitDuration / data.totalVisits / 60).toFixed(1)}分钟\n`;
    analysisText += `   - 最后访问：${new Date(data.lastVisit).toLocaleString()}\n\n`;

    // 内容偏好分析
    analysisText += `2. 内容偏好：\n`;
    analysisText += `   - 最感兴趣模块：${getMostViewedSection()} (${Math.max(productsPercent, videoPercent, storyPercent, processPercent)}%)\n`;
    analysisText += `   - 产品关注度：${(data.qipaoClicks / data.totalVisits * 100).toFixed(1)}%\n`;
    analysisText += `   - 工艺关注度：${(data.craftClicks / data.totalVisits * 100).toFixed(1)}%\n\n`;

    // 用户兴趣度分析
    analysisText += `3. 兴趣度分析：\n`;
    analysisText += `   - 产品系列：${getInterestLevelText(interestLevel.products)} (${interestLevel.products.toFixed(1)}%)\n`;
    analysisText += `   - 虚拟展示：${getInterestLevelText(interestLevel.video)} (${interestLevel.video.toFixed(1)}%)\n`;
    analysisText += `   - 面料故事：${getInterestLevelText(interestLevel.story)} (${interestLevel.story.toFixed(1)}%)\n`;
    analysisText += `   - 工艺传承：${getInterestLevelText(interestLevel.process)} (${interestLevel.process.toFixed(1)}%)\n\n`;

    // 建议
    analysisText += `4. 个性化建议：\n`;
    analysisText += generateRecommendations(interestLevel);

    // 添加趋势分析
    analysisText += `\n5. 用户行为趋势：\n`;
    analysisText += `   - 产品浏览深度：${(data.qipaoClicks / data.productsClicks * 100).toFixed(1)}%\n`;
    analysisText += `   - 内容互动率：${((data.fabricClicks + data.craftClicks) / data.totalVisits * 100).toFixed(1)}%\n`;
    analysisText += `   - 平均访问时长：${(data.visitDuration / data.totalVisits / 60).toFixed(1)}分钟/次`;

    analysis.textContent = analysisText;
}

// 计算用户兴趣度
function calculateInterestLevel() {
    const total = data.productsClicks + data.videoClicks + data.storyClicks + data.processClicks;
    return {
        products: (data.productsClicks / total * 100),
        video: (data.videoClicks / total * 100),
        story: (data.storyClicks / total * 100),
        process: (data.processClicks / total * 100)
    };
}

// 获取兴趣度文字描述
function getInterestLevelText(level) {
    if (level >= 40) return '非常感兴趣';
    if (level >= 25) return '比较感兴趣';
    if (level >= 15) return '一般感兴趣';
    return '较少关注';
}

// 生成个性化建议
function generateRecommendations(interestLevel) {
    let recommendations = '';
    const maxInterest = Math.max(...Object.values(interestLevel));
    
    if (maxInterest === interestLevel.products) {
        recommendations += '   - 建议重点展示更多产品系列\n';
        recommendations += '   - 可以增加产品细节展示\n';
        recommendations += '   - 考虑添加产品对比功能\n';
    } else if (maxInterest === interestLevel.video) {
        recommendations += '   - 建议增加虚拟展厅内容\n';
        recommendations += '   - 可以添加更多互动体验\n';
        recommendations += '   - 考虑加入3D展示功能\n';
    } else if (maxInterest === interestLevel.story) {
        recommendations += '   - 建议深入展示面料故事\n';
        recommendations += '   - 可以增加文化背景介绍\n';
        recommendations += '   - 考虑添加面料知识库\n';
    } else {
        recommendations += '   - 建议突出工艺传承特色\n';
        recommendations += '   - 可以增加匠人故事\n';
        recommendations += '   - 考虑添加工艺展示视频\n';
    }
    
    return recommendations;
}

// 获取最受关注的模块
function getMostViewedSection() {
    const sections = {
        'productsClicks': '春夏系列',
        'videoClicks': '虚拟展示',
        'storyClicks': '面料故事',
        'processClicks': '匠心传承'
    };
    return sections[Object.keys(sections).reduce((a, b) => data[a] > data[b] ? a : b)];
}

// 访问计时器
let visitTimer;
function startVisitTimer() {
    visitTimer = setInterval(() => {
        data.visitDuration++;
        saveData();
    }, 1000);
}

// 页面关闭时保存数据
window.addEventListener('beforeunload', () => {
    clearInterval(visitTimer);
    saveData();
});

// 修改切换数据收集器显示状态的函数
function toggleDataCollector(event) {
    event.stopPropagation(); // 阻止事件冒泡
    const collector = document.getElementById('dataCollector');
    collector.classList.toggle('expanded');
}

// 页面加载完成时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化数据
    initData();
    
    // 点击模态框外部关闭
    document.getElementById('detailModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // 检测滚动位置显示/隐藏按钮
    const productGrid = document.querySelector('.product-grid');
    const leftBtn = document.querySelector('.scroll-left');
    const rightBtn = document.querySelector('.scroll-right');

    if (productGrid && leftBtn && rightBtn) {
        productGrid.addEventListener('scroll', () => {
            leftBtn.style.display = productGrid.scrollLeft > 0 ? 'flex' : 'none';
            rightBtn.style.display = 
                productGrid.scrollLeft < (productGrid.scrollWidth - productGrid.clientWidth) 
                ? 'flex' : 'none';
        });
    }
    
    // 点击外部关闭数据收集器
    document.addEventListener('click', function(e) {
        const collector = document.getElementById('dataCollector');
        if (collector && !collector.contains(e.target) && collector.classList.contains('expanded')) {
            collector.classList.remove('expanded');
        }
    });
    
    // 添加图片点击事件
    const clo3dModel = document.getElementById('clo3dModel');
    if (clo3dModel) {
        clo3dModel.addEventListener('click', function() {
            // 创建模态框
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                cursor: pointer;
            `;
            
            // 创建图片容器
            const imgContainer = document.createElement('div');
            imgContainer.style.cssText = `
                max-width: 90%;
                max-height: 90vh;
                position: relative;
            `;
            
            // 创建图片
            const img = document.createElement('img');
            img.src = this.src;
            img.style.cssText = `
                width: 100%;
                height: auto;
                object-fit: contain;
                border-radius: 10px;
            `;
            
            // 添加关闭按钮
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '×';
            closeBtn.style.cssText = `
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
                padding: 5px 10px;
            `;
            
            // 组装模态框
            imgContainer.appendChild(img);
            imgContainer.appendChild(closeBtn);
            modal.appendChild(imgContainer);
            document.body.appendChild(modal);
            
            // 添加关闭事件
            const closeModal = () => {
                modal.remove();
            };
            
            modal.addEventListener('click', closeModal);
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeModal();
            });
        });
    }
}); 