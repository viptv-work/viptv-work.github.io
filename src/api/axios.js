import axios from 'axios'

const req = axios.create({
	timeout: 5000,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data'
	},
	withCredentials: false
})

req.interceptors.request.use(config => {
	return Promise.resolve(config)
}, err => {
	return Promise.reject(err)
})

req.interceptors.response.use(data => {
	return Promise.resolve(data)
}, err => {
	return Promise.reject(err)
})

export default req
