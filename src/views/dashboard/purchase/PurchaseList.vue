<script setup>
import { ref, onBeforeMount } from 'vue';
import { authStore } from '../../../store/store';
import showAlert from '../../../helpers/alert';

import TheBreadcrumb from '../../../components/TheBreadcrumb.vue';
import TheButton from '../../../components/TheButton.vue';
import TheModel from '../../../components/TheModel.vue';

const purchaseList = ref([]);
const getPurchaseList = ref(false);

const deletingStatus = ref(false);
const viewStatus = ref(false);
const selectedPurchaseItem = ref({});
const viewPurchaseData = ref({});

const getAllPurchaseList = () => {
  getPurchaseList.value = false;
  authStore.fetchProtectedApi('purchase', {}, 'GET')
    .then((res) => {
      getPurchaseList.value = true;
      purchaseList.value = res.data;
    }).catch(err => {
      showAlert('error', err.message || "Failed to fetch purchase list");
    }).finally(() => {
      getPurchaseList.value = true;
    });
};

onBeforeMount(() => {
  getAllPurchaseList();
});

const viewPurchaseList = (id) => {
  viewStatus.value = true;
  authStore.fetchProtectedApi(`purchase/${id}`, {}, 'GET')
    .then((res) => {
      viewPurchaseData.value = res.data;
    }).catch(err => {
      showAlert('error', err.message || "Failed to fetch purchase data");
    }).finally(() => {
      viewStatus.value = false;
    });
};

const deletePurchaseItem = () => {
  deletingStatus.value = true;
  authStore.fetchProtectedApi(`purchase/${selectedPurchaseItem.value.id}`, {}, 'DELETE')
    .then((res) => {
      $('.deletingModel').modal('hide');
      showAlert('success', res.message || "Purchase data deleted successfully");
      getAllPurchaseList();
    }).catch(err => {
      showAlert('error', err.message || "Failed to delete purchase data");
    }).finally(() => {
      deletingStatus.value = false;
    });
};

const searchField = ["purchases_invoice_no", "supplier_name", "payment_status"];
const searchValue = ref();

const headers = [
  { text: "Purchases Invoice No", value: "purchases_invoice_no" },
  { text: "Supplier Name", value: "supplier_name" },
  { text: "Sub Total", value: "sub_total" },
  { text: "Discount", value: "discount" },
  { text: "Grand Total", value: "grand_total" },
  { text: "Payment Status ", value: "payment_status" },
  { text: "Payment Amount", value: "payment_amount" },
  { text: "Created At", value: "created_at", sortable: true },
  { text: "Action", value: "action" },
];

const selectedPurchaseItemId = (id) => {
  selectedPurchaseItem.value = purchaseList.value.find(item => item.id === id);
};

</script>

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
        <RouterLink to="/dashboard/purchase" class="btn btn-primary">
          <!--begin::Svg Icon | path: icons/duotone/Communication/Add-user.svg-->
          <span class="svg-icon svg-icon-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
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
    <div class="text-center" v-if="!getPurchaseList">Looding...</div>
    <div v-else>
      <input placeholder="Search..." class="form-control mb-3 w-auto" type="text" v-model="searchValue"/>
      <EasyDataTable sort-by="id" sort-type="desc" buttons-pagination border-cell alternating show-index header-text-direction="center" body-text-direction="center" :headers="headers" :items="purchaseList" :rows-per-page="10" :search-field="searchField" :search-value="searchValue">
        <template #item-action="{ id }">
          <TheButton data-bs-toggle="modal" data-bs-target=".viewingModel" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1" color="success" @click="viewPurchaseList(id)">
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
          <TheButton data-bs-toggle="modal" data-bs-target=".deletingModel" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm" color="warning" @click="selectedPurchaseItemId(id)">
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
          <router-link :to="`/dashboard/purchase/invoice/${id}`" class="btn btn-icon btn-bg-info btn-active-color-info btn-sm me-1">
            <!--begin::Svg Icon -->
            <span class="svg-icon svg-icon-3">
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.55281 1.60553C7.10941 1.32725 7.77344 1 9 1C10.2265 1 10.8906 1.32722 11.4472 1.6055L11.4631 1.61347C11.8987 1.83131 12.2359 1.99991 13 1.99993C14.2371 1.99998 14.9698 1.53871 15.2141 1.35512C15.5944 1.06932 16.0437 1.09342 16.3539 1.2369C16.6681 1.38223 17 1.72899 17 2.24148L17 13H20C21.6562 13 23 14.3415 23 15.999V19C23 19.925 22.7659 20.6852 22.3633 21.2891C21.9649 21.8867 21.4408 22.2726 20.9472 22.5194C20.4575 22.7643 19.9799 22.8817 19.6331 22.9395C19.4249 22.9742 19.2116 23.0004 19 23H5C4.07502 23 3.3148 22.7659 2.71092 22.3633C2.11331 21.9649 1.72739 21.4408 1.48057 20.9472C1.23572 20.4575 1.11827 19.9799 1.06048 19.6332C1.03119 19.4574 1.01616 19.3088 1.0084 19.2002C1.00194 19.1097 1.00003 19.0561 1 19V2.24146C1 1.72899 1.33184 1.38223 1.64606 1.2369C1.95628 1.09341 2.40561 1.06931 2.78589 1.35509C3.03019 1.53868 3.76289 1.99993 5 1.99993C5.76415 1.99993 6.10128 1.83134 6.53688 1.6135L6.55281 1.60553ZM3.00332 19L3 3.68371C3.54018 3.86577 4.20732 3.99993 5 3.99993C6.22656 3.99993 6.89059 3.67269 7.44719 3.39441L7.46312 3.38644C7.89872 3.1686 8.23585 3 9 3C9.76417 3 10.1013 3.16859 10.5369 3.38643L10.5528 3.39439C11.1094 3.67266 11.7734 3.9999 13 3.99993C13.7927 3.99996 14.4598 3.86581 15 3.68373V19C15 19.783 15.1678 20.448 15.4635 21H5C4.42498 21 4.0602 20.8591 3.82033 20.6992C3.57419 20.5351 3.39761 20.3092 3.26943 20.0528C3.13928 19.7925 3.06923 19.5201 3.03327 19.3044C3.01637 19.2029 3.00612 19.1024 3.00332 19ZM19.3044 20.9667C19.5201 20.9308 19.7925 20.8607 20.0528 20.7306C20.3092 20.6024 20.5351 20.4258 20.6992 20.1797C20.8591 19.9398 21 19.575 21 19V15.999C21 15.4474 20.5529 15 20 15H17L17 19C17 19.575 17.1409 19.9398 17.3008 20.1797C17.4649 20.4258 17.6908 20.6024 17.9472 20.7306C18.2075 20.8607 18.4799 20.9308 18.6957 20.9667C18.8012 20.9843 18.8869 20.9927 18.9423 20.9967C19.0629 21.0053 19.1857 20.9865 19.3044 20.9667Z" fill="#0F0F0F"></path> <path d="M5 8C5 7.44772 5.44772 7 6 7H12C12.5523 7 13 7.44772 13 8C13 8.55229 12.5523 9 12 9H6C5.44772 9 5 8.55229 5 8Z" fill="#0F0F0F"></path> <path d="M5 12C5 11.4477 5.44772 11 6 11H12C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13H6C5.44772 13 5 12.5523 5 12Z" fill="#0F0F0F"></path> <path d="M5 16C5 15.4477 5.44772 15 6 15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H6C5.44772 17 5 16.5523 5 16Z" fill="#0F0F0F"></path> </g></svg>
            </span>
            <!--end::Svg Icon-->
          </router-link>
        </template>
      </EasyDataTable>
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
                <thead class="table-info">
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