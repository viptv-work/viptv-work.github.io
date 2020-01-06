<template>
  <div>
    <Row :gutter="20">
      <col span="12">
        <Card title="VipTV交流群" shadow>
          <img class="qq-group-img" :src="qqFans" alt="">
          <p class="qq-group-intro">本群为使用VipTV或者对VipTV感兴趣的开发者提供交流平台，在这里，解决你开发中的疑惑，共同进步。</p>
        </Card>
      </col>
    </Row>
  </div>
</template>

<script>
import qqFans from '@/assets/images/viptv.png'
export default {
  name: 'join_page',
  data () {
    return {
      qqFans
    }
  }
}
</script>
<style>
.qq-group-img{
  display: block;
  margin: 0 auto;
  width: 240px;
}
.qq-group-intro{
  padding: 20px;
  font-size: 16px;
}
</style>
