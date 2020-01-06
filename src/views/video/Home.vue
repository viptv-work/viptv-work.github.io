<template>
  <Collapse v-model="value2" accordion>
    <Panel name="1">
      无水印资源
      <p slot="content" v-for="(x, y) in wlzyNav" :key="y">
       <br><Button type="success" long  @click.native="wlzylist(x.id)">{{ x.name }}</Button></br>
      </p>
    </Panel>
  </Collapse>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Sider_Menu',
  data() {
    return {
      isCollapsed: false
    };
  },
  created() {
    this.wlzy_nav();
  },
  methods: {
    wlzylist(nID) {
      this.$router.push('/video/list/wlzy_' + nID);
    },
    ...mapActions(['wlzy_nav'])
  },
  computed: {
    ...mapGetters(['wlzyNav']),
    menuitemClasses: function() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
    }
  }
};
</script>
