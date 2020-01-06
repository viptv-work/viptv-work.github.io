<template>
  <div>
    <div class="mePlayer">
      <div class="now_player">
        <div class="bannerImg">
          <p class="play_name">
            <span>正在直播</span>
            <span>{{ name }}</span>
          </p>
          <div id="video" style="height: 90%"></div>
        </div>
      </div>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(o, index) in sszbMatch" :key="index" @click.native="toplay(o.list[0].room_num)">
        <div class="lists">
          <div class="match_tops">
            <p>{{ o.title }}</p>
            <p timer="o.time">{{ o.time }}</p>
          </div>
          <div class="match_bottom">
            <div class="home_team">
              <img v-bind:src="o.home_logo" />
              <p>{{ o.home_name }}</p>
            </div>
            <div class="status">
              <p class="match_score">
                {{ o.home_name }}
                <span>VS</span>
                {{ o.visiting_name }}
              </p>
              <p class="">{{ o.status_ch }}</p>
            </div>
            <div class="visit_team">
              <img v-bind:src="o.visiting_logo" />
              <p>{{ o.visiting_name }}</p>
            </div>
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
  name: 'player',
  data() {
    return {
      name: null,
      data: null,
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
  created() {
    this.$store.dispatch('sszb_match');
  },
  computed: {
    ...mapGetters(['sszbMatch', 'sszbRoom', 'liveUrl'])
  },
  mounted: function() {
    this.set('0.c971b59822c6a91fab4bad8ca9b45f6b.m3u8');
  },
  methods: {
    set: function(id) {
      this.$store.dispatch('vipzb_url', id);
      api.player.dp(this.liveUrl.url);
      this.name = this.liveUrl.name;
    },
    toplay: function(id) {
      this.$store.dispatch('sszb_room', id);
      api.player.dp(this.sszbRoom.m3u8_hd);
      this.name = this.sszbRoom.title;
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style>
.mePlayer {
  width: 100%;
  overflow: hidden;
  padding: 2vh;
}
.now_player {
  width: 88vw;
  height: 50vh;
  z-index: 9997;
  position: relative;
  background: #383838;
  margin: 0 auto;
}
.now_player:hover #intoLive {
  display: block;
}
.bannerImg {
  z-index: 1;
  height: 50vh;
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
  width: 78vw;
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
.lists {
  width: 94%;
  height: auto;
  float: left;
  cursor: pointer;
  margin-top: 15px;
  color: #ffffff;
  font-size: 14px;
  background: #393e53;
}
.lists:hover {
  background: #4f577b;
}
.match_tops {
  width: 100%;
  height: auto;
  overflow: hidden;
  box-shadow: 0px 0px 6px -1px #495172;
}
.match_tops p {
  width: 50%;
  padding: 9px 6px;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.match_tops p:last-of-type {
  width: 40%;
  float: right;
  text-align: right;
}
.match_bottom {
  width: calc(100% - 1px);
  height: auto;
  padding: 22.5px 4px;
  overflow: hidden;
}
.match_bottom p {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.match_bottom > div {
  width: 33.3%;
  text-align: center;
  float: left;
}
.match_bottom img {
  width: 40px;
  height: 40px;
}
.status span {
  padding: 0 10px;
}
.status p:first-of-type {
  color: #ff613c;
  font-size: 17px;
  margin-top: 10px;
}
.status p:last-of-type {
  width: 80%;
  height: 30px;
  font-size: 13px;
  margin: 0 auto;
  color: #ffffff;
  line-height: 30px;
  border-radius: 6px;
  background: #ff613c;
  margin-top: 19px;
}

.notToday {
  background: #a9b6c8 !important;
}

.home_team p,
.visit_team p {
  margin-top: 14px;
}
</style>
