import api from '@/api'
export default {
  wlzy_nav: ({
    commit
  }) => {
    api.video.wlzy.nav().then(res => {
      let list = res.data.class.map((item) => {
        return {
          id: item.type_id,
          name: item.type_name
        }
      });
      commit('wlzy_nav', list)
    })
  },
  flzy_nav: ({
    commit
  }) => {
    api.video.flzy.nav().then(res => {
      let list = res.data.class.map((item) => {
        return {
          id: item.type_id,
          name: item.type_name
        }
      });
      commit('flzy_nav', list)
    })
  },
  flzy_list: ({
    commit
  }, [id,pg]) => {
    api.video.flzy.list(id,pg).then(res => {
      let list = res.data.list.map((item) => {
        return {
          id: item.vod_id,
          name: item.vod_name,
          img: item.vod_pic,
          now: '',
          start: '',
          end: ''
        }
      });
      commit('video_list', list)
    })
  },
  wlzy_list: ({
    commit
  }, [id,pg]) => {
    api.video.wlzy.list(id,pg).then(res => {
      let list = res.data.list.map((item) => {
        return {
          id: item.vod_id,
          name: item.vod_name,
          img: item.vod_pic,
          description: item.vod_actor,
          content: item.vod_content,
          end: ''
        }
      });
      commit('video_list', list)
    })
  },
  wlzy_search: ({
    commit
  }, id) => {
    api.video.wlzy.search(id).then(res => {
      let list = res.data.list.map((item) => {
        return {
          id: item.vod_id,
          name: item.vod_name,
          content: item.vod_content,
          img: item.vod_pic,
          urls: item.vod_play_url.split('$$$')[0],
          time: new Date(item.vod_time)
        }
      });
      commit('video_list', list)
    })
  },
  flzy_url: ({
    commit
  }, id) => {
    api.video.flzy.video(id).then(res => {
      let data = res.data.list[0]
      let urls = [{
        name: data.vod_name,
        url: data.vod_play_url,
      }]

      let list = {
        id: data.vod_id,
        name: data.vod_name,
        tname: data.type_name,
        content: data.vod_content,
        news: data.vod_time,
        img: data.vod_pic,
        urls: urls
      }
      commit('video_url', list)
    })
  },
  wlzy_url: ({
    commit
  }, id) => {
    api.video.wlzy.video(id).then(res => {
      let data = res.data.list[0]
      let urls = (data.vod_play_url.split('$$')[0]).split('#').map((item) => {
        return {
          name: item.split('$')[0],
          url: item.split('$')[1],
        }
      })
      let list = {
        id: data.vod_id,
        name: data.vod_name,
        tname: data.type_name,
        content: data.vod_content,
        news: data.vod_remarks,
        img: data.vod_pic,
        urls: urls
      }
      commit('video_url', list)
    })
  },
}
