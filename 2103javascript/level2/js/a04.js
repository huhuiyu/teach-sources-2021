// 调用有参数的function需要在括号中传递实际的值
let now = new Date();

let info = formatDate(now, 'hh:mm:ss');
console.log('返回的结果：', info);
console.log(formatDate(now, 'yyyy/MM月dd日 hh:mm'));

// 自定显示功能演示
let sp1 = document.getElementById('sp1');
let sp2 = document.getElementById('sp2');

setInterval(() => {
  let date = new Date();
  sp1.innerHTML = formatDate(date, 'hh时mm分ss秒');
  sp2.innerHTML = formatDate(date, 'yyyy/MM/dd hh:mm');
}, 1000);
