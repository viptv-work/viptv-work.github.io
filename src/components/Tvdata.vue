<template>
	<div id="MgApi">
		<h1>{{ title }}</h1>
		<h3>栏目导航</h3>
		{{ migutvNav }}

		<h3>相关内容</h3>
		{{ migutvCont }}
	</div>
</template>

<script>
export default {
	name: 'Tvdata',
	props: {
		title: String
	},
	methods: {
		add(nID) {
			this.$store.dispatch('course_cont', nID);
		}
	},
	computed: {
		migutvNav() {
			return this.$store.state.courseNav;
		},
		migutvCont() {
			return this.$store.state.courseCont;
		}
	},
	created() {
		this.$store.dispatch('course_nav', this.$route.params.courseid);
		this.$store.dispatch('course_cont', 'dd5311d848b54c56acba186ff1107236');
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
