import api from '@/api'

export default {
  nav: () => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://cj.wlzy.tv' : '/wlzy'
    return api.req.get('/api/macs/vod/')
  },
  list: (id,pg) => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://cj.wlzy.tv' : '/wlzy'
    return api.req.get('/api/macs/vod/', {
      params: {
        ac: 'videolist',
        t: id,
        pg
      }
    })
  },
  search: (name) => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://cj.wlzy.tv' : '/wlzy'
    return api.req.get('/api/macs/vod/', {
      params: {
        ac: 'videolist',
        wd: name
      }
    })
  },
  video: (id) => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://cj.wlzy.tv' : '/wlzy'
    return api.req.get('/api/macs/vod/', {
      params: {
        ac: 'detail',
        ids: id
      }
    })
  }
}
