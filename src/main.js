import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import router from './router'
import store from './store'


new Vue({
	el: '#app',
	router,
	store,
	vuetify,
	render: h => h(App)
})
