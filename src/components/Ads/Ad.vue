<template>
	<v-container>
		<v-row
			align="center"
			justify="center"
		>
			<v-col cols="12" md="8">
				<v-card v-if="!loading">
					<v-img :src="ad.imageSrc" height="300px"></v-img>
					<v-card-text>
						<h1 class="text--primary">{{ ad.title }}</h1>
						<p>{{ ad.description }}</p>
					</v-card-text>
					<div class="d-flex justify-end pr-4 pb-4">
						<app-edit :ad="ad"></app-edit>
						<v-btn class="success">Buy</v-btn>
					</div>
				</v-card>
				<div v-else class="text-center">
					<v-progress-circular
						:size="100"
						:width="4"
						color="purple"
						indeterminate
					></v-progress-circular>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import EditAdModal from './EditAdModal'

export default {
	props: ['id'],
	computed: {
		ad () {
			return this.$store.getters.adById(this.id)
		},
		loading() {
			return this.$store.getters.loading
		}
	},
	components: {
		appEdit: EditAdModal
	}
}
</script>

<style>

</style>
