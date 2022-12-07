let tbDept = document.getElementById('tbDept');

// 查询部门信息
function queryDept() {
  ajax('/manage/dept/queryAll', {}, (info) => {
    console.log(info);
    // 分页的部门信息数组
    let list = info.list;
    // 分页的信息
    let page = info.page;
    console.log('分页部门信息：', list);
    console.log('分页的信息：', page);
    // 显示部门信息
    // <tr>
    //   <td>1</td>
    //   <td>开发部</td>
    //   <td>超级牛逼的部门</td>
    //   <td>2021-12-12</td>
    // </tr>
    for (let i = 0; i < list.length; i++) {
      // 获取单个部门信息
      let dept = list[i];
      // 创建页面元素
      // 编号
      let tr = document.createElement('tr');
      let td = document.createElement('td');
      td.append(dept.deptId);
      tr.append(td);
      // 名称
      td = document.createElement('td');
      td.append(dept.deptName);
      tr.append(td);
      // 信息
      td = document.createElement('td');
      td.append(dept.deptInfo);
      tr.append(td);
      // 时间
      td = document.createElement('td');
      td.append(formatTimestamp(dept.lastupdate, 'yyyy-MM-dd hh:mm:ss'));
      tr.append(td);

      tbDept.append(tr);
    }
  });
}

queryDept();
