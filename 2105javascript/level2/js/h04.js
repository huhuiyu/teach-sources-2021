let now = new Date();

// 调用带参数定义的function时要传入对应的实际参数值（实参）
let info = formatDate(now, 'hh:mm:ss');
console.log('function的返回值：', info, formatDate(now, 'yyyy年MM月dd日'));

// 时间显示的全新版本
let sp01 = document.getElementById('sp01');
let sp02 = document.getElementById('sp02');

sp01.innerHTML = formatDate(now, 'hh:mm:ss');
sp02.innerHTML = formatDate(now, 'yyyy年MM月dd日 hh:mm');

setInterval(() => {
  now = new Date();

  sp01.innerHTML = formatDate(now, 'hh:mm:ss');
  sp02.innerHTML = formatDate(now, 'yyyy年MM月dd日 hh:mm');
}, 1000);

// 测试公用js的部分
checkInt();
checkInt('');
checkInt(false);
checkInt(0);

let txt01 = document.getElementById('txt01');
let btn01 = document.getElementById('btn01');

btn01.addEventListener('click', () => {
  let result = checkInt(txt01.value);
  if (result == null) {
    alert('输入的不是整数');
  } else {
    alert('输入的是' + result);
  }
});
