let div1 = document.getElementById('div1');

// 随机字符列表
let infos = ['方宇震', '薛弘扬', '黑暗骑士', '元末'];
// 颜色的css列表
let colors = ['c1', 'c2', 'c3', 'c4'];

div1.addEventListener('mouseup', (event) => {
  let left = event.clientX;
  let top = event.clientY;
  console.log(left, top);
  // 字符和颜色
  let index = parseInt(Math.random() * infos.length);
  let cindex = parseInt(Math.random() * colors.length);
  // 创建div并追加到页面
  let div = document.createElement('div');
  div.classList.add('box');
  div.classList.add(colors[cindex]);
  div.append(infos[index]);
  div.style.top = top + 'px';
  div.style.left = left + 'px';

  div1.append(div);
});
