import { defineStore } from 'pinia';

export const useCartStore = defineStore("cart", {
    state: () => ({
        purchaseCartData: {}
    }),
    getters: {
        purchaseSubTotal() {
            let total = 0;
            for(const key in this.purchaseCartData) {
                total += this.purchaseCartData[key].purchases_price * this.purchaseCartData[key].purchases_quantity;
            }
            return total;
        }
    },
    actions: {
        addMedicine(payload) {
            const isDuplicate = this.purchaseCartData[payload.id];
            if (isDuplicate) {
                // alert("This item is already in the cart.");

                this.purchaseCartData[payload.id].purchases_quantity += payload.purchases_quantity;
            } else {
                this.purchaseCartData[payload.id] = payload;
            }
        },
        removeMedicine(id) {
            if (this.purchaseCartData[id]) {
                delete this.purchaseCartData[id];
            }
        },
        clearCart() {
            this.purchaseCartData = {};
        }
    }
})