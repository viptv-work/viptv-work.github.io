<template>
  <div class="hello">
    <h1>{{ msg }}</h1>   
    <h3>服务项目</h3>
    <ul>
      <li>广告设计</li>
      <li>广告制作</li>
      <li>广告安装</li>
      <li>广告维修</li>
    </ul>  
  </div>
</template>

<script>
import '@vant/touch-emulator'; 
export default {
  name: 'Hello',
  props: {
    msg: String
  }
}
</script>
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
