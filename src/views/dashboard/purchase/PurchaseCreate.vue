<template>
  <TheBreadcrumb title="Purchase Create"></TheBreadcrumb>

  <div class="card mb-5 mb-xxl-8">
    <div class="card-header">
      <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
        <h6 class="card-title mb-0">Purchase Create</h6>
      </div>
    </div>
    <div class="card-body pt-9 pb-0">
        <div class="row">
          <div class="col-lg-4 col-md-6  mb-3">
            <label class="form-label">Select Supplier</label>
            <select class="form-control" v-model="selectedSupplierId">
              <option value="">Select Supplier</option>
              <option :value="item.supplier_id" v-for="item in supplierGroupedItems" :key="item.supplier_id">
                {{ item.supplier_name }}
              </option>
            </select>
          </div>
          <div class="col-lg-4 col-md-6 mb-3">
            <label class="form-label">Select Type</label>
            <select class="form-control" v-model="selectedTypeId">
              <option value="">Select Type</option>
              <option :value="item.type_id" v-for="item in filteredTypeGroupedItems" :key="item.type_id">
                {{ item.type_name }}
              </option>
            </select>
          </div>
          <div class="col-lg-4 col-md-6 mb-3">
            <label class="form-label">Select Medicine</label>
            <select ref="medicine_id" class="form-control" v-model="selectedMedicineId">
              <option value="">Select Medicine</option>
              <option :value="medicine.id" v-for="medicine in filteredMedicines" :key="medicine.id">
                {{ medicine.name }} | {{ medicine.power_name }}
              </option>
            </select>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="table-responsive" v-if="selectedMedicineDetails">
              <table class="table align-middle text-center">
                <thead class="table-success">
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Unit</th>
                    <th>Rack</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ selectedMedicineDetails.name }} | {{ selectedMedicineDetails.power_name }}</td>
                    <td>{{ selectedMedicineDetails.type_name }}</td>
                    <td>{{ selectedMedicineDetails.unit_name }}</td>
                    <td>{{ selectedMedicineDetails.rack_name }}</td>
                    <td>{{ selectedMedicineDetails.purchases_price }}</td>
                    <td><input type="number" v-model="purchases_quantity" ref="purchases_quantity"></td>
                    <td>
                      <TheButton @click="addToCart(selectedMedicineDetails)" class="btn-sm">
                        <!--begin::Svg Icon | path: icons/duotone/Communication/Add-user.svg-->
                        <span class="svg-icon svg-icon-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                            <path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
                          </svg>
                        </span>
                        <!--end::Svg Icon-->
                      </TheButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else class="text-center text-danger">
                No medicine selected
            </div>
          </div>
        </div>
    </div>
    <div class="card-footer">
      <div class="text-center text-danger" v-if="Object.keys(purchaseCartData).length < 1">Purchase Cart Data is Empty</div>
      <div class="row" v-else>
        <div class="col-12 col-xl-12">
          <div class="table-responsive">
            <table class="table table-striped table-hover align-middle text-center">
              <thead class="table-info">
                <tr>
                  <th>Name</th>
                  <th>unit</th>
                  <th>Purchase Price</th>
                  <th>Purchase Qty</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in purchaseCartData" :key="item.id">
                  <td>{{ item.name }} | {{ item.power_name }}</td>
                  <td>{{ item.unit_name }}</td>
                  <td>{{ item.purchases_price }}</td>
                  <td>
                    <input type="number" v-model="item.purchases_quantity" @input="validateQuantity(item)">
                    <!-- <div v-if="item.invalidQuantity" class="error-message">
                      Quantity must be greater than or equal to 0.
                    </div> -->
                  </td>
                  <td>{{ item.purchases_price * item.purchases_quantity }}</td>
                  <td>
                    <button @click="removeCartItem(item.id)" class="btn btn-danger btn-sm">
                    <!--begin::Svg Icon | path: icons/duotone/General/Trash.svg-->
                    <span class="svg-icon svg-icon-3">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect x="0" y="0" width="24" height="24" />
                          <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero" />
                          <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                        </g>
                      </svg>
                    </span>
                    <!--end::Svg Icon-->
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot class="table-info">
                <tr>
                  <td colspan="3"></td>
                  <td>Sub Total: </td>
                  <td colspan="2">{{ purchaseSubTotal }}</td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td>Discount: </td>
                  <td colspan="2"><input type="number" v-model="discount" placeholder="00"></td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td>Grand Total: </td>
                  <td colspan="2">{{ updatedGrandTotal }}</td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td>Payment Status: </td>
                  <td colspan="2">
                    <select v-model="payment_status" style="width: 50%;" class="text-center" ref="payment_status">
                      <option value="">--Select One--</option>
                      <option value="Unpaid">Unpaid</option>
                      <option value="Partial Paid">Partial Paid</option>
                      <option value="Paid">Paid</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td>Payment Amount: </td>
                  <td colspan="2">
                    <span class="d-none">{{ updatedPaymentAmount }}</span>
                    <input type="number" v-model="payment_amount" ref="payment_amount" :readonly="isPaymentAmountReadOnly" placeholder="00">
                  </td>
                </tr>
                <tr>
                  <td colspan="4"></td>
                  <td colspan="2">
                    <TheButton :lodding="purchasing" @click="purchasingNow" v-if="updatedGrandTotal > 0" class="mt-3">Purchase</TheButton>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheBreadcrumb from '../../../components/TheBreadcrumb.vue';
import TheButton from '../../../components/TheButton.vue';
import TheModel from '../../../components/TheModel.vue';
import { showErrorMessage, showSuccessMessage } from "../../../utils/functions";
import privateService from "../../../service/privateService";
import { mapState, mapActions } from "pinia";
import { useCartStore } from "../../../store/purchaseStore";

export default {
  data: () => ({
    medicines: [],
    selectedSupplierId: '',
    selectedTypeId: '',
    selectedMedicineId: '',
    purchases_quantity: '',
    purchasing: false,
    discount: '',
    payment_status: '',
    payment_amount: '',
    isPaymentAmountReadOnly: true,
  }),
  computed: {
    ...mapState(useCartStore, {
      purchaseCartData: "purchaseCartData",
      purchaseSubTotal: "purchaseSubTotal",
    }),
    updatedGrandTotal() {
      return this.purchaseSubTotal - this.discount
    },
    updatedPaymentAmount() {
      if (this.payment_status == 'Paid') {
        return this.payment_amount = this.updatedGrandTotal;
      }else if(this.payment_status == 'Unpaid'){
        return this.payment_amount = 0;
      }else{
        return this.payment_amount = '';
      }
    },
    supplierGroupedItems() {
      const grouped = {};
      this.medicines.forEach(item => {
        if (!grouped[item.supplier_id]) {
          grouped[item.supplier_id] = item.supplier_name;
        }
      });
      return Object.entries(grouped).map(([supplier_id, supplier_name]) => ({
        supplier_id,
        supplier_name,
      }));
    },
    filteredTypeGroupedItems() {
      if (!this.selectedSupplierId) {
        return null;
      }

      const grouped = {};
      const filteredType = this.medicines.filter(medicine => medicine.supplier_id == this.selectedSupplierId);

      filteredType.forEach(item => {
        if (!grouped[item.type_id]) {
          grouped[item.type_id] = item.type_name;
        }
      });

      return Object.entries(grouped).map(([type_id, type_name]) => ({
        type_id,
        type_name,
      }));
    },
    filteredMedicines() {
      if (!this.selectedTypeId || (!this.selectedTypeId && !this.selectedSupplierId)) {
        return null;
      }
      return this.medicines.filter(medicine => {
        return (
          (!this.selectedTypeId || medicine.type_id == this.selectedTypeId) &&
          (!this.selectedSupplierId || medicine.supplier_id == this.selectedSupplierId)
        );
      });
    },
    selectedMedicineDetails() {
      const selectedMedicine = this.medicines.find(medicine => medicine.id === this.selectedMedicineId);
      return selectedMedicine || null;
    },
  },
  watch: {
    selectedSupplierId(newSupplier) {
      this.filteredTypeGroupedItems = [];
      this.selectedTypeId = "";
      this.removeAllCartItem();
      this.discount = '';
    },
    selectedTypeId(newType) {
      this.filteredMedicines = [];
      this.selectedMedicineId = "";
    },
    discount(newDiscount, oldDiscount) {
      this.payment_amount = 0;
      if (newDiscount < 0) {
        showErrorMessage('Please discount amount do not entry less than 0!');
        this.discount = 0;
      }
      if (newDiscount >= this.purchaseSubTotal) {
        showErrorMessage('Please discount amount do not entry less than sub total!');
        this.discount = oldDiscount;
      }
    },
    purchases_quantity(newPurchasesQuantity, oldPurchasesQuantity) {
      if (newPurchasesQuantity < 0) {
        showErrorMessage('Please purchases quantity do not entry less than 0!');
        this.purchases_quantity = 0;
      }
    },
    payment_status(newPaymentStatus, oldPaymentStatus) {
      if (newPaymentStatus == 'Partial Paid') {
        this.isPaymentAmountReadOnly = false;
      }else{
        this.isPaymentAmountReadOnly = true;
      }
    },
    payment_amount(newPaymentAmount, oldPaymentAmount) {
      if (this.payment_status === 'Partial Paid' && (newPaymentAmount < 1 || newPaymentAmount >= this.updatedGrandTotal)) {
        showErrorMessage("Payment amount do not entry less than 0 or grand total qty!");
        this.$refs.payment_amount.focus();
        // this.payment_amount = 0;
        return;
      }
    },
  },
  components: {
    TheBreadcrumb,
    TheButton,
    TheModel,
  },
  mounted() {
    setTimeout(this.getAllMedicines, 100);
  },
  methods: {
    ...mapActions(useCartStore, {
      addToCartItem: "addMedicine",
      removeCartItem: "removeMedicine",
      removeAllCartItem: "clearCart",
    }),

    getAllMedicines(){
      privateService.getMedicine()
      .then((res) => {
        this.medicines = res.data.data;
      }).catch(err => {
        showErrorMessage(err);
      }).finally(() => {
      });
    },

    addToCart(selectedMedicine) {
      if(!this.purchases_quantity){
        showErrorMessage("Purchases quantity can not be empty!");
        this.$refs.purchases_quantity.focus();
        return;
      } else {
        this.addToCartItem({ ...selectedMedicine, purchases_quantity: this.purchases_quantity });
        this.purchases_quantity = '';
        this.filteredTypeGroupedItems = [];
        this.selectedTypeId = "";
        this.filteredMedicines = [];
        this.selectedMedicineId = "";
      }
    },

    validateQuantity(item) {
      if (item.purchases_quantity < 1) {
        item.purchases_quantity = 1;
        item.invalidQuantity = true;
        showErrorMessage('Quantity must be greater than or equal to 0.');
      } else {
        item.invalidQuantity = false;
      }
    },

    purchasingNow() {
      const purchaseData = {
        supplier_id: this.selectedSupplierId,
        sub_total: this.purchaseSubTotal,
        discount: this.discount,
        grand_total: this.updatedGrandTotal,
        payment_status: this.payment_status,
        payment_amount: this.payment_amount,
        purchaseCartData: this.purchaseCartData,
      }

      if(!this.payment_status){
        showErrorMessage("Payment status can not be empty!");
        this.$refs.payment_status.focus();
        return;
      }
      if(this.payment_status !== 'Unpaid' && !this.payment_amount){
        showErrorMessage("Payment amount can not be empty!");
        this.$refs.payment_amount.focus();
        return;
      }

      this.purchasing = true,
      privateService.purchasingNowStore(purchaseData)
      .then((res) => {
        showSuccessMessage(res);
        this.removeAllCartItem();
        this.$router.push('list')
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.purchasing = false;
      });
    },
  }
}
</script>