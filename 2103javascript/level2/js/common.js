// 抽离时间信息的显示字符的处理方法
// 要求该方法拥有如下的效果
// 可以传入时间信息和格式化的字符串参数
// 结果是返回时间格式化之后的样式
// 例如传入当前时间和'yyyy-MM-dd'
// 返回的是2022-10-31

// function的括号里面是定义传入的参数
function formatDate(date, format) {
  console.log(date, format);
  // 字符串替换信息的方法
  let str = 'abc###黑暗骑士###dddd';
  let str1 = str.replace('###', '==');
  console.log(str, str1);
  // 获取日期的信息
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  console.log(year, month, day, hour, minute, second);
  // 三元表达式
  if (month < 10) {
    month = '0' + month;
  }
  // 逻辑表达式?逻辑表达式为真要执行的部分:为假要执行的部分
  // day的值=
  // day是否小于10?是就前面加个'0':否就原值不变;
  day = day < 10 ? '0' + day : day;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  // 处理格式化的部分
  // 格式约定为：yyyy的位置显示年份
  // MM的位置显示月份，dd的位置显示日期
  // hh的位置显示小时，mm的位置显示分钟，ss的位置显示秒
  // 比如当前日期是2022年10月31日 11点15分22秒
  // 传入的格式是yyyy-MM
  // 显示结果为 2022-10
  // 传入的格式是 dd日hh时
  // 显示结果为 31日11时
  let result = format.replace('yyyy', year);
  result = result.replace('MM', month);
  result = result.replace('dd', day);
  result = result.replace('hh', hour);
  result = result.replace('mm', minute);
  result = result.replace('ss', second);

  console.log(result);
  // 如果return 后面有个值，那么表示调用function
  // 的地方可以获取到该值
  return result;
}

// 公用的js！！！
