console.log('in h08.js=====>');

let txtName = document.getElementById('txtName');
let btnName = document.getElementById('btnName');
let spName = document.getElementById('spName');

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
