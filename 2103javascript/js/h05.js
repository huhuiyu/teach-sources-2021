console.log('in h05.js========>');

//#region 基本的时间信息

let spNow = document.getElementById('spNow');
// 获取时间的方法
let now = new Date();
spNow.innerHTML = now;

//#endregion

setTimeout(() => {
  console.log('延迟执行的代码');
}, 3000);

let alink = document.getElementById('alink');

alink.addEventListener('click', () => {
  setTimeout(() => {
    // location = '网页地址'可以跳转到指定的网页
    // 这个网页地址可以是互联网中完整的地址
    // 也可以是本网站的网页地址
    // 简单的说就是a href同等的格式和效果
    location = 'https://huhuiyu.top';
  }, 5000);
});

// 重复延迟执行===========
let spDate = document.getElementById('spDate');

now = new Date();
// 分区获取时间信息
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

spDate.innerHTML =
  year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second;

setInterval(() => {
  now = new Date();
  // 分区获取时间信息
  year = now.getFullYear();
  month = now.getMonth() + 1;
  day = now.getDate();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();

  spDate.innerHTML =
    year +
    '年' +
    month +
    '月' +
    day +
    '日 ' +
    hour +
    ':' +
    minute +
    ':' +
    second;
}, 1000);

// setTimeout(要延迟执行的函数,延迟的毫秒数)
// setInterval(要延迟执行的函数,延迟的毫秒数)，这个是反复执行

let a01 = document.getElementById('a01');
let sp01 = document.getElementById('sp01');
let btn01 = document.getElementById('btn01');
// 计时器对象和计数
let timer1;
let timer2;
let count = 5;

// 界面的初始状态
a01.style.display = 'inline';
sp01.style.display = 'none';
btn01.style.display = 'none';

// 点击的动作
a01.addEventListener('click', () => {
  sp01.innerHTML = count + '秒之后跳转页面';
  // 切换界面到倒计时
  a01.style.display = 'none';
  sp01.style.display = 'inline';
  btn01.style.display = 'inline';

  // 倒计时任务
  timer1 = setInterval(() => {
    count = count - 1;
    sp01.innerHTML = count + '秒之后跳转页面';
  }, 1000);

  // 跳转的延迟任务
  timer2 = setTimeout(() => {
    location = 'h04.html';
  }, 5000);
});

// 取消跳转按钮功能
btn01.addEventListener('click', () => {
  // 终止延时任务的方法
  clearInterval(timer1);
  clearTimeout(timer2);
  // 重置计数
  count = 5;
  // 恢复界面到初始状态
  a01.style.display = 'inline';
  sp01.style.display = 'none';
  btn01.style.display = 'none';
});
