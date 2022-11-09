// 使用axios对后端数据接口api发起调用
// ajax是通过javascript去访问后端服务器提供的数据和功能接口
// 比如注册用户,获取省份城市信息，甚至是发起支付
// ajax的关键三要素
// 1：后端服务器接口的地址！！！不同功能有不同的地址
// 2：传递信息到后端服务器接口
// 3：服务器应答的结果
new axios({
  url: 'https://huhuiyu.top/teach_project_service/?echo=黑暗骑士',
  method: 'get',
})
  .then((resp) => {
    console.log(resp.data);
  })
  .catch((error) => {
    console.error('请求发生错误', error);
  });

// 获取ip地址信息
new axios({
  url: 'https://huhuiyu.top/teach_project_service/ip',
  method: 'get',
})
  .then((resp) => {
    console.log('请求ip地址查询的结果', resp.data);
    // json信息的显示
    let divIp = document.getElementById('divIp');
    // 获取ip地址信息，服务器应答的结果格式是
    // ip:IP地址，只要截取前三个字符不要即是ip地址信息
    // let ip = resp.data.message.replace('ip:', '');
    let ip = resp.data.message.substr(3);
    divIp.innerHTML = ip;
  })
  .catch((error) => {
    console.error('请求发生错误', error);
  });
// 应答的结果都是json格式！！！！
// 且都是服务器决定的信息格式，所以在客户端无法正确的提示
// 所以需要在控制台打印或者去服务器端看说明文档
