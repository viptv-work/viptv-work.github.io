<template>
	<div>
		<List item-layout="vertical" v-for="(o, index) in KugouNewSong" :key="index">
			<ListItem>
				<ListItemMeta :title="o.filename" :description="'hash :' + o.hash + '-  mvhash :' + o.mvhash" />
				{{ o.remark }} {{ KugouRankList }}
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
			</ListItem>
		</List>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	name: 'list',
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
			}
			this.$store.dispatch('kugou_rank_list');
		}
	},
	watch: {
		// 如果路由有变化，会再次执行该方法
		$route: 'fetchDate'
	}
};
</script>
