// ajax请求数据的封装公用js
// 该功能依赖axios和qs这两个第三方js库

// 令牌环信息token处理部分
// 如果接口需要token信息，那么该接口一定会返回一个token给你
// 如果你递交了正确的token，服务器会原样返回该token
// 所以如果收到服务器的token需要本地保存下来
// 另外请求服务器信息的时候需要传回token信息
// 通过token信息服务器就知道你是哪一个客户端

// 本地保存token的key
const TOKEN_KEY = 'huhuiyu_servie_token_info';

// 本地保存token信息
function saveToken(info) {
  if (info && info.token) {
    localStorage.setItem(TOKEN_KEY, info.token);
  }
}

// 读取本地保存的token信息
function loadToken() {
  let token = localStorage.getItem(TOKEN_KEY);
  return token ? token : '';
}

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
      console.error(err);
      // 应答的结果都是json，错误时只要给一个标准错误json信息
      callback({
        code: 500,
        success: false,
        message: '网站更新中，请稍后。。。',
        error: err,
      });
    });
}
