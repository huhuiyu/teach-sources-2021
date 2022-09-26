console.log('in h03.js=====>');

let divStyle = document.getElementById('divStyle');
console.log(divStyle);

// 通过js修改元素的style属性，达到控制样式的目的
// 页面元素.style可以任意修改元素的样式
// 所有css属性都会从css减号表达式转换成js的驼峰表达式格式
// 例如css的border-width的js格式为borderWidth
divStyle.style.color = '#ff0000';
divStyle.style.backgroundColor = '#0000ff';
divStyle.style.fontSize = '2rem';
divStyle.style.textAlign = 'center';

// 切换主题效果
let divCss = document.getElementById('divCss');
let spDay = document.getElementById('spDay');
let spNight = document.getElementById('spNight');
console.log(divCss, spDay, spNight);

// js点击事件处理
// 页面元素.addEventListener('事件类型',()=>{})
// 表示页面元素触发对应事件时要执行的代码
spDay.addEventListener('click', () => {
  console.log('点击了spDay');
  divCss.classList.remove('night');
  divCss.classList.add('day');
});

spNight.addEventListener('click', () => {
  console.log('点击spNight');
  // js修改class属性
  // 元素.classList可以任意修改元素的class属性
  // add是添加一个class类
  // remove是移除一个class类
  // add添加多次相同的class不会叠加
  // remove移除多次不会报错
  // 但是js并不会验证class是否存在
  divCss.classList.remove('day');
  divCss.classList.add('night');
});

// 控制样式完成移动的特效
let divMove = document.getElementById('divMove');
let spm1 = document.getElementById('spm1');
let spm2 = document.getElementById('spm2');

console.log(divMove, spm1, spm2);

spm1.addEventListener('click', () => {
  divMove.classList.remove('move02');
  divMove.classList.add('move01');
});

spm2.addEventListener('click', () => {
  divMove.classList.remove('move01');
  divMove.classList.add('move02');
});
