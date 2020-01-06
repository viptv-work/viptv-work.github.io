import api from '@/api'
export default {
  mgzb_nav: ({
    commit
  }) => {
    api.live.mgzb.Base('e7716fea6aa1483c80cfc10b7795fcb8').then(res => {
      let list = res.data.body.liveList.map((item) => {
        return {
          id: item.vomsID,
          name: item.name
        }
      });
      commit('mgzb_nav', list)
    })
  },
  mgzb_list: ({
    commit
  }, nId) => {
    api.live.mgzb.Base(nId).then(res => {
      let list = res.data.body.dataList.map((item) => {
        return {
          id: item.pID,
          name: item.name,
          img: item.h5pics.lowResolutionH,
          now: item.nowPlaying,
          start: item.startTime,
          end: item.endTime
        }
      });
      commit('live_list', list)
    })
  },
  mgzb_url: ({
    commit
  }, nId) => {
    api.live.mgzb.Play(nId).then(res => {
      let list = {
        url: res.data.body.urlInfo.url.replace("http://h5live.gslb.cmvideo.cn",
          "http://mgzb.live.miguvideo.com:8088"),
        name: res.data.body.content.contName,
        stime: res.data.body.playBill.sTime,
        etime: res.data.body.playBill.eTime,
        pname: res.data.body.playBill.playName
      }
      commit('live_url', list ? list : null)
    })
  },
  ivizb_nav: ({
    commit
  }) => {
    commit('ivizb_nav', api.live.ivizb.Info('Nav'))
  },
  ivizb_list: ({
    commit
  }, nId) => {
    commit('live_list', api.live.ivizb.Info(nId))
  },
  ivizb_url: ({
    commit
  }, id) => {
    let url = {
      url: 'http://ivi.bupt.edu.cn/hls/' + id + '.m3u8',
      name: 'VIPTV'
    };
    commit('live_url', url)
  },
  sszb_top: ({
    commit
  }) => {
    api.live.sszb.Top().then(res => {
      commit('sszb_top', res.data.data)
    })
  },
  sszb_match: ({
    commit
  }) => {
    api.live.sszb.Match().then(res => {
      commit('sszb_match', res.data.data[0].data)
    })
  },
  sszb_room: ({
    commit
  }, id) => {
    api.live.sszb.Room(id).then(res => {
      commit('sszb_room', res.data.data.room_info)
    })
  },
  sszb_nav: ({
    commit
  }) => {
    commit('sszb_nav', api.live.sszb.Nav())

  },
  sszb_list: ({
    commit
  }, id) => {
    api.live.sszb.Cate(id).then(res => {
      let list = res.data.data.map((item) => {
        return {
          id: item.room_id,
          name: item.room_name,
          now: item.nickname,
          start: '',
          end: '',
          img: item.room_src
        }

      });
      commit('live_list', list)
    })
  },
  sszb_url: ({
    commit
  }, id) => {
    api.live.sszb.Play(id).then(res => {
      let url = {
        url: res.data.data.rtmp_url + '/' + res.data.data.rtmp_live,
        name: res.data.data.room_name
      }
      commit('live_url', url);
    })
  },
  vipzb_token: ({
    commit
  }, id) => {
    api.live.vipzb.Token(id).then(res => {
      commit('vipzb_token', res.data.access_token)
    })

  },
  vipzb_nav: ({
    commit
  }) => {
    let list = api.live.vipzb.Base().map((item) => {
      return {
        id: item.id,
        name: item.name,
      }
    })
    commit('vipzb_nav', list)
  },
  vipzb_list: ({
    commit
  }, id) => {
    if (id.split('.')[0] === '0') {
      api.live.vipzb.gtpd().then(res => {
        let list = res.data.data[0].channels.map(item => {
          return {
            id: 'vipzb_' + id.split('.')[0] + '.' + item.url.split('/')[4],
            name: item.chnl_name,
            now: item.chnl_cat + '_' + item.chnl_name,
            start: '',
            end: '',
            img: ''
          }
        })
        commit('live_list', list)
      })
    } else {      
        api.live.vipzb.ippd(id.split('.')[0]).then(rex => {
          let list = rex.data.chnl_list.map(item => {
            return {
              id: 'vipzb_' + id.split('.')[0] + '.' + item.chnl_id,
              name: item.chnl_name,
              now: item.subtype_name,
              start: '',
              end: '',
              img: item.poster_list.live_dir + '246x138.jpg',
            }
          });
          commit('live_list', list)
        })
     
    }
  },
  vipzb_url: ({
    commit
  }, id) => {
    if (id.split('.')[0] === '0') {
      let urls = {
        url: 'http://pili-live-hdl.qhmywl.com/dsdtv/' + id.split('.')[1] + '.m3u8',
        name: 'VIPTV',
        pname: '台海频道'
      }
      commit('live_url', urls)
    } else {
      let n = id.split('.')[0]
      // api.live.vipzb.token(n).then(res => {
      // 	let urls = {
      // 		url: api.live.vipzb.Base()[n].play_url+'?playtype=live&protocol=hls&accesstoken='+res.data.access_token+'&playtoken=ABCDEFGHIGK&programid='+id.split('.')[1] + '.m3u8',
      // 		name: 'kkkk',
      // 		pname: 'kkfafla'
      // 	}
      // 	commit('live_url', urls)
      // })
      let urls = {
        url: api.live.vipzb.Base()[n].play_url + id.split('.')[1] + '.m3u8',
        name: 'VIPTV',
        pname: '国内频道',
      }
      commit('live_url', urls)
    }
  },
  vipzb_epg: ({
    commit
  }, id) => {
    if (id.split('.')[0] === '0') {
      api.live.vipzb.gtepg().then(rex => {
          let list = rex.data.id.split('.')[1].map(item => {
            return {
              title: item.title,
              time: item.time,
            }
          })
          commit('live_epg', list)
        })
      } else {
        api.live.vipzb.epg(id.split('.')[0], id.split('.')[1]).then(rex => {
          let list = rex.data.event_list.map(item => {
            return {
              id: item.event_id,
              title: item.event_name,
              time: new Date(item.start_time * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).replace(' ',''),
              sys_time:item.start_time.toString() ,
              img: item.poster_list.live_dir + '246x138.jpg',
            }
          })
          commit('live_epg', list)

        })
      }
    },
  }
