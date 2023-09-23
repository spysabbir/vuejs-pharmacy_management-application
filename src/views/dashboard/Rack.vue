<template>
    <TheBreadcrumb title="Rack"></TheBreadcrumb>
  
    <div class="row">
      <div class="col-12 col-xl-12 grid-margin stretch-card">
        <div class="card overflow-hidden">
          <div class="card-header">
            <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
              <h6 class="card-title mb-0">Rack</h6>
              <TheButton data-bs-toggle="modal" data-bs-target=".addingModel">Add New</TheButton>
            </div>
          </div>
          <div class="card-body">
            <div class="text-center" v-if="getRacks">Looding...</div>
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
                  <tr v-for="(rack, i) in racks" :key="rack.name">
                    <td>{{ i+1 }}</td>
                    <td>{{ rack.name }}</td>
                    <td>
                      <TheButton data-bs-toggle="modal" data-bs-target=".editingModel" color="success" @click="selectedRackData = rack">Edit</TheButton>
                      <TheButton data-bs-toggle="modal" data-bs-target=".deletingModel" color="warning" @click="selectedRackData = rack">Delete</TheButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <TheModel hadding="Add Rack" action="addingModel">
      <form @submit.prevent="addRack">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input rack="text" class="form-control" ref="name" v-model="addingRackData.name" placeholder="Enter name">
        </div>
        <TheButton :lodding="addingStatus">Add Rack</TheButton>
      </form>
    </TheModel>
  
    <TheModel hadding="Edit Rack" action="editingModel">
      <form @submit.prevent="editRack">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input rack="text" class="form-control" ref="name" v-model="selectedRackData.name" placeholder="Enter name">
        </div>
        <TheButton :lodding="editingStatus">Edit Rack</TheButton>
      </form>
    </TheModel>
  
    <TheModel hadding="Delete Rack" action="deletingModel">
      <div class="card text-center">
        <div class="card-header">
          <strong>Rack Name: {{ selectedRackData.name }}</strong>
        </div>
        <div class="card-body">
          <TheButton data-bs-dismiss="modal">No</TheButton>
          <TheButton color="danger" @click="deleteRack" :loading="deletingStatus">Yes</TheButton>
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
      addingRackData: {
        name: "",
      },
      selectedRackData: {},
      addingStatus: false,
      editingStatus: false,
      deletingStatus: false,
      racks: [],
      getRacks: false,
    }),
    components: {
      TheBreadcrumb,
      TheButton,
      TheModel,
    },
    mounted() {
      setTimeout(this.getAllRacks, 100)
    },
    methods: {
      resetForm(){
        this.addingRackData = {
          name: "",
        }
      },
  
      getAllRacks(){
        this.getRacks = true;
        privateService.getRack()
        .then((res) => {
          this.racks = res.data.data;
        }).catch(err => {
          showErrorMessage(err);
        }).finally(() => {
          this.getRacks = false;
        });
      },
  
      addRack(){
        if(!this.addingRackData.name){
          showErrorMessage("Name can not be empty!");
          this.$refs.name.focus();
          return;
        }
        this.addingStatus = true;
        privateService.addRack(this.addingRackData)
        .then((res) => {
          $('.addingModel').modal('hide');
          showSuccessMessage(res);
          this.resetForm();
          this.getAllRacks();
        }).catch(err => {
          showErrorMessage(err)
        }).finally(() => {
          this.addingStatus = false;
        });
      },
  
      editRack() {
        if(!this.selectedRackData.name){
          showErrorMessage("Name can not be empty!");
          this.$refs.name.focus();
          return;
        }
        this.editingStatus = true;
        privateService.editRack(this.selectedRackData)
        .then((res) => {
          $('.editingModel').modal('hide');
          showSuccessMessage(res);
        }).catch(err => {
          showErrorMessage(err)
        }).finally(() => {
          this.editingStatus = false;
        });
      },
  
      deleteRack() {
        this.deletingStatus = true;
        privateService.deleteRack(this.selectedRackData.id)
        .then((res) => {
          $('.deletingModel').modal('hide');
          showSuccessMessage(res);
          this.getAllRacks();
        }).catch(err => {
          showErrorMessage(err)
        }).finally(() => {
          this.deletingStatus = false;
        });
      }
    }
  }
  </script>