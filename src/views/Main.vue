<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>
<template>
    <Layout>
      <Header></Header>
      <Layout><router-view /></Layout>
    </Layout>
</template>
<script>
import Header from '@/components/Header.vue';
export default {
  components: {
    Header
  }
};
</script>
