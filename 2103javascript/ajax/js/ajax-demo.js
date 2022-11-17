ajax(
  '/api/amap/weatherInfo',
  {
    city: '430702',
    extensions: 'base',
  },
  (info) => {
    console.log('请求的结果：', info);
  }
);

ajax(
  '/api/amap/weatherInfo',
  {
    city: '430702',
    extensions: 'all',
  },
  (info) => {
    console.log('请求的结果：', info);
  }
);

// 发送邮箱验证码功能测试
let btnEmail = document.getElementById('btnEmail');

btnEmail.addEventListener('click', () => {
  ajax(
    '/tool/sendEmailCode',
    {
      email: '1069306849@qq.com',
    },
    (info) => {
      console.log('发送邮件的结果：', info);
    }
  );
});
