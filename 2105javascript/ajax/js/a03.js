let btnToken = document.getElementById('btnToken');
let divToken = document.getElementById('divToken');

// 只要是需要token的接口，都会主动应答token的值回来
btnToken.addEventListener('click', () => {
  ajax('/user/auth/getUserInfo', {}, (info) => {
    divToken.innerHTML = info.token;
  });
});

// 图片验证码的部分（需要token功能正确）
let imgCode = document.getElementById('imgCode');
let acode = document.getElementById('acode');
let txtCode = document.getElementById('txtCode');
let btnCode = document.getElementById('btnCode');

// 校验图片验证码
btnCode.addEventListener('click', () => {
  ajax(
    '/tool/checkImageCode',
    {
      code: txtCode.value,
    },
    (info) => {
      if (info.success) {
        alert('验证码正确');
      } else {
        alert('验证码错误');
      }
      // 不论正确错误，图片验证都会失效，需要刷新
      loadImgCode();
    }
  );
});

// 获取图片验证码的方法
function loadImgCode() {
  ajax('/tool/getImageCode', {}, (info) => {
    imgCode.setAttribute('src', info.message);
  });
}

imgCode.addEventListener('click', loadImgCode);
acode.addEventListener('click', loadImgCode);

loadImgCode();
