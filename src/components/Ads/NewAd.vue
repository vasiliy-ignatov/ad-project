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
					@click="triggerUpload"
				>
					Upload
					<v-icon right dark>mdi-cloud-upload</v-icon>
				</v-btn>
				<input
					ref="fileInput"
					type="file"
					class="d-none"
					accept="image/*"
					@change="onFileChange"
				>

				<v-img :src="imageSrc" v-if="imageSrc"></v-img>

				<div>
					<v-switch color="deep-purple accent-4" v-model="promo" label="Add to promo?"></v-switch>
				</div>

				<div class="d-flex justify-end">
					<v-btn
						class="success white--text"
						:disabled="!valid || !image || loading"
						@click="createAd"
						:loading="loading"
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
			valid: false,
			image: null,
			imageSrc: ''
		}
	},
	methods: {
		createAd() {
			if (this.$refs.form.validate() && this.image) {
				const ad = {
					title: this.title,
					description: this.description,
					promo: this.promo,
					image: this.image
				}

				this.$store.dispatch('createAd', ad)
					.then(() => {
						this.$router.push('/list')
					})
					.catch(() => {})
			}
		},
		triggerUpload() {
			this.$refs.fileInput.click()
		},
		onFileChange(event) {
			const file = event.target.files[0]
			const reader = new FileReader()

			reader.onload = () => {
				this.imageSrc = reader.result
			}
			reader.readAsDataURL(file)
			this.image = file
		}
	},
	computed: {
		loading() {
			return this.$store.getters.loading
		}
	}
}
</script>

<style>

</style>
