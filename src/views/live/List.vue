<template>
  <div>
    <List item-layout="vertical" >
      <ListItem @click.native="toplay(o.id)" v-for="(o, index) in liveList" :key="index">
        <ListItemMeta :avatar="viptv" :title="o.name" :description="'开始时间 :' + o.start + ' -  结束时间:' + o.end" />
        正在播放 : {{ o.now }}
        <div slot="extra"><img v-bind:src="o.img" style="width: 280px" /></div>
      </ListItem>
    </List>
  </div>
</template>
<script>
import viptv from '@/assets/images/viptv.png'
import { mapGetters } from 'vuex';
export default {
  name: 'list',
  data () {
    return {
      viptv
    }
  },
  created() {
    this.info();
  },
  inject: ['reload'],
  computed: {
    ...mapGetters(['liveList'])
  },
  methods: {
    info() {
      switch (this.$route.params.id.split('_')[0]) {
        case 'ivizb':
          this.$store.dispatch('ivizb_list', this.$route.params.id.split('_')[1]);
          break;
        case 'mgzb':
          this.$store.dispatch('mgzb_list', this.$route.params.id.split('_')[1]);
          break;
        case 'sszb':
          this.$store.dispatch('sszb_list', this.$route.params.id.split('_')[1]);
          break;
        case 'vipzb':
          this.$store.dispatch('vipzb_list', this.$route.params.id.split('_')[1]);
          break;
      }
    },
    toplay(nId) {
      switch (this.$route.params.id.split('_')[0]) {
        case 'ivizb':
          this.$router.push('/live/play/' + nId);
          break;
        case 'mgzb':
          this.$router.push('/live/play/mgzb_' + nId);
          break;
        case 'sszb':
          this.$router.push('/live/play/sszb_' + nId);
          break;
        case 'vipzb':
          this.$router.push('/live/play/' + nId);
          break;
      }
    }
  },
  watch: {
    $route: 'reload'
  }
};
</script>
