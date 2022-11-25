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

// 部门员工联动效果部分 ===============================
let selDept = document.getElementById('selDept');
let tbEmployee = document.getElementById('tbEmployee');

function loadDept() {
  ajax('/linkinfo/queryAllDept', {}, (info) => {
    console.log('部门信息查询结果', info);
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

loadDept();

selDept.addEventListener('change', () => {
  loadEmployee();
});

function loadEmployee() {
  // 获取选中的部门编号
  let deptId = selDept.value;
  console.log('选中的部门编号', deptId);
  // 查询员工
  ajax(
    '/linkinfo/queryEmployeeByDept',
    {
      deptId: deptId,
    },
    (info) => {
      console.log('查询员工的信息', info);
      let list = info.list;
      tbEmployee.innerHTML = '';
      for (let i = 0; i < list.length; i++) {
        let emp = list[i];
        // 员工信息是呈现为表格方式
        // <tr>
        //   <td>100</td>
        //   <td>张三</td>
        //   <td>15080604020</td>
        //   <td>1111111</td>
        // </tr>
        // 创建tr
        let tr = document.createElement('tr');
        // 添加到tbody里面
        tbEmployee.append(tr);
        // 员工编号的td
        let td = document.createElement('td');
        td.append(emp.employeeId);
        // 添加到tr中
        tr.append(td);

        // 员工名称的td
        td = document.createElement('td');
        td.append(emp.employeeName);
        tr.append(td);

        // 员工电话的td
        td = document.createElement('td');
        td.append(emp.phone);
        tr.append(td);

        // 信息最后修改时间的td
        td = document.createElement('td');
        td.append(emp.lastupdate);
        // 格式化服务器发回的时间戳
        td.append(formatTimestamp(emp.lastupdate, ' ==== yyyy-MM-dd hh:mm:ss'));
        tr.append(td);
      }
    }
  );
}

// 联动的业务逻辑
// 比如省份城市的联动
// 1：查询省份信息并创建页面元素显示
// 2：处理省份信息变化的检测，不论是代码触发变化还是事件触发变化
// 3：查询城市信息并创建页面元素显示（依赖动作2获取的省份信息）