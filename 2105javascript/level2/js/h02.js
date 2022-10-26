let txt1 = document.getElementById('txt1');
let txt2 = document.getElementById('txt2');
let sp1 = document.getElementById('sp1');
let div1 = document.getElementById('div1');

// 事件监听部分
txt1.addEventListener('focus', () => {
  sp1.innerHTML = '第一个文本框获取到了焦点';
});

txt1.addEventListener('blur', () => {
  sp1.innerHTML = '第一个文本框丢失的焦点';
});

// 很多事件需要相关的信息，比如鼠标点击，需要知道点击的位置
// 比如按键，需要知道具体的按键是哪一个
// 所以事件的处理function，可以传入event参数
// 该参数可以获取到相关的事件信息
// mousedown事件是鼠标按下（没有释放就会触发）
// event参数的clientX/clientY就是点击的坐标位置
div1.addEventListener('mousedown', (event) => {
  console.log('鼠标按下事件：', event);
  div1.innerHTML = '鼠标点击的坐标：' + event.clientX + ',' + event.clientY;
});

div1.addEventListener('mouseup', (event) => {
  div1.innerHTML = '鼠标释放的坐标' + event.clientX + ',' + event.clientY;
});

div1.addEventListener('mousemove', (event) => {
  div1.innerHTML = '鼠标移动中：' + event.clientX + ',' + event.clientY;
});

txt1.addEventListener('keydown', (event) => {
  // 按键按下事件
  console.log(event.key);
  // 如果按键是回车就将焦点移动到第二个文本框
  if (event.key == 'Enter') {
    txt2.focus();
  }
});

let div2 = document.getElementById('div2');

div2.addEventListener('mouseover', () => {
  div2.innerHTML = '鼠标进入div2';
});

div2.addEventListener('mouseleave', () => {
  div2.innerHTML = '鼠标离开的div2';
});

// json相关知识点展示区
let student = {
  name: '肖星宇',
  sex: '男',
  height: 175,
  weight: 70,
  // icon: '../images/img28.jpg',
  icon: 'https://img.zcool.cn/community/019f9e5ca55f3ca801214168cc09f7.jpg@1280w_1l_2o_100sh.jpg',
};
// json的格式简单，且可以组合多种不同的数据类型为一个整体
// {
// 属性名称:属性值,
// 属性名称2:属性值2,...
//}
console.log('学生信息：', student);
// json对象可以单独访问属性的值
// 格式为：json对象.属性名称
console.log('学生属性：', student.name, student.sex);

let divJson = document.getElementById('divJson');
// JSON.stringify(json对象)可以将json转换为字符串
// JSON.parse(json格式的字符串)可以将字符串转回为json对象
divJson.append(JSON.stringify(student));

// 模板呈现方法的原理
let spName = document.getElementById('spName');
let spSex = document.getElementById('spSex');
let imgInfo = document.getElementById('imgInfo');

spName.innerHTML = student.name;
spSex.innerHTML = student.sex;
imgInfo.setAttribute('src', student.icon);

let jsonInfo = '{"abc":134,"info":"信息"}';
let jsonObj = JSON.parse(jsonInfo);
console.log(jsonObj.info, jsonInfo.info);

// 两种特别版本的json演示
let json01 = {
  test: '测试信息',
  format: function () {
    return '函数';
  },
  info: {
    name: 'test',
    password: '1122',
  },
  subject: [1, 2, 4],
};

console.log(json01.info.name);
console.log(json01.subject);

let json02 = [
  { name: '班长', sex: '男' },
  { name: '学习委员', sex: '女' },
];

console.log(json02[1], json02[1].name);
