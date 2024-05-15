import { reactive, computed } from 'vue'
import showAlert from '../helpers/alert'
import { authStore } from './store'

const sale = reactive({
    items:{},
    selectedCustomerId: "",
    addToCartItem(selectedMedicine){
        const availableQuantity = selectedMedicine.purchases_quantity - selectedMedicine.sales_quantity
        if(availableQuantity <= 0){
            showAlert('error', 'No available quantity')
            return
        }
        if(sale.items[selectedMedicine.id]){
            if(sale.items[selectedMedicine.id].sales_quantity >= availableQuantity){
                showAlert('error', 'Quantity must be less than available quantity')
                return
            }
            sale.items[selectedMedicine.id].sales_quantity++
            showAlert('success', 'Item added to cart')
        }
        else{
            sale.items[selectedMedicine.id] = {
                medicine:selectedMedicine,
                sales_quantity:1
            }
            showAlert('success', 'Item added to cart')
        }
        this.saveCartInLocalStorage()
    },
    removeFromCart(id){
        delete sale.items[id]
        this.saveCartInLocalStorage()
    },
    updateQuantity(id, quantity){
        if(quantity <= 0){
            showAlert('error', 'Quantity must be greater than 0')
            sale.items[id].sales_quantity = 1
            return
        }
        const availableQuantity = sale.items[id].medicine.purchases_quantity - sale.items[id].medicine.sales_quantity
        if(quantity > availableQuantity){
            showAlert('error', 'Quantity must be less than available quantity')
            sale.items[id].sales_quantity = availableQuantity
            return
        }
        sale.items[id].sales_quantity = quantity
        this.saveCartInLocalStorage()
    },
    emptyCart(){
        this.items = {}
        this.selectedCustomerId = ""
        this.saveCartInLocalStorage()
    },
    subTotalPrice:computed(()=>{
        let total = 0
        for(let id in sale.items){
            total += sale.items[id].medicine.sales_price * sale.items[id].sales_quantity
        }
        return parseFloat(total.toFixed(2))
    }),
    saveCartInLocalStorage(){
        localStorage.setItem('saleCart', JSON.stringify(this.items))
        localStorage.setItem('selectedCustomerId', this.selectedCustomerId)
    },
    getCartFromLocalStorage(){
        this.items = JSON.parse(localStorage.getItem('saleCart')) || {}
        this.selectedCustomerId = parseInt(localStorage.getItem('selectedCustomerId')) || ""
    },
    checkout(saleData) {
        const products = Object.values(this.items).map(item => {
            return {
                medicine_id: item.medicine.id,
                sales_quantity: item.sales_quantity,
                sales_price: item.medicine.sales_price
            };
        });
    
        const order = {
            customer_id: this.selectedCustomerId,
            sub_total: this.subTotalPrice,
            discount: saleData.discount,
            grand_total: this.subTotalPrice - saleData.discount,
            payment_status: saleData.payment_status,
            payment_amount: saleData.payment_amount,
            saleCartData: products
        };
    
        authStore.fetchProtectedApi('sale', order, 'POST')
        .then((res) => {
            this.emptyCart();
            showAlert('success', res.message || "Saling successfull");
        }).catch(err => {
            showAlert('error', err.message || "Saling failed");
        })
    }
})
sale.getCartFromLocalStorage()
export { sale }