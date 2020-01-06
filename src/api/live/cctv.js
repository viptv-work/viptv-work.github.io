import req from '@/api/axios'
const URL = 'http://vdn.live.cntv.cn'
const PROXY = 'https://bird.ioliu.cn/v1/?url=' + URL
const PATH = '/cntv'
const BASE = process.env.NODE_ENV === 'production' ? PROXY : PATH

export default {
	Play: (Id) => {
		req.defaults.baseURL = BASE;
		return req.get('/api2/live.do', {
			params: {
				channel: 'pd://cctv_p2p_hd' + Id,
				client: 'flash'
			}
		})
	},
}
