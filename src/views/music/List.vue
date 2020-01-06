<template>
	<div>
		<List item-layout="vertical" v-for="(o, index) in dataList" :key="index">
			<ListItem>
				<ListItemMeta :title="o.name" :description="'hash :' + o.id" />
				{{ o.info }}
				<div slot="action">
					<li>
						<Icon type="ios-star-outline" />
						123
					</li>
					<li>
						<Icon type="ios-thumbs-up-outline" />
						234
					</li>
					<li>
						<Icon type="ios-chatbubbles-outline" />
						345
					</li>
				</div>
				<div slot="extra"><img v-bind:src="o.imgurl" style="width: 280px" /></div>
			</ListItem>
		</List>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	name: 'list',
	data() {
		return {
			dataList: []
		};
	},
	created() {
		this.fetchDate();
	},
	computed: {
		...mapGetters(['KugouNewSong', 'KugouRankList'])
	},
	methods: {
		fetchDate() {
			if (this.$route.params.id === 'kugou_newsong') {
				this.$store.dispatch('kugou_new_song');
				this.dataList = this.$store.getters.KugouNewSong.map(val => {
					let json = {
						id: val.hash,
						name: val.filename,
						info: val.remark
					};
					return json;
				});
			} else if (this.$route.params.id === 'kugou_ranklist') {
				this.$store.dispatch('kugou_rank_list');
				this.dataList = this.$store.getters.KugouRankList.map(val => {
					let json = {
						id: val.rankid,
						name: val.rankname,
						info: val.intro,
						imgurl: val.imgurl.replace('{size}', '400')
					};
					return json;
				});
			}
		}
	},
	watch: {
		// 如果路由有变化，会再次执行该方法
		$route: 'fetchDate'
	}
};
</script>
