import { reactive } from 'vue'
import { authStore } from './store'
import { purchase } from './purchase'
const order = reactive({
    orders: [],
    async fetchOrders() {
        const res = authStore.fetchProtectedApi('/api/orders')
        res.then(response => {
            this.orders = response.map(order => {
                return {
                    toggleProduct: false,
                    ...order,
                }
            })
            this.orders.reverse()
        })
    },
})

export { order }