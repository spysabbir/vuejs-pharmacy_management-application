<template>
    <TheBreadcrumb title="Power"></TheBreadcrumb>
  
    <div class="row">
      <div class="col-12 col-xl-12 grid-margin stretch-card">
        <div class="card overflow-hidden">
          <div class="card-header">
            <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
              <h6 class="card-title mb-0">Power</h6>
              <TheButton data-bs-toggle="modal" data-bs-target=".addingModel">Add New</TheButton>
            </div>
          </div>
          <div class="card-body">
            <div class="text-center" v-if="getPowers">Looding...</div>
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
                  <tr v-for="(power, i) in powers" :key="power.name">
                    <td>{{ i+1 }}</td>
                    <td>{{ power.name }}</td>
                    <td>
                      <TheButton data-bs-toggle="modal" data-bs-target=".editingModel" color="success" @click="selectedPowerData = power">Edit</TheButton>
                      <TheButton data-bs-toggle="modal" data-bs-target=".deletingModel" color="warning" @click="selectedPowerData = power">Delete</TheButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <TheModel hadding="Add Power" action="addingModel">
      <form @submit.prevent="addPower">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input power="text" class="form-control" ref="name" v-model="addingPowerData.name" placeholder="Enter name">
        </div>
        <TheButton :lodding="addingStatus">Add Power</TheButton>
      </form>
    </TheModel>
  
    <TheModel hadding="Edit Power" action="editingModel">
      <form @submit.prevent="editPower">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input power="text" class="form-control" ref="name" v-model="selectedPowerData.name" placeholder="Enter name">
        </div>
        <TheButton :lodding="editingStatus">Edit Power</TheButton>
      </form>
    </TheModel>
  
    <TheModel hadding="Delete Power" action="deletingModel">
      <div class="card text-center">
        <div class="card-header">
          <strong>Power Name: {{ selectedPowerData.name }}</strong>
        </div>
        <div class="card-body">
          <TheButton data-bs-dismiss="modal">No</TheButton>
          <TheButton color="danger" @click="deletePower" :loading="deletingStatus">Yes</TheButton>
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
      addingPowerData: {
        name: "",
      },
      selectedPowerData: {},
      addingStatus: false,
      editingStatus: false,
      deletingStatus: false,
      powers: [],
      getPowers: false,
    }),
    components: {
      TheBreadcrumb,
      TheButton,
      TheModel,
    },
    mounted() {
      setTimeout(this.getAllPowers, 100)
    },
    methods: {
      resetForm(){
        this.addingPowerData = {
          name: "",
        }
      },
  
      getAllPowers(){
        this.getPowers = true;
        privateService.getPower()
        .then((res) => {
          this.powers = res.data.data;
        }).catch(err => {
          showErrorMessage(err);
        }).finally(() => {
          this.getPowers = false;
        });
      },
  
      addPower(){
        if(!this.addingPowerData.name){
          showErrorMessage("Name can not be empty!");
          this.$refs.name.focus();
          return;
        }
        this.addingStatus = true;
        privateService.addPower(this.addingPowerData)
        .then((res) => {
          $('.addingModel').modal('hide');
          showSuccessMessage(res);
          this.resetForm();
          this.getAllPowers();
        }).catch(err => {
          showErrorMessage(err)
        }).finally(() => {
          this.addingStatus = false;
        });
      },
  
      editPower() {
        if(!this.selectedPowerData.name){
          showErrorMessage("Name can not be empty!");
          this.$refs.name.focus();
          return;
        }
        this.editingStatus = true;
        privateService.editPower(this.selectedPowerData)
        .then((res) => {
          this.getAllPowers();
          $('.editingModel').modal('hide');
          showSuccessMessage(res);
        }).catch(err => {
          showErrorMessage(err)
        }).finally(() => {
          this.editingStatus = false;
        });
      },
  
      deletePower() {
        this.deletingStatus = true;
        privateService.deletePower(this.selectedPowerData.id)
        .then((res) => {
          $('.deletingModel').modal('hide');
          showSuccessMessage(res);
          this.getAllPowers();
        }).catch(err => {
          showErrorMessage(err)
        }).finally(() => {
          this.deletingStatus = false;
        });
      }
    }
  }
  </script>