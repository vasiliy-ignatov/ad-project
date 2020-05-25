<template>
	<v-app>
		<v-navigation-drawer
			app
			temporary
			v-model="drawer"
		>
			<v-list>
				<v-list-item
					v-for="link of links"
					:key="link.title"
					:to="link.url"
				>
					<v-list-item-icon>
						<v-icon>{{ link.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title v-text="link.title"></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item v-if="isAuthenticated" @click="onLogout">
					<v-list-item-icon>
						<v-icon>exit_to_app</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title v-text="'Logout'"></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar color="deep-purple accent-4" dark app>
			<v-app-bar-nav-icon
				class="d-flex d-md-none"
				@click.stop="drawer = !drawer"
			></v-app-bar-nav-icon>

			<v-toolbar-title>
				<router-link to="/" tag="span" class="pointer">Ad application</router-link>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-toolbar-items class="d-none d-md-block">
				<v-btn
					color="deep-purple accent-4"
					elevation="0"
					v-for="link in links"
					:key="link.title"
					:to="link.url"
					small
				>
					<v-icon left>{{ link.icon }}</v-icon>
					{{ link.title }}</v-btn>
				<v-btn
					color="deep-purple accent-4"
					elevation="0"
					small
					v-if="isAuthenticated"
					@click="onLogout"
				>
					<v-icon left>exit_to_app</v-icon>
					Logout</v-btn>
			</v-toolbar-items>
		</v-app-bar>

		<v-content>
			<router-view></router-view>
		</v-content>

		<v-snackbar
			v-if="error"
			:timeout="0"
			color="red--text"
			v-model="snackbar"
		>
			{{ error }}
			<v-btn
				text
				@click="closeError"
			>Close</v-btn>
		</v-snackbar>
	</v-app>
</template>

<script>

export default {
	data() {
		return {
			drawer: false,
			snackbar: true
		}
	},
	computed: {
		error() {
			return this.$store.getters.error
		},
		isAuthenticated() {
			return this.$store.getters.isAuthenticated
		},
		links() {
			if (this.isAuthenticated) {
				return [
					{ title: 'Orders', icon: 'mdi-clipboard-outline', url: '/orders' },
					{ title: 'New ad', icon: 'note_add', url: '/new' },
					{ title: 'My ads', icon: 'list', url: '/list' }
				]
			}
			return [
				{ title: 'Login', icon: 'lock', url: '/login' },
				{ title: 'Registration', icon: 'face', url: '/registration' }
			]
		}
	},
	methods: {
		closeError() {
			this.$store.dispatch('clearError')
		},
		onLogout() {
			this.$store.dispatch('logoutUser')
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss" scoped>
	.pointer {
		cursor: pointer;
	}
</style>
