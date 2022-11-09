// 查询字符串知识点，http协议传输数据格式默认为
// 名称1=值1&名称2=值2
// 且不能用任何的特殊符号和中文字符这类非字母的字符
// 所以需要一个可以在json这种常用格式和查询字符串格式的转换工具
console.log(Qs);

let username = document.getElementById('username');
let password = document.getElementById('password');
let btnOk = document.getElementById('btnOk');
let divQs = document.getElementById('divQs');
let divJson = document.getElementById('divJson');

btnOk.addEventListener('click', () => {
  // json数据
  let json = {
    username: username.value,
    password: password.value,
  };
  divJson.innerHTML = JSON.stringify(json);
  // stringify方法是转换json为查询字符串
  divQs.innerHTML = Qs.stringify(json);
});

// q=%E8%83%A1%E8%BE%89%E7%85%9C&form=QBLH&sp=-1&pq=%E8%83%A1%E8%BE%89%E7%85%9C&sc=1-3&qs=n&sk=&cvid=A2856D7418594094B7F6592866DE45D7&ghsh=0&ghacc=0&ghpl=
let info =
  'q=%E8%83%A1%E8%BE%89%E7%85%9C&form=QBLH&sp=-1&pq=%E8%83%A1%E8%BE%89%E7%85%9C&sc=1-3&qs=n&sk=&cvid=A2856D7418594094B7F6592866DE45D7&ghsh=0&ghacc=0&ghpl=';
// 通过Qs还原查询字符串为json格式数据
console.log('还原查询字符串的结果：', Qs.parse(info));

// 有了qs和axios
// 我们可以用json传递数据到后端接口服务器，并得到json应答结果
// 二阶段将对ajax进行封装和简化
// 因为ajax请求只有如下的关键因素
// 1：请求的地址
// 2：请求的数据
// 3：请求的方式(method)
// 4：应答结果的处理