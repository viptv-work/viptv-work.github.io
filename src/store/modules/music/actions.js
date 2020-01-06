import api from '@/api'
export default {
  kugou_new_song: (context) => {
    api.music.kugou.newSong().then(res => {
      context.commit('kugou_new_song', res.data.data)
    })
  },
  kugou_rank_list: (context) => {
    api.music.kugou.rankList().then(res => {
      context.commit('kugou_rank_list', res.data.rank.list)
    })
  },
  kugou_rank_info: (context, rankid) => {
    api.music.kugou.rankInfo(rankid).then(res => {
      context.commit('kugou_rank_info', res.data.info)
    })
  },
}
