import axios from 'axios'

export default {
	state: {
		user: null
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload
		},
	},
	actions: {
		async auth ({commit}, payload) {
			let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAn3XUbkYJnYGj_-JQo2q2EO9gG5kVRZbU'

			if (payload.isLogin) {
				url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAn3XUbkYJnYGj_-JQo2q2EO9gG5kVRZbU'
			}

			commit('clearError')
			commit('setLoading', true)

			try {
				const response = await axios.post(url, payload)
				commit('setLoading', false)
				
				const token = response.data.idToken
				localStorage.setItem('user-token', token) // store the token in localstorage
				commit('setUser', token)
				console.log(response)
			} catch(error) {
				commit('setLoading', false)
				commit('setError', error.response.data.error.message)
				localStorage.removeItem('user-token')
				throw error
			}
		},
		autoLogin({commit}, payload) {
			commit('setUser', payload)
		},
		logoutUser({commit}) {
			localStorage.removeItem('token')
			commit('setUser', null)
		}
	},
	getters: {
		user(state) {
			return state.user
		},
		isAuthenticated(state) {
			return state.user !== null
		}
	}
}
