import axios from 'axios'
import * as firebase from 'firebase'


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

			commit('clearError')
			commit('setLoading', true)

			const image = payload.image
			const imageExt = image.name.slice(image.name.lastIndexOf('.'))

			console.log(image, imageExt)

			try {
				const newAd = new Ad(
					payload.title,
					payload.description,
					getters.user,
					'',
					payload.promo
				)

				const response = await axios.post('/ads.json', newAd)
				const fileData = await axios.put(`/ads/${response.key}.${imageExt}`, image)
				const imageSrc = fileData.metadata.downloadURLs[0]
				console.log(imageSrc)

				commit('setLoading', false)
				commit('createAd', {
					...newAd,
					id: response.data.name,
					imageSrc
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
				const data = await firebase.database().ref('ads').once('value')
				const ads = data.val()
				
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
