<template>
  <div>
    <Card title="红包打赏" shadow>
      <img class="alipay" :src="alipay" alt="" />
      <img class="wxpay" :src="wxpay" alt="" />
    </Card>
  </div>
</template>

<script>
import qqFans from '@/assets/images/viptv.png';
import alipay from '@/assets/images/alipay.jpg';
import wxpay from '@/assets/images/wxpay.png';
export default {
  name: 'join_page',
  data() {
    return {
      qqFans,
      alipay,
      wxpay
    };
  }
};
</script>
<style>
.alipay {
  display: block;
  margin: 0 auto;
  width: 240px;
}
.wxpay {
  display: block;
  margin: 0 auto;
  width: 240px;
}
</style>
