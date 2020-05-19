import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import router from './router'


new Vue({
	el: '#app',
	router,
	vuetify,
	render: h => h(App)
})
