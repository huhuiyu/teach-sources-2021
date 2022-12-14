# 项目说明文档(markdown是程序猿专属文档格式)

## 公用的库说明

- 第三方api
  - [ajax框架](./lib/axios.min.js)
  - [json和请求表单数据格式转换工具](./lib/qs.min.js)
  - [md5加密工具](./lib/spark-md5.min.js)
- 公用js/css
  - [自定义的公用ajax方法，依赖axios和qs](./lib/ajax.js)
  - [自定义的公用js方法（比如日期格式化）](./lib/common.js)
  - [自定义的公用css样式](./lib/common.css)

## 第二学期重点总结

- 获取页面元素

```js
  // id最好就是复制粘贴，且带id的页面元素一定要严格遵循代码规范
  let element = document.getElementById('页面元素的id')
```

- 修改元素的属性
  - `element.setAttribute('属性名称',属性值)`
