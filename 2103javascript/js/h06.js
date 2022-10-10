//#region if基础

console.log('in h06.js=======>');

// 逻辑表达式就是只有true/false（真假）两个结果
let a = 5,
  b = 6,
  c = 7,
  d = 5,
  e = '5';
console.log(b < a, b > c, b <= d, c > d);
// js中的==只会判断值是否相等，而不关心类型
// 如果需要关心类型，需要三个===判定
console.log(a == e, a === e);

// if流程判定基础
let txtinfo = document.getElementById('txtinfo');
let btninfo = document.getElementById('btninfo');
let spinfo = document.getElementById('spinfo');
let divinfo = document.getElementById('divinfo');

btninfo.addEventListener('click', () => {
  divinfo.classList.remove('error');

  let info = txtinfo.value;
  // if流程判定的格式
  // if(逻辑表达式) {
  //    当逻辑表达式为true的时候要执行的代码块
  // }
  // trim方法是字符串特有，表示去掉头尾的空白字符
  if (info.trim() == '') {
    // focus方法是页面元素特有，表示获取到焦点
    // select方法是文本框特有，表示选择所有输入的内容，慎用
    txtinfo.focus();
    txtinfo.select();
    spinfo.innerHTML = '请输入内容';
    // return关键字表示无条件中断当前方法的执行
    // 一般都是在流程判定里面使用
    divinfo.classList.add('error');
    return;
  }
  spinfo.innerHTML = '输入的是：' + info;
});

let txtage = document.getElementById('txtage');
let btnage = document.getElementById('btnage');
let spage = document.getElementById('spage');

spage.style.display = 'none';

btnage.addEventListener('click', () => {
  spage.style.display = 'none';
  let age = txtage.value.trim();
  // 没有输入的情况
  if (age == '') {
    spage.style.display = 'inline';
    return;
  }
  // 不是数的情况 isNaN(值)方法可以判定值是否不是数
  // 不是数返回是true
  if (isNaN(age)) {
    spage.style.display = 'inline';
    return;
  }
  // 怎么判定是整数还是小数
  let fage = parseFloat(age);
  let iage = parseInt(age);
  console.log(fage, iage);
  // 整数和小数的转换结果不一样就肯定是小数
  if (iage != fage) {
    txtage.value = '';
    txtage.focus();
    spage.style.display = 'inline';
    return;
  }
  // 区间判定 || 表示短路或运算
  // 意思是 || 前后任意一个表达式为true结果就是true
  // 短路的意思是如果前面的表达式已经为true就不再运算后面的
  if (iage < 1 || iage > 200) {
    spage.style.display = 'inline';
    return;
  }
  // alert('要弹出显示的信息')
  alert('输入的年龄是：' + iage);
});

//#endregion

let txtyear = document.getElementById('txtyear');
let txtmonth = document.getElementById('txtmonth');
let btncompute = document.getElementById('btncompute');
let spday = document.getElementById('spday');

btncompute.addEventListener('click', () => {
  //  获取输入的年月信息
  let year = parseInt(txtyear.value);
  let month = parseInt(txtmonth.value);
  // 作业，补齐年月的校验
  // 闰年的判定 1:能够被400整除
  // 或者2:能够被4整除但是不能被100整除
  // &&是短路逻辑与判定，&&前后的表达式都为true，结果才是true
  // 如果第一个逻辑表达式为false，构成短路，不再计算第二个
  let run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
  // 阶梯版本的if
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    spday.innerHTML = '31天';
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    spday.innerHTML = '30天';
  } else if (run && month == 2) {
    spday.innerHTML = '29天';
  } else {
    spday.innerHTML = '28天';
  }
});