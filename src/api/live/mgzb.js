import api from '@/api'

export default {
	Base: (iDx) => {
		api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://live.miguvideo.com' : '/mga';
		return api.req.get('/live/v2/tv-data/' + iDx, )
	},
	Play: (contId) => {
		api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://h5.miguvideo.com' : '/mgp';
		return api.req.get('/playurl/v1/play/playurlh5', {
			params: {
				contId,
				rateType: '1,2,3',
				clientId: 'migu'
			}
		})
	},
	Epg: (ID) => {
		api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://live.miguvideo.com' : '/api';
		return api.req.get('/live/v2/tv-programs-data/' + ID + '/' + Date("Ymd "))
	},
}
