let txtUsername = document.getElementById('txtUsername');
let txtPassword = document.getElementById('txtPassword');
let txtNickname = document.getElementById('txtNickname');
let btnReg = document.getElementById('btnReg');
let divInfo = document.getElementById('divInfo');

// 注册按钮功能
btnReg.addEventListener('click', () => {
  // 收集信息（json格式）
  let user = {
    username: txtUsername.value,
    // 密码需要md5加密
    password: SparkMD5.hash(txtPassword.value),
    nickname: txtNickname.value,
  };
  // ajax请求发起注册
  ajax('/user/auth/reg', user, (info) => {
    console.log('注册的应答结果：', info);
    if (info.success) {
      alert(info.message);
      return;
    }
    divInfo.innerHTML = info.message;
    // 所有应答结果都有的三个字段
    // code:应答代码,success：只有true/false，表示业务处理结果是否正常
    // message:服务器应答的一些重要信息
  });
});
