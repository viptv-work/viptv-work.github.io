<template>
	<Xgplay :config="configMp4" :rootStyle="rootStyleMp4" @player="Mp4Player = $event"></Xgplay>
</template>

<script>
import Xgplay from '../components/Xgplayer.vue';
export default {
	data() {
		return {
			configMp4: {
				id: 'xgplay',
				url: 'https://h5player.bytedance.com/video/mp4/xgplayer-demo-360p.mp4'
			},
			rootStyleMp4: {
				backgroundColor: 'rgba(0,0,0,0.87)'
			},
			Mp4Player: null
		};
	},
	components: {
		Xgplay
	}
};
</script>
<style>
html,
body,
.xgplay {
	width: 100%;
	height: 100%;
	margin: auto;
	overflow: hidden;
}
body {
}
#mse {
	flex: auto;
}
</style>
