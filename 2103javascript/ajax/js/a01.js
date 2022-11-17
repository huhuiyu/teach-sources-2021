let selProvince = document.getElementById('selProvince');
let selCity = document.getElementById('selCity');

// 获取省份信息的方法
function loadProvince() {
  // ajax请求省份的数据
  ajax('/linkinfo/queryAllProvince', {}, (info) => {
    console.log('省份的信息：', info);
    // 获取省份的数组
    let list = info.list;
    // 循环处理省份的信息
    for (let i = 0; i < list.length; i++) {
      // 获取单一省份信息
      let p = list[i];
      console.log('单一省的信息', p);
      // 创建省份的option元素
      let op = document.createElement('option');
      op.setAttribute('value', p.pid);
      op.append(p.province);
      // 追加到select中
      selProvince.append(op);
    }
    // 选中中间值
    selProvince.selectedIndex = 17;
    // 调用联动方法查询城市信息
    loadCity();
  });
}

loadProvince();

selProvince.addEventListener('change', () => {
  loadCity();
});

// 加载城市信息的方法
function loadCity() {
  // 获取选中的省份值
  let pid = selProvince.value;
  console.log('选中的省份编号：', pid);
  // ajax获取城市的信息
  ajax(
    '/linkinfo/queryCityByProvince',
    {
      pid: pid,
    },
    (info) => {
      console.log('城市信息：', info);
      // 省份变化是更新城市信息，所有需要清除以前的城市信息
      selCity.innerHTML = '';
      let list = info.list;
      for (let i = 0; i < list.length; i++) {
        let c = list[i];
        let op = document.createElement('option');
        op.setAttribute('value', c.cid);
        op.append(c.city);
        selCity.append(op);
      }
    }
  );
}
