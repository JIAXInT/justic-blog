var posts=["2025/06/25/vue实现全局状态管理/","2025/02/18/组件库二次封装/","2025/02/06/前端权限管理方案/","2025/06/21/从零构建自己的CLI工具/","2022/07/13/JavaScript性能优化/JavaScript性能优化/","2025/06/19/组件库打包与发布/","2022/10/20/Vue 响应式解析/Vue响应式解析/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };