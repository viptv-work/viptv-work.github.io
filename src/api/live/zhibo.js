import req from '@/api/axios'
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
const BASE_URL = process.env.NODE_ENV === 'production' ? API_PROXY + 'http://rest.zhibo.tv/' : '/zbtv'
export default {
	List: () => {
		req.defaults.baseURL = BASE_URL;
		return req.get('/schedule/get-type-list-new')
	},
	Info: (id) => {
		req.defaults.baseURL = BASE_URL;
		return req.get('/anchor/get-list-by-type-id', {
			params: {
				id,
				page: '1',
				size: '5000'
			}
		})
	},
	Url: (id) => {
		return 'rtmp://live.zhibo.tv/8live/' + id
	},
}
