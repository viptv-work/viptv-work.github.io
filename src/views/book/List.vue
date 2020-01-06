<template>
  <div>
    <List item-layout="vertical" v-for="(o, index) in migutvCont" :key="index">
      <router-link :to="{ path: '/live/play/' + o.pID }">
        <ListItem>
          <ListItemMeta :title="o.name" :description="'开始时间 :' + o.startTime + ' -  结束时间:' + o.endTime" />
          正在播放 : {{ o.nowPlaying }}
          <div slot="action">
            <li>
              <Icon type="ios-star-outline" />
              123
            </li>
            <li>
              <Icon type="ios-thumbs-up-outline" />
              234
            </li>
            <li>
              <Icon type="ios-chatbubbles-outline" />
              345
            </li>
          </div>
          <div slot="extra"><img v-bind:src="o.h5pics.lowResolutionH" style="width: 280px" /></div>
        </ListItem>
      </router-link>
    </List>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'list',
  created() {
    this.fetchDate();
  },
  computed: {
    ...mapGetters(['migutvCont'])
  },
  methods: {
    fetchDate() {     
      this.$store.dispatch('migu_list', this.$route.params.id);
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: 'fetchDate'
  }
};
</script>
