import { reactive, computed } from 'vue'
import showAlert from '../helpers/alert'
import { authStore } from './store'

const purchase = reactive({
    items:{},
    selectedSupplierId: "",
    addToCartItem(selectedMedicine){
        if(purchase.items[selectedMedicine.id]){
            purchase.items[selectedMedicine.id].purchases_quantity++
            showAlert('success', 'Item added to cart')
        }
        else{
            purchase.items[selectedMedicine.id] = {
                medicine:selectedMedicine,
                purchases_quantity:1
            }
            showAlert('success', 'Item added to cart')
        }
        this.saveCartInLocalStorage()
    },
    removeFromCart(id){
        delete purchase.items[id]
        this.saveCartInLocalStorage()
    },
    updateQuantity(id, quantity){
        if(quantity <= 0){
            showAlert('error', 'Quantity must be greater than 0')
            purchase.items[id].purchases_quantity = 1
            return
        }
        purchase.items[id].purchases_quantity = quantity
        this.saveCartInLocalStorage()
    },
    emptyCart(){
        this.items = {}
        this.selectedSupplierId = ""
        this.saveCartInLocalStorage()
    },
    subTotalPrice:computed(()=>{
        let total = 0
        for(let id in purchase.items){
            total += purchase.items[id].medicine.purchases_price * purchase.items[id].purchases_quantity
        }
        return parseFloat(total.toFixed(2))
    }),
    saveCartInLocalStorage(){
        localStorage.setItem('purchaseCart', JSON.stringify(this.items))
        localStorage.setItem('selectedSupplierId', this.selectedSupplierId)
    },
    getCartFromLocalStorage(){
        this.items = JSON.parse(localStorage.getItem('purchaseCart')) || {}
        this.selectedSupplierId = parseInt(localStorage.getItem('selectedSupplierId')) || ""
    },
    checkout(purchaseData) {
        const products = Object.values(this.items).map(item => {
            return {
                medicine_id: item.medicine.id,
                purchases_quantity: item.purchases_quantity,
                purchases_price: item.medicine.purchases_price
            };
        });
    
        const order = {
            supplier_id: this.selectedSupplierId,
            sub_total: this.subTotalPrice,
            discount: purchaseData.discount,
            grand_total: this.subTotalPrice - purchaseData.discount,
            payment_status: purchaseData.payment_status,
            payment_amount: purchaseData.payment_amount,
            purchaseCartData: products
        };
    
        authStore.fetchProtectedApi('purchase', order, 'POST')
        .then((res) => {
            this.emptyCart();
            showAlert('success', res.message || "Purchasing successfully.");
        }).catch(err => {
            showAlert('error', err.message || "Purchase failed");
        })
    }
})
purchase.getCartFromLocalStorage()
export { purchase }