// ajax请求数据的封装公用js
// 该功能依赖axios和qs这两个第三方js库
// ajax的四个要素
// 1：请求的url地址，2：请求的参数
// 3：应答的结果的处理function，4：请求的方式method
// 服务器的基础地址
const BASE_URL = 'https://huhuiyu.top/teach_project_service';

function ajax(url, params, callback, method) {
  // 拼接完整的请求地址
  url = BASE_URL + url;
  // 转换json参数为http标准的查询字符串格式
  // allowDots: true,表示接受多级的json格式
  let info = Qs.stringify(params, {
    allowDots: true,
  });
  // method可以不传，默认就是post
  method = method ? method : 'post';
  console.log('请求的参数信息：', url, info, method);
  // 通过axios发起请求
  axios({
    // 请求地址
    url: url,
    // 请求的方式
    method: method,
    // 请求的参数数据
    data: info,
  })
    .then((resp) => {
      // 正确应答的处理
      callback(resp.data);
    })
    .catch((err) => {
      // 应答的结果都是json，错误时只要给一个标准错误json信息
      callback({
        code: 500,
        success: false,
        message: '网站更新中，请稍后。。。',
        error: err,
      });
    });
}
