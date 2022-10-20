let div01 = document.getElementById('div01');
// <input type="password">
// 动态创建元素并添加到指定元素里面

// document.createElement('元素的标记名称')
// 表示创建一个对应标记名称的页面元素
// 和在页面上获取的元素没有任何的区别
let inp = document.createElement('input');
inp.setAttribute('type', 'password');
console.log(inp);

// 页面元素.appendChild(另一个页面元素)
// 是将另一个页面元素追加到页面元素中去
div01.appendChild(inp);

// 循环执行任务
let names = ['班长', '学习委员', '生活委员', '黑暗骑士'];

// 循环格式
// for(变量初始化;循环是否继续的逻辑表达式;单次循环完成后要执行的代码){
//   要循环执行的代码块
//}
for (let i = 0; i < names.length; i = i + 1) {
  let n = names[i];
  console.log(n);
}

// 日期选择的处理
let selYear = document.getElementById('selYear');
let spDate = document.getElementById('spDate');
let btnDate = document.getElementById('btnDate');

let year;
let month;
let day;

// function的定义
// function 名称(){
//   js代码块
// }
// 通过名称();就可以调用对应的js代码块执行
// 初始化年份的方法
function initYear() {
  // 当前年份
  let nian = new Date().getFullYear();
  for (let i = 1970; i <= nian; i++) {
    // 年份的数据添加
    // <option value="1970">1970</option>
    let opt = document.createElement('option');
    opt.setAttribute('value', i);
    // append和appendChild的区别是
    // append可以追加任意类型的内容
    // appendChild只能追加元素
    opt.append(i + '年');
    selYear.append(opt);
  }
  // 选中中间的位置作为默认
  // options属性是select元素特有的
  // 是获取select中所有的option的数组
  let cindex = parseInt(selYear.options.length / 2);
  console.log(cindex);
  // selectedIndex属性是select元素特有的
  // 用于获取或者设置要选中第几项(从0开始)
  selYear.selectedIndex = cindex;
}

// 调用初始化年份的方法
initYear();

let selMonth = document.getElementById('selMonth');
let selDay = document.getElementById('selDay');

// 初始化月份的方法
function initMonth() {
  for (let i = 1; i < 13; i++) {
    let opt = document.createElement('option');
    opt.setAttribute('value', i);
    opt.append(i + '月');
    selMonth.append(opt);
  }
  selMonth.selectedIndex = 5;
}

initMonth();

// 监听select元素的选中值变化
selYear.addEventListener('change', () => {
  showDate();
});

selMonth.addEventListener('change', () => {
  showDate();
});

function showDate() {
  // select元素的value是选中的option的value属性值
  year = selYear.value;
  console.log('年份选中值变化', year);
  month = selMonth.value;
  spDate.innerHTML = year + '-' + month;
}

showDate();
