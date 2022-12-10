let tbData = document.getElementById('tbData');

// 查询部门信息
function queryDept() {
  ajax('/manage/dept/queryAll', {}, (info) => {
    console.log('部门查询结果：', info);
    // 部门列表
    let list = info.list;
    let page = info.page;
    console.log('部门列表：', list);
    console.log('分页信息：', page);

    // 循环生成表格
    // <tr>
    //   <td></td>
    //   <td></td>
    //   <td></td>
    //   <td></td>
    // </tr>
    for (let i = 0; i < list.length; i++) {
      let dept = list[i];

      let tr = document.createElement('tr');
      tbData.append(tr);
      // 部门编号
      let td = document.createElement('td');
      td.append(dept.deptId);
      tr.append(td);

      // 部门名称
      td = document.createElement('td');
      td.append(dept.deptName);
      tr.append(td);

      // 部门信息
      td = document.createElement('td');
      td.append(dept.deptInfo);
      tr.append(td);

      // 信息最后修改时间
      td = document.createElement('td');
      td.append(formatTimestamp(dept.lastupdate, 'yyyy-MM-dd hh:mm:ss'));
      tr.append(td);
    }
  });
}

queryDept();
