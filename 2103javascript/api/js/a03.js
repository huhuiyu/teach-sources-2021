// 文档地址===>https://huhuiyu.top/teach_project_service/doc.html
let serverUrl = 'https://huhuiyu.top/teach_project_service';
console.log(axios);

// axios是一个ajax的网络请求js库
// 请求四个要素
// 1：请求的后端服务api功能对应的url地址
// 2：请求的method（方式）
// 3：请求的参数数据
// 4：后端服务器应答的结果处理
axios({
  url: serverUrl + '/?echo=黑暗骑士',
  method: 'get',
})
  .then((resp) => {
    console.log('服务器应答信息：', resp.data);
    // {code: 200, message: 'hello 黑暗骑士', success: true}
  })
  .catch((err) => {
    console.error('请求发生错误：', err);
  });

// 发起对ip地址查询的功能请求
axios({
  url: serverUrl + '/ip',
  method: 'get',
})
  .then((resp) => {
    console.log('你的IP是：', resp.data);
    // {code: 200, message: 'hello 黑暗骑士', success: true}
  })
  .catch((err) => {
    console.error('请求发生错误：', err);
  });
