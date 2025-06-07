const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// 判断是否为移动设备

if (!isMobile) { // 如果不是移动设备，则执行以下代码
  const cursor = document.getElementById('custom-cursor');

  // 初始化，默认显示鼠标图片
  cursor.style.backgroundImage = "url('cursor.png')";

  document.addEventListener('mousemove', (event) => {
    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';
  });

  document.addEventListener('mousedown', () => {
    cursor.style.backgroundImage = "url('cursor2.png')"; // 鼠标按下时切换图片
  });

  document.addEventListener('mouseup', () => {
    cursor.style.backgroundImage = "url('cursor.png')"; // 鼠标松开时恢复默认图片
  });
}
