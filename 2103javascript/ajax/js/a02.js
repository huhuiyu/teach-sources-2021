// md5加密部分
console.log('abc的md5加密结果:', SparkMD5.hash('abc'));

// token验证的部分
let btnToken = document.getElementById('btnToken');
let spToken = document.getElementById('spToken');

btnToken.addEventListener('click', () => {
  ajax('/user/auth/getUserInfo', {}, (info) => {
    spToken.innerHTML = info.token;
  });
});

// 图片验证码的部分
let imgCode = document.getElementById('imgCode');
let acode = document.getElementById('acode');

let txtCode = document.getElementById('txtCode');
let btnCode = document.getElementById('btnCode');

// 通过ajax获取图片验证码的function
function loadImgCode() {
  ajax('/tool/getImageCode', {}, (info) => {
    imgCode.setAttribute('src', info.message);
  });
}

imgCode.addEventListener('click', loadImgCode);
acode.addEventListener('click', loadImgCode);

loadImgCode();

btnCode.addEventListener('click', () => {
  // 验证图片验证码
  ajax(
    '/tool/checkImageCode',
    {
      code: txtCode.value,
    },
    (info) => {
      alert(info.message);
      // 不论正确与否，验证码都只能使用一次
      // 必须重新更新，验证码不区分大小写
      loadImgCode();
    }
  );
});
