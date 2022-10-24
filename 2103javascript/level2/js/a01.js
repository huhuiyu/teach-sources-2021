let div01 = document.getElementById('div01');
// <input type="password">
// document.createElement('标记名称')
// 可以创建标记名称对应的元素
let inp = document.createElement('input');
// 创建的元素和从页面获取的元素所有功能完全一致
inp.setAttribute('type', 'password');
// 元素.appendChild(另一个元素)
// 可以将另一个元素追加到元素的里面
div01.appendChild(inp);

// <option value="1970">1970年</option>
let selYear = document.getElementById('selYear');
let selMonth = document.getElementById('selMonth');
let selDay = document.getElementById('selDay');
let spDate = document.getElementById('spDate');
let btnDate = document.getElementById('btnDate');

// function 自定义名称() {
//   js的代码块...
// }
function initYear() {
  // for(变量初始化;循环是否继续执行的逻辑表达式;每次循环之后要执行的代码){
  //    要循环执行的代码块
  // }
  // 获取当前年份
  let nowYear = new Date().getFullYear();

  for (let i = 1970; i <= nowYear; i = i + 1) {
    console.log(i);

    let opt = document.createElement('option');
    opt.setAttribute('value', i);
    opt.append(i + '年');
    // 元素.append方法和appendChild的区别是
    // append可以追加任意类型的数据
    // appendChild只可以追加页面元素
    selYear.append(opt);
  }

  // 设定select元素的默认选中项
  // selectedIndex是select元素特有属性
  // 是获取或者设置被选中的选中索引值（从0开始）
  // options是select元素中的所有option子元素的数组
  selYear.selectedIndex = parseInt(selYear.options.length / 2);
}

// 通过自定义名称()就可以调用对应js的代码块
initYear();

// 初始化月份
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

// 监听下拉列表选中值变化事件
selYear.addEventListener('change', () => {
  initDay();
});

selMonth.addEventListener('change', () => {
  initDay();
});

// 日期数据变化填充方法
function initDay() {
  // 下拉列表的值是由选中的option标记提供
  let year = selYear.value;
  let month = selMonth.value;
  console.log('下拉数据发生变化', year, month);
  // 计算天数
  // 默认是31天
  let days = 31;
  let run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);

  if (month == 4 || month == 6 || month == 9 || month == 11) {
    days = 30;
  } else if (run && month == 2) {
    days = 29;
  } else if (month == 2) {
    days = 28;
  }
  // 生成选项，添加前要清除原有的选项
  selDay.innerHTML = '';
  for (let i = 1; i <= days; i++) {
    let opt = document.createElement('option');
    opt.setAttribute('value', i);
    opt.append(i + '日');
    selDay.append(opt);
  }
  selDay.selectedIndex = parseInt(days / 2) - 1;
  showDate();
}

initDay();

btnDate.addEventListener('click', () => {
  alert(
    '选中的日期是：' + selYear.value + '-' + selMonth.value + '-' + selDay.value
  );
});

function showDate() {
  spDate.innerHTML = selYear.value + '-' + selMonth.value + '-' + selDay.value;
}

// addEventListener的第二个参数要求是一个function
// 所以可以直接写一个function的名称，而不需要括号
selDay.addEventListener('change', showDate);

showDate();

// 循环细节就是三段表达式需要仔细检查，否则容易出现死循环
// function暂时理解成有名字的代码块，调用名称就会执行
