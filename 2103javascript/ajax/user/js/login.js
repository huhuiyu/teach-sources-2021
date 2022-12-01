let txtName = document.getElementById('txtName');
let txtPwd = document.getElementById('txtPwd');
let btnLogin = document.getElementById('btnLogin');
let spInfo = document.getElementById('spInfo');

btnLogin.addEventListener('click', () => {
  let user = {
    username: txtName.value,
    password: SparkMD5.hash(txtPwd.value),
  };

  ajax('/user/auth/login', user, (info) => {
    if (info.success) {
      // 登录成功就跳转到用户首页
      location = 'main.html';
      return;
    }
    // 失败就显示原因
    spInfo.innerHTML = info.message;
  });
});

// ajax请求应答的固定三个字段
// success:业务逻辑是否正确
// message:页面相关的信息
// code:业务状态码(正确一般都是200，错误一般都是500)
