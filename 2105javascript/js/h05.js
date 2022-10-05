console.log('in h05.js======>');

// 定时任务1，延迟执行
setTimeout(() => {
  console.log('延迟执行的任务');
}, 5000);

// 延迟跳转页面效果
let alink = document.getElementById('alink');
let splink = document.getElementById('splink');
splink.style.display = 'none';

alink.addEventListener('click', () => {
  alink.style.display = 'none';
  splink.style.display = 'inline';

  setTimeout(() => {
    // js跳转页面的方法，和a href的效果一样
    location = 'https://huhuiyu.top';
  }, 5000);
});

//#region  无限重复的延迟执行任务
// 无限重复的延迟执行任务
let divNow = document.getElementById('divNow');
let now = new Date();

let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

divNow.innerHTML =
  year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second;

// setInterval(要重复执行的function,延迟毫秒数)
// setTimeout(要延迟执行的function,延迟毫秒数)
setInterval(() => {
  now = new Date();

  year = now.getFullYear();
  month = now.getMonth() + 1;
  day = now.getDate();
  hour = now.getHours();
  minute = now.getMinutes();
  second = now.getSeconds();

  divNow.innerHTML =
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

//#endregion

// 取消定时任务的方法 ============================
let atimer = document.getElementById('atimer');
let btntimer = document.getElementById('btntimer');
let sptimer = document.getElementById('sptimer');

// 默认显示状态
atimer.style.display = 'inline';
btntimer.style.display = 'none';
sptimer.style.display = 'none';

// 记录计时器，方便取消任务，还要记录倒计时信息
let timer1;
let timer2;
let count = 5;

atimer.addEventListener('click', () => {
  // 切换显示状态
  atimer.style.display = 'none';
  btntimer.style.display = 'inline';
  sptimer.style.display = 'inline';

  sptimer.innerHTML = '将在5秒后跳转';
  // 用计时任务更新倒计时(要记录定时器，方便取消)
  timer1 = setInterval(() => {
    count = count - 1;
    sptimer.innerHTML = '将在' + count + '秒后跳转';
  }, 1000);

  // 延时跳转任务
  timer2 = setTimeout(() => {
    location = 'h01.html';
  }, 5000);
});

btntimer.addEventListener('click', () => {
  // 清除计时器
  clearInterval(timer1);
  clearTimeout(timer2);
  // 恢复计数器
  count = 5;
  // 恢复界面
  atimer.style.display = 'inline';
  btntimer.style.display = 'none';
  sptimer.style.display = 'none';
});
