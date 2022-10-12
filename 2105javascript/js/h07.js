console.log('in h07.js=======>');

// 随机数
let sprnd = document.getElementById('sprnd');

let rnd = Math.random();
sprnd.innerHTML = rnd;

setInterval(() => {
  rnd = Math.random();
  sprnd.innerHTML = rnd;
}, 2000);

// 随机三个骰子的结果(固定区间随机数)
// 三个骰子是3-18
let btntz = document.getElementById('btntz');
let sptz = document.getElementById('sptz');

btntz.addEventListener('click', () => {
  // 随机数() * (上界-下界+1) + 下界
  let rndtz = Math.random() * (18 - 3 + 1) + 3;
  rndtz = parseInt(rndtz);
  sptz.innerHTML = rndtz;
});

// 模拟随机点名效果，人员比较多，不可能声明一系列变量记录
// 需要能记住一系列变量的类型，这就是数组
let names = ['肖星宇', '黑暗骑士', '班长', '学习委员'];
// 格式为[值1,值2...]
// 数组通过0到长度-1的下标来访问其中指定位置的数据
// 通过length属性获取数组的长度
console.log(names[0], names[3], names.length);

let btnname = document.getElementById('btnname');
let spname = document.getElementById('spname');

let timer1;
let timer2;
// 判定是否已经开始随机演示了
let process = false;

btnname.addEventListener('click', () => {
  // 如果在进行中就不要执行任何动作
  if (process) {
    return;
  }
  // 切换到进行中
  process = true;
  // 随机的timer
  timer2 = setInterval(() => {
    // 0到长度-1
    let index = parseInt(Math.random() * names.length);
    spname.innerHTML = names[index];
  }, 100);
  // 停止随机的timer
  timer1 = setTimeout(() => {
    clearInterval(timer2);
    process = false;
  }, 3000);
});

// 图片随机切换，切记，路径是由html决定，和js文件的位置无关
// 简单的说，就是html页面中的路径，就是js里面
let images = [
  './images/img28.jpg',
  './images/img29.jpg',
  './images/img30.jpg',
  './images/img31.jpg',
  './images/img32.jpg',
];

// 随机更换图片
let imgrnd = document.getElementById('imgrnd');

setInterval(() => {
  let index = parseInt(Math.random() * images.length);
  console.log(images[index]);
  // 替换元素的属性
  // 页面元素.setAttribute('属性名称',属性值)
  // 可以修改页面元素指定属性的值
  imgrnd.setAttribute('src', images[index]);
}, 1000);

// 次序切换背景图片
let divBgImg = document.getElementById('divBgImg');
// 当前背景图片的索引
let imgindex = 0;
// 切换背景图片
divBgImg.style.backgroundImage = 'url("' + images[imgindex] + '")';

setInterval(() => {
  imgindex = (imgindex + 1) % images.length;
  divBgImg.style.backgroundImage = 'url("' + images[imgindex] + '")';
}, 2000);
