console.log('in h04.js========>');

let a = 100;
let b = 7;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 加法运算有一个特征，只要遇到任意一个不是数字的变量相加
// 结果就会变成字符串！！！！！，字符串结果是拼接而不是计算
console.log(1 + 1 + '1' + 1 + 1);
console.log(1 + 1 + '1' + (1 + 1));

// 获取表单元素的输入信息的部分 =====================
let ipt01 = document.getElementById('ipt01');
let ipt02 = document.getElementById('ipt02');
let spOp1 = document.getElementById('spOp1');
let spCompute = document.getElementById('spCompute');

spCompute.addEventListener('click', () => {
  // 表单元素的特有属性，可以获取到表单元素的输入（选择）的值
  // 所以该属性没有提示,value
  // 要注意所有表单元素的值都是字符串类型！！！！
  let num1 = ipt01.value;
  let num2 = ipt02.value;
  console.log('输入的信息：', num1, num2, isNaN(num1), isNaN(num2));
  // parseFloat(其它数据)
  // 尝试转换其它数据为数值类型数据
  // 如果不能转换结果为NaN(not a number)
  // parseInt(其它数据)
  // 尝试转换其它数据为整数数值类型数据
  // 如果不能转换结果为NaN(not a number)
  spOp1.innerHTML = parseFloat(num1) + parseFloat(num2);
  // 作业：仿造上课的代码，完成剩余的四个数字运算符的效果
});

// 变量可以简单的理解为计算机记录数据的东西
// 一个特殊的变量类型
let now = new Date();
let divNow = document.getElementById('divNow');
divNow.innerHTML = now;
