<template>
  <Header>
		<Menu mode="horizontal" theme="dark" active-name="1">
			<div class="layout-nav" name="1">
				<MenuItem :name="d" v-for="(c, d) in NavData" :key="d" @click.native="Nav(c.name)">{{ c.title }}</MenuItem>
			</div>
		</Menu>
    </Header>
</template>
<script>
export default {
	data() {
		return {
			NavData: [
				{
					name: 'home',
					title: '首页'
				},
				{
					name: 'live',
					title: '直播'
				},
				{
					name: 'video',
					title: '影视'
				},
				{
					name: 'music',
					title: '音乐'
				}
			]
		};
	},
	methods: {
		Nav: function(nID) {
			this.$router.push('/' + nID);
		}
	}
};
</script>
<style scoped>
.layout-nav {
	width: 280px;  
	margin: 0 auto;
	text-align : center;
}
</style>
