import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import router from './router'
import store from './store'
import * as firebase from 'firebase'


new Vue({
	el: '#app',
	router,
	store,
	vuetify,
	render: h => h(App),
	created() {
		// Your web app's Firebase configuration
		var firebaseConfig = {
			apiKey: "AIzaSyAn3XUbkYJnYGj_-JQo2q2EO9gG5kVRZbU",
			authDomain: "itc-ads-97616.firebaseapp.com",
			databaseURL: "https://itc-ads-97616.firebaseio.com",
			projectId: "itc-ads-97616",
			storageBucket: "itc-ads-97616.appspot.com",
			messagingSenderId: "442037064463",
			appId: "1:442037064463:web:6ec7c214099ba4bab0e47a",
			measurementId: "G-ZZJ9SB1FSB"
		}
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig)
		firebase.analytics();
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.$store.dispatch('autoLogin', user)
			}
		})

		this.$store.dispatch('fetchAds')
	}
})
