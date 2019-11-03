<template> 
  <router-link to="/">首页</router-link> |
    <div :key="i" v-for="(val, i) in info" >
      <router-link   :to="'/tvdata/'+val.vomsID">{{val.name}} </router-link>| 
    </div>
    <router-link to="/about">关于我们</router-link>
  </template>
<script>
import { TvData } from '@/api'   
export default {
  name: 'Head',
  data () {
    return {
      info: []
    }
  },
  created() {    
    TvData().then(res => {
      if (res.data.code === 200) {
        this.info = res.data.body.liveList
      }
    })    
  },
}
</script>
<style scoped lang="less">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
