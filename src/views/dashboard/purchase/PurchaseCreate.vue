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

const selectedMedicineDetails = computed(() => {
  return medicines.value.find(medicine => medicine.id === selectedMedicineId.value) || null;
});

watch(selectedSupplierId, () => {
  selectedTypeId.value = "";
});

watch(selectedTypeId, () => {
  selectedMedicineId.value = "";
});

const addToCart = (selectedMedicine) => {
  console.log(purchases_quantity.value);
  if (!purchases_quantity.value) {
    showAlert('error', "Purchases quantity cannot be empty!");
    return;
  }
  cart.addToCartItem({ ...selectedMedicine, purchases_quantity: purchases_quantity.value });
  // purchases_quantity.value = 1;
  // selectedTypeId.value = "";
  // selectedMedicineId.value = "";
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
          <div class="col-lg-4 col-md-6  mb-3">
            <label class="form-label">Select Supplier</label>
            <select class="form-control" v-model="selectedSupplierId" :disabled="!getMedicines">
              <option value="">Select Supplier</option>
              <option :value="item.supplier_id" v-for="item in supplierGroupedItems" :key="item.supplier_id">
                {{ item.supplier_name }}
              </option>
            </select>
          </div>
          <div class="col-lg-4 col-md-6 mb-3">
            <label class="form-label">Select Type</label>
            <select class="form-control" v-model="selectedTypeId" :disabled="!selectedSupplierId || !getMedicines">
              <option value="">Select Type</option>
              <option :value="item.type_id" v-for="item in filteredTypeGroupedItems" :key="item.type_id">
                {{ item.type_name }}
              </option>
            </select>
          </div>
          <div class="col-lg-4 col-md-6 mb-3">
            <label class="form-label">Select Medicine</label>
            <select class="form-control" v-model="selectedMedicineId" :disabled="!selectedTypeId || !getMedicines">
              <option value="">Select Medicine</option>
              <option :value="medicine.id" v-for="medicine in filteredMedicines" :key="medicine.id">
                {{ medicine.name }} - {{ medicine.power_name }}
              </option>
            </select>
          </div>
          <div class="col-lg-12 col-md-12">
            <div class="table-responsive" v-if="selectedMedicineDetails">
              <table class="table align-middle text-center">
                <thead class="table-success">
                  <tr>
                    <th>Medicine Name</th>
                    <th>Type</th>
                    <th>Unit</th>
                    <th>Rack</th>
                    <th>Purchase Price</th>
                    <th>Purchase Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ selectedMedicineDetails.name }} - <span class="text-info fw-bold text-hover-primary">{{ selectedMedicineDetails.power_name }}</span></td>
                    <td>{{ selectedMedicineDetails.type_name }}</td>
                    <td>{{ selectedMedicineDetails.unit_name }}</td>
                    <td>{{ selectedMedicineDetails.rack_name }}</td>
                    <td>{{ selectedMedicineDetails.purchases_price }}</td>
                    <td><input type="number" v-model="purchases_quantity"></td>
                    <td>
                      <TheButton @click="addToCart(selectedMedicineDetails)" class="btn-sm">
                        <!--begin::Svg Icon | path: icons/duotone/Communication/Add-user.svg-->
                        <span class="svg-icon svg-icon-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                            <path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
                          </svg>
                        </span>
                        <!--end::Svg Icon-->
                      </TheButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else class="text-center text-danger p-2">
                No medicine selected
            </div>
          </div>
        </div>
    </div>
  </div>
</template>