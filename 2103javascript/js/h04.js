console.log('in h04.js======>');

let a = 100;
let b = 7;
// 基本运算符
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 计数的演示
let count = 0;
let btnCount = document.getElementById('btnCount');
let spCount = document.getElementById('spCount');
console.log(btnCount, spCount);

spCount.innerHTML = '点击次数：' + count;

btnCount.addEventListener('click', () => {
  // 计数加一再显示
  count = count + 1;
  spCount.innerHTML = '点击次数：' + count;
});

// 其实可以简单的把变量理解为记录数据用的

// 注意事项！！！！！
// 在js中的加法，只要不是数，加法运算就会变成字符串拼接
console.log('混合了字符串的加法运算====>');
console.log(1 + 1 + '1' + 1);
console.log(1 + 1 + '1' + (1 + 1));

// 获取表单元素的输入值并运算
let ipt01 = document.getElementById('ipt01');
let ipt02 = document.getElementById('ipt02');
let spOp1 = document.getElementById('spOp1');
let btnCompute = document.getElementById('btnCompute');

btnCompute.addEventListener('click', () => {
  // 获取表单元素的输入值（选中值）
  // 只有表单元素才有的特殊属性，所以没有提示！！！
  // 注意！！！所有表单元素的值都是字符串类型！！！
  // js提供了转换到数字的函数，但是前提是值是可以转换成数的
  let num1 = ipt01.value;
  let num2 = ipt02.value;
  console.log('输入的数字为：', num1, num2);
  // parseFloat(其它类型数据)
  // 可以将其它类型（一般是字符串）转换成数
  // 如果其它类型无法转换，结果就是NaN（not a number）
  // parseInt是转换成整数
  spOp1.innerHTML = parseFloat(num1) + parseFloat(num2);
});

// 仿造上课的内容，完成其它数字运算符的功能
