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
            <form @submit.prevent="addMedicine">
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
                    <div class="col-2 mb-3">
                        <label class="form-label">Select Type</label>
                        <select class="form-control" v-model="selectedTypeId">
                            <option value="">Select One</option>
                            <option :value="item" v-for="item in typeGroupedItems" :key="item">
                            {{ item }}
                            </option>
                        </select>
                    </div>
                    <div class="col-4 mb-3">
                      <label class="form-label">Select Medicine</label>
                      <select ref="medicine_id" class="form-control" v-model="selectedMedicineId">
                        <option value="">Select One</option>
                        <option :value="medicine.id" v-for="medicine in filteredMedicines" :key="medicine.id">
                          {{ medicine.name }} {{ medicine.power_id }}
                        </option>
                      </select>
                    </div>
                </div>
            </form>
          </div>
          <div class="card-footer">
            <div class="table-responsive">
              <table class="table table-striped table-hover align-middle text-center">
                <tbody v-if="selectedMedicineDetails">
                  <tr>
                    <td>{{ selectedMedicineDetails.name }}</td>
                    <td>{{ selectedMedicineDetails.purchases_price }}</td>
                    <td>
                      <TheButton @click="addToCart(selectedMedicineDetails)" class="mt-1">Add to Cart</TheButton>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td colspan="2">No medicine selected</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-xl-12 grid-margin stretch-card">
        <div class="card overflow-hidden">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-hover align-middle text-center">
                <thead class="table-light">
                  <tr>
                    <th>Sl No</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in purchaseCartData" :key="item.id">
                    <td>{{ i + 1 }}</td>
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
  
    <!-- <TheModel hadding="Edit Medicine" action="editingModel">
      <form @submit.prevent="editMedicine">
        <div class="mb-3">
          <label class="form-label">Select Supplier</label>
          <select ref="supplier_id" class="form-control" v-model="selectedMedicineData.supplier_id">
            <option value="">Select One</option>
            <option :value="supplier.id" v-for="supplier in suppliers" :key="supplier.name">
              {{ supplier.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Select Type</label>
          <select ref="type_id" class="form-control" v-model="selectedMedicineData.type_id">
            <option value="">Select One</option>
            <option :value="item.id" v-for="item in types" :key="item.name">
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" ref="name" v-model="selectedMedicineData.name" placeholder="Enter name">
        </div>
        <div class="mb-3">
          <label class="form-label">Select Power</label>
          <select ref="power_id" class="form-control" v-model="selectedMedicineData.power_id">
            <option value="">Select One</option>
            <option :value="power.id" v-for="power in powers" :key="power.name">
              {{ power.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Select Unit</label>
          <select ref="unit_id" class="form-control" v-model="selectedMedicineData.unit_id">
            <option value="">Select One</option>
            <option :value="unit.id" v-for="unit in units" :key="unit.unit_name">
              {{ unit.unit_name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Purchases Price</label>
          <input type="number" class="form-control" ref="purchases_price" v-model="selectedMedicineData.purchases_price" placeholder="Enter purchases price">
        </div>
        <div class="mb-3">
          <label class="form-label">Sales Price</label>
          <input type="number" class="form-control" ref="sales_price" v-model="selectedMedicineData.sales_price" placeholder="Enter sales price">
        </div>
        <TheButton :lodding="editingStatus">Edit Medicine</TheButton>
      </form>
    </TheModel>
   -->
    <!-- <TheModel hadding="Delete Medicine" action="deletingModel">
      <div class="card text-center">
        <div class="card-header">
          <strong>Medicine Name: {{ selectedMedicineData.name }}</strong>
        </div>
        <div class="card-body">
          <TheButton data-bs-dismiss="modal">No</TheButton>
          <TheButton color="danger" @click="deleteMedicine" :loading="deletingStatus">Yes</TheButton>
        </div>
      </div>
    </TheModel> -->
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
  
    // getAllMedicines(){
    //     this.getMedicines = true;
    //     privateService.getMedicine()
    //     .then((res) => {
    //         this.medicines = res.data.data;
    //     }).catch(err => {
    //         showErrorMessage(err);
    //     }).finally(() => {
    //         this.getMedicines = false;
    //     });
    // },

    //   addMedicine(){
    //     if(!this.addingMedicineData.supplier_id){
    //       showErrorMessage("Supplier can not be empty!");
    //       this.$refs.supplier_id.focus();
    //       return;
    //     }
    //     if(!this.addingMedicineData.type_id){
    //       showErrorMessage("Type can not be empty!");
    //       this.$refs.type_id.focus();
    //       return;
    //     }
    //     if(!this.addingMedicineData.name){
    //       showErrorMessage("Medicine Name can not be empty!");
    //       this.$refs.name.focus();
    //       return;
    //     }
    //     if(!this.addingMedicineData.power_id){
    //       showErrorMessage("Power can not be empty!");
    //       this.$refs.power_id.focus();
    //       return;
    //     }
    //     if(!this.addingMedicineData.unit_id){
    //       showErrorMessage("Unit can not be empty!");
    //       this.$refs.unit_id.focus();
    //       return;
    //     }
    //     if(!this.addingMedicineData.purchases_price){
    //       showErrorMessage("Purchases price can not be empty!");
    //       this.$refs.purchases_price.focus();
    //       return;
    //     }
    //     if(!this.addingMedicineData.sales_price){
    //       showErrorMessage("Sales price can not be empty!");
    //       this.$refs.sales_price.focus();
    //       return;
    //     }
    //     this.addingStatus = true;
    //     privateService.addMedicine(this.addingMedicineData)
    //     .then((res) => {
    //       $('.addingModel').modal('hide');
    //       showSuccessMessage(res);
    //       this.resetForm();
    //       this.getAllMedicines();
    //     }).catch(err => {
    //       showErrorMessage(err)
    //     }).finally(() => {
    //       this.addingStatus = false;
    //     });
    //   },
  
    //   editMedicine() {
    //     if(!this.selectedMedicineData.supplier_id){
    //       showErrorMessage("Supplier can not be empty!");
    //       this.$refs.supplier_id.focus();
    //       return;
    //     }
    //     if(!this.selectedMedicineData.type_id){
    //       showErrorMessage("Type can not be empty!");
    //       this.$refs.type_id.focus();
    //       return;
    //     }
    //     if(!this.selectedMedicineData.name){
    //       showErrorMessage("Medicine Name can not be empty!");
    //       this.$refs.name.focus();
    //       return;
    //     }
    //     if(!this.selectedMedicineData.power_id){
    //       showErrorMessage("Power can not be empty!");
    //       this.$refs.power_id.focus();
    //       return;
    //     }
    //     if(!this.selectedMedicineData.unit_id){
    //       showErrorMessage("Unit can not be empty!");
    //       this.$refs.unit_id.focus();
    //       return;
    //     }
    //     if(!this.selectedMedicineData.purchases_price){
    //       showErrorMessage("Purchases price can not be empty!");
    //       this.$refs.purchases_price.focus();
    //       return;
    //     }
    //     if(!this.selectedMedicineData.sales_price){
    //       showErrorMessage("Sales price can not be empty!");
    //       this.$refs.sales_price.focus();
    //       return;
    //     }
    //     this.editingStatus = true;
    //     privateService.editMedicine(this.selectedMedicineData)
    //     .then((res) => {
    //       $('.editingModel').modal('hide');
    //       showSuccessMessage(res);
    //     }).catch(err => {
    //       showErrorMessage(err)
    //     }).finally(() => {
    //       this.editingStatus = false;
    //     });
    //   },
  
    //   deleteMedicine() {
    //     this.deletingStatus = true;
    //     privateService.deleteMedicine(this.selectedMedicineData.id)
    //     .then((res) => {
    //       $('.deletingModel').modal('hide');
    //       showSuccessMessage(res);
    //       this.getAllMedicines();
    //     }).catch(err => {
    //       showErrorMessage(err)
    //     }).finally(() => {
    //       this.deletingStatus = false;
    //     });
    //   }
    }
  }
  </script>