import api from '@/api'

export default {
  nav: () => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://cj.809zy.com' : '/flzy'
    return api.req.get('/inc/apijson_vod.php')
  },
  list: (id,pg) => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://cj.809zy.com' : '/flzy'
    return api.req.get('/inc/apijson_vod.php', {
      params: {
        ac: 'videolist',
        t: id,
        pg
      }
    })
  },
  search: (name) => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://cj.809zy.com' : '/flzy'
    return api.req.get('/inc/apijson_vod.php', {
      params: {
        ac: 'videolist',
        wd: name
      }
    })
  },
  video: (id) => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://cj.809zy.com' : '/flzy'
    return api.req.get('/inc/apijson_vod.php', {
      params: {
        ac: 'detail',
        ids: id
      }
    })
  }
}
