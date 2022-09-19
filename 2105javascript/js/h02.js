// js的第一行代码都是控制台显示信息
// Ctrl + / 仍然是注释的快捷键
console.log('in h02.js=======>');

// js获取页面元素的基本方法（id）
// let 变量名称 = 表达式;
// 其实很简单，就是调用变量名和表达式都是一样的结果
// document.getElementById('页面上元素的id属性值')
// 表示获取到页面上指定id值的元素
let div01 = document.getElementById('div01');

console.log('js获取的页面元素：', div01);

// 替换页面元素的内容
// 页面元素.innerHTML = '新的内容，支持html标记'
div01.innerHTML = 'js修改页面内容！<br/>也支持标记';

let div02 = document.getElementById('div02');
// 页面元素.append('要追加的文本信息，不支持html标记')
div02.append('<br/>js追加的内容');

// 一个体现计算机快的演示
let div03 = document.getElementById('div03');

for (let i = 1; i < 3001; i++) {
  div03.append('我爱你' + i);
}
