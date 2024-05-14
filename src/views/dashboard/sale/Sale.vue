<script setup>
import { ref, computed, watch, onBeforeMount } from 'vue';
import { authStore } from '../../../store/store';
import { sale } from '../../../store/sale';
import showAlert from '../../../helpers/alert';
import TheBreadcrumb from '../../../components/TheBreadcrumb.vue';
import TheButton from '../../../components/TheButton.vue';

const customers = ref([]);
const getCustomers = ref(false);
const medicines = ref([]);
const getMedicines = ref(false)
const selectedCustomerId = ref(sale.selectedCustomerId);
const selectedSupplierId = ref('');
const selectedTypeId = ref('');
const selectedMedicineId = ref('');
const saleing = ref(false);
const discount = ref(0);
const payment_status = ref('');
const payment_amount = ref(0);
const payment_amount_status = ref(true);

const fetchCustomers = () => {
  getCustomers.value = false;
  authStore.fetchProtectedApi('customer', {}, 'GET')
    .then((res) => {
      getCustomers.value = true;
      customers.value = res.data;
    }).catch(err => {
      showAlert('error', err.message || "Failed to fetch customers");
    }).finally(() => {
      getCustomers.value = true;
    });
};

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

onBeforeMount(() => {
  fetchCustomers();
  fetchMedicines();
});

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

watch(selectedCustomerId, () => {
  discount.value = 0;
  payment_status.value = '';
  payment_amount.value = 0;
});

watch(selectedSupplierId, () => {
  selectedTypeId.value = "";
  selectedMedicineId.value = "";
});

watch(selectedTypeId, () => {
  selectedMedicineId.value = "";
});

watch(discount, () => {
  if (discount.value < 0) {
    discount.value = 0;
    showAlert('error', 'Discount should be greater than 0')
  }
  if (discount.value > sale.subTotalPrice) {
    discount.value = sale.subTotalPrice;
    showAlert('error', 'Discount should be less than sub total price')
  }
});

watch(payment_status, () => {
  payment_amount.value = 0;
  if (payment_status.value === 'Unpaid') {
    payment_amount.value = 0;
    payment_amount_status.value = true;
  }
  if (payment_status.value === 'Paid') {
    payment_amount.value = grandTotalPrice.value;
    payment_amount_status.value = true;
  }
  if (payment_status.value === 'Partial Paid') {
    payment_amount_status.value = false;
  }
});

watch(payment_amount, () => {
  if(payment_amount.value < 0) {
    payment_amount.value = 0;
    showAlert('error', 'Payment amount should be greater than 0');
  }
  if (payment_amount.value > grandTotalPrice.value) {
    payment_amount.value = grandTotalPrice.value;
    showAlert('error', 'Payment amount should be less than grand total');
  }
})

const addToCart = (medicine) => {
  sale.selectedCustomerId = selectedCustomerId.value;
  sale.addToCartItem(medicine);
};

const grandTotalPrice = computed(() => {
  return sale.subTotalPrice - discount.value;
});

const saleingNow = () => {
  if (selectedCustomerId.value === "") {
      showAlert('error', 'Please select a customer');
      return;
  }
  if (Object.keys(sale.items).length === 0) {
      showAlert('error', 'Please add items to cart');
      return;
  }
  if (!payment_status.value) {
    showAlert('error', 'Please select payment status');
    return;
  }
  if (payment_status.value != 'Unpaid' && !payment_amount.value) {
    showAlert('error', 'Please enter payment amount');
    return;
  }
  const saleData = {
    discount: discount.value,
    payment_status: payment_status.value,
    payment_amount: payment_amount.value,
  }

  sale.checkout(saleData)
  discount.value = 0;
  payment_status.value = '';
  payment_amount.value = 0;
  selectedCustomerId.value = '';
  selectedSupplierId.value = '';
};
</script>

<template>
  <TheBreadcrumb title="Sale"></TheBreadcrumb>

  <div class="card mb-5 mb-xxl-8">
    <div class="card-header">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Sale</span>
        <span class="text-muted mt-1 fw-bold fs-7">***</span>
      </h3>
      <div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Empty Cart">
        <button @click="sale.emptyCart" class="btn btn-danger er fs-6 px-8 py-4">
          <!--begin::Svg Icon | path: icons/duotone/Communication/Add-user.svg-->
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
      </div>
    </div>
    <div class="card-body pt-9 pb-0">
        <div class="row">
          <div class="col-lg-4">
            <div class="row">
              <div class="col-lg-12  mb-3">
                <label class="form-label">Select Customer</label>
                <select class="form-control" v-model="selectedCustomerId">
                  <option value="">--Customer--</option>
                  <option :value="item.id" v-for="item in customers" :key="item.id">
                    {{ item.name }} - {{ item.phone_number }}
                  </option>
                </select>
              </div>
              <div class="col-lg-7 mb-3">
                <label class="form-label">Select Supplier</label>
                <select class="form-control" v-model="selectedSupplierId" :disabled="!getMedicines">
                  <option value="">--Supplier--</option>
                  <option :value="item.supplier_id" v-for="item in supplierGroupedItems" :key="item.supplier_id">
                    {{ item.supplier_name }}
                  </option>
                </select>
              </div>
              <div class="col-lg-5 mb-3">
                <label class="form-label">Select Type</label>
                <select class="form-control" v-model="selectedTypeId" :disabled="!selectedSupplierId || !getMedicines">
                  <option value="">--Type--</option>
                  <option :value="item.type_id" v-for="item in filteredTypeGroupedItems" :key="item.type_id">
                    {{ item.type_name }}
                  </option>
                </select>
              </div>
              <div class="col-lg-12 mb-3">
                <div class="row">
                  <div class="col-lg-6 border d-flex align-items-center justify-content-between" v-for="medicine in filteredMedicines" :key="medicine.id"> 
                    <strong>{{ medicine.name }} - {{ medicine.power_name }}</strong>
                    <TheButton @click="addToCart(medicine)" class="btn btn-primary px-3 py-2">Add</TheButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="table-responsive">
              <table class="table table-striped table-hover align-middle text-center">
                <thead class="table-primary">
                  <tr>
                    <th>Name | Power</th>
                    <th>Unit</th>
                    <th>Available</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in sale.items" :key="item.medicine.id">
                    <td>{{ item.medicine.name }} - <span class="text-info fw-bold text-hover-primary">{{ item.medicine.power_name }}</span></td>
                    <td>{{ item.medicine.unit_name }}</td>
                    <td>{{ item.medicine.purchases_quantity - item.medicine.sales_quantity }}</td>
                    <td>{{ item.medicine.sales_price }}</td>
                    <td>
                      <input type="number" v-model="item.sales_quantity" @change="sale.updateQuantity(item.medicine.id, item.sales_quantity)">
                    </td>
                    <td>{{ item.medicine.sales_price * item.sales_quantity }}</td>
                    <td>
                      <button @click="sale.removeFromCart(item.medicine.id)" class="btn btn-danger btn-sm">
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
              </table>
            </div>
            <div class="table-responsive">
              <table class="table table-striped table-hover align-middle text-center">
                <thead class="table-info">
                  <tr>
                    <th>Sub Total:</th>
                    <th>{{ sale.subTotalPrice }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Discount: </td>
                    <td>
                      <input type="number" v-model="discount">
                    </td>
                  </tr>
                  <tr class="table-info">
                    <td>Grand Total: </td>
                    <td>{{ grandTotalPrice }}</td>
                  </tr>
                  <tr>
                    <td>Payment Status: </td>
                    <td>
                      <select style="width: 50%;" class="text-center" v-model="payment_status">
                        <option value="">--Select One--</option>
                        <option value="Unpaid">Unpaid</option>
                        <option value="Partial Paid">Partial Paid</option>
                        <option value="Paid">Paid</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Payment Amount: </td>
                    <td>
                      <input type="number" v-model="payment_amount" :readonly="payment_amount_status">
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <TheButton :lodding="saleing" @click="saleingNow" class="mt-3">Sale</TheButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>