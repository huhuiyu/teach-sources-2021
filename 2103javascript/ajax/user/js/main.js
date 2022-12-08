let div01 = document.getElementById('div01');
let div02 = document.getElementById('div02');
let spUser = document.getElementById('spUser');
let btnLogout = document.getElementById('btnLogout');

// 默认显示为没有登录的状态
div01.style.display = 'none';
div02.style.display = 'block';
// none,block,inline,inline-block,flex

// 获取当前用户信息
function getUserInfo() {
  ajax('/user/auth/getUserInfo', {}, (info) => {
    console.log('用户信息：', info);
    if (info.success) {
      // 已经登录的情况
      div01.style.display = 'block';
      div02.style.display = 'none';
      // 显示用户基本信息
      let tbUser = info.tbUser;
      console.log('用户基本信息', tbUser);
      spUser.innerHTML = tbUser.nickname + '(' + tbUser.username + ')';
    }
  });
}

// 安全退出功能
btnLogout.addEventListener('click', () => {
  ajax('/user/auth/logout', {}, () => {
    location = 'login.html';
  });
});

getUserInfo();
