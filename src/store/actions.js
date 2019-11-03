import {
	Migu
} from '@/api'
export default {
	migutv_data(context, migutvId) {
		// 异步：发送axios请求
		return Migu(migutvId).then(res => {
			if (res.data.code === 200) {
				context.commit('migutv_nav', res.data.body.liveList)
				context.commit('migutv_cont', res.data.body.dataList)
			}
		})
	},
}
