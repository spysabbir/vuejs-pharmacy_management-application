<script setup>
import { ref, onBeforeMount } from 'vue';
import { authStore } from '../../store/store';
import showAlert from '../../helpers/alert';

import TheBreadcrumb from '../../components/TheBreadcrumb.vue';
import TheButton from '../../components/TheButton.vue';
import TheModel from '../../components/TheModel.vue';

const addingCustomerData = ref({
  name: "",
  email: "",
  phone_number: "",
  address: "",
});

const selectedCustomerData = ref({});
const addingStatus = ref(false);
const editingStatus = ref(false);
const deletingStatus = ref(false);
const customers = ref([]);

const resetForm = () => {
  addingCustomerData.value = {
    name: "",
    email: "",
    phone_number: "",
    address: "",
  };
};

const fetchCustomers = () => {
  authStore.fetchProtectedApi('customer', {}, 'GET')
    .then((res) => {
      customers.value = res.data;
    })
    .catch(err => {
      showAlert('error', err.message || "Failed to fetch customers");
    })
    .finally(() => {
    });
};

onBeforeMount(fetchCustomers);

const addCustomer = () => {
  const { name, email, phone_number, address } = addingCustomerData.value;
  if (!name || !email || !phone_number || !address) {
    showAlert('error', "Please fill in all fields!");
    return;
  }
  
  addingStatus.value = true;
  authStore.fetchProtectedApi('customer', addingCustomerData.value, 'POST')
    .then(() => {
      fetchCustomers();
      resetForm();
      $('.addingModel').modal('hide');
    })
    .catch(err => {
      showAlert('error', err.message || "Failed to add customer");
    })
    .finally(() => {
      addingStatus.value = false;
    });
};

const editCustomer = () => {
  const { name, email, phone_number, address } = selectedCustomerData.value;
  if (!name || !email || !phone_number || !address) {
    showAlert('error', "Please fill in all fields!");
    return;
  }
  
  editingStatus.value = true;
  authStore.fetchProtectedApi(`customer/${selectedCustomerData.value.id}`, selectedCustomerData.value, 'PUT')
    .then(() => {
      fetchCustomers();
      $('.editingModel').modal('hide');
    })
    .catch(err => {
      showAlert('error', err.message || "Failed to edit customer");
    })
    .finally(() => {
      editingStatus.value = false;
    });
};

const deleteCustomer = () => {
  deletingStatus.value = true;
  authStore.fetchProtectedApi(`customer/${selectedCustomerData.value.id}`, {}, 'DELETE')
    .then(() => {
      fetchCustomers();
      $('.deletingModel').modal('hide');
    })
    .catch(err => {
      showAlert('error', err.message || "Failed to delete customer");
    })
    .finally(() => {
      deletingStatus.value = false;
    });
};
</script>

<template>
  <TheBreadcrumb title="Customer"></TheBreadcrumb>

  <!--begin::Tables-->
  <div class="card mb-5 mb-xl-8">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Customer</span>
        <span class="text-muted mt-1 fw-bold fs-7">{{ customers.length }} Items</span>
      </h3>
      <div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add">
          <TheButton data-bs-toggle="modal" data-bs-target=".addingModel" class="btn btn-primary er fs-6 px-8 py-4">
            <!--begin::Svg Icon | path: icons/duotone/Communication/Add-user.svg-->
          <span class="svg-icon svg-icon-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <path d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
              <path d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
            </svg>
          </span>
          <!--end::Svg Icon-->
          </TheButton>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="text-center" v-if="customers.length === 0">No customers found!</div>
      <div class="table-responsive" v-else>
        <!--begin::Table-->
        <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bolder text-muted">
              <th class="min-w-150px">Sl No</th>
              <th class="min-w-140px">Name & Email</th>
              <th class="min-w-120px">Details</th>
              <th class="min-w-100px text-end">Actions</th>
            </tr>
          </thead>
          <!--end::Table head-->
          <!--begin::Table body-->
          <tbody>
            <template v-if="customers.length >= 1">
              <tr v-for="(customer, i) in customers" :key="customer.name">
                <td>{{ i+1 }}</td>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="d-flex justify-content-start flex-column">
                      <p class="text-dark fw-bolder text-hover-primary fs-6 mb-1">{{ customer.name }}</p>
                      <span class="text-muted fw-bold text-muted d-block fs-7">{{ customer.email }}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-dark fw-bolder text-hover-primary d-block fs-6 mb-1">{{ customer.phone_number }}</p>
                  <span class="text-muted fw-bold text-muted d-block fs-7">{{ customer.address }}</span>
                </td>
                <td class="text-end">
                  <TheButton data-bs-toggle="modal" data-bs-target=".editingModel" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1" color="success" @click="selectedCustomerData = customer">
                    <!--begin::Svg Icon | path: icons/duotone/Communication/Write.svg-->
                    <span class="svg-icon svg-icon-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                        <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                      </svg>
                    </span>
                    <!--end::Svg Icon-->
                </TheButton>
                <TheButton data-bs-toggle="modal" data-bs-target=".deletingModel" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm" color="warning" @click="selectedCustomerData = customer">
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
              <td colspan="4" class="text-center">
                <span class="text-danger">Customer not found!</span>
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

  <TheModel hadding="Add Customer" action="addingModel">
    <form @submit.prevent="addCustomer">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" ref="name" v-model="addingCustomerData.name" placeholder="Enter name">
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" ref="email" v-model="addingCustomerData.email" placeholder="Enter email">
      </div>
      <div class="mb-3">
        <label class="form-label">Phone Number</label>
        <input type="text" class="form-control" ref="phone_number" v-model="addingCustomerData.phone_number" placeholder="Enter phone number">
      </div>
      <div class="mb-3">
        <label class="form-label">Address</label>
        <textarea class="form-control" v-model="addingCustomerData.address" ref="address" placeholder="Enter address"></textarea>
      </div>
      <div class="text-center">
        <TheButton :lodding="addingStatus">Add Customer</TheButton>
      </div>
    </form>
  </TheModel>

  <TheModel hadding="Edit Customer" action="editingModel">
    <form @submit.prevent="editCustomer">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" ref="name" v-model="selectedCustomerData.name" placeholder="Enter name">
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" ref="email" v-model="selectedCustomerData.email" placeholder="Enter email">
      </div>
      <div class="mb-3">
        <label class="form-label">Phone Number</label>
        <input type="text" class="form-control" ref="phone_number" v-model="selectedCustomerData.phone_number" placeholder="Enter phone number">
      </div>
      <div class="mb-3">
        <label class="form-label">Address</label>
        <textarea class="form-control" v-model="selectedCustomerData.address" ref="address" placeholder="Enter address"></textarea>
      </div>
      <div class="text-center">
        <TheButton :lodding="editingStatus">Edit Customer</TheButton>
      </div>
    </form>
  </TheModel>

  <TheModel hadding="Delete Customer" action="deletingModel">
    <div class="card">
      <div class="card-header d-block text-center">
        <strong>Are you sure you want to delete it?</strong>
        <br>
        <strong class="text-info">Customer Name: {{ selectedCustomerData.name }}</strong>
      </div>
      <div class="card-body text-center">
        <TheButton data-bs-dismiss="modal">No</TheButton>
        <TheButton color="danger" @click="deleteCustomer" :loading="deletingStatus">Yes</TheButton>
      </div>
    </div>
  </TheModel>
</template>

