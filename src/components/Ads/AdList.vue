<template>
	<v-container>
		<v-row
			align="center"
			justify="center"
		>
			<v-col
				cols="12"
				sm="10"
				md="6"
			>
				<h1 class="text--secondary mb-3">My ads</h1>
				<v-card
					class="mb-5 pl-3 pr-3"
					:elevation="10"
					v-for="ad in ads"
					:key="ad.id"
				>
					<v-row>
						<v-col cols="12" sm="4">
							<v-img
								:src="ad.imageSrc"
								height="175px"
							></v-img>
						</v-col>
						<v-col cols="12" sm="8">
							<v-card-text>
								<h2 class="text-primary">{{ ad.title }}</h2>
								<p>{{ ad.description }}</p>
							</v-card-text>
							<div class="d-flex justify-end">
								<v-btn
									class="info"
									:to="'/ad/' + ad.id"
								>Open</v-btn>
							</div>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
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
					imageSrc: 'https://picsum.photos/510/300?random',
					id: '123'
				}
			]
		}
	},
}
</script>

<style lang="scss" scoped>
	.v-card__text {
		min-height: 138px;

		@media (max-width: 1024px) {
			min-height: auto;
		}
	}
</style>
