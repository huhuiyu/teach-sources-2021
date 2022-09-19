// 第一行都是控制台提示在哪一个js里面
// 方便判定js导入是否正确
console.log('in h02.js=====>');

// js获取页面指定id的元素
// document.getElementById('页面元素的id属性值')
// 就可以获取到页面对于id的元素
// let声明变量，用于记录信息
let div01 = document.getElementById('div01');
// 替换元素的内容
// 页面元素.innerHTML= '页面元素的新内容'
div01.innerHTML = 'js可以任意修改页面内容<br>支持标记';

let div02 = document.getElementById('div02');
// 页面元素.append('要追加的文字内容')
// 和innerHTML的区别，不会删除原有的信息，也不支持html标记
div02.append('追加内容<br>，不支持标记');

// 效果演示（非知识点）
let div03 = document.getElementById('div03');
for (let i = 0; i < 3000; i++) {
  div03.innerHTML = div03.innerHTML + '我爱你<br>';
}
