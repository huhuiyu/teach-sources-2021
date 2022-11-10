let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let btnOk = document.getElementById('btnOk');
let divQs = document.getElementById('divQs');
let divJson = document.getElementById('divJson');

console.log(Qs);

btnOk.addEventListener('click', () => {
  // json格式的提交信息
  let user = {
    username: txtName.value,
    password: txtPwd.value,
  };
  divJson.innerHTML = JSON.stringify(user);
  // 使用Qs库转换json和查询字符串
  divQs.innerHTML = Qs.stringify(user);
  let qsInfo = 'username=%E9%BB%91%E6%9A%97%E9%AA%91%E5%A3%AB&password=111111';
  console.log('转换查询字符串为json：', Qs.parse(qsInfo));
});

let info =
  'ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=%E9%BB%91%E6%9A%97%E9%AA%91%E5%A3%AB&fenlei=256&rsv_pq=0xa51cd17000043d13&rsv_t=40812p9lXqk2Jz8OaYJRWFZxA1wvqSsYrjbK6re%2BDpkD08wXkgXjxIV1y7zT&rqlang=en&rsv_enter=1&rsv_dl=ih_1&rsv_sug3=2&rsv_sug1=2&rsv_sug7=001&rsv_sug2=1&rsv_btype=i&rsp=1&rsv_sug9=es_2_1&inputT=1527&rsv_sug4=2227&rsv_sug=3';
console.log(Qs.parse(info));

// 查询字符串格式为：名称1=值1&名称2=值2...
// Qs可以在json和查询字符串之间来回转换
