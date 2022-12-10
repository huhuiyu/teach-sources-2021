let taInfo = document.getElementById('taInfo');
let btnOk = document.getElementById('btnOk');
let divResult = document.getElementById('divResult');
let chkMode = document.getElementById('chkMode');

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
      setErrorClass(data.success);
    });
    return;
  }
  // 调用后端加密功能接口
  ajax('/tool/encrypt', { info: info }, (data) => {
    divResult.innerHTML = data.message;
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
