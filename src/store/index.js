import Vue from 'vue'
import Vuex from 'vuex'
import liveModule from './modules/live'
import videoModule from './modules/video'
import musicModule from './modules/music'


Vue.use(Vuex)
const store = new Vuex.Store({
	modules: {
		live: liveModule,
		video: videoModule,
		music: musicModule
	}
})

export default store
