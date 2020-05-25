<template>
	<v-container
		class="fill-height"
	>
		<v-row
			align="center"
			justify="center"
		>
			<v-col
				cols="12"
				sm="10"
				md="6"
			>
				<v-card class="elevation-12">
				<v-toolbar
					color="deep-purple accent-4"
					dark
					flat
				>
					<v-toolbar-title>Login form</v-toolbar-title>
				</v-toolbar>
				<v-card-text>
					<v-form v-model="valid" validation="lazy" ref="form">
						<v-text-field
							label="Email"
							name="email"
							prepend-icon="person"
							type="email"
							v-model="email"
							:rules="emailRules"
						></v-text-field>

						<v-text-field
							label="Password"
							name="password"
							prepend-icon="lock"
							type="password"
							v-model="password"
							:rules="passwordRules"
						></v-text-field>
					</v-form>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						color="deep-purple accent-4 white--text"
						@click="onSubmit"
						:disabled="!valid || loading"
						:loading="loading"
					>Login</v-btn>
				</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

export default {
	data() {
		return {
			email: '',
			password: '',
			valid: false,
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			],
			passwordRules: [
				v => !!v || 'Password is required',
				v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters',
			]
		}
	},
	methods: {
		onSubmit() {
			if (this.$refs.form.validate()) {
				const user = {
					email: this.email,
					password: this.password,
					returnSecureToken: true, // Обзятельный параметр при работе с firebase api
					isLogin: true
				}

				this.$store.dispatch('auth', user)
					.then(() => {
						this.$router.push('/')
					})
					.catch(() => {})
			}
		}
	},
	computed: {
		loading() {
			return this.$store.getters.loading
		}
	},
	created() {
		if (this.$route.query['loginError']) {
			this.$store.dispatch('setError', 'Please log in to access this page')
		}
	}
}
</script>

<style>

</style>
