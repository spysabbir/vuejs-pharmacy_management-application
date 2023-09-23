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
                  <div class="col-lg-2 col-md-6 mb-3">
                      <label class="form-label">Select Type</label>
                      <select class="form-control" v-model="selectedTypeId">
                          <option value="">Select One</option>
                          <option :value="item" v-for="item in typeGroupedItems" :key="item">
                          {{ item }}
                          </option>
                      </select>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-3">
                    <label class="form-label">Select Medicine</label>
                    <select ref="medicine_id" class="form-control" v-model="selectedMedicineId">
                      <option value="">Select One</option>
                      <option :value="medicine.id" v-for="medicine in filteredMedicines" :key="medicine.id">
                        {{ medicine.name }} {{ medicine.power_id }}
                      </option>
                    </select>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div class="table-responsive">
                      <table class="table text-center">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody v-if="selectedMedicineDetails">
                          <tr>
                            <td>{{ selectedMedicineDetails.name }}</td>
                            <td>{{ selectedMedicineDetails.purchases_price }}</td>
                            <td>{{ selectedMedicineDetails.purchases_price }}</td>
                            <td>
                              <TheButton @click="addToCart(selectedMedicineDetails)" class="btn-xs">Add to Cart</TheButton>
                            </td>
                          </tr>
                        </tbody>
                        <tbody v-else>
                          <tr>
                            <td colspan="4">No medicine selected</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
              </div>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-4 mb-3">
                  <label class="form-label">Select Supplier</label>
                  <select ref="supplier_id" class="form-control" v-model="addingPurchaseData.supplier_id">
                      <option value="">Select One</option>
                      <option :value="supplier.id" v-for="supplier in suppliers" :key="supplier.name">
                      {{ supplier.name }}
                      </option>
                  </select>
              </div>
              <div class="col-12 col-xl-12 grid-margin stretch-card">
                <div class="card overflow-hidden">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-striped table-hover align-middle text-center">
                        <thead class="table-light">
                          <tr>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Purchase Qty</th>
                            <th>Purchase Price</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, i) in purchaseCartData" :key="item.id">
                            <td>{{ i + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.name }}</td>
                            <td>
                              <button @click="removeFromCart(i)" class="btn btn-danger">Remove</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
  import axios from "axios";
  import TheBreadcrumb from '../../components/TheBreadcrumb.vue';
  import TheButton from '../../components/TheButton.vue';
  import TheModel from '../../components/TheModel.vue';
  import { showErrorMessage, showSuccessMessage } from "../../utils/functions";
  import privateService from "../../service/privateService";
  
  export default {
    data: () => ({
      addingPurchaseData: {
        supplier_id: "",
        medicine_id: "",
        purchases_price: "",
      },
      selectedPurchaseData: {},
      addingStatus: false,
      editingStatus: false,
      deletingStatus: false,
      suppliers: [],
      medicines: [],
      selectedTypeId: '',
      selectedMedicineId: '',
      purchaseCartData: [],
    }),
    computed: {
        typeGroupedItems() {
            const grouped = {};
            this.medicines.forEach(item => {
                if (!grouped[item.type_id]) {
                    grouped[item.type_id] = item.type_id;
                }
            });
            return Object.values(grouped);
        },
        filteredMedicines() {
          if (!this.selectedTypeId) {
            return this.medicines;
          }
          return this.medicines.filter(medicine => medicine.type_id === this.selectedTypeId);
        },
        selectedMedicineDetails() {
        const selectedMedicine = this.medicines.find(medicine => medicine.id === this.selectedMedicineId);
        return selectedMedicine || null;
      },
    },
    watch: {
    selectedTypeId(newType) {
        this.filteredMedicines = [];
        this.selectedMedicineId = "";
      },
    },
    components: {
      TheBreadcrumb,
      TheButton,
      TheModel,
    },
    mounted() {
      setTimeout(this.getAllMedicines, 100);
      setTimeout(this.getAllSuppliers, 100);
    },
    methods: {
      resetForm(){
        this.addingMedicineData = {
          supplier_id: "",
          medicine_id: "",
          purchases_price: "",
        }
      },
  
      getAllSuppliers(){
        axios.get("https://pharmacy.spysabbir.com/api/supplier",  
          { headers: { authorization : `Bearer ${localStorage.getItem("accessToken")}` } }
        )
        .then((res) => {
          this.suppliers = res.data.data;
        }).catch(err => {
          showErrorMessage(err);
        }).finally(() => {
        });
      },
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
        const isDuplicate = this.purchaseCartData.some(item => item.id === selectedMedicine.id);
        if (isDuplicate) {
          alert("This item is already in the cart.");
        } else {
          this.purchaseCartData.push(selectedMedicine);
        }
      },

      removeFromCart(index) {
        if (index >= 0 && index < this.purchaseCartData.length) {
          this.purchaseCartData.splice(index, 1);
        }
      },
    }
  }
  </script>