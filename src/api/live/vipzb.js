//http://hbo.epub.fun/channels.json
import api from '@/api'
export default {
  Base: () => [{
      "id": "gtpd",
      "name": "港台频道",
    },
    {
      "id": "jsgd",
      "name": "江苏广电",
      "lane": "电信",
      "acc_type_reg": 1,
      "acc_type_login": 2,
      "token":"R5DED1FEDU309250ABK7738C8BDIC98F5ADEP8M32C665CV10472Z4E2C9WE54FEAF19D1",
      "play_url": "http://122.194.12.25:13164/playurl?playtype=live&protocol=hls&accesstoken=R5DED1FEDU309250ABK7738C8BDIC98F5ADEP8M32C665CV10472Z4E2C9WE54FEAF19D1&playtoken=ABCDEFGHIGK&programid=",
      "base_url": "http://122.194.12.25:13160",
      "token_url": "http://122.194.12.25:12690/account/get_third_token",
      "schedule_url": "http://122.194.12.25:12690/media/event/get_list",
      "event_info_url": "http://122.194.12.25:12690/media/event/get_info",

    },
    {
      "id": "hbgd",
      "name": "湖北广电",
      "lane": "联通",
      "acc_type_reg": 1,
      "acc_type_login": 2,
      "play_url": "http://httpdvb.slave.homed.hrtn.net:13164/playurl?playtype=live&protocol=hls&accesstoken=R5DED24EEU309BE093K773961B9IC98F5ADEPBM31C5EE9V10453Z6B7EDWE54FF7290E1&playtoken=ABCDEFGHIGK&programid=",
      "base_url": "http://slave.homed.hrtn.net:13160",
      "token":"R5DED24EEU309BE093K773961B9IC98F5ADEPBM31C5EE9V10453Z6B7EDWE54FF7290E1",
      "token_url": "http://slave.homed.hrtn.net:12690/account/get_third_token",
      "schedule_url": "http://slave.homed.hrtn.net:13160/media/event/get_list",
      "event_info_url": "http://slave.homed.hrtn.net:13160/media/event/get_info",
      "channels": []
    },
    {
      "id": "sxgda",
      "name": "山西广电",
      "lane": "联通",
      "acc_type_reg": 1,
      "acc_type_login": 2,
      "play_url": "http://httpdvb.slave.shuliyun.com:13164/playurl?playtype=live&protocol=hls&accesstoken=R5DEDA2CAU3097D085K773A8808I3F1F5ADEPBM2FB1D51V10465Z224E9WE5512A6F2A1&playtoken=ABCDEFGHIGK&programid=",
      "base_url": "http://slave.shuliyun.com:13160",
      "token_url": "http://slave.shuliyun.com:12690/account/get_third_token",
      "token":"R5DEDA2CAU3097D085K773A8808I3F1F5ADEPBM2FB1D51V10465Z224E9WE5512A6F2A1",
      "schedule_url": "http://slave.shuliyun.com:13160/media/event/get_list",
      "event_info_url": "http://slave.shuliyun.com:13160/media/event/get_info",
      "channels": []
    }

  ],
  gtpd: () => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://mtime.info' : '/gtpd';
    return api.req.get('/channels.json')
  },
  gtepg: () => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://hbo.epub.fun' : '/fun';
    return api.req.get('/schedule.json')
  },
  token: (id) => {
    return api.req.post(api.live.vipzb.Base()[id].token_url, {
      "usagescen": api.live.vipzb.Base()[id].acc_type_login
    })
  },
  ippd: (id) => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + api.live.vipzb.Base()[id].base_url :
      '/ippd' + id;
    return api.req.get('/media/channel/get_list', {
      params: {
        accesstoken: api.live.vipzb.Base()[id].token,
        pageidx: 1,
        pagenum: 500
      }
    })
  },
  epg: (id,pid) => {
    api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + api.live.vipzb.Base()[id].base_url :
      '/ippd' + id;
    let starttime = new Date();
    starttime = starttime.setHours(0, 0, 0, 0) / 1000;
    let endtime = starttime + 86400
    return api.req.get('/media/event/get_list', {
      params: {
        accesstoken: api.live.vipzb.Base()[id].token,
        repeat: 1,
        starttime: starttime,
        endtime: endtime,
        chnlid: pid,
        pagenum: 500,
        pageidx: 1
      }
    })
  },
}
