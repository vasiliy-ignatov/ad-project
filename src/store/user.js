import axios from 'axios'

// class User {
// 	constructor(id) {
// 		this.id = id
// 	}
// }

export default {
	state: {
		user: null
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload
		}
	},
	actions: {
		async registerUser ({commit}, payload) {
			const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAn3XUbkYJnYGj_-JQo2q2EO9gG5kVRZbU'

			commit('clearError')
			commit('setLoading', true)

			try {
				const response = await axios.post(url, payload)
				commit('setLoading', false)
				console.log(response) // нужно добавить user.id в state
			} catch(error) {
				commit('setLoading', false)
				commit('setError', error.response.data.error.message)
				throw error
			}
		},
		async loginUser ({commit}, payload) {
			const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAn3XUbkYJnYGj_-JQo2q2EO9gG5kVRZbU'

			commit('clearError')
			commit('setLoading', true)

			try {
				const response = await axios.post(url, payload)
				commit('setLoading', false)
				console.log(response) // нужно добавить user.id в state
			} catch(error) {
				commit('setLoading', false)
				commit('setError', error.response.data.error.message)
				throw error
			}
		}
	},
	getters: {
		user(state) {
			return state.user
		}
	}
}
