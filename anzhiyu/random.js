var posts=["2025/06/19/组件库打包与发布/","2025/06/21/从零构建自己的CLI工具/","2025/02/18/组件库二次封装/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };