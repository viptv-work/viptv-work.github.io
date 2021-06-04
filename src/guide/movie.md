# 影视
 
## CCTV影视库  
**const baseURL = proxy + 'http://api.cntv.cn'**
### NAV
```
[
  {
    id: 'CHAL1460955853485115',
    name: '电视剧',
    page: 40
  },    
  {
    id: 'CHAL1460955924871139',
    name: '纪录片',
    page: 67
  },
  {
    id: 'CHAL1460955953877151',
    name: '特别节目',
    page: 67
  }
]
```
### list 4k
```
return req.get(baseURL + '/video/getVideoList4k', {
  params: {
    serviceId: 'cctv4',
    p,
    n: 50,
    t: 'json'
  }
})
```
### list
```
List: (channelid, p) => {
  return req.get(baseURL + '/list/getVideoAlbumList', {
    params: {
      channelid,
      p,
      n: 30,
      serviceId: 'tvcctv'
    }
  })
},
```
### video
 
```
Video: (vsid) => {
  return req.get(baseURL + '/video/videolistById', {
    params: {
      serviceId: 'cbox',
      vsid,
      em: '01'
    }
  })
},
```
### URL
```
Url: (pid) => {
  req.defaults.baseURL = env ? proxy + 'http://vdn.apps.cntv.cn' :
    '/cctv_url'
  return req.get('/api/getHttpVideoInfo.do', {
    params: {
      pid,
      client: 'flash',
      im: 0,
      tsp: 1611947100,
      vn: 2049,
      vc: 'BA5059A996D4D22917AA3B0B893F85EC',
      uid: '05D59DB54824CD84155682143CA148C6',
      wlan: ''
    }
  })
}
```