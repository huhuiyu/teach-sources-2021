let selProvince = document.getElementById('selProvince');
let selCity = document.getElementById('selCity');

// 获取省份信息的方法
function loadProvince() {
  ajax('/linkinfo/queryAllProvince', {}, (info) => {
    console.log('获取省份信息的结果：', info);
    // 获取省份的列表（数组）
    let list = info.list;
    // 循环处理省份信息
    for (let i = 0; i < list.length; i++) {
      let p = list[i];
      console.log('单个省份信息：', p);
      // 生成option并填充到省份的select中去
      let op = document.createElement('option');
      op.setAttribute('value', p.pid);
      op.append(p.province);
      selProvince.append(op);
    }
    selProvince.selectedIndex = 17;
    // 选中变化后需要调用获取城市信息的方法（联动）
    loadCity();
  });
}

// 联动事件处理
selProvince.addEventListener('change', () => {
  loadCity();
});

loadProvince();

// 获取城市信息（联动的部分）
function loadCity() {
  // 获取省份的信息（pid）
  let pid = selProvince.value;
  console.log('选中的省份的编号', pid);
  // 获取城市信息
  ajax(
    '/linkinfo/queryCityByProvince',
    {
      pid: pid,
    },
    (info) => {
      console.log('城市信息：', info);
      // 循环处理城市信息
      let list = info.list;
      // 清除原有的城市信息
      selCity.innerHTML = '';
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

let btnCity = document.getElementById('btnCity');
let spCity = document.getElementById('spCity');

btnCity.addEventListener('click', () => {
  spCity.innerHTML =
    '选中的编号信息：' + selProvince.value + ',' + selCity.value;
});
