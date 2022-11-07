// 一共有8个背景特效，所以可以使用随机的方式完成
let list = [
  huhuiyu_canvas01,
  huhuiyu_canvas02,
  huhuiyu_canvas03,
  huhuiyu_canvas04,
  huhuiyu_canvas05,
  huhuiyu_canvas06,
  huhuiyu_canvas07,
  huhuiyu_canvas08,
];
let index = parseInt(Math.random() * list.length);

list[index].startAnimate(document.getElementById('divBg'));
