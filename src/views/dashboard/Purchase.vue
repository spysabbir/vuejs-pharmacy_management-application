<template>
    <TheBreadcrumb title="Purchase"></TheBreadcrumb>
  
    <div class="row">
      <div class="col-12 col-xl-12 grid-margin stretch-card">
        <div class="card overflow-hidden">
          <div class="card-header">
            <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
              <h6 class="card-title mb-0">Purchase</h6>
            </div>
          </div>
          <div class="card-body">
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
                  <div class="table-responsive">
                    <table class="table text-center">
                      <thead>
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
                      <tbody v-if="selectedMedicineDetails">
                        <tr>
                          <td>{{ selectedMedicineDetails.name }} | {{ selectedMedicineDetails.power_name }}</td>
                          <td>{{ selectedMedicineDetails.type_name }}</td>
                          <td>{{ selectedMedicineDetails.unit_name }}</td>
                          <td>{{ selectedMedicineDetails.rack_name }}</td>
                          <td>{{ selectedMedicineDetails.purchases_price }}</td>
                          <td><input type="number" v-model="purchases_quantity" ref="purchases_quantity"></td>
                          <td>
                            <TheButton @click="addToCart(selectedMedicineDetails)" class="btn-xs"><i class="link-icon" data-feather="home"></i>Add to Cart</TheButton>
                          </td>
                        </tr>
                      </tbody>
                      <tbody v-else>
                        <tr>
                          <td colspan="7">No medicine selected</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-12 col-xl-12 grid-margin stretch-card">
                <div class="card overflow-hidden">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped table-hover align-middle text-center">
                        <thead class="table-light">
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
                              <button @click="removeCartItem(item.id)" class="btn btn-danger">Remove</button>
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colspan="4">Sub Total: </td>
                            <td colspan="2">{{ purchaseSubTotal }}</td>
                          </tr>
                          <tr>
                            <td colspan="4">Discount: </td>
                            <td colspan="2"><input type="number" v-model="discount"></td>
                          </tr>
                          <tr>
                            <td colspan="4">Total: </td>
                            <td colspan="2">{{ updatedGrandTotal }}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <TheButton :lodding="purchasing" @click="purchasingNow" v-if="updatedGrandTotal > 1" class="mt-3">Purchase</TheButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import TheBreadcrumb from '../../components/TheBreadcrumb.vue';
  import TheButton from '../../components/TheButton.vue';
  import TheModel from '../../components/TheModel.vue';
  import { showErrorMessage, showSuccessMessage } from "../../utils/functions";
  import privateService from "../../service/privateService";
  import { mapState, mapActions } from "pinia";
  import { useCartStore } from "../../store/purchaseStore";
  
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
      payment_status: '',
      payment_amount: '',
    }),
    computed: {
      ...mapState(useCartStore, {
        purchaseCartData: "purchaseCartData",
        purchaseSubTotal: "purchaseSubTotal",
      }),
      updatedGrandTotal() {
        return this.purchaseSubTotal - this.discount
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
        if (newDiscount < 0) {
          showErrorMessage('Please discount amount do not entry less than 0!');
          this.discount = 0;
        }
      },
      purchases_quantity(newPurchasesQuantity, oldPurchasesQuantity) {
        if (newPurchasesQuantity < 0) {
          showErrorMessage('Please purchases quantity do not entry less than 0!');
          this.purchases_quantity = 0;
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

      purchasingNow() {
        const purchaseData = {
          supplier_id: this.selectedSupplierId,
          sub_total: this.sub_total,
          discount: this.discount,
          grand_total: this.grand_total,
          payment_status: this.payment_status,
          payment_status: this.payment_status,
          payment_amount: this.payment_amount,
          purchaseCartData: this.purchaseCartData,
        }

        this.purchasing = true,
        privateService.purchasingNowStore(purchaseData)
        .then((res) => {
          showSuccessMessage(res);
          this.$router.push('dashboard/purchase/history')
        }).catch(err => {
          showErrorMessage(err)
        }).finally(() => {
          this.purchasing = false;
        });
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
    }
  }
  </script>