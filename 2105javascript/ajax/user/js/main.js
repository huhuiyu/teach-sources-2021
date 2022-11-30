let spUser = document.getElementById('spUser');

// 获取用户信息（登录状态）
function getLoginUser() {
  // 通过ajax获取登录信息
  ajax('/user/auth/getUserInfo', {}, (info) => {
    console.log('是否登录：', info.success);
    if (info.success) {
      // 已经登录的情况，就可以获取到用户的信息
      let tbUser = info.tbUser;
      console.log('用户基本信息：', tbUser);

      spUser.innerHTML =
        tbUser.nickname +
        '(' +
        tbUser.username +
        ')-' +
        formatTimestamp(tbUser.lastupdate, 'yyyy-MM-dd hh:mm:ss');
    }
  });
}

getLoginUser();
