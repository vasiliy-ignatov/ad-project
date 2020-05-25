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
			{
				title: 'First',
				description: 'First desc',
				promo: false,
				imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
				id: '123'
			},
			{
				title: 'Second',
				description: 'Second desc',
				promo: true,
				imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
				id: '1234'
			},
			{
				title: 'Third',
				description: 'Third desc',
				promo: true,
				imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
				id: '12345'
			}
		]
	},
	mutations: {
		createAd(state, payload) {
			state.ads.push(payload)
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
