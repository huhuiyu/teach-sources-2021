let taInfo = document.getElementById('taInfo');
let btnOk = document.getElementById('btnOk');
let divResult = document.getElementById('divResult');
let chkMode = document.getElementById('chkMode');
let btnCopy = document.getElementById('btnCopy');

// 确定按钮
btnOk.addEventListener('click', () => {
  // 获取要加密的信息
  let info = taInfo.value;
  // 获取加密/解密的模式是否选中
  let mode = chkMode.checked;
  if (mode) {
    // 调用解密的接口
    ajax('/tool/decrypt', { info: info }, (data) => {
      showResult(data);
    });
    return;
  }
  // 调用加密接口
  ajax('/tool/encrypt', { info: info }, (data) => {
    console.log('加密/解密的结果：', data);
    showResult(data);
  });
});

// 显示结果的方法
function showResult(data) {
  divResult.innerHTML = data.message;
  if (data.success) {
    divResult.classList.remove('error');
    // 成功就复制结果到剪贴板
    copyText(data.message);
    alert('结果已经复制！');
  } else {
    divResult.classList.add('error');
  }
}

// 复制功能演示
btnCopy.addEventListener('click', () => {
  // 获取要复制的信息
  let info = divResult.innerHTML;
  // 复制指令只能支持输入框中文本，所以需要创建input元素
  let input = document.createElement('input');
  // 设置input的值为要复制的信息
  input.setAttribute('value', info);
  // 添加到页面
  document.body.append(input);
  // 选中所有的输入值
  input.select();
  // 复制内容，execCommand已经标记为弃用，也就是下一代web标准中不会再支持
  document.execCommand('copy');
  // 移除input元素
  input.remove();
  alert('复制成功！');
});
