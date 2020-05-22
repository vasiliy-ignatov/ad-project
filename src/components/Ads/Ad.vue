<template>
	<v-container>
		<v-row
			align="center"
			justify="center"
		>
			<v-col cols="12" md="8">
				<v-card>
					<v-img :src="ad.imageSrc" height="300px"></v-img>
					<v-card-text>
						<h1 class="text--primary">{{ ad.title }}</h1>
						<p>{{ ad.description }}</p>
					</v-card-text>
					<div class="d-flex justify-end pr-4 pb-4">
						<v-btn class="mr-2" outlined color="warning">Edit</v-btn>
						<v-btn class="success">Buy</v-btn>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	props: ['id'],
	computed: {
		ad () {
			return this.$store.getters.adById(this.id)
		}
	}
}
</script>

<style>

</style>
