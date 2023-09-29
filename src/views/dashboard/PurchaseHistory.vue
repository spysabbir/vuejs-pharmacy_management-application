<template>
    <TheBreadcrumb title="Purchase History"></TheBreadcrumb>
  
    <div class="row">
      <div class="col-12 col-xl-12 grid-margin stretch-card">
        <div class="card overflow-hidden">
          <div class="card-header">
            <div class="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
              <h6 class="card-title mb-0">Purchase History</h6>
            </div>
          </div>
          <div class="card-body">
            <div class="text-center" v-if="getPurchaseHistory">Looding...</div>
            <div class="table-responsive" v-else>
              <table class="table table-striped table-hover align-middle text-center">
                <thead class="table-light">
                  <tr>
                    <th>Sl No</th>
                    <th>Invoice No</th>
                    <th>Item</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(purchaseItem, i) in purchaseHistory" :key="purchaseItem.purchases_invoice_no">
                    <td>{{ i+1 }}</td>
                    <td>{{ purchaseItem.purchases_invoice_no }}</td>
                    <td>{{ Object.keys(purchaseItem.purchaseCartData).length }}</td>
                    <td>
                      <TheButton data-bs-toggle="modal" data-bs-target=".viewingModel" color="success" @click="selectedPurchaseHistory = purchaseItem">View</TheButton>
                      <TheButton data-bs-toggle="modal" data-bs-target=".deletingModel" color="warning" @click="selectedPurchaseHistory = purchaseItem">Delete</TheButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TheModel hadding="View Purchase History" action="viewingModel">
      <div class="card text-center">
        <div class="card-header">
            <strong>Invoice No: {{ selectedPurchaseHistory.purchases_invoice_no }}</strong>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Column</th>
                            <th>Column</th>
                            <th>Column</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in selectedPurchaseHistory.purchaseCartData" :key="item">
                            <td>R1C1</td>
                            <td>R1C2</td>
                            <td>R1C3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="card-body">
          <TheButton data-bs-dismiss="modal">No</TheButton>
        </div>
      </div>
    </TheModel>

    <TheModel hadding="Delete Purchase History" action="deletingModel">
      <div class="card text-center">
        <div class="card-header">
          <strong>Invoice No: {{ selectedPurchaseHistory.purchases_invoice_no }}</strong>
        </div>
        <div class="card-body">
          <TheButton data-bs-dismiss="modal">No</TheButton>
          <TheButton color="danger" @click="deletePurchaseHistory" :loading="deletingStatus">Yes</TheButton>
        </div>
      </div>
    </TheModel>
  </template>
  
  <script>
  import TheBreadcrumb from '../../components/TheBreadcrumb.vue';
  import TheButton from '../../components/TheButton.vue';
  import TheModel from '../../components/TheModel.vue';
  import { showErrorMessage, showSuccessMessage } from "../../utils/functions";
  import privateService from "../../service/privateService";
  
  export default {
    data: () => ({
        purchaseHistory: [],
        getPurchaseHistory: false,
        deletingStatus: false,
        selectedPurchaseHistory: {},
    }),
    components: {
      TheBreadcrumb,
      TheButton,
      TheModel,
    },
    mounted() {
      setTimeout(this.getAllPurchaseHistory, 100)
    },
    methods: {
      getAllPurchaseHistory(){
        this.getPurchaseHistory = true;
        privateService.getPurchaseHistory()
        .then((res) => {
          this.purchaseHistory = res.data.data;
        }).catch(err => {
          showErrorMessage(err);
        }).finally(() => {
          this.getPurchaseHistory = false;
        });
      },

      deletePurchaseHistory() {
      this.deletingStatus = true;
      privateService.deletePurchaseHistory(this.selectedPurchaseHistory.id)
      .then((res) => {
        $('.deletingModel').modal('hide');
        showSuccessMessage(res);
        this.getAllPurchaseHistory();
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.deletingStatus = false;
      });
    }
    }
  }
  </script>