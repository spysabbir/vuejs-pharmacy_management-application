<template>
  <TheBreadcrumb title="Type"></TheBreadcrumb>

  <div class="row">
    <div class="col-12 col-xl-12 grid-margin stretch-card">
      <div class="card overflow-hidden">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
            <h6 class="card-title mb-0">Type</h6>
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
          <div class="text-center" v-if="getTypes">Looding...</div>
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
                <tr v-for="(type, i) in types" :key="type.name">
                  <td>{{ i+1 }}</td>
                  <td>{{ type.name }}</td>
                  <td>
                    <TheButton data-bs-toggle="modal" data-bs-target=".editingModel" color="success" @click="selectedTypeData = type">Edit</TheButton>
                    <TheButton data-bs-toggle="modal" data-bs-target=".deletingModel" color="warning" @click="selectedTypeData = type">Delete</TheButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TheModel hadding="Add Type" action="addingModel">
    <form @submit.prevent="addType">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" ref="name" v-model="addingTypeData.name" placeholder="Enter name">
      </div>
      <TheButton :lodding="addingStatus">Add Type</TheButton>
    </form>
  </TheModel>

  <TheModel hadding="Edit Type" action="editingModel">
    <form @submit.prevent="editType">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" ref="name" v-model="selectedTypeData.name" placeholder="Enter name">
      </div>
      <TheButton :lodding="editingStatus">Edit Type</TheButton>
    </form>
  </TheModel>

  <TheModel hadding="Delete Type" action="deletingModel">
    <div class="card text-center">
      <div class="card-header">
        <strong>Type Name: {{ selectedTypeData.name }}</strong>
      </div>
      <div class="card-body">
        <TheButton data-bs-dismiss="modal">No</TheButton>
        <TheButton color="danger" @click="deleteType" :loading="deletingStatus">Yes</TheButton>
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
    addingTypeData: {
      name: "",
    },
    selectedTypeData: {},
    addingStatus: false,
    editingStatus: false,
    deletingStatus: false,
    types: [],
    getTypes: false,
  }),
  components: {
    TheBreadcrumb,
    TheButton,
    TheModel,
  },
  mounted() {
    setTimeout(this.getAllTypes, 100)
  },
  methods: {
    resetForm(){
      this.addingTypeData = {
        name: "",
      }
    },

    getAllTypes(){
      this.getTypes = true;
      privateService.getType()
      .then((res) => {
        this.types = res.data.data;
      }).catch(err => {
        showErrorMessage(err);
      }).finally(() => {
        this.getTypes = false;
      });
    },

    addType(){
      if(!this.addingTypeData.name){
        showErrorMessage("Name can not be empty!");
        this.$refs.name.focus();
        return;
      }
      this.addingStatus = true;
      privateService.addType(this.addingTypeData)
      .then((res) => {
        $('.addingModel').modal('hide');
        showSuccessMessage(res);
        this.resetForm();
        this.getAllTypes();
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.addingStatus = false;
      });
    },

    editType() {
      if(!this.selectedTypeData.name){
        showErrorMessage("Name can not be empty!");
        this.$refs.name.focus();
        return;
      }
      this.editingStatus = true;
      privateService.editType(this.selectedTypeData)
      .then((res) => {
        $('.editingModel').modal('hide');
        showSuccessMessage(res);
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.editingStatus = false;
      });
    },

    deleteType() {
      this.deletingStatus = true;
      privateService.deleteType(this.selectedTypeData.id)
      .then((res) => {
        $('.deletingModel').modal('hide');
        showSuccessMessage(res);
        this.getAllTypes();
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.deletingStatus = false;
      });
    }
  }
}
</script>