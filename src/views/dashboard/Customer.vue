<template>
  <TheBreadcrumb title="Customer"></TheBreadcrumb>

  <div class="row">
    <div class="col-12 col-xl-12 grid-margin stretch-card">
      <div class="card overflow-hidden">
        <div class="card-header">
          <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
            <h6 class="card-title mb-0">Customer</h6>
            <TheButton data-bs-toggle="modal" data-bs-target=".addingModel">Add New</TheButton>
          </div>
        </div>
        <div class="card-body">
          <div class="text-center" v-if="getCustomers">Looding...</div>
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
                <tr v-for="(customer, i) in customers" :key="customer.name">
                  <td>{{ i+1 }}</td>
                  <td>{{ customer.name }}</td>
                  <td>{{ customer.email }}</td>
                  <td>
                    <TheButton data-bs-toggle="modal" data-bs-target=".editingModel" color="success" @click="selectedCustomerData = customer">Edit</TheButton>
                    <TheButton data-bs-toggle="modal" data-bs-target=".deletingModel" color="warning" @click="selectedCustomerData = customer">Delete</TheButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TheModel hadding="Add Customer" action="addingModel">
    <form @submit.prevent="addCustomer">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" ref="name" v-model="addingCustomerData.name" placeholder="Enter name">
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" ref="email" v-model="addingCustomerData.email" placeholder="Enter email">
      </div>
      <div class="mb-3">
        <label class="form-label">Phone Number</label>
        <input type="text" class="form-control" ref="phone_number" v-model="addingCustomerData.phone_number" placeholder="Enter phone number">
      </div>
      <div class="mb-3">
        <label class="form-label">Address</label>
        <textarea class="form-control" v-model="addingCustomerData.address" ref="address" placeholder="Enter address"></textarea>
      </div>
      <TheButton :lodding="addingStatus">Add Customer</TheButton>
    </form>
  </TheModel>

  <TheModel hadding="Edit Customer" action="editingModel">
    <form @submit.prevent="editCustomer">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" ref="name" v-model="selectedCustomerData.name" placeholder="Enter name">
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" ref="email" v-model="selectedCustomerData.email" placeholder="Enter email">
      </div>
      <div class="mb-3">
        <label class="form-label">Phone Number</label>
        <input type="text" class="form-control" ref="phone_number" v-model="selectedCustomerData.phone_number" placeholder="Enter phone number">
      </div>
      <div class="mb-3">
        <label class="form-label">Address</label>
        <textarea class="form-control" v-model="selectedCustomerData.address" ref="address" placeholder="Enter address"></textarea>
      </div>
      <TheButton :lodding="editingStatus">Edit Customer</TheButton>
    </form>
  </TheModel>

  <TheModel hadding="Delete Customer" action="deletingModel">
    <div class="card text-center">
      <div class="card-header">
        <strong>Customer Name: {{ selectedCustomerData.name }}</strong>
      </div>
      <div class="card-body">
        <TheButton data-bs-dismiss="modal">No</TheButton>
        <TheButton color="danger" @click="deleteCustomer" :loading="deletingStatus">Yes</TheButton>
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
    addingCustomerData: {
      name: "",
      email: "",
      phone_number: "",
      address: "",
    },
    selectedCustomerData: {},
    addingStatus: false,
    editingStatus: false,
    deletingStatus: false,
    customers: [],
    getCustomers: false,
  }),
  components: {
    TheBreadcrumb,
    TheButton,
    TheModel,
  },
  mounted() {
    setTimeout(this.getAllCustomers, 100)
  },
  methods: {
    resetForm(){
      this.addingCustomerData = {
        name: "",
        email: "",
        phone_number: "",
        address: "",
      }
    },

    getAllCustomers(){
      this.getCustomers = true;
      privateService.getCustomer()
      .then((res) => {
        this.customers = res.data.data;
      }).catch(err => {
        showErrorMessage(err);
      }).finally(() => {
        this.getCustomers = false;
      });
    },

    addCustomer(){
      if(!this.addingCustomerData.name){
        showErrorMessage("Name can not be empty!");
        this.$refs.name.focus();
        return;
      }
      if(!this.addingCustomerData.email){
        showErrorMessage("Email can not be empty!");
        this.$refs.email.focus();
        return;
      }
      if(!this.addingCustomerData.phone_number){
        showErrorMessage("Phone number can not be empty!");
        this.$refs.phone_number.focus();
        return;
      }
      if(!this.addingCustomerData.address){
        showErrorMessage("Address can not be empty!");
        this.$refs.address.focus();
        return;
      }
      this.addingStatus = true;
      privateService.addCustomer(this.addingCustomerData)
      .then((res) => {
        $('.addingModel').modal('hide');
        showSuccessMessage(res);
        this.resetForm();
        this.getAllCustomers();
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.addingStatus = false;
      });
    },

    editCustomer() {
      if(!this.selectedCustomerData.name){
        showErrorMessage("Name can not be empty!");
        this.$refs.name.focus();
        return;
      }
      if(!this.selectedCustomerData.email){
        showErrorMessage("Email can not be empty!");
        this.$refs.email.focus();
        return;
      }
      if(!this.selectedCustomerData.phone_number){
        showErrorMessage("Phone number can not be empty!");
        this.$refs.phone_number.focus();
        return;
      }
      if(!this.selectedCustomerData.address){
        showErrorMessage("Address can not be empty!");
        this.$refs.address.focus();
        return;
      }
      this.editingStatus = true;
      privateService.editCustomer(this.selectedCustomerData)
      .then((res) => {
        this.getAllCustomers();
        $('.editingModel').modal('hide');
        showSuccessMessage(res);
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.editingStatus = false;
      });
    },

    deleteCustomer() {
      this.deletingStatus = true;
      privateService.deleteCustomer(this.selectedCustomerData.id)
      .then((res) => {
        $('.deletingModel').modal('hide');
        showSuccessMessage(res);
        this.getAllCustomers();
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.deletingStatus = false;
      });
    }
  }
}
</script>