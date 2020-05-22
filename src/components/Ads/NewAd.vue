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
				<h1 class="text--secondary mb-3">Create new ad</h1>
				<v-form v-model="valid" validation="lazy" ref="form" class="mb-3">
					<v-text-field
						label="Ad title"
						name="tytle"
						type="text"
						v-model="title"
						required
						:rules="[v => !!v || 'Title is required']"
					></v-text-field>

					<v-textarea
						label="Ad description"
						name="description"
						v-model="description"
						:rules="[v => !!v || 'Description is required']"
					></v-textarea>
				</v-form>

				<v-btn
					class="warning white--text mb-5"
				>
					Upload
					<v-icon right dark>mdi-cloud-upload</v-icon>
				</v-btn>

				<v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7"></v-img>

				<div>
					<v-switch color="deep-purple accent-4" v-model="promo" label="Add to promo?"></v-switch>
				</div>

				<div class="d-flex justify-end">
					<v-btn
						class="success white--text"
						:disabled="!valid"
						@click="createAd"
					>
						Create ad
					</v-btn>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			description: '',
			promo: true,
			valid: false
		}
	},
	methods: {
		createAd() {
			if (this.$refs.form.validate()) {
				const ad = {
					title: this.title,
					description: this.description,
					promo: this.promo,
					imageSrc: 'https://picsum.photos/1700/1200?random'
				}

				this.$store.dispatch('createAd', ad)
			}
		}
	}
}
</script>

<style>

</style>
