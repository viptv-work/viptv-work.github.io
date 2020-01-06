<template>
  <Menu :class="menuitemClasses" theme="dark" width="auto" :open-names="['1']" >
    <Submenu name="1">
      <template slot="title">
        <span>测试频道</span>
      </template>
      <MenuItem :name="'1-' + y" v-for="(x, y) in ivizbNav" :key="y" @click.native="Ivi(x.id)">{{ x.name }}</MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <span>咪咕频道</span>
      </template>
      <MenuItem :name="'2-' + y" v-for="(x, y) in mgzbNav" :key="y" @click.native="Mgzb(x.id)">{{ x.name }}</MenuItem>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <span>赛事频道</span>
      </template>
      <MenuItem :name="'3-' + y" v-for="(x, y) in sszbNav" :key="y" @click.native="Sszb(x.cid)">{{ x.name }}</MenuItem>
    </Submenu>
    <Submenu name="4">
      <template slot="title">
        <span>VIP频道</span>
      </template>
      <MenuItem :name="'4-' + y" v-for="(x, y) in vipzbNav" :key="y" @click.native="Vipzb(y + '.' + x.id)">{{ x.name }}</MenuItem>
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
    this.ivizb_nav();
    this.mgzb_nav();
    this.sszb_nav();
    this.vipzb_nav();
  },

  methods: {
    Ivi(nID) {
      this.$router.push('/live/list/' + nID);
    },
    Mgzb(nID) {
      this.$router.push('/live/list/mgzb_' + nID);
    },
    Sszb(nID) {
      this.$router.push('/live/list/sszb_' + nID);
    },
    Vipzb(nID) {
      this.$router.push('/live/list/vipzb_' + nID);
    },
    ...mapActions(['ivizb_nav', 'mgzb_nav', 'sszb_nav', 'vipzb_nav'])
  },
  computed: {
    ...mapGetters(['ivizbNav', 'mgzbNav', 'sszbNav', 'vipzbNav']),
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
