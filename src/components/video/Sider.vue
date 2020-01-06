<template>
  <Menu :class="menuitemClasses" theme="dark" width="auto" :open-names="['1']">
    <Submenu name="1">
      <template slot="title">
        <span>无水印资源</span>
      </template>
      <MenuItem :name="'1-' + y" v-for="(x, y) in wlzyNav" :key="y" @click.native="wlzylist(x.id)">{{ x.name }}</MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <span>福利视频采集</span>
      </template>
      <MenuItem :name="'2-' + y" v-for="(x, y) in flzyNav" :key="y" @click.native="flzylist(x.id)">{{ x.name }}</MenuItem>
    </Submenu>
  </Menu>
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
    this.flzy_nav();
    this.wlzy_nav();
  },
  methods: {
    wlzylist(nID) {
      this.$router.push('/video/list/wlzy_' + nID);
    },
    flzylist(nID) {
      this.$router.push('/video/list/flzy_' + nID);
    },
    ...mapActions(['wlzy_nav','flzy_nav'])
  },
  computed: {
    ...mapGetters(['wlzyNav','flzyNav']),
    menuitemClasses: function() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
    }
  }
};
</script>
<style>
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
