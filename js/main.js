var cursor = document.getElementById('custom-cursor'); // 获取自定义鼠标指针的元素
var cursorImg = document.createElement('img'); // 创建一个 <img> 元素用于显示鼠标指针图片
cursorImg.src = 'cursor.png'; // 设置默认鼠标指针图片
cursor.appendChild(cursorImg); // 将鼠标指针图片添加到自定义鼠标指针元素中

document.addEventListener('mousemove', function(event) {
    cursor.style.left = event.clientX + 'px'; // 根据鼠标坐标设置自定义鼠标指针的水平位置
    cursor.style.top = event.clientY + 'px'; // 根据鼠标坐标设置自定义鼠标指针的垂直位置
});

document.addEventListener('mousedown', function() {
    cursorImg.src = 'cursor2.png'; // 鼠标按下时切换为第二张图片
});

document.addEventListener('mouseup', function() {
    cursorImg.src = 'cursor.png'; // 鼠标松开时恢复为第一张图片
});
