let txtUsername = document.getElementById('txtUsername');
let txtPwd = document.getElementById('txtPwd');
let txtNickname = document.getElementById('txtNickname');
let btnReg = document.getElementById('btnReg');
let spInfo = document.getElementById('spInfo');

// 注册功能
btnReg.addEventListener('click', () => {
  // 获取用户的信息
  let user = {
    username: txtUsername.value,
    // 密码需要md5加密
    password: SparkMD5.hash(txtPwd.value),
    nickname: txtNickname.value,
  };
  // 发起用户注册
  ajax('/user/auth/reg', user, (info) => {
    if (info.success) {
      // 注册成功
      alert(info.message);
      return;
    }
    // 失败就在页面显示原因
    spInfo.innerHTML = info.message;
  });
});
