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
