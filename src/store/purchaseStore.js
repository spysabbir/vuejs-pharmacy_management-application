import { defineStore } from 'pinia';

export const useCartStore = defineStore("cart", {
    state: () => ({
        medicines: {}
    }),
    getters: {
        totalPrice() {
            let total = 0;
            for(const key in this.medicines) {
                total += this.medicines[key].purchases_price * this.medicines[key].purchases_quantity;
            }
            return total;
        }
    },
    actions: {
        addMedicine(payload) {
            const isDuplicate = this.medicines[payload.id];
            if (isDuplicate) {
                // alert("This item is already in the cart.");

                this.medicines[payload.id].purchases_quantity += payload.purchases_quantity;
            } else {
                this.medicines[payload.id] = payload;
            }
        },
        removeMedicine(id){
            delete this.medicines[id];
        }
    }
})