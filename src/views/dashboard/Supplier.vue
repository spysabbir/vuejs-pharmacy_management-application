<template>
  <TheBreadcrumb title="Supplier"></TheBreadcrumb>

  <div class="row">
    <div class="col-12 col-xl-12 grid-margin stretch-card">
      <div class="card overflow-hidden">
        <div class="card-header">
          <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
            <h6 class="card-title mb-0">Supplier</h6>
            <TheButton data-bs-toggle="modal" data-bs-target=".addingModel">Add New</TheButton>
          </div>
        </div>
        <div class="card-body">
          <div class="text-center" v-if="getSuppliers">Looding...</div>
          <div class="table-responsive" v-else>
            <table class="table table-striped table-hover align-middle text-center">
              <thead class="table-light">
                <tr>
                  <th>Sl No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(supplier, i) in suppliers" :key="supplier.name">
                  <td>{{ i+1 }}</td>
                  <td>{{ supplier.name }}</td>
                  <td>{{ supplier.email }}</td>
                  <td>
                    <TheButton data-bs-toggle="modal" data-bs-target=".editingModel" color="success" @click="selectedSupplierData = supplier">Edit</TheButton>
                    <TheButton data-bs-toggle="modal" data-bs-target=".deletingModel" color="warning" @click="selectedSupplierData = supplier">Delete</TheButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TheModel hadding="Add Supplier" action="addingModel">
    <form @submit.prevent="addSupplier">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" ref="name" v-model="addingSupplierData.name" placeholder="Enter name">
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" ref="email" v-model="addingSupplierData.email" placeholder="Enter email">
      </div>
      <div class="mb-3">
        <label class="form-label">Phone Number</label>
        <input type="text" class="form-control" ref="phone_number" v-model="addingSupplierData.phone_number" placeholder="Enter phone number">
      </div>
      <div class="mb-3">
        <label class="form-label">Address</label>
        <textarea class="form-control" v-model="addingSupplierData.address" ref="address" placeholder="Enter address"></textarea>
      </div>
      <TheButton :lodding="addingStatus">Add Supplier</TheButton>
    </form>
  </TheModel>

  <TheModel hadding="Edit Supplier" action="editingModel">
    <form @submit.prevent="editSupplier">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" ref="name" v-model="selectedSupplierData.name" placeholder="Enter name">
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" ref="email" v-model="selectedSupplierData.email" placeholder="Enter email">
      </div>
      <div class="mb-3">
        <label class="form-label">Phone Number</label>
        <input type="text" class="form-control" ref="phone_number" v-model="selectedSupplierData.phone_number" placeholder="Enter phone number">
      </div>
      <div class="mb-3">
        <label class="form-label">Address</label>
        <textarea class="form-control" v-model="selectedSupplierData.address" ref="address" placeholder="Enter address"></textarea>
      </div>
      <TheButton :lodding="editingStatus">Edit Supplier</TheButton>
    </form>
  </TheModel>

  <TheModel hadding="Delete Supplier" action="deletingModel">
    <div class="card text-center">
      <div class="card-header">
        <strong>Supplier Name: {{ selectedSupplierData.name }}</strong>
      </div>
      <div class="card-body">
        <TheButton data-bs-dismiss="modal">No</TheButton>
        <TheButton color="danger" @click="deleteSupplier" :loading="deletingStatus">Yes</TheButton>
      </div>
    </div>
  </TheModel>
</template>

<script>
import axios from "axios";
import TheBreadcrumb from '../../components/TheBreadcrumb.vue';
import TheButton from '../../components/TheButton.vue';
import TheModel from '../../components/TheModel.vue';
import { eventBus } from "../../utils/eventBus";

export default {
  data: () => ({
    addingSupplierData: {
      name: "",
      email: "",
      phone_number: "",
      address: "",
    },
    selectedSupplierData: {},
    addingStatus: false,
    editingStatus: false,
    deletingStatus: false,
    suppliers: [],
    getSuppliers: false,
  }),
  components: {
    TheBreadcrumb,
    TheButton,
    TheModel,
  },
  mounted() {
    this.getAllSuppliers();
  },
  methods: {
    resetForm(){
      this.addingSupplierData = {
        name: "",
        email: "",
        phone_number: "",
        address: "",
      }
    },

    getAllSuppliers(){
      this.getSuppliers = true;
      axios.get("https://pharmacy.spysabbir.com/api/supplier",  
        { headers: { authorization : `Bearer ${localStorage.getItem("accessToken")}` } }
      )
      .then((res) => {
        this.suppliers = res.data.data;
      }).catch(err => {
        let errorMessage = "Something went wrong.";
        if(err.response){
          errorMessage = err.response.data.message;
        }

        eventBus.emit("toast", {
          type: "danger",
          message: errorMessage,
        })
      }).finally(() => {
        this.getSuppliers = false;
      });
    },

    addSupplier(){
      if(!this.addingSupplierData.name){
        eventBus.emit("toast", {
          type: "danger",
          message: "Name can not be empty.",
        })
        this.$refs.name.focus();
        return;
      }
      if(!this.addingSupplierData.email){
        eventBus.emit("toast", {
          type: "danger",
          message: "Email can not be empty.",
        })
        this.$refs.email.focus();
        return;
      }
      if(!this.addingSupplierData.phone_number){
        eventBus.emit("toast", {
          type: "danger",
          message: "Phone number can not be empty.",
        })
        this.$refs.phone_number.focus();
        return;
      }
      if(!this.addingSupplierData.address){
        eventBus.emit("toast", {
          type: "danger",
          message: "Address can not be empty.",
        })
        this.$refs.address.focus();
        return;
      }
      this.addingStatus = true;
      axios.post("https://pharmacy.spysabbir.com/api/supplier", 
        this.addingSupplierData, { headers: { authorization : `Bearer ${localStorage.getItem("accessToken")}` } }
      )
      .then((res) => {
        $('.addingModel').modal('hide');
        eventBus.emit("toast", {
          type: "success",
          message: res.data.message,
        })
        this.resetForm();
        this.getAllSuppliers();
      }).catch(err => {
        let errorMessage = "Something went wrong.";
        if(err.response){
          errorMessage = err.response.data.message;
        }

        eventBus.emit("toast", {
          type: "danger",
          message: errorMessage,
        })
      }).finally(() => {
        this.addingStatus = false;
      });
    },

    editSupplier() {
      if(!this.selectedSupplierData.name){
        eventBus.emit("toast", {
          type: "danger",
          message: "Name can not be empty.",
        })
        this.$refs.name.focus();
        return;
      }
      if(!this.selectedSupplierData.email){
        eventBus.emit("toast", {
          type: "danger",
          message: "Email can not be empty.",
        })
        this.$refs.email.focus();
        return;
      }
      if(!this.selectedSupplierData.phone_number){
        eventBus.emit("toast", {
          type: "danger",
          message: "Phone number can not be empty.",
        })
        this.$refs.phone_number.focus();
        return;
      }
      if(!this.selectedSupplierData.address){
        eventBus.emit("toast", {
          type: "danger",
          message: "Address can not be empty.",
        })
        this.$refs.address.focus();
        return;
      }
      this.editingStatus = true;
      axios.put("https://pharmacy.spysabbir.com/api/supplier/" + this.selectedSupplierData.id, 
        this.selectedSupplierData, { headers: { authorization : `Bearer ${localStorage.getItem("accessToken")}` } }
      )
      .then((res) => {
        $('.editingModel').modal('hide');
        eventBus.emit("toast", {
          type: "success",
          message: res.data.message,
        })
      }).catch(err => {
        let errorMessage = "Something went wrong.";
        if(err.response){
          errorMessage = err.response.data.message;
        }

        eventBus.emit("toast", {
          type: "danger",
          message: errorMessage,
        })
      }).finally(() => {
        this.editingStatus = false;
      });
    },

    deleteSupplier() {
      this.deletingStatus = true;
      axios.delete("https://pharmacy.spysabbir.com/api/supplier/" + this.selectedSupplierData.id,  
      { headers: { authorization : `Bearer ${localStorage.getItem("accessToken")}` } }
      )
      .then((res) => {
        $('.deletingModel').modal('hide');
        eventBus.emit("toast", {
          type: "success",
          message: res.data.message,
        })
        this.getAllSuppliers();
      }).catch(err => {
        let errorMessage = "Something went wrong.";
        if(err.response){
          errorMessage = err.response.data.message;
        }

        eventBus.emit("toast", {
          type: "danger",
          message: errorMessage,
        })
      }).finally(() => {
        this.deletingStatus = false;
      });
    }
  }
}
</script>