<template>
  <TheBreadcrumb title="Customer"></TheBreadcrumb>

  <div class="row">
    <div class="col-12 col-xl-12 grid-margin stretch-card">
      <div class="card overflow-hidden">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
            <h6 class="card-title mb-0">Customer</h6>
          </div>
          <div class="row align-items-start">
            <div class="col-md-7">
              <p class="text-muted tx-13 mb-3 mb-md-0">Revenue is the income that a business has from its normal business activities, usually from the sale of goods and services to customers.</p>
            </div>
            <div class="col-md-5 d-flex justify-content-md-end">
              <TheButton data-bs-toggle="modal" data-bs-target=".addingModel">Add New</TheButton>
            </div>
          </div>
          <div></div>
        </div>
        <div class="card-body">
          <div class="text-center" v-if="getCustomers">Looding...</div>
          <div class="table-responsive" v-else>
            <table class="table table-striped table-hover align-middle">
              <thead class="table-light">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="customer in customers" :key="customer.name">
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

  <TheModel hadding="Add Customer" title="addingModel">
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

  <TheModel hadding="Edit Customer" title="editingModel">
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

  <TheModel hadding="Delete Customer" title="deletingModel">
    <strong>{{ selectedCustomerData.name }}</strong>
    <TheButton data-bs-dismiss="modal">No</TheButton>
    <TheButton color="danger" @click="deleteCustomer" :loading="deletingStatus">Yes</TheButton>
  </TheModel>
</template>

<script>

import axios from "axios";

import TheBreadcrumb from '../../components/TheBreadcrumb.vue';
import TheButton from '../../components/TheButton.vue';
import TheModel from '../../components/TheModel.vue';
import { eventBus } from "../../utils/eventBus";
import { showErrorMessage, showSuccessMessage } from "../../utils/functions";



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
    this.getAllCustomers();
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
      axios.get("https://pharmacy.spysabbir.com/api/customer",  
        {
          headers: {
            authorization : `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      )
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
      axios.post("https://pharmacy.spysabbir.com/api/customer", 
        this.addingCustomerData, 
        {
          headers: {
            authorization : `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      )
      .then((res) => {
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
      this.editingStatus = true;
      axios.put("https://pharmacy.spysabbir.com/api/customer/" + this.selectedCustomerData.id, 
        this.selectedCustomerData,
        {
          headers: {
            authorization : `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      )
      .then((res) => {
        showSuccessMessage(res);
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.editingStatus = false;
      });
    },

    deleteCustomer() {
      this.deletingStatus = true;
      axios.delete("https://pharmacy.spysabbir.com/api/customer/" + this.selectedCustomerData.id,  
        {
          headers: {
            authorization : `Bearer ${localStorage.getItem("accessToken")}`
          }
        }
      )
      .then((res) => {
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