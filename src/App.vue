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

			<v-toolbar-items class="d-none d-md-flex">
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
			<h1>Hello</h1>
		</v-content>
	</v-app>
</template>

<script>
import { mdiLock } from '@mdi/js'
import { mdiFace } from '@mdi/js'
import { mdiBookmarkOutline } from '@mdi/js'
import { mdiFilePlus } from '@mdi/js'
import { mdiFormatListBulleted } from '@mdi/js'

export default {
	data() {
		return {
			drawer: false,
			links: [
				{ title: 'Login', icon: mdiLock, url: '/login' },
				{ title: 'Registration', icon: mdiFace, url: '/registration' },
				{ title: 'Orders', icon: mdiBookmarkOutline, url: '/orders' },
				{ title: 'New ad', icon: mdiFilePlus, url: '/new' },
				{ title: 'My ads', icon: mdiFormatListBulleted, url: '/list' }
			],
		}
	}
}
</script>

<style lang="scss">
</style>
