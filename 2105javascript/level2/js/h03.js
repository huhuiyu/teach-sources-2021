let container = document.getElementById('container');
let names = ['肖星宇', '赵昊宇', '张杨', '唐炅', '胡雅晴'];
let colors = ['c1', 'c2', 'c3'];

container.addEventListener('mouseup', (event) => {
  // 随机内容
  let index = parseInt(Math.random() * names.length);
  let info = names[index];
  // 获取坐标
  let left = event.clientX;
  let top = event.clientY;
  // 产生div元素
  let div = document.createElement('div');
  div.classList.add('ran-div');
  div.append(info);
  // 通过css属性设置坐标
  div.style.top = top + 'px';
  div.style.left = left + 'px';
  // 随机颜色
  let cindex = parseInt(Math.random() * colors.length);
  div.classList.add(colors[cindex]);
  // 监听动画效果是否完成
  div.addEventListener('animationend', () => {
    console.log('动画完成');
    // 将元素从页面中移除
    div.remove();
  });
  // 动画效果
  div.classList.add('fade-out');
  // 添加页面
  container.append(div);
});

container.addEventListener('scroll', (event) => {
  console.log('页面发生滚动', container.scrollTop);
});
