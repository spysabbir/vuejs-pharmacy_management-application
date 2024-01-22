import { defineStore } from 'pinia';

export const useCartStore = defineStore("cart", {
    state: () => ({
        saleCartData: {}
    }),
    getters: {
        saleSubTotal() {
            let total = 0;
            for(const key in this.saleCartData) {
                total += (this.saleCartData[key].sales_price / this.saleCartData[key].piece_in_unit) * this.saleCartData[key].sales_quantity;
            }
            return total;
        }
    },
    actions: {
        addMedicine(payload) {
            const isDuplicate = this.saleCartData[payload.id];
            if (isDuplicate) {
                // alert("This item is already in the cart.");

                this.saleCartData[payload.id].sales_quantity += payload.sales_quantity;
            } else {
                this.saleCartData[payload.id] = payload;
            }
        },
        removeMedicine(id) {
            if (this.saleCartData[id]) {
                delete this.saleCartData[id];
            }
        },
        clearCart() {
            this.saleCartData = {};
        }
    }
})