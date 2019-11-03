import axios from 'axios'
const request = axios.create({
	baseURL: process.env.NODE_ENV === 'production' ? 'http://live.miguvideo.com' : '/api', // 设置跨域代理接口统一的前置地址
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
		'withCredentials': true
	}
})

request.interceptors.request.use(config => {
	return Promise.resolve(config)
}, err => {	
	return Promise.reject(err)
})

request.interceptors.response.use(data => {
	return Promise.resolve(data)
}, err => {
	return Promise.reject(err)
})


export async function Migu(idx = '70002091') {
	try {
		return await request.get('/live/v2/tv-data/' + idx)
	} catch (err) {
		console.log(err);
	}
}
