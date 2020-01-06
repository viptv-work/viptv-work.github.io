import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home',
    component: () => import('@/views/Main'),
    children: [{
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home')
      },
      {
          path: '/about',
          name: 'about',
          component: () => import('@/views/About')
        },
      {
        path: '/live',
        redirect: '/live/home',
        component: () => import('@/views/live/Main'),
        children: [{
            path: '/live/home',
            name: 'live_home',
            component: () => import('@/views/live/Home')
          },
          {
            path: '/live/list/:id',
            name: 'live_list',
            component: () => import('@/views/live/List')
          },
          {
            path: '/live/play/:id',
            name: 'live_play',
            component: () => import('@/views/live/Play')
          },
        ]
      },
      {
        path: '/video',
        redirect: '/video/home',
        component: () => import('@/views/video/Main'),
        children: [{
            path: '/video/home',
            name: 'video_home',
            component: () => import('@/views/video/Home')
          },
          {
            path: '/video/list/:id',
            name: 'video_list',
            component: () => import('@/views/video/List')
          },
          {
            path: '/video/play/:id',
            name: 'video_play',
            component: () => import('@/views/video/Play')
          },
        ]
      },
      {
        path: '/music',
        redirect: '/music/home',
        component: () => import('@/views/music/Main'),
        children: [{
            path: '/music/home',
            name: 'music_home',
            component: () => import('@/views/music/Home')
          },
          {
            path: '/music/list/:id',
            name: 'music_list',
            component: () => import('@/views/music/List')
          },
          {
            path: '/music/play/:id',
            name: 'music_play',
            component: () => import('@/views/music/Play')
          },
        ]
      },

    ]
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
