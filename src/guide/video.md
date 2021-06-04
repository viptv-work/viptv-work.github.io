# 视频接口

## 凤凰视频
###  NAV
```
Nav: [{
    id: 'HDZYCHI',
    name: '鸡汤'
  }, {
    id: 'SYLB10',
    name: '头条'
  },
  {
    id: 'CJ33',
    name: '财经'
  }, {
    id: 'FUNNY',
    name: '搞笑'
  }, {
    id: 'ANECD',
    name: '奇闻'
  }, {
    id: 'KJ123',
    name: '科技'
  }, {
    id: 'TY43',
    name: '体育'
  }, {
    id: 'LS153',
    name: '历史'
  }, {
    id: 'QC45',
    name: '汽车'
  }, {
    id: 'FC81',
    name: '房产'
  }, {
    id: 'JS83',
    name: '军事'
  }
],
```
### Home
```
Home: () => {
  req.defaults.baseURL = env ? proxy + 'https://shankapi.ifeng.com' :
    '/ifenga'
  return req.get('/spring/homeStream/getHomeStream/50/0/0/')
},
```
### List
```
List: (id, pg) => {
  req.defaults.baseURL = env ? proxy + 'http://api.iclient.ifeng.com' :
    '/ifengb'
  return req.get('/ClientNews', {
    params: {
      id,
      os: 'android',
      gv: '5.5.5',
      uid: 'undefined',
      proid: 'undefined',
      action: 'default',
      pullNum: pg
    }
  })
},
```
### Ucms

```
Ucms: (id) => {
  req.defaults.baseURL = env ? proxy + 'https://shankapi.ifeng.com' :
    '/ifenga'
  return req.get('/c/api/videoShare/getRelateVideos/' + id + '/getvideorelatecb')
},
```
### Url 
```
Url: (guid) => {
  req.defaults.baseURL = env ? proxy + 'http://nine.ifeng.com' : '/ifengc'
  return req.get('/apiPhoenixtvDetails', {
    params: {
      guid
    }
  })
},
```