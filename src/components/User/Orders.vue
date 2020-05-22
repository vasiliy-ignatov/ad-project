<template>
	<v-container>
		<v-row
			align="center"
			justify="center"
		>
			<v-col cols="12" sm=6>
				<h1 class="text--secondary mb-3">Orders</h1>

				<v-list
					subheader
					two-line
					flat
				>
					<v-list-item-group
						multiple
					>
						<v-list-item
							v-for="order in orders"
							:key="order.id"
							:ripple="false"
						>

							<template>
								<v-list-item-action>
									<v-checkbox
										color="teal darken-3"

										@click="markDone(order)"
										:input-value="order.done"
									></v-checkbox>
								</v-list-item-action>

								<v-list-item-content>
									<v-list-item-title>{{ order.name }}</v-list-item-title>
									<v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
								</v-list-item-content>

								<v-list-item-action>
									<v-btn
										class="deep-purple accent-4 white--text"
										:to="'/ad/' + order.adId"
									>Open</v-btn>
								</v-list-item-action>
							</template>
						</v-list-item>

					</v-list-item-group>
				</v-list>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			orders: [
				{
					id: '1',
					name: 'Viktor',
					phone: '8-921-243-11-22',
					adId: '123',
					done: false
				}
			]
		}
	},
	methods: {
		markDone(order) {
			order.done = true
		}
	}
}
</script>

<style>
</style>
