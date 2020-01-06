<template>
  <div>
    <div class="myPlayer">
      <div class="now_play">
        <div class="bannerImg">
          <p class="play_name">
            <span>正在播放</span>
            <span>{{ name }} {{ videoUrl.news }}</span>
          </p>
          <div id="video" style="height: 90%">
            <h1>{{ videoUrl.content }}</h1>
          </div>
          <div id="intoLive">红包打赏</div>
        </div>
      </div>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(o, n) in videoUrl.urls" :key="n" @click.native="video(n)">
        <div class="list">
          <div class="match_top">
            <li>{{ o.name }}</li>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import api from 'api';
import { mapGetters } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  name: 'video_player',
  data() {
    return {
      name: '',
      url: null,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  },
  inject: ['reload'],
  computed: {
    ...mapGetters(['videoUrl'])
  },
  mounted: function() {
    this.init(this.$route.params.id);
  },
  methods: {
    init(id) {
      this.$store.dispatch(id.split('_')[0] + '_url', id.split('_')[1]);
      document.title = this.name = this.videoUrl.name;
      toplay(this.videoUrl.urls[0].url);
    },
    video(n) {
      document.title = this.name = this.videoUrl.name + ':' + this.videoUrl.urls[n].name;
      this.toplay(this.videoUrl.urls[n].url);
    },
    toplay(url) {
      api.player.dpv(url);
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  watch: {
    $route: 'reload'
  }
};
</script>
<style>
.myPlayer {
  width: 100%;
  overflow: hidden;
  padding: 1vh;
}
.now_play {
  width: 88vw;
  height: 65vh;
  z-index: 9997;
  position: relative;
  background: #383838;
  margin: 0 auto;
}
.now_play:hover #intoLive {
  display: block;
}
.bannerImg {
  z-index: 1;
  height: 500px;
}
.bannerImg iframe {
  width: 100%;
  z-index: 1;
  height: 500px;
}
.play_name {
  width: 100%;
  height: 45px;
  color: #ffffff;
  z-index: 9998;
  font-size: 15px;
  line-height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.6);
}
.play_name span:first-of-type {
  color: #383838;
  z-index: 9999;
  padding: 4px 10px;
  border-radius: 20px;
  background: #ffffff;
  margin: 0 15px;
}
#intoLive {
  color: #ffffff;
  z-index: 9999;
  text-align: center;
  padding: 15px 30px;
  background: transparent;
  border: 2px solid #ff613c;
  border-radius: 4px;
  cursor: pointer;
  display: none;
  position: absolute;
  top: 40%;
  left: 43.5%;
}
#intoLive:hover {
  background: #ff613c;
}
.now_play > div {
  width: 100%;
  height: 100%;
  z-index: 999;
  position: absolute;
  top: 0;
  text-align: center;
}

.swiper-container {
  width: 80vw;
  margin: 15px auto;
}
.swiper-slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.list {
  width: 90%;
  height: auto;
  margin: 0 auto;
  text-align:center;
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  background: #393e53;
}
.list:hover {
  background: #4f577b;
}
.match_top {
  width: 100%;
  height: auto;
  overflow: hidden;
  box-shadow: 0px 0px 6px -1px #495172;
}
.match_top li {
  width: 100%;
  padding: 9px 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
