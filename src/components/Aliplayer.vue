<template>
	<div class="prism-player" :id="playerId" :style="playerStyle"></div>
</template>

<style>
@import url(http://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css);
</style>
<script>
export default {
	name: 'aliplayer',
	props: {
		playerStyle: {
			type: String,
			default: ''
		},
		autoplay: {
			type: Boolean,
			default: false
		},
		isLive: {
			type: Boolean,
			default: false
		},
		playsinline: {
			type: Boolean,
			default: false
		},
		width: {
			type: String,
			default: '100%'
		},
		height: {
			type: String,
			default: '320px'
		},
		controlBarVisibility: {
			type: String,
			default: 'hover'
		},
		useH5Prism: {
			type: Boolean,
			default: false
		},
		useFlashPrism: {
			type: Boolean,
			default: false
		},
		source: {
			type: String,
			default: ''
		},
		cover: {
			type: String,
			default: ''
		},
		x5_video_position: {
			type: String,
			default: 'top'
		},
		x5_type: {
			type: String,
			default: 'auto'
		},
		x5_fullscreen: {
			type: Boolean,
			default: false
		},
		x5_orientation: {
			type: Number,
			default: 2
		},
		autoPlayDelay: {
			type: Number,
			default: 0
		},
		autoPlayDelayDisplayText: {
			type: String
		},
		skinLayout: {
			type: Array
		}
	},
	data() {
		return {
			sdkId: 'aliplayer_Script',
			playerId:
				'aliplayer_' +
				Math.random()
					.toString(36)
					.substr(2),
			instance: null
		};
	},
	created() {
		if (window.Aliplayer === undefined) {
			this.insertScript();
		} else {
			this.initAliplayer();
		}
	},
	methods: {
		insertScript() {
			let aliScript = document.getElementById(this.sdkId);
			if (aliScript === null) {
				aliScript = document.createElement('script');
				aliScript.id = this.sdkId;
				aliScript.src = 'http://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js';
				document.head.appendChild(aliScript);
			}
			aliScript.addEventListener('load', () => {
				this.initAliplayer();
			});
		},
		initAliplayer() {
			if (this.instance === null) {
				this.instance && this.instance.dispose();
				this.$nextTick(() => {
					this.instance = window.Aliplayer({
						id: this.playerId,
						autoplay: this.autoplay,
						isLive: this.isLive,
						playsinline: this.playsinline,
						width: this.width,
						height: this.height,
						controlBarVisibility: this.controlBarVisibility,
						useH5Prism: this.useH5Prism,
						useFlashPrism: this.useFlashPrism,
						source: this.source,
						cover: this.cover,
						x5_video_position: this.x5_video_position,
						x5_type: this.x5_type,
						x5_fullscreen: this.x5_fullscreen,
						x5_orientation: this.x5_orientation,
						autoPlayDelay: this.autoPlayDelay,
						autoPlayDelayDisplayText: this.autoPlayDelayDisplayText,
						skinLayout: this.skinLayout
					});
					// 详情看Aliplayer官方接口文档
					this.instance.on('ready', () => {
						this.$emit('ready');
					});
					this.instance.on('play', () => {
						this.$emit('play');
					});
					this.instance.on('pause', () => {
						this.$emit('pause');
					});
					this.instance.on('ended', () => {
						this.$emit('ended');
					});
					this.instance.on('liveStreamStop', () => {
						this.$emit('liveStreamStop');
					});
					this.instance.on('m3u8Retry', () => {
						this.$emit('m3u8Retry');
					});
					this.instance.on('hideBar', () => {
						this.$emit('hideBar');
					});
					this.instance.on('waiting', () => {
						this.$emit('waiting');
					});
					this.instance.on('error', error => {
						this.$emit('error', error);
					});
					this.instance.on('cancelFullScreen', error => {
						this.$emit('cancelFullScreen', error);
					});

					this.instance.on('requestFullScreen', error => {
						this.$emit('requestFullScreen', error);
					});
				});
			}
		},
		/**
		 * 播放视频
		 */
		play: function() {
			this.instance.play();
		},
		/**
		 * 暂停视频
		 */
		pause: function() {
			this.instance.pause();
		},
		/**
		 * 重播视频
		 */
		replay: function() {
			this.instance.replay();
		},
		/**
		 * 跳转到某个时刻进行播放
		 * @argument time 的单位为秒
		 */
		seek: function(time) {
			this.instance.seek(time);
		},
		/**
		 * 获取当前时间 单位秒
		 */
		getCurrentTime: function() {
			return this.instance.getCurrentTime();
		},
		/**
		 *获取视频总时长，返回的单位为秒
		 * @returns 返回的单位为秒
		 */
		getDuration: function() {
			return this.instance.getDuration();
		},
		/**
      获取当前的音量，这个需要在视频加载完成以后才可以获取到，可以在play事件后获取
     */
		getVolume: function() {
			return this.instance.getVolume();
		},
		/**
      设置音量，vol为0-1的实数，ios和部分android会失效
     */
		setVolume: function(vol) {
			this.instance.setVolume(vol);
		},
		/**
		 *直接播放视频url，time为可选值（单位秒）目前只支持同种格式（mp4/flv/m3u8）之间切换暂不支持直播rtmp流切换
		 *@argument url 视频地址
		 *@argument time 跳转到多少秒
		 */
		loadByUrl: function(url, time) {
			this.instance.loadByUrl(url, time);
		},
		/**
		 * 设置播放器大小w,h可分别为400px像素或60%百分比chrome浏览器下flash播放器分别不能小于397x297
		 *@argument w 播放器宽度
		 *@argument h 播放器高度
		 */
		setPlayerSize: function(w, h) {
			this.instance.setPlayerSize(w, h);
		}
	}
};
</script>
