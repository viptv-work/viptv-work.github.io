import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/tvdata',
		name: 'tvdata',
		component: () => import('@/views/Tvdata.vue')
	},

	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/About.vue')
	},
	{
		path: '/xgplayer',
		name: 'xgplayer',
		component: () => import('@/views/Xgplayer.vue')
	},
	{
		path: '/dplayer',
		name: 'dplayer',
		component: () => import('@/views/Dplayer.vue')
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
