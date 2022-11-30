let txtUsername = document.getElementById('txtUsername');
let txtPwd = document.getElementById('txtPwd');
let btnLogin = document.getElementById('btnLogin');
let spInfo = document.getElementById('spInfo');

btnLogin.addEventListener('click', () => {
  // 收集登录的信息
  let user = {
    password: SparkMD5.hash(txtPwd.value),
    username: txtUsername.value,
  };
  // 请求后端api校验登录
  ajax('/user/auth/login', user, (info) => {
    if (info.success) {
      // 登录信息正确的情况，调整到main.html
      location = 'main.html';
    } else {
      // 失败就显示原因
      spInfo.innerHTML = info.message;
    }
  });
});
