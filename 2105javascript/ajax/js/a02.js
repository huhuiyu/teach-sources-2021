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

// 部门和员工的联动部分 =======================
let selDept = document.getElementById('selDept');
let tbEmployee = document.getElementById('tbEmployee');

function loadDept() {
  ajax('/linkinfo/queryAllDept', {}, (info) => {
    console.log('部门信息查询结果：', info);
    let list = info.list;
    for (let i = 0; i < list.length; i++) {
      let dept = list[i];
      let op = document.createElement('option');
      op.setAttribute('value', dept.deptId);
      op.append(dept.deptName);
      selDept.append(op);
    }
    selDept.selectedIndex = 0;
    loadEmployee();
  });
}

selDept.addEventListener('change', () => {
  loadEmployee();
});

loadDept();

function loadEmployee() {
  let deptId = selDept.value;
  console.log('选中的部门编号：', deptId);

  ajax(
    '/linkinfo/queryEmployeeByDept',
    {
      deptId: deptId,
    },
    (info) => {
      console.log('员工信息查询结果', info);
      let list = info.list;

      tbEmployee.innerHTML = '';
      for (let i = 0; i < list.length; i++) {
        let emp = list[i];
        // 员工是以表格形式呈现
        // <tr>
        //   <td>100</td>
        //   <td>张三</td>
        //   <td>15080604020</td>
        //   <td>1234567890</td>
        // </tr>
        // 创建tr
        let tr = document.createElement('tr');
        // tr追加到tbody中
        tbEmployee.append(tr);
        // 编号的td
        let td = document.createElement('td');
        td.append(emp.employeeId);
        // td添加到tr
        tr.append(td);
        // 员工名称的td
        td = document.createElement('td');
        td.append(emp.employeeName);
        tr.append(td);

        // 员工电话的td
        td = document.createElement('td');
        td.append(emp.phone);
        tr.append(td);

        // 信息修改时间的td
        td = document.createElement('td');
        td.append(emp.lastupdate);
        tr.append(td);
      }
    }
  );
}
