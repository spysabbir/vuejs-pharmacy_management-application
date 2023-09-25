<template>
    <TheBreadcrumb title="Unit"></TheBreadcrumb>
  
    <div class="row">
      <div class="col-12 col-xl-12 grid-margin stretch-card">
        <div class="card overflow-hidden">
          <div class="card-header">
            <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
              <h6 class="card-title mb-0">Unit</h6>
              <TheButton data-bs-toggle="modal" data-bs-target=".addingModel">Add New</TheButton>
            </div>
          </div>
          <div class="card-body">
            <div class="text-center" v-if="getUnits">Looding...</div>
            <div class="table-responsive" v-else>
              <table class="table table-striped table-hover align-middle text-center">
                <thead class="table-light">
                  <tr>
                    <th>Sl No</th>
                    <th>Unit Name</th>
                    <th>Piece in Unit</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(unit, i) in units" :key="unit.unit_name">
                    <td>{{ i+1 }}</td>
                    <td>{{ unit.unit_name }}</td>
                    <td>{{ unit.piece_in_unit }}</td>
                    <td>
                      <TheButton data-bs-toggle="modal" data-bs-target=".editingModel" color="success" @click="selectedUnitData = unit">Edit</TheButton>
                      <TheButton data-bs-toggle="modal" data-bs-target=".deletingModel" color="warning" @click="selectedUnitData = unit">Delete</TheButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <TheModel hadding="Add Unit" action="addingModel">
      <form @submit.prevent="addUnit">
        <div class="mb-3">
          <label class="form-label">Unit Name</label>
          <input unit="text" class="form-control" ref="unit_name" v-model="addingUnitData.unit_name" placeholder="Enter unit name">
        </div>
        <div class="mb-3">
          <label class="form-label">Piece in Unit</label>
          <input unit="number" class="form-control" ref="piece_in_unit" v-model="addingUnitData.piece_in_unit" placeholder="Enter piece in unit">
        </div>
        <TheButton :lodding="addingStatus">Add Unit</TheButton>
      </form>
    </TheModel>
  
    <TheModel hadding="Edit Unit" action="editingModel">
      <form @submit.prevent="editUnit">
        <div class="mb-3">
          <label class="form-label">Unit Name</label>
          <input unit="text" class="form-control" ref="unit_name" v-model="selectedUnitData.unit_name" placeholder="Enter unit name">
        </div>
        <div class="mb-3">
          <label class="form-label">Piece in Unit</label>
          <input unit="number" class="form-control" ref="piece_in_unit" v-model="selectedUnitData.piece_in_unit" placeholder="Enter piece in unit">
        </div>
        <TheButton :lodding="editingStatus">Edit Unit</TheButton>
      </form>
    </TheModel>
  
    <TheModel hadding="Delete Unit" action="deletingModel">
      <div class="card text-center">
        <div class="card-header">
          <strong>Unit Name: {{ selectedUnitData.unit_name }}</strong>
        </div>
        <div class="card-body">
          <TheButton data-bs-dismiss="modal">No</TheButton>
          <TheButton color="danger" @click="deleteUnit" :loading="deletingStatus">Yes</TheButton>
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
      addingUnitData: {
        unit_name: "",
        piece_in_unit: "",
      },
      selectedUnitData: {},
      addingStatus: false,
      editingStatus: false,
      deletingStatus: false,
      units: [],
      getUnits: false,
    }),
    components: {
      TheBreadcrumb,
      TheButton,
      TheModel,
    },
    mounted() {
      setTimeout(this.getAllUnits, 100)
    },
    methods: {
      resetForm(){
        this.addingUnitData = {
          unit_name: "",
          piece_in_unit: "",
        }
      },
  
      getAllUnits(){
        this.getUnits = true;
        privateService.getUnit()
        .then((res) => {
          this.units = res.data.data;
        }).catch(err => {
          showErrorMessage(err);
        }).finally(() => {
          this.getUnits = false;
        });
      },
  
      addUnit(){
        if(!this.addingUnitData.unit_name){
          showErrorMessage("Unit name can not be empty!");
          this.$refs.unit_name.focus();
          return;
        }
        if(!this.addingUnitData.piece_in_unit){
          showErrorMessage("Piece in unit can not be empty!");
          this.$refs.piece_in_unit.focus();
          return;
        }
        this.addingStatus = true;
        privateService.addUnit(this.addingUnitData)
        .then((res) => {
          $('.addingModel').modal('hide');
          showSuccessMessage(res);
          this.resetForm();
          this.getAllUnits();
        }).catch(err => {
          showErrorMessage(err)
        }).finally(() => {
          this.addingStatus = false;
        });
      },
  
      editUnit() {
        if(!this.selectedUnitData.unit_name){
          showErrorMessage("Unit name can not be empty!");
          this.$refs.unit_name.focus();
          return;
        }
        if(!this.selectedUnitData.piece_in_unit){
          showErrorMessage("Piece in unit can not be empty!");
          this.$refs.piece_in_unit.focus();
          return;
        }
        this.editingStatus = true;
        privateService.editUnit(this.selectedUnitData)
        .then((res) => {
          this.getAllUnits();
          $('.editingModel').modal('hide');
          showSuccessMessage(res);
        }).catch(err => {
          showErrorMessage(err)
        }).finally(() => {
          this.editingStatus = false;
        });
      },
  
      deleteUnit() {
        this.deletingStatus = true;
        privateService.deleteUnit(this.selectedUnitData.id)
        .then((res) => {
          $('.deletingModel').modal('hide');
          showSuccessMessage(res);
          this.getAllUnits();
        }).catch(err => {
          showErrorMessage(err)
        }).finally(() => {
          this.deletingStatus = false;
        });
      }
    }
  }
  </script>