<template>
	<div>
		<v-btn class="mr-2" outlined color="warning" @click="dialog = true">Edit</v-btn>

		<v-dialog
			v-model="dialog"
			max-width="500px"
		>
			<v-card class="pa-5">
				<v-card-title>
					Dialog 2
				</v-card-title>
				<v-card-text>
					<v-text-field
						label="title"
						name="title"
						type="text"
						v-model="editedTitle"
					></v-text-field>
					<v-textarea
						name="description"
						label="description"
						value="description"
						v-model="editedDescription"
					></v-textarea>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn @click="onCancel">Cancel</v-btn>
					<v-btn class="success" @click="onSave">Save</v-btn>
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
			editedTitle: this.ad.title,
			editedDescription: this.ad.description
		}
	},
	methods: {
		onCancel() {
			this.editedDescription = this.ad.description
			this.editedTitle = this.ad.title
			this.dialog = false
		},
		onSave() {
			if (this.editedTitle !== '' && this.editedDescription !== '') {
				this.$store.dispatch('updatedAd', {
					title: this.editedTitle,
					description: this.editedDescription,
					id: this.ad.id
				})
				this.modal = false
			}
		}
	}
}
</script>

<style>

</style>