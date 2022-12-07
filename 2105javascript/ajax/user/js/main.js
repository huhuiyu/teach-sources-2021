let spUser = document.getElementById('spUser');
let div01 = document.getElementById('div01');
let div02 = document.getElementById('div02');

// 默认是没有登录的状态
div01.style.display = 'none';
div02.style.display = 'block';

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

      // 切换到登录的状态
      div01.style.display = 'block';
      div02.style.display = 'none';
    } else {
      // 没有登录的状态
      div01.style.display = 'none';
      div02.style.display = 'block';
    }
  });
}

getLoginUser();

// 安全退出的功能
let btnLogout = document.getElementById('btnLogout');
btnLogout.addEventListener('click', () => {
  ajax('/user/auth/logout', {}, () => {
    alert('安全退出成功');
    // 转到登录页面
    location = 'login.html';
  });
});
