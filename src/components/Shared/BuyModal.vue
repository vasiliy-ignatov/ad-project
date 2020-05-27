<template>
	<div>
		<v-btn raised class="deep-purple accent-4 white--text ml-3" @click="dialog = true">Buy</v-btn>

		<v-dialog
			v-model="dialog"
			max-width="500px"
		>
			<v-card class="pa-5">
				<v-card-title>
					Do you wan't to buy it?
				</v-card-title>
				<v-card-text>
					<v-text-field
						label="Your name"
						name="name"
						type="text"
						v-model="name"
					></v-text-field>
					<v-text-field
						label="Your phone"
						name="phone"
						type="text"
						v-model="phone"
					></v-text-field>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						@click="onCancel"
						:disabled="localLoading"
					>Close</v-btn>
					<v-btn
						class="success"
						@click="onSave"
						:disabled="localLoading"
						:loading="localLoading"
					>Buy it!</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	props: ['ad'],
	data() {
		return {
			dialog: false,
			name: '',
			phone: '',
			localLoading: false
		}
	},
	methods: {
		onCancel() {
			this.name = ''
			this.phone = ''
			this.dialog = false
		},
		onSave() {
			if (this.name !== '' && this.phone !== '') {
				this.localLoading = true
				this.$store.dispatch('createOrder', {
					name: this.name,
					phone: this.phone,
					adId: this.ad.id,
					ownerId: this.ad.ownerId
				})
				.finally(() => {
					this.name = '',
					this.phone = '',
					this.localLoading = false,
					this.dialog = false
				})
			}
		}
	}
}
</script>

<style>

</style>