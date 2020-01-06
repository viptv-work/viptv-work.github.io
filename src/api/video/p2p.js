import api from '@/api'

export default {
  // http://z1.m1907.cn/api/v/?z=e090d9a71dfabaeefd49ff1c6afcdfae&jx=https://v.qq.com/x/cover/5joaacfgqdo8q8v/w0027eu016y.html
  urlList: (url) => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://z1.m1907.cn' : '/jx';
    return api.req.get('/api/v/', {
      params: {
        z: 'e090d9a71dfabaeefd49ff1c6afcdfae',
        jx: url
      }
    })
  },

}
