console.log('in h08.js=====>');

let txtName = document.getElementById('txtName');
let btnName = document.getElementById('btnName');
let spName = document.getElementById('spName');
let btnRemove = document.getElementById('btnRemove');

btnName.addEventListener('click', () => {
  let name = txtName.value.trim();
  if (name == '') {
    return;
  }
  // 保存姓名到本地存储
  localStorage.setItem('local_name', name);
  alert(name + '已经保存');
});

// 读取本地存储的信息
let lname = localStorage.getItem('local_name');
spName.innerHTML = lname;

btnRemove.addEventListener('click', () => {
  localStorage.removeItem('local_name');
  alert('清除本地存储完毕');
  // 重新加载页面（等同于浏览器的刷新按钮）
  location.reload();
});

// localStorage可以保存本地数据
// 默认只能保存基本数据类型，比如数字和字符串
// setItem('保存数据的名字（key）',要保存的值)
// getItem('保存数据的名字（key）') 获取保存的值
// removeItem('保存数据的名字（key）') 移除保存的值

// session本地存储的演示部分
let txtSession = document.getElementById('txtSession');
let btnSave = document.getElementById('btnSave');
let btnDel = document.getElementById('btnDel');
let spSession = document.getElementById('spSession');

btnSave.addEventListener('click', () => {
  sessionStorage.setItem('session_info', txtSession.value);
  alert('session保存成功');
});

let sessionInfo = sessionStorage.getItem('session_info');
if (sessionInfo) {
  spSession.innerHTML = sessionInfo;
}

btnDel.addEventListener('click', () => {
  sessionStorage.removeItem('session_info');
  alert('移除session成功');
  location.reload();
});

// uplay 编程兔子
// sessionStorage和localStorage的区别
// 只有一点，就是sesionStorage的数据关闭浏览器就会自动清除
