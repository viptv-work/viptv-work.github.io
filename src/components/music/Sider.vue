<template>
	<Menu theme="dark" width="auto" :open-names="['1']">
		<Submenu name="1">
			<template slot="title">
				<span>酷狗音乐</span>
			</template>
			<MenuItem :name="'1-' + y" v-for="(x, y) in kugou" :key="y" @click.native="Nav(x.push)">{{ x.name }}</MenuItem>
		</Submenu>
		<Submenu name="2">
			<template slot="title">
				<span>虾米音乐</span>
			</template>
			<MenuItem :name="'1-' + y" v-for="(x, y) in xiami" :key="y" @click.native="Nav(x.push)">{{ x.name }}</MenuItem>
		</Submenu>
	</Menu>
</template>
<script>
export default {
	name: 'Sider_Menu',
	data() {
		return {
			kugou: [
				{
					push: 'kugou_newsong',
					name: '最新歌曲'
				},
				{
					push: 'kugou_ranklist',
					name: '排行榜'
				},
				{
					push: 'kugou_plist',
					name: '歌单'
				}
			],
			xiami: [
				{
					push: 'xiami_newsong',
					name: '最新歌曲'
				},
				{
					push: 'xiami_ranklist',
					name: '排行榜'
				},
				{
					push: 'xiami_plist',
					name: '歌单'
				}
			]
		};
	},
	methods: {
		Nav(nID) {
			this.$router.push('/music/list/' + nID);
		}
	},
	computed: {
		menuitemClasses: function() {
			return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
		}
	}
};
</script>
