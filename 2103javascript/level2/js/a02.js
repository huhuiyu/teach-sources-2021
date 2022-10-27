let txt1 = document.getElementById('txt1');
let txt2 = document.getElementById('txt2');
let sp1 = document.getElementById('sp1');
let div01 = document.getElementById('div01');

// focus事件是元素拥有焦点时触发
// blur事件是元素丢失焦点时触发
txt1.addEventListener('focus', () => {
  sp1.innerHTML = '文本框一获取到焦点';
});

txt1.addEventListener('blur', () => {
  sp1.innerHTML = '文本框一丢失焦点';
});

// 事件处理的function可以带上event参数
// 这个参数会带回来一些和事件有关的信息
// 例如，按键事件可以获取到按键的具体信息
// 又或者鼠标点击事件可以获取到点击的位置
// mousedown表示鼠标按下
// mousedown的event.clientX/clientY时点击的坐标位置
div01.addEventListener('mousedown', (event) => {
  console.log(event);
  div01.innerHTML = '鼠标点击：' + event.clientX + ',' + event.clientY;
});

div01.addEventListener('mousemove', (event) => {
  div01.innerHTML = '鼠标移动：' + event.clientX + ',' + event.clientY;
});

let div02 = document.getElementById('div02');

div02.addEventListener('mouseover', () => {
  div02.innerHTML = '鼠标进入元素';
});

div02.addEventListener('mouseleave', () => {
  div02.innerHTML = '鼠标离开元素';
});

// 按键事件
txt1.addEventListener('keyup', (event) => {
  console.log('按键信息：', event.key);
  if ('Enter' == event.key) {
    txt2.focus();
  }
});

// json数据格式
// 最外层是{}定义
// 里面的内容是0到任意个==>字段名:字段的值
// 多个字段中间是,分隔，严格模式下字段名必须在""里面
let student = {
  name: '陈家豪',
  sex: '男',
  age: 22,
  icon: 'https://img.zcool.cn/community/0106fe5a2e46bea80120ba38ca68a3.jpg@1280w_1l_2o_100sh.jpg',
};

console.log(student);
console.log(student.name);
// json和字符串的转换
console.log('字符串形态：', JSON.stringify(student));
let strJson = '{"name":"方宇震","age":20}';
let objJson = JSON.parse(strJson);
console.log(objJson.name, strJson.name, objJson);

// 分段显示json数据到页面（模板技术）
let spName = document.getElementById('spName');
let spSex = document.getElementById('spSex');
let imgIcon = document.getElementById('imgIcon');

spName.append(student.name);
spSex.append(student.sex);
imgIcon.setAttribute('src', student.icon);

// json可以混合任意类型的数据且可以无限套娃式嵌套
let comjson = {
  info: '黑暗骑士',
  test: 1234,
  format: function () {},
  list: [1, 2, 3, 4, { name: 'abc' }],
  other: {
    count: 10000,
  },
};

console.log(comjson);
