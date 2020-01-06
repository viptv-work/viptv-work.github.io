<template>
  <div>
    <List item-layout="vertical">
      <Page :total="1000" prev-text="上一页" next-text="下一页" @on-change="changePage"></Page>
      <ListItem @click.native="toplay(o.id)" v-for="(o, index) in videoList" :key="index">
        <ListItemMeta :avatar="o.img" :title="o.name" :description="o.description" />
        {{ o.content }}
        <div slot="extra"><img v-bind:src="o.img" style="width: 200px" /></div>
      </ListItem>
    </List>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'list',
  created() {
    this.info(1);
  },
  inject: ['reload'],
  computed: {
    ...mapGetters(['videoList'])
  },
  mounted() {
    window.addEventListener('scroll', this.scrollBottom);
  },
  methods: {
    changePage(index) {
     this.info(index);
    },
    info(index) {
      switch (this.$route.params.id.split('_')[0]) {
        case 'wlzy':
          this.$store.dispatch('wlzy_list', [this.$route.params.id.split('_')[1], index]);
          break;
        case 'flzy':
          this.$store.dispatch('flzy_list', [this.$route.params.id.split('_')[1], index]);
          break;
      }
    },
    toplay(nId) {
      switch (this.$route.params.id.split('_')[0]) {
        case 'wlzy':
          this.$router.push('/video/play/wlzy_' + nId);
          break;
        case 'flzy':
          this.$router.push('/video/play/flzy_' + nId);
          break;
      }
    }
  },
  watch: {
    $route: 'reload'
  }
};
</script>
