<template>
	<div class="dplayer"><d-player ref="player" @play="play" :video="video" :contextmenu="contextmenu"></d-player></div>
</template>
<script>
import VueDPlayer from '@/components/VueDPlayerHls';
window.Hls = require('hls.js');
export default {
	name: 'HelloWorld',
	data() {
		return {
			msg: 'cctv1',
			video: {
				url: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
				type: 'hls'
			},
			autoplay: false,
			player: null,
			contextmenu: [
				{
					text: 'VipTv',
					link: 'https://github.com/vuea'
				}
			]
		};
	},
	components: {
		'd-player': VueDPlayer
	},
};
</script>
<style scoped>
.dplayer {
	width: 100%;
	height: 95%;
	margin: 0 auto 50px;
}
</style>
