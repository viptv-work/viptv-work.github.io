<template>
  <div>书的首页</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'home',  
  created() {
    this.$store.dispatch('kugou_new_songs');
  },
  computed: {
    ...mapGetters(['KugouNewSongs'])
  }
};
</script>
