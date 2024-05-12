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
        if (Object.keys(this.items).length === 0) {
            showAlert('error', 'Please add items to cart');
            return;
        }
    
        if (this.selectedSupplierId === "") {
            showAlert('error', 'Please select a supplier');
            return;
        }
    
        const products = Object.values(this.items).map(item => {
            return {
                medicine_id: item.medicine.id,
                quantity: item.purchases_quantity,
                price: item.medicine.purchases_price
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
    
        const res = authStore.fetchProtectedApi('purchase', order, 'POST');
        res.then(response => {
            this.emptyCart();
        });
    }
})
purchase.getCartFromLocalStorage()
export { purchase }