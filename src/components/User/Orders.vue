<template>
	<v-container>
		<v-row
			align="center"
			justify="center"
		>
			<v-col cols="12" sm=6 v-if="loading" class="pt-5">
				<div class="text-center">
					<v-progress-circular
						:size="100"
						:width="4"
						color="purple"
						indeterminate
					></v-progress-circular>
				</div>
			</v-col>
			<v-col cols="12" sm=6 v-else-if="!loading && orders.length !== 0">
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
			<v-col cols="12" sm=6 v-else>
				<div class="text-center">
					<h1 class="text--secondary">You have no orders</h1>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	methods: {
		markDone(order) {
			this.$store.dispatch('markOrderDone', order.id)
				.then(() => {
					order.done = true
				})
				.catch(() => {}) 
		}
	},
	computed: {
		loading() {
			return this.$store.getters.loading
		},
		orders() {
			return this.$store.getters.orders
		}
	},
	created() {
		return this.$store.dispatch('fetchOrders')
	}
}
</script>

<style>
</style>
