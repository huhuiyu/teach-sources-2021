console.log('in h07.js=======>');

let sprnd = document.getElementById('sprnd');
// 随机数
let rnd = Math.random();
sprnd.innerHTML = rnd;

setInterval(() => {
  rnd = Math.random();
  sprnd.innerHTML = rnd;
}, 3000);

// 模拟5个骰子的随机效果
let btntz = document.getElementById('btntz');
let sptz = document.getElementById('sptz');

btntz.addEventListener('click', () => {
  // 5 - 30
  // 区间随机数的公式 (上界-下界+1)+下界
  let tz = Math.random() * (30 - 5 + 1) + 5;
  tz = parseInt(tz);

  sptz.innerHTML = tz;
});

// 模拟随机点名效果
// 人名是有很多个，所以不可能声明非常多的变量记录
// 所以就需要可以记录一组的数据的变量类型，叫做数组
// []就是定义数组，数组项之间用,逗号分开
let names = ['方宇震', '薛弘扬', '学习委员', '班长', '黑暗骑士'];
// 数组可以通过0到长度-1的下标来获取对应位置的数据
// 数组的长度通过length属性获取
console.log(names[0], names[3], names.length);

let btnname = document.getElementById('btnname');
let spname = document.getElementById('spname');
let timer;
let timer2;
let progress = false;

spname.innerHTML = names[1];

btnname.addEventListener('click', () => {
  // 如果在进行中，就不要在再次点击
  if (progress) {
    return;
  }
  //切换到进行中
  progress = true;

  // 循环随机
  timer = setInterval(() => {
    // 在数组中随机挑选一个的技巧
    // 数组下标恰好是带范围的数字
    let index = parseInt(Math.random() * names.length);
    console.log(names[index]);
    spname.innerHTML = names[index];
  }, 50);

  // 停止计时器任务
  timer2 = setTimeout(() => {
    clearInterval(timer);
    // 恢复控制
    progress = false;
  }, 5000);
});

// 图片切换效果
let divBg = document.getElementById('divBg');
// 图片路径的数组
let images = [
  './images/img28.jpg',
  './images/img29.jpg',
  './images/img30.jpg',
  './images/img31.jpg',
];
let count = 0;

let url = 'url("' + images[count] + '")';
console.log(url);
divBg.style.backgroundImage = url;

setInterval(() => {
  count = (count + 1) % images.length;
  // 0 (1%4 1) (2%4 2) (3%4 3) (4%4 0)

  url = 'url("' + images[count] + '")';
  console.log(url);
  divBg.style.backgroundImage = url;
  
}, 2000);
