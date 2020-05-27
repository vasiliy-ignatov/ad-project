<template>
	<div v-if="!loading">
		<v-container fluid>
			<v-carousel
				cycle
				height="400"
				hide-delimiter-background
				show-arrows-on-hover
			>
				<v-carousel-item
					v-for="slide in promoAds"
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
							<app-buy-modal :ad="ad"></app-buy-modal>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-layout>
		</v-container>
	</div>
	<div v-else>
		<v-container>
			<v-row>
				<v-col cols="12" class="text-center pt-5">
					<v-progress-circular
						:size="100"
						:width="4"
						color="purple"
						indeterminate
					></v-progress-circular>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	computed: {
		promoAds() {
			return this.$store.getters.promoAds
		},
		ads() {
			return this.$store.getters.ads
		},
		loading() {
			return this.$store.getters.loading
		}
	}
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
