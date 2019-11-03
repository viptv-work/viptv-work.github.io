<template>
	<div id="MgApi">
		<h1>{{ title }}</h1>
		<h3>咪咕电视直播导航JSON数据</h3>
		{{ migutvNav }}
		<h3>咪咕电视内容jon数据</h3>
		{{ migutvCont }}
	</div>
</template>

<script>
export default {
	name: 'Tvdata',
	props: {
		title: String
	},
	computed: {
		migutvNav() {
			return this.$store.state.migutvNav;
		},
		migutvCont() {
			return this.$store.state.migutvCont;
		}
	},
	created() {
		this.$store.dispatch('migutv_data', this.$route.params.courseid)
	}
};
</script>
<style scoped lang="less">
#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
