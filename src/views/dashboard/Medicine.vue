<template>
  <TheBreadcrumb title="Medicine"></TheBreadcrumb>

  <div class="row">
    <div class="col-12 col-xl-12 grid-margin stretch-card">
      <div class="card overflow-hidden">
        <div class="card-header">
          <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
            <h6 class="card-title mb-0">Medicine</h6>
            <TheButton data-bs-toggle="modal" data-bs-target=".addingModel">Add New</TheButton>
          </div>
        </div>
        <div class="card-body">
          <div class="text-center" v-if="getMedicines">Looding...</div>
          <div class="table-responsive" v-else>
            <table class="table table-striped table-hover align-middle text-center">
              <thead class="table-light">
                <tr>
                  <th>Sl No</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(medicine, i) in medicines" :key="medicine.name">
                  <td>{{ i+1 }}</td>
                  <td>{{ medicine.name }}</td>
                  <td>
                    <TheButton data-bs-toggle="modal" data-bs-target=".editingModel" color="success" @click="selectedMedicineData = medicine">Edit</TheButton>
                    <TheButton data-bs-toggle="modal" data-bs-target=".deletingModel" color="warning" @click="selectedMedicineData = medicine">Delete</TheButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TheModel hadding="Add Medicine" action="addingModel">
    <form @submit.prevent="addMedicine">
      <div class="mb-3">
        <label class="form-label">Select Supplier</label>
        <select ref="supplier_id" class="form-control" v-model="addingMedicineData.supplier_id">
          <option value="">Select One</option>
          <option :value="supplier.id" v-for="supplier in suppliers" :key="supplier.name">
            {{ supplier.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Select Type</label>
        <select ref="type_id" class="form-control" v-model="addingMedicineData.type_id">
          <option value="">Select One</option>
          <option :value="item.id" v-for="item in types" :key="item.name">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" ref="name" v-model="addingMedicineData.name" placeholder="Enter name">
      </div>
      <div class="mb-3">
        <label class="form-label">Select Power</label>
        <select ref="power_id" class="form-control" v-model="addingMedicineData.power_id">
          <option value="">Select One</option>
          <option :value="power.id" v-for="power in powers" :key="power.name">
            {{ power.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Select Unit</label>
        <select ref="unit_id" class="form-control" v-model="addingMedicineData.unit_id">
          <option value="">Select One</option>
          <option :value="unit.id" v-for="unit in units" :key="unit.unit_name">
            {{ unit.unit_name }}
          </option>
        </select>
      </div>
      <TheButton :lodding="addingStatus">Add Medicine</TheButton>
    </form>
  </TheModel>

  <TheModel hadding="Edit Medicine" action="editingModel">
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
      <TheButton :lodding="editingStatus">Edit Medicine</TheButton>
    </form>
  </TheModel>

  <TheModel hadding="Delete Medicine" action="deletingModel">
    <div class="card text-center">
      <div class="card-header">
        <strong>Medicine Name: {{ selectedMedicineData.name }}</strong>
      </div>
      <div class="card-body">
        <TheButton data-bs-dismiss="modal">No</TheButton>
        <TheButton color="danger" @click="deleteMedicine" :loading="deletingStatus">Yes</TheButton>
      </div>
    </div>
  </TheModel>
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
    addingMedicineData: {
      supplier_id: "",
      type_id: "",
      name: "",
      power_id: "",
      unit_id: "",
    },
    selectedMedicineData: {},
    addingStatus: false,
    editingStatus: false,
    deletingStatus: false,
    medicines: [],
    getMedicines: false,
    suppliers: [],
    types: [],
    powers: [],
    units: [],
  }),
  components: {
    TheBreadcrumb,
    TheButton,
    TheModel,
  },
  mounted() {
    setTimeout(this.getAllMedicines, 100);
    setTimeout(this.getAllSuppliers, 100);
    setTimeout(this.getAllTypes, 100);
    setTimeout(this.getAllPowers, 100);
    setTimeout(this.getAllUnits, 100);
  },
  methods: {
    resetForm(){
      this.addingMedicineData = {
        supplier_id: "",
        type_id: "",
        name: "",
        power_id: "",
        unit_id: "",
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
    getAllTypes(){
      privateService.getType()
      .then((res) => {
        this.types = res.data.data;
      }).catch(err => {
        showErrorMessage(err);
      }).finally(() => {
      });
    },
    getAllPowers(){
      privateService.getPower()
      .then((res) => {
        this.powers = res.data.data;
      }).catch(err => {
        showErrorMessage(err);
      }).finally(() => {
      });
    },
    getAllUnits(){
      privateService.getUnit()
      .then((res) => {
        this.units = res.data.data;
      }).catch(err => {
        showErrorMessage(err);
      }).finally(() => {
      });
    },

    getAllMedicines(){
      this.getMedicines = true;
      privateService.getMedicine()
      .then((res) => {
        this.medicines = res.data.data;
      }).catch(err => {
        showErrorMessage(err);
      }).finally(() => {
        this.getMedicines = false;
      });
    },

    addMedicine(){
      if(!this.addingMedicineData.supplier_id){
        showErrorMessage("Supplier can not be empty!");
        this.$refs.supplier_id.focus();
        return;
      }
      if(!this.addingMedicineData.type_id){
        showErrorMessage("Type can not be empty!");
        this.$refs.type_id.focus();
        return;
      }
      if(!this.addingMedicineData.name){
        showErrorMessage("Medicine Name can not be empty!");
        this.$refs.name.focus();
        return;
      }
      if(!this.addingMedicineData.power_id){
        showErrorMessage("Power can not be empty!");
        this.$refs.power_id.focus();
        return;
      }
      if(!this.addingMedicineData.unit_id){
        showErrorMessage("Unit can not be empty!");
        this.$refs.unit_id.focus();
        return;
      }
      this.addingStatus = true;
      privateService.addMedicine(this.addingMedicineData)
      .then((res) => {
        $('.addingModel').modal('hide');
        showSuccessMessage(res);
        this.resetForm();
        this.getAllMedicines();
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.addingStatus = false;
      });
    },

    editMedicine() {
      if(!this.selectedMedicineData.supplier_id){
        showErrorMessage("Supplier can not be empty!");
        this.$refs.supplier_id.focus();
        return;
      }
      if(!this.selectedMedicineData.type_id){
        showErrorMessage("Type can not be empty!");
        this.$refs.type_id.focus();
        return;
      }
      if(!this.selectedMedicineData.name){
        showErrorMessage("Medicine Name can not be empty!");
        this.$refs.name.focus();
        return;
      }
      if(!this.selectedMedicineData.power_id){
        showErrorMessage("Power can not be empty!");
        this.$refs.power_id.focus();
        return;
      }
      if(!this.selectedMedicineData.unit_id){
        showErrorMessage("Unit can not be empty!");
        this.$refs.unit_id.focus();
        return;
      }
      this.editingStatus = true;
      privateService.editMedicine(this.selectedMedicineData)
      .then((res) => {
        $('.editingModel').modal('hide');
        showSuccessMessage(res);
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.editingStatus = false;
      });
    },

    deleteMedicine() {
      this.deletingStatus = true;
      privateService.deleteMedicine(this.selectedMedicineData.id)
      .then((res) => {
        $('.deletingModel').modal('hide');
        showSuccessMessage(res);
        this.getAllMedicines();
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.deletingStatus = false;
      });
    }
  }
}
</script>