let taInfo = document.getElementById('taInfo');
let btnOk = document.getElementById('btnOk');
let divResult = document.getElementById('divResult');
let chkMode = document.getElementById('chkMode');
let btnCopy = document.getElementById('btnCopy');

// 确定点击功能
btnOk.addEventListener('click', () => {
  // 获取文本域中的信息
  let info = taInfo.value;
  // 通过chkMode的是否选中判定加密/解密模式
  let mode = chkMode.checked;

  if (mode) {
    // 调用后端解密功能接口
    ajax('/tool/decrypt', { info: info }, (data) => {
      divResult.innerHTML = data.message;
      // 复制到剪贴板
      copyText(data.message);
      setErrorClass(data.success);
    });
    return;
  }
  // 调用后端加密功能接口
  ajax('/tool/encrypt', { info: info }, (data) => {
    divResult.innerHTML = data.message;
    // 复制到剪贴板
    copyText(data.message);
    setErrorClass(data.success);
  });
});

// 处理错误的样式
function setErrorClass(success) {
  if (success) {
    divResult.classList.remove('error');
  } else {
    divResult.classList.add('error');
  }
}

// 复制文本信息
btnCopy.addEventListener('click', () => {
  // 获取结果文本
  let info = divResult.innerHTML;
  console.log('要复制的文本：', info);
  // 复制指令只能针对input元素，所有需要创建input元素来完成操作
  let input = document.createElement('input');
  // input的值设置成要复制的文本信息
  input.setAttribute('value', info);
  // 添加到页面上
  document.body.append(input);
  // 选中input的中的全部内容
  input.select();
  // 执行复制的动作
  document.execCommand('copy');
  // 完成复制之后删除input元素
  input.remove();
  alert('复制成功');
});
