console.log('in h08.js======>');
let txtName = document.getElementById('txtName');
let btnSave = document.getElementById('btnSave');
let spName = document.getElementById('spName');
let btnRemove = document.getElementById('btnRemove');

btnSave.addEventListener('click', () => {
  let name = txtName.value.trim();
  if (name == '') {
    return;
  }
  // 保存信息到本地存储
  localStorage.setItem('local-name', name);
  alert('保存信息成功');
});

// 读取本地存储的信息
let localName = localStorage.getItem('local-name');
if (localName) {
  spName.innerHTML = localName;
}

// 移除本地存储信息
btnRemove.addEventListener('click', () => {
  localStorage.removeItem('local-name');
  spName.innerHTML = '';
  alert('移除了本地存储的信息');
});

// localStorage可以操作本地存储信息
// setItem('本地存储信息的名称key',要保存的值)
// getItem('本地存储信息的名称key') 获取保存的值
// removeItem('本地存储信息的名称key') 移除保存的值

// session数据部分============
let txtSession = document.getElementById('txtSession');
let btnSession = document.getElementById('btnSession');
let btnDel = document.getElementById('btnDel');
let spSession = document.getElementById('spSession');

btnSession.addEventListener('click', () => {});

btnDel.addEventListener('click', () => {});
