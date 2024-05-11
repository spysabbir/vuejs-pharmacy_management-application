<script setup>
import { ref, computed, watch, onMounted, onBeforeMount } from 'vue';
import { authStore } from '../../../store/store';
import { cart } from '../../../store/cart';
import showAlert from '../../../helpers/alert';

import TheBreadcrumb from '../../../components/TheBreadcrumb.vue';
import TheButton from '../../../components/TheButton.vue';

// const cart = cart;
const medicines = ref([]);
const getMedicines = ref(false)
const selectedSupplierId = ref('');
const selectedTypeId = ref('');
const selectedMedicineId = ref('');
const purchases_quantity = ref(1);
const purchasing = ref(false);
const discount = ref('');
const payment_status = ref('');
const payment_amount = ref('');

const fetchMedicines = () => {
  getMedicines.value = false;
  authStore.fetchProtectedApi('medicine', {}, 'GET')
    .then((res) => {
      getMedicines.value = true;
      medicines.value = res.data;
    }).catch(err => {
      showAlert('error', err.message || "Failed to fetch medicines");
    }).finally(() => {
      getMedicines.value = true;
    });
};

onBeforeMount(fetchMedicines);

const supplierGroupedItems = computed(() => {
  const grouped = {};
  medicines.value.forEach(item => {
    if (!grouped[item.supplier_id]) {
      grouped[item.supplier_id] = item.supplier_name;
    }
  });
  return Object.entries(grouped).map(([supplier_id, supplier_name]) => ({
    supplier_id,
    supplier_name,
  }));
});

const filteredTypeGroupedItems = computed(() => {
  if (!selectedSupplierId.value) {
    return null;
  }
  const grouped = {};
  const filteredType = medicines.value.filter(medicine => medicine.supplier_id == selectedSupplierId.value);
  filteredType.forEach(item => {
    if (!grouped[item.type_id]) {
      grouped[item.type_id] = item.type_name;
    }
  });
  return Object.entries(grouped).map(([type_id, type_name]) => ({
    type_id,
    type_name,
  }));
});

const filteredMedicines = computed(() => {
  if (!selectedTypeId.value || (!selectedTypeId.value && !selectedSupplierId.value)) return [];
  return medicines.value.filter(medicine => (
    (!selectedTypeId.value || medicine.type_id == selectedTypeId.value) &&
    (!selectedSupplierId.value || medicine.supplier_id == selectedSupplierId.value)
  ));
});

watch(selectedSupplierId, () => {
  selectedTypeId.value = "";
});

watch(selectedTypeId, () => {
  selectedMedicineId.value = "";
});

const addToCart = (medicine) => {
  cart.addToCartItem({
    id: medicine.id,
    name: medicine.name,
    power_name: medicine.power_name,
    quantity: 1,
  });
  showAlert('success', 'Medicine added to cart');
};

const purchasingNow = () => {
  const purchaseData = {
    supplier_id: selectedSupplierId.value,
    sub_total: purchaseSubTotal.value,
    discount: discount.value,
    grand_total: updatedGrandTotal.value,
    payment_status: payment_status.value,
    payment_amount: payment_amount.value,
    purchaseCartData: purchaseCartData.value,
  }

  if (!payment_status.value) {
    showErrorMessage("Payment status can not be empty!");
    return;
  }
  if (payment_status.value !== 'Unpaid' && !payment_amount.value) {
    showErrorMessage("Payment amount do not entry less than 1 or grand total qty!");
    payment_amount.value = '';
    return;
  }

};
</script>

<template>
  <TheBreadcrumb title="Purchase Create"></TheBreadcrumb>

  <div class="card mb-5 mb-xxl-8">
    <div class="card-header">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Purchase</span>
        <span class="text-muted mt-1 fw-bold fs-7">Create</span>
      </h3>
      <div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add">
        <router-link to="" class="btn btn-primary er fs-6 px-8 py-4">
          <!--begin::Svg Icon | path: icons/duotone/Communication/Add-user.svg-->
          <span class="svg-icon svg-icon-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
              <path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
            </svg>
          </span>
          <!--end::Svg Icon-->
        </router-link>
      </div>
    </div>
    <div class="card-body pt-9 pb-0">
        <div class="row">
          <div class="col-lg-3 col-md-6  mb-3">
            <label class="form-label">Select Supplier</label>
            <select class="form-control" v-model="selectedSupplierId" :disabled="!getMedicines">
              <option value="">Select Supplier</option>
              <option :value="item.supplier_id" v-for="item in supplierGroupedItems" :key="item.supplier_id">
                {{ item.supplier_name }}
              </option>
            </select>
          </div>
          <div class="col-lg-3 col-md-6 mb-3">
            <label class="form-label">Select Type</label>
            <select class="form-control" v-model="selectedTypeId" :disabled="!selectedSupplierId || !getMedicines">
              <option value="">Select Type</option>
              <option :value="item.type_id" v-for="item in filteredTypeGroupedItems" :key="item.type_id">
                {{ item.type_name }}
              </option>
            </select>
          </div>

          <div class="col-lg-6 mb-3">
            <div class="row">
              <div class="col-lg-6 col-md-6 mb-3" v-for="medicine in filteredMedicines" :key="medicine.id"> 
                {{ medicine.name }} - {{ medicine.power_name }}
                <TheButton @click="addToCart(medicine)" class="btn btn-primary er fs-6 px-8 py-4">
                  Add to Cart
                </TheButton>
              </div>
            </div>
          </div>



          <div class="col-lg-12 col-md-12">
            <div class="table-responsive">
            <table class="table table-striped table-hover align-middle text-center">
              <thead class="table-info">
                <tr>
                  <th>Medicine Name</th>
                  <th>Unit</th>
                  <th>Purchase Price</th>
                  <th>Purchase Qty</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in cart.items" :key="cart.id">
                  <td>{{ item.name }} - <span class="text-info fw-bold text-hover-primary">{{ item.power_name }}</span></td>
                  <td>{{ item.unit_name }}</td>
                  <!-- <td>{{ item.purchases_price }}</td> -->
                  <td>
                    <input type="number" v-model="purchases_quantity">
                    <!-- <div v-if="cartItem.invalidCartQuantity" class="error-message">
                      Quantity must be greater than or equal to 0.
                    </div> -->
                  </td>
                  <!-- <td>{{ cartItem.purchases_price * purchases_quantity }}</td> -->
                  <td>
                    <button @click="removeCartItem(cartItem.id)" class="btn btn-danger btn-sm">
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
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot class="table-info">
                <tr>
                  <td colspan="3"></td>
                  <td>Sub Total: </td>
                  <td colspan="2">{{ cart.totalPrice }}</td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td>Discount: </td>
                  <td colspan="2">
                    <input type="number" placeholder="00">
                  </td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td>Grand Total: </td>
                  <td colspan="2"></td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td>Payment Status: </td>
                  <td colspan="2">
                    <select style="width: 50%;" class="text-center">
                      <option value="">--Select One--</option>
                      <option value="Unpaid">Unpaid</option>
                      <option value="Partial Paid">Partial Paid</option>
                      <option value="Paid">Paid</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td>Payment Amount: </td>
                  <td colspan="2">
                    <input type="number" placeholder="00">
                  </td>
                </tr>
                <tr>
                  <td colspan="4"></td>
                  <td colspan="2">
                    <TheButton :lodding="purchasing" @click="purchasingNow" class="mt-3">Purchase</TheButton>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          </div>
        </div>
    </div>
  </div>
</template>