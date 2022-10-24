let txt1 = document.getElementById('txt1');
let txt2 = document.getElementById('txt2');
let sp1 = document.getElementById('sp1');
let div01 = document.getElementById('div01');

// focus事件是元素拥有焦点时触发
// blur事件是元素丢失焦点时触发
txt1.addEventListener('focus', () => {
  sp1.innerHTML = '文本框一获取到焦点';
});

txt1.addEventListener('blur', () => {
  sp1.innerHTML = '文本框一丢失焦点';
});

// 事件处理的function可以带上event参数
// 这个参数会带回来一些和事件有关的信息
// 例如，按键事件可以获取到按键的具体信息
// 又或者鼠标点击事件可以获取到点击的位置
// mousedown表示鼠标按下
// mousedown的event.clientX/clientY时点击的坐标位置
div01.addEventListener('mousedown', (event) => {
  console.log(event);
  div01.innerHTML = '鼠标点击：' + event.clientX + ',' + event.clientY;
});
