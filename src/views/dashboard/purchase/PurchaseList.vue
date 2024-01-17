<template>
  <TheBreadcrumb title="Purchase List"></TheBreadcrumb>
  
  <!--begin::Tables-->
  <div class="card mb-5 mb-xl-8">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Purchase List</span>
        <span class="text-muted mt-1 fw-bold fs-7">{{ purchaseList.length }} Items</span>
      </h3>
      <div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add">
          <RouterLink to="/dashboard/purchase/create" class="btn btn-primary">
            <!--begin::Svg Icon | path: icons/duotone/Communication/Add-user.svg-->
            <span class="svg-icon svg-icon-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                <path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero"></path>
              </svg>
            </span>
            <!--end::Svg Icon-->
          </RouterLink>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="text-center" v-if="getPurchaseList">Looding...</div>
      <div class="table-responsive" v-else>
        <!--begin::Table-->
        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bolder text-muted">
              <th class="min-w-150px">Sl No</th>
              <th class="min-w-140px">Invoice No</th>
              <th class="min-w-140px">Supplier Name</th>
              <th class="min-w-140px">Sub Total</th>
              <th class="min-w-140px">Discount</th>
              <th class="min-w-140px">Grand Total</th>
              <th class="min-w-140px">Payment Status</th>
              <th class="min-w-140px">Payment Amount</th>
              <th class="min-w-100px text-end">Actions</th>
            </tr>
          </thead>
          <!--end::Table head-->
          <!--begin::Table body-->
          <tbody>
            <template v-if="purchaseList.length >= 1">
              <tr v-for="(purchaseItem, i) in purchaseList" :key="purchaseItem.purchases_invoice_no">
                <td>{{ i+1 }}</td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="d-flex justify-content-start flex-column">
                      <p class="text-dark fw-bolder text-hover-primary fs-6">{{ purchaseItem.purchases_invoice_no }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="d-flex justify-content-start flex-column">
                      <p class="text-dark fw-bolder text-hover-primary fs-6">{{ purchaseItem.supplier_name }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="d-flex justify-content-start flex-column">
                      <p class="text-dark fw-bolder text-hover-primary fs-6">{{ purchaseItem.sub_total }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="d-flex justify-content-start flex-column">
                      <p class="text-dark fw-bolder text-hover-primary fs-6">{{ purchaseItem.discount ? purchaseItem.discount : 0 }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="d-flex justify-content-start flex-column">
                      <p class="text-dark fw-bolder text-hover-primary fs-6">{{ purchaseItem.grand_total }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="d-flex justify-content-start flex-column">
                      <p class="text-dark fw-bolder text-hover-primary fs-6">{{ purchaseItem.payment_status }}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="d-flex justify-content-start flex-column">
                      <p class="text-dark fw-bolder text-hover-primary fs-6">{{ purchaseItem.payment_amount }}</p>
                    </div>
                  </div>
                </td>
                <td class="text-end">
                  <TheButton data-bs-toggle="modal" data-bs-target=".viewingModel" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1" color="success" @click="viewPurchaseList(purchaseItem)">
                    <!--begin::Svg Icon | path: icons/duotone/General/Settings-1.svg-->
                    <span class="svg-icon svg-icon-3">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect x="0" y="0" width="24" height="24"></rect>
                          <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000"></path>
                          <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3"></path>
                        </g>
                      </svg>
                    </span>
                    <!--end::Svg Icon-->
                </TheButton>
                <TheButton data-bs-toggle="modal" data-bs-target=".deletingModel" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm" color="warning" @click="selectedPurchaseItem = purchaseItem">
                    <!--begin::Svg Icon | path: icons/duotone/General/Trash.svg-->
                    <span class="svg-icon svg-icon-3">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect x="0" y="0" width="24" height="24" />
                          <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero" />
                          <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                        </g>
                      </svg>
                    </span>
                    <!--end::Svg Icon-->
                </TheButton>
                </td>
              </tr>
            </template>
            <tr v-else>
              <td colspan="6" class="text-center">
                <span class="text-danger">Purchase list not found!</span>
              </td>
            </tr>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables-->

  <TheModel hadding="View Purchase Data" action="viewingModel">
    <div class="card text-center">
      <div class="card-header">
        <strong class="my-3 text-center text-info">Invoice No: {{ viewPurchaseData.purchases_invoice_no }}</strong>
      </div>
      <div class="card-body">
          <div class="table-responsive">
              <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                  <thead>
                      <tr>
                          <th>Type</th>
                          <th>Medicine Name</th>
                          <th>Unit</th>
                          <th>Purchases Quantity</th>
                          <th>Purchases Price</th>
                          <th>Total Price</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in viewPurchaseData.purchasesDetails" :key="item.id">
                      <td>{{ item.type_name }}</td>
                      <td>{{ item.medicine_name }} - {{ item.power_name }}</td>
                      <td>{{ item.unit_name }}</td>
                      <td>{{ item.purchases_quantity }}</td>
                      <td>{{ item.purchases_price }}</td>
                      <td>{{ item.purchases_quantity * item.purchases_price }}</td>
                    </tr>
                  </tbody>
              </table>
          </div>
      </div>
    </div>
  </TheModel>

  <TheModel hadding="Delete Purchase List" action="deletingModel">
    <div class="card">
      <div class="card-header d-block text-center">
        <strong>Are you sure you want to delete it?</strong>
        <br>
        <strong class="text-info">Invoice No: {{ selectedPurchaseItem.purchases_invoice_no }}</strong>
      </div>
      <div class="card-body text-center">
        <TheButton data-bs-dismiss="modal">No</TheButton>
        <TheButton color="danger" @click="deletePurchaseItem" :loading="deletingStatus">Yes</TheButton>
      </div>
    </div>
  </TheModel>
</template>

<script>
import TheBreadcrumb from '../../../components/TheBreadcrumb.vue';
import TheButton from '../../../components/TheButton.vue';
import TheModel from '../../../components/TheModel.vue';
import { showErrorMessage, showSuccessMessage } from "../../../utils/functions";
import privateService from "../../../service/privateService";

export default {
  data: () => ({
      purchaseList: [],
      getPurchaseList: false,
      deletingStatus: false,
      viewStatus: false,
      selectedPurchaseItem: {},
      viewPurchaseData: {},
  }),
  components: {
    TheBreadcrumb,
    TheButton,
    TheModel,
  },
  mounted() {
    setTimeout(this.getAllPurchaseList, 100)
  },
  methods: {
    getAllPurchaseList(){
      this.getPurchaseList = true;
      privateService.getPurchaseList()
      .then((res) => {
        this.purchaseList = res.data.data;
      }).catch(err => {
        showErrorMessage(err);
      }).finally(() => {
        this.getPurchaseList = false;
      });
    },

    viewPurchaseList(selectedPurchaseItem){
      this.viewStatus = true;
      privateService.viewPurchaseData(selectedPurchaseItem.id)
      .then((res) => {
        this.viewPurchaseData = res.data.data;
      }).catch(err => {
        showErrorMessage(err);
      }).finally(() => {
        this.viewStatus = false;
      });
    },

    deletePurchaseItem() {
      this.deletingStatus = true;
      privateService.deletePurchaseData(this.selectedPurchaseItem.id)
      .then((res) => {
        $('.deletingModel').modal('hide');
        showSuccessMessage(res);
        this.getAllPurchaseList();
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.deletingStatus = false;
      });
    }
  }
}
</script>