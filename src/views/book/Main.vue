<template>
  <div class="layout">
    <Layout>      
      <Layout :style="{ position: 'fixed', width: '100%', height: '100%', margin: '0px 0px' }">
        <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
         <Sider_Menu></Sider_Menu>
        </Sider>
        <Content :style="{ padding: '24px', minHeight: '280px' }">
          <keep-alive>
              <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Header from '@/components/Header.vue';
import Sider_Menu from '@/components/live/Sider.vue';
export default {
  name: 'Home',
  data() {
    return {
      isCollapsed: false
    };
  },
  created() {
    let nID = 'e7716fea6aa1483c80cfc10b7795fcb8';
    this.$store.dispatch('migu_nav', nID);
    this.$store.dispatch('kugou_new_songs');
  },
  methods: {
    Nav(nID) {
      this.$router.push('/live/list/' + nID);
    }
  },
  computed: {
    ...mapGetters(['migutvNav']),
    
    menuitemClasses: function() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
    }
  },
  components: {
    Header,
	Sider_Menu
  },
};
</script>