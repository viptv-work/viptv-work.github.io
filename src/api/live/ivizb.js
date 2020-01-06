import api from '@/api'

const data = {
	Nav: [{
			id: 'ivizb_hdpd',
			name: '高清频道',
		},
		{
			id: 'ivizb_ccpd',
			name: '央视频道'
		},
		{
			id: 'ivizb_bjpd',
			name: '北京频道'
		},
		{
			id: 'ivizb_wspd',
			name: '卫视频道'
		},
		{
			id: 'ivizb_wypd',
			name: '网云频道'
		}
	],
	hdpd: [{
			id: 'ivizb_cctv1hd',
			name: 'CCTV-1高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv3hd',
			name: 'CCTV-3高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv5phd',
			name: 'CCTV-5+高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv6hd',
			name: 'CCTV-6高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv8hd',
			name: 'CCTV-8高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_chchd',
			name: 'CHC高清电影',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_btv1hd',
			name: '北京卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_btv2hd',
			name: '北京文艺高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_btv11hd',
			name: '北京纪实高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_hunanhd',
			name: '湖南卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_zjhd',
			name: '浙江卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_jshd',
			name: '江苏卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_dfhd',
			name: '东方卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_ahhd',
			name: '安徽卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_hljhd',
			name: '黑龙江卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_lnhd',
			name: '辽宁卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_szhd',
			name: '深圳卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_gdhd',
			name: '广东卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_tjhd',
			name: '天津卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_hbhd',
			name: '湖北卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_sdhd',
			name: '山东卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cqhd',
			name: '重庆卫视高清',
			now: '',
			start: '',
			end: '',
			img: ''
		}
	],
	ccpd: [{
			id: 'ivizb_cctv1',
			name: 'CCTV-1综合',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv2',
			name: 'CCTV-2财经',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv3',
			name: 'CCTV-3综艺',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv4',
			name: 'CCTV-4中文国际',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv6',
			name: 'CCTV-6电影',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv7',
			name: 'CCTV-7军事农业',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv8',
			name: 'CCTV-8电视剧',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv9',
			name: 'CCTV-9纪录',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv10',
			name: 'CCTV-10科教',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv11',
			name: 'CCTV-11戏曲',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv12',
			name: 'CCTV-12社会与法',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv13',
			name: 'CCTV-13新闻科教',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv14',
			name: 'CCTV-14少儿',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv15',
			name: 'CCTV-15音乐',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cctv16',
			name: 'CCTV-NEWS',
			now: '',
			start: '',
			end: '',
			img: ''
		}
	],
	bjpd: [{
			id: 'ivizb_btv1',
			name: '北京卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_btv2',
			name: '北京文艺',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_btv3',
			name: '北京科教',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_btv4',
			name: '北京影视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_btv5',
			name: '北京财经',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_btv7',
			name: '北京生活',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_btv8',
			name: '北京青年',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_btv9',
			name: '北京新闻',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_btv10',
			name: '北京卡酷少儿',
			now: '',
			start: '',
			end: '',
			img: ''
		}
	],
	wspd: [{
			id: 'ivizb_sztv',
			name: '深圳卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_ahtv',
			name: '安徽卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_hntv',
			name: '河南卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_sxtv',
			name: '陕西卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_jltv',
			name: '吉林卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_gdtv',
			name: '广东卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_sdtv',
			name: '山东卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_hbtv',
			name: '湖北卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_gxtv',
			name: '广西卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_hebtv',
			name: '河北卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_xztv',
			name: '西藏卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_nmtv',
			name: '内蒙古卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_qhtv',
			name: '青海卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_sctv',
			name: '四川卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_jstv',
			name: '江苏卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_sctv',
			name: '四川卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_tjtv',
			name: '天津卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_sxrtv',
			name: '山西卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_lntv',
			name: '辽宁卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_xmtv',
			name: '厦门卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_xjtv',
			name: '新疆卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_dftv',
			name: '东方卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_hljtv',
			name: '黑龙江卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_hunantv',
			name: '湖南卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_yntv',
			name: '云南卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_jxtv',
			name: '江西卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_dntv',
			name: '福建东南卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_zjtv',
			name: '浙江卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_gztv',
			name: '贵州卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_nxtv',
			name: '宁夏卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_gstv',
			name: '甘肃卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_cqtv',
			name: '重庆卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_bttv',
			name: '兵团卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
		{
			id: 'ivizb_lytv',
			name: '旅游卫视',
			now: '',
			start: '',
			end: '',
			img: ''
		},
	],
	wypd: [{
		id: 'mgzb_619858170',
		name: '湖南卫视高清',
		now: '',
		start: '',
		end: '',
		img:  ''		
	}]

};
export default {
	Info: (nId) => {
		return data[nId]
	},
	Gat: () => {
		api.req.defaults.baseURL = process.env.NODE_ENV === 'production' ? api.proxy + 'http://mtime.info' : '/gat';
		return api.req.get( '/channels.json')
	}
}
