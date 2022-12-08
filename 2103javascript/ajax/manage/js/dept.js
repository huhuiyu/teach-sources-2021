// 查询部门信息
function queryDept() {
  ajax('/manage/dept/queryAll', {}, (info) => {
    console.log('部门查询结果：', info);
    // 部门列表
    let list = info.list;
    let page = info.page;
    console.log('部门列表：', list);
    console.log('分页信息：', page);
  });
}

queryDept();
