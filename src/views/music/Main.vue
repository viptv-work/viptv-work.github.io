<template>
	<div class="layout">		
			<Layout :style="{ position: 'fixed', width: '100%', height: '100%', margin: '0px 0px' ,overflow:'scroll'}">
				<Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed"><Sider_Menu></Sider_Menu></Sider>
				<Content :style="{ padding: '24px', minHeight: '280px' }">
					<keep-alive><router-view v-if="$route.meta.keepAlive"></router-view></keep-alive>
					<router-view v-if="!$route.meta.keepAlive"></router-view>
				</Content>
			</Layout>
		
	</div>
</template>
<script>
import Sider_Menu from '@/components/music/Sider.vue';
export default {
	name: 'Home',
	data() {
		return {
			isCollapsed: false
		};
	},
	computed: {
		menuitemClasses: function() {
			return ['menu-item', this.isCollapsed ? 'collapsed-menu' : ''];
		}
	},
	components: {
		Sider_Menu
	}
};
</script>
