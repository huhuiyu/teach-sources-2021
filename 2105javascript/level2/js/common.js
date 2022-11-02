// 传入时间信息和格式化字符，计算结果
// 例如传入当前时间和'yyyy-MM-dd hh:mm'
// 返回的结果是2022-11-2 8:8
// 或者格式'hh时mm分ss秒' 8时10分56秒

// function的括号里面是定义要传入的参数（形参）
function formatDate(date, format) {
  // console.log(date, format);
  // 获取分段的时间信息
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  // 三元表达式：逻辑表达式?为真执行这里:为假执行这里
  // 判定月是不是小于10，是就是加0，否就不变
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  // console.log(year, month, day, hour, minute, second);
  // 替换字符串内容，要注意，替换只会替换匹配的字符串的第一个
  let str = 'aa&&&bb&&&aa';
  let rstr = str.replace('&&&', '==');
  // console.log(str, rstr);
  // 替换格式化字符串中的信息为时间信息
  // yyyy为年，MM为月，dd为日 hh为时，mm为分，ss为秒
  let result = format.replace('hh', hour);
  result = result.replace('mm', minute);
  result = result.replace('ss', second);
  result = result.replace('yyyy', year);
  result = result.replace('MM', month);
  result = result.replace('dd', day);

  // console.log(result);
  // return 值;表示调用function的地方可以获取到值
  return result;
}

// 判定传入的值是不是一个整数
// 如果是整数类型就转换成整数返回
// 否则返回null
function checkInt(value) {
  // 判定值是不是存在/空字符串/false/null
  if (!value) {
    console.log('无效的值:', value);
    return null;
  }
  // 不是数
  if (isNaN(value)) {
    return null;
  }
  // 整数的判定
  let vint = parseInt(value);
  let fint = parseFloat(value);
  // 168进食
  return vint == fint ? vint : null;
}

// 传入年月信息，返回对应年月有多少天
// 传入的年份必须是1949到当前年份
// 传入的月份必须是1到12
// 如果传入年份是当前年份，月不能超过当前月
// 如果传入是当前年和当前月，返回今天
// 所有的校验不通过的都是返回null
function getDateInfo(year, month) {}
