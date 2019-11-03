<template>
	<el-container>
		<el-header>
			
		</el-header>
		<el-container style=" border: 1px solid #eee">
			<el-aside width="20%" style="background-color: rgb(238, 241, 246)">
				<el-menu v-for="(x, y) in migutvNav" :key="y">
					<el-menu-item-group >
						<el-menu-item @click="say(x.vomsID)">{{ x.name }}</el-menu-item>
					</el-menu-item-group>
				</el-menu>
			</el-aside>
			<el-main>
				<el-carousel :interval="5000" arrow="always">
					<el-carousel-item v-for="item in 4" :key="item">
						<h3>{{ item }}</h3>
					</el-carousel-item>
				</el-carousel>
				<el-row>
					<el-col :span="8" v-for="(o, index) in migutvCont" :key="index">
						<el-card :body-style="{ padding: '0px' }" >
							<img v-bind:src="o.h5pics.lowResolutionH" class="image" />
							<time class="time" >{{ o.name }}</time>
						</el-card>
					</el-col>
				</el-row>
			</el-main>
		</el-container>
		<el-footer>客服QQ:2236639958</el-footer>
	</el-container>
</template>
<script>
export default { 
	created() {
		this.$store.dispatch('migutv_data', 'e7716fea6aa1483c80cfc10b7795fcb8');
	},
	methods: {
		say(nID) {
			this.$store.dispatch('migutv_data', nID);
		},
		play(pID) {
			this.$router.push('/playback/'+ pID);
		},
		handleClick(tab, event) {
			console.log(tab, event);
		}
	},
	computed: {
		migutvNav() {
			return this.$store.state.migutvNav;
		},
		migutvCont() {
			return this.$store.state.migutvCont;
		}
	}
};
</script>
<style>
.el-container {
	padding: 0px;
	margin: 0px;
	height: 100%;
}

.el-header {
	font-size: 30px;
	text-align: center;
	background-color: #b3c0d1;
	color: #333;
	line-height: 60px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
	background-color: #d3dce6;
}
.el-footer {
	font-size: 30px;
	text-align: center;
	background-color: #b3c0d1;
	color: #333;
	line-height: 60px;
}
.time {
	font-size: 13px;
	color: #999;
}

.bottom {
	margin-top: 13px;
	line-height: 12px;
}

.image {
	width: 100%;
	display: block;
}

.clearfix:before,
.clearfix:after {
	display: table;
	content: '';
}

.clearfix:after {
	clear: both;
}
.el-aside {
	color: #333;
}
</style>