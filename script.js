// 练习1：故事分析 - 生成三条静态内容
(function() {
    const taskList1 = [
        "分析罗小黑战记中无限的人物弧光",
        "整理妖灵会馆的组织架构设定",
        "收集罗小黑各版本的彩蛋细节"
    ];
    const todo1Container = document.getElementById('todo-1');
    taskList1.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        todo1Container.appendChild(li);
    });
})();

// 练习2：故事设定 - 生成三条不同内容
(function() {
    const taskList2 = [
        { text: "对比电影版与TV版的叙事节奏", type: "剧情分析" },
        { text: "解析罗小黑的空间系能力设定", type: "能力解读" },
        { text: "盘点动画中出现的经典台词", type: "文案整理" }
    ];
    const todo2Container = document.getElementById('todo-2');
    taskList2.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `${task.text} <span style="color:#28B463; font-size:0.85rem;">[${task.type}]</span>`;
        todo2Container.appendChild(li);
    });
})();

// 许愿树功能 - 保留所有功能
(function() {
    // 获取DOM元素
    const wishInput = document.getElementById('wish');
    const addBtn = document.getElementById('addBtn');
    const clearBtn = document.getElementById('clearBtn');
    const wishList = document.getElementById('tree');
    
    // 添加愿望的函数
    function addWish() {
        const wishText = wishInput.value.trim();
        if (!wishText) {
            alert('请输入你的愿望！');
            return;
        }
        const li = document.createElement('li');
        li.textContent = wishText;
        wishList.appendChild(li);
        wishInput.value = '';
        wishInput.focus();
    }

    // 清空所有愿望的函数
    function clearAllWishes() {
        if (wishList.children.length === 0) {
            alert('暂无愿望可清空！');
            return;
        }
        if (confirm('确定要清空所有愿望吗？')) {
            wishList.innerHTML = '';
        }
    }
    
    // 绑定事件
    addBtn.addEventListener('click', addWish);
    clearBtn.addEventListener('click', clearAllWishes);
    wishInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addWish();
        }
    });
})();