<template>
  <Layout :style="{ position: 'fixed', width: '100vw', height: '100vh' }">
    <Sider breakpoint="md" collapsible :collapsed-width="0" v-model="isCollapsed" :style="{overflow: 'auto'}"><Sider_Menu></Sider_Menu></Sider>
    <Content ><router-view v-if="isRouterAlive"></router-view></Content>
  </Layout>
</template>
<script>
import Sider_Menu from '@/components/video/Sider';
export default {
  name: 'Home',
  data() {
    return {
      isCollapsed: false,
      isRouterAlive: true
    };
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  },

  components: {
    Sider_Menu
  }
};
</script>
