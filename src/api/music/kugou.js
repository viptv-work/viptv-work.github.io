import api from '@/api'

export default {
	//音乐新歌榜
	newSong: () => {
		api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://m.kugou.com' : '/KugouNewSong';
		return api.req.get('/?json=true')
	},
	//音乐排行榜
	rankList: () => {
		api.api.api.api.api.api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy+ 'http://m.kugou.com' : '/KugouNewSong';
		return api.api.api.api.req.get('/rank/list&json=true')
	},
	//排行版分类歌曲列表
	rankInfo: (rankid) => {
		api.api.api.api.api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://m.kugou.com' : '/KugouNewSong';
		return api.api.api.req.get('/rank/info/', {
			rankid,
			page: 1,
			json: true
		})
	},
	musicUrl: (hash) => {
		api.api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://m.kugou.com' : '/KugouNewSong';
		return api.req.get('/app/i/getSongInfo.php', {
			cmd: 'playInfo',
			hash,
		}, {
			headers: {}
		})
	},
}
