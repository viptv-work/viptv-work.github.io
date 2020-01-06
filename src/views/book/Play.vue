<template>
  <div id="video" style="margin:0 auto;"></div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'play',
  created() {
    this.fetchDate();
  },
  methods: {
    chplayer(){
      let videoObject = {
        container: '#video',
        variable: 'chplayer',
        loaded: 'loadedHandler',
        live: true,
        video: this.$store.getters.migutvPlay
      };
      new chplayer(videoObject);
    },    
    fetchDate() {      
      this.$store.dispatch('migu_play', this.$route.params.id);      
    }
  },
  computed: {
    ...mapGetters(['migutvPlay'])
  },
  mounted() {
    this.chplayer();
  },
  watch: {
    $route: 'fetchDate'
  }
};
</script>
<style scoped>
#video {
  width: 100%;
  height: 92%;
  margin: 0px auto;
}
</style>
