// canvas动态背景
huhuiyu_canvas08.startAnimate(document.getElementById('divBg'));

// 切换功能部分
let sp01 = document.getElementById('sp01');
let sp02 = document.getElementById('sp02');

let divMain = document.getElementById('divMain');

sp02.addEventListener('click', () => {
  console.log('点击sp02');
  // 移除其它的active状态
  sp01.classList.remove('active');
  // 添加当前元素为active状态
  sp02.classList.add('active');

  // 移除容器原有的样式
  divMain.classList.remove('move1');
  // 移动到当前元素
  divMain.classList.add('move2');
});

sp01.addEventListener('click', () => {
  console.log('点击sp02');
  // 移除其它的active状态
  sp02.classList.remove('active');
  // 添加当前元素为active状态
  sp01.classList.add('active');

  // 移除容器原有的样式
  divMain.classList.remove('move2');
  // 移动到当前元素
  divMain.classList.add('move1');
});
