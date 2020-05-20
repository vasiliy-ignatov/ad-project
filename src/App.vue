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
			</v-list>
		</v-navigation-drawer>

		<v-app-bar color="deep-purple accent-4" dark app>
			<v-app-bar-nav-icon
				class="d-flex d-md-none"
				@click.stop="drawer = !drawer"
			></v-app-bar-nav-icon>

			<v-toolbar-title>Ad application</v-toolbar-title>

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
			</v-toolbar-items>
		</v-app-bar>

		<v-content>
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>

export default {
	data() {
		return {
			drawer: false,
			links: [
				{ title: 'Login', icon: 'lock', url: '/login' },
				{ title: 'Registration', icon: 'face', url: '/registration' },
				{ title: 'Orders', icon: 'mdi-clipboard-outline', url: '/orders' },
				{ title: 'New ad', icon: 'note_add', url: '/new' },
				{ title: 'My ads', icon: 'list', url: '/list' }
			],
		}
	}
}
</script>

<style lang="scss">
</style>
