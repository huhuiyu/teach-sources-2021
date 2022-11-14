// 使用公用的ajax请求方法
ajax(
  '/api/amap/weatherInfo',
  {
    city: '430702',
    extensions: 'base',
  },
  // 这个就是所谓的callback函数
  (info) => {
    console.log('应答结果：', info);
  }
);

ajax(
  '/api/amap/weatherInfo',
  {
    city: '430702',
    extensions: 'all',
  },
  // 这个就是所谓的callback函数
  (info) => {
    console.log('应答结果：', info);
  }
);

// 发送邮箱验证码功能

let btnEmail = document.getElementById('btnEmail');

btnEmail.addEventListener('click', () => {
  
  ajax(
    '/tool/sendEmailCode',
    {
      email: '1069306849@qq.com',
    },
    (info) => {
      console.log('邮件结果：', info);
      alert(info.message);
    }
  );

});
