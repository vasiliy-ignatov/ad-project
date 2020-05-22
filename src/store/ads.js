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
	mutations: {},
	actions: {},
	getters: {
		ads(state) {
			return state.ads
		},
		promoAds(state) {
			return state.ads.filter(ad => ad.promo)
		},
		myAds(state) {
			return state.ads
		}
	}
}
