//#region 基本if

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

  if (iage != fage) {
    spage.style.display = 'inline';
    return;
  }

  // 区间判定
  if (iage < 1 || iage > 1000) {
    spage.style.display = 'inline';
    return;
  }

  alert('输入的年龄是：' + iage);
});

//#endregion

// 阶梯if
let txtyear = document.getElementById('txtyear');
let txtmonth = document.getElementById('txtmonth');
let btncompute = document.getElementById('btncompute');
let spdate = document.getElementById('spdate');

btncompute.addEventListener('click', () => {
  let year = parseInt(txtyear.value);
  let month = parseInt(txtmonth.value);
  // 闰年的判定
  // || 短路或运算 运算符前后的逻辑表达式只要一个为true
  // 结果就是true，短路表示，前面的逻辑表达式为true
  // 则不会计算后面的逻辑表达式
  // && 短路与运算 都要为true结果才是true
  // 前面的表达式为false，则不会计算后面的逻辑表达式
  let run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);

  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    spdate.innerHTML = '31天';
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    spdate.innerHTML = '30天';
  } else if (run && month == 2) {
    spdate.innerHTML = '29天';
  } else {
    spdate.innerHTML = '28天';
  }

  /*
    if(逻辑表达式1) {
      逻辑表达式1为true时要执行的代码块
    }
    else if(逻辑表达式2) {
      逻辑表达式2为true时要执行的代码块
    }...
    else {
      上面所有的表达式都为false时要执行的代码块
    }
    // 注意事项：任意阶梯为true，后续的判定都不会执行了
  */


});
