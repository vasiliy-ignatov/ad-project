import axios from '../axios/axios-ad'

class Ad {
	constructor(title, description, ownerId, imageSrc = '', promo = false, id = null) {
		this.title = title,
		this.description = description,
		this.ownerId = ownerId,
		this.imageSrc = imageSrc,
		this.promo = promo,
		this.id = id
	}
}

export default {
	state: {
		ads: [
		]
	},
	mutations: {
		createAd(state, payload) {
			state.ads.push(payload)
		},
		loadAds(state, payload) {
			state.ads = payload
		}
	},
	actions: {
		async createAd({commit, getters}, payload) {
			
			payload.id = String(Math.floor(Math.random() * 100))

			commit('clearError')
			commit('setLoading', true)

			try {
				const newAd = new Ad(
					payload.title,
					payload.description,
					getters.user,
					payload.imageSrc,
					payload.promo
				)

				const response = await axios.post('/ads.json', newAd)
				commit('setLoading', false)
				commit('createAd', {
					...newAd,
					id: response.data.name
				})
			} catch(error) {
				commit('setError', error.response.data.error.message)
				commit('setLoading', false)
				throw(error)
			}
			commit('createAd', payload)
		},
		async fetchAds({commit}) {
			commit('clearError')
			commit('setLoading', true)

			const resultAds = [];

			try {
				const response = await axios.get('/ads.json')
				const ads = response.data
				
				Object.keys(ads).forEach(key => {
					const ad = ads[key]
					resultAds.push(new Ad(
						ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key
					))
				})

				commit('setLoading', false)
				commit('loadAds', resultAds)
			} catch(error) {
				commit('setError', error.response.data.error.message)
				commit('setLoading', false)
				throw(error)
			}
		}
	},
	getters: {
		ads(state) {
			return state.ads
		},
		promoAds(state) {
			return state.ads.filter(ad => ad.promo)
		},
		myAds(state) {
			return state.ads
		},
		adById(state) {
			return adId => {
				return state.ads.find(ad => ad.id === adId)
			}
		}
	}
}
