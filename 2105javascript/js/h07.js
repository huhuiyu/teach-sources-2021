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

