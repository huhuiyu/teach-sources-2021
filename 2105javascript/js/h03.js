console.log('in h03.js======>');

let divStyle = document.getElementById('divStyle');
console.log(divStyle);

// 通过style属性直通车方法修改元素样式
// 页面元素.style可以修改元素的style属性值
// 所有的css样式都可以修改，但是会转换css的-表达式为驼峰
// 例如background-color为backgroundColor
divStyle.style.backgroundColor = '#ff0000';
divStyle.style.color = 'white';

// 修改css属性
let spDay = document.getElementById('spDay');
let spNight = document.getElementById('spNight');
let divCss = document.getElementById('divCss');
console.log(spDay, spNight, divCss);

// 处理元素的点击功能(事件)
spDay.addEventListener('click', () => {
  console.log('点击了spDay');
  // 元素.classList可以操纵元素的class属性
  // remove表示移除指定名称的css类
  // add表示添加指定名称的css类
  // 注意事项，js并不会验证css类是否存在，所以需要css配合
  // 多次添加或者移除同一个css属性并不出错，也不会叠加
  divCss.classList.remove('night');
  divCss.classList.add('day');
});

spNight.addEventListener('click', () => {
  console.log('点击spNight');
  divCss.classList.remove('day');
  divCss.classList.add('night');
});

// 全屏移动切换效果
let divAni = document.getElementById('divAni');
let sp01 = document.getElementById('sp01');
let sp02 = document.getElementById('sp02');

console.log(divAni, sp01, sp02);

sp01.addEventListener('click', () => {
  divAni.classList.remove('move02');
  divAni.classList.add('move01');
});

sp02.addEventListener('click', () => {
  divAni.classList.remove('move01');
  divAni.classList.add('move02');
});
