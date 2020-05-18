<template>
	<v-app>
		<v-navigation-drawer app temporary></v-navigation-drawer>

		<v-app-bar app>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>

			<v-toolbar-title>Ad application</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-toolbar-items>
				<v-btn>Link one</v-btn>
			</v-toolbar-items>
		</v-app-bar>

		<v-content>
			<h1>Hello</h1>
		</v-content>
	</v-app>
</template>

<script>
export default {
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
}
</script>

<style lang="scss">
</style>
