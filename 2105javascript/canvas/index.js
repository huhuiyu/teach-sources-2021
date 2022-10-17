let canvasList = [
  huhuiyu_canvas01,
  huhuiyu_canvas02,
  huhuiyu_canvas03,
  huhuiyu_canvas04,
  huhuiyu_canvas05,
  huhuiyu_canvas06,
  huhuiyu_canvas07,
  huhuiyu_canvas08,
];

let index = parseInt(Math.random() * canvasList.length);

canvasList[index].startAnimate(document.getElementById('mycanvas'));
