<template>
	<div>
		<v-container fluid>
			<v-layout row>
				<v-flex xs12>
					<v-carousel
						cycle
						height="400"
						hide-delimiter-background
						show-arrows-on-hover
					>
						<v-carousel-item
							v-for="slide in ads"
							:key="slide.id"
							:src="slide.imageSrc"
						>

							<div class="car-link">
								<v-btn class="deep-purple accent-4 white--text" :to="'/ad/' + slide.id">
									{{ slide.title }} Slide
								</v-btn>
							</div>
						</v-carousel-item>
					</v-carousel>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container>
			<v-layout row>
				<v-col
					cols="12"
					sm="6"
					md="4"
					xs4
					v-for="ad in ads"
					:key="ad.id"
				>
					<v-card
						class="mx-auto"
						max-width="400"
					>
						<v-img
							class="white--text align-end"
							height="200px"
							:src="ad.imageSrc"
						>
							<v-card-title>{{ ad.title }}</v-card-title>
						</v-img>

						<v-card-subtitle class="pb-0">{{ ad.description }}</v-card-subtitle>

						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn :to="'/ad/' + ad.id">Open</v-btn>
							<v-btn raised class="deep-purple accent-4 white--text">Buy</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
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
		}
	},
}
</script>

<style scoped>
	.car-link {
		position: absolute;
		bottom: 50px;
		left: 50%;
		background: rgba(0, 0, 0, .5);
		transform: translate(-50%, 0);
		padding: 10px 20px;
		border-radius: 5px;
	}
</style>
