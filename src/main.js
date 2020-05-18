import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import VueRouter from 'vue-router'

Vue.use(VueRouter)


new Vue({
	vuetify,
	el: '#app',
	render: h => h(App)
})
