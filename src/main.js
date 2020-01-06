import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.use(ViewUI)
Vue.config.productionTip = true

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
