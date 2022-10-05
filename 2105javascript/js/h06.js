console.log('in h06.js=====>');
// 逻辑表达式只有true,false（真假）两个值
let logic = false;
let a = 5;
let b = 6;
let c = 7;
let d = 5;
let f = '5';

console.log(logic);
console.log(b > a, b > c, b <= c, a == d);
// 在js中==只会判断值是否相等，不区分类型
// ===才会判断类型也要相同
console.log(a == f, a === f);
// 3 3 8 8 = 24
// 常德市有多少个快递员

let txtinfo = document.getElementById('txtinfo');
let btninfo = document.getElementById('btninfo');
let spinfo = document.getElementById('spinfo');
let divinfo = document.getElementById('divinfo');

btninfo.addEventListener('click', () => {
  divinfo.classList.remove('error');
  // 获取输入的值
  let info = txtinfo.value;
  // if流程判断格式
  // if(逻辑表达式) {
  // 逻辑表达式为true时要执行的代码块
  // 为false就没有任何的动作
  // }
  // trim是字符串特有方法，表示去掉头尾的空白字符
  if (info.trim() == '') {
    // 没有输入时的样式控制
    divinfo.classList.add('error');

    spinfo.innerHTML = '请输入信息';
    // focus方法是让元素拥有焦点，比如输入框会变成输入状态
    txtinfo.focus();
    // select是输入框特有方法，表示选中输入的内容，不保证有效
    txtinfo.select();
    // return表示无条件中断当前函数的执行，可以带返回值
    return;
  }
  spinfo.innerHTML = '你输入的是:' + info;
});

let txtage = document.getElementById('txtage');
let btnage = document.getElementById('btnage');
let spage = document.getElementById('spage');
spage.style.display = 'none';

btnage.addEventListener('click', () => {
  spage.style.display = 'none';
  let age = txtage.value;
  // isNaN(值)可以判定值是否为数字，是数字返回false
  if (isNaN(age)) {
    spage.style.display = 'inline';
    return;
  }
  // 分别转换成整数和小数
  let iage = parseInt(age);
  let fage = parseFloat(age);
  console.log(iage, fage);
});
