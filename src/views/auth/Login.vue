<script setup>
import { ref } from 'vue'
import { authStore } from '../../store/store';

import TheButton from "../../components/TheButton.vue";
import showAlert from '../../helpers/alert'

const auth = authStore 
const email = ref('admin@email.com')
const password =  ref('12345678')
const loginStatus = ref(false)

const login = () => {
  if (!email.value || !password.value) {
    showAlert('error', 'Please enter both email and password.');
    return
  }
  loginStatus.value = true
  auth.authenticate(email.value, password.value)
}
</script>

<template>
<div class="d-flex flex-column flex-root">
  <!--begin::Authentication - Sign-in -->
  <div class="d-flex flex-column flex-lg-row flex-column-fluid">
    <!--begin::Aside-->
    <div class="d-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative" style="background-color: #F2C98A">
      <!--begin::Wrapper-->
      <div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
        <!--begin::Content-->
        <div class="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20">
          <!--begin::Title-->
          <h1 class="fw-bolder fs-2qx pb-5 pb-md-10" style="color: #986923;">Welcome </h1>
          <!--end::Title-->
          <!--begin::Description-->
          <p class="fw-bold fs-2" style="color: #986923;">Discover amazing awesome build tools.</p>
          <!--end::Description-->
        </div>
        <!--end::Content-->
        <!--begin::Illustration-->
        <div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px" style="background-image: url(/assets/media/illustrations/checkout.png)"></div>
        <!--end::Illustration-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Aside-->
    <!--begin::Body-->
    <div class="d-flex flex-column flex-lg-row-fluid py-10">
      <!--begin::Content-->
      <div class="d-flex flex-center flex-column flex-column-fluid">
        <!--begin::Wrapper-->
        <div class="w-lg-500px p-10 p-lg-15 mx-auto">
          <!--begin::Form-->
          <form class="form w-100" @submit.prevent="login()">
            <!--begin::Heading-->
            <div class="text-center mb-10">
              <!--begin::Title-->
              <h1 class="text-dark mb-3">Log In</h1>
              <!--end::Title-->
            </div>
            <!--begin::Heading-->
            <!--begin::Input group-->
            <div class="fv-row mb-10">
              <!--begin::Label-->
              <label class="form-label fs-6 fw-bolder text-dark">Email</label>
              <!--end::Label-->
              <!--begin::Input-->
              <input class="form-control form-control-lg form-control-solid" v-model="email" type="email" placeholder="Enter your email" />
              <!--end::Input-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="fv-row mb-10">
              <!--begin::Label-->
              <label class="form-label fs-6 fw-bolder text-dark">Password</label>
              <!--end::Label-->
              <!--begin::Input-->
              <input class="form-control form-control-lg form-control-solid" v-model="password" type="password" placeholder="Enter your password" />
              <!--end::Input-->
            </div>
            <!--end::Input group-->
            <!--begin::Actions-->
            <div class="text-center">
              <!--begin::Submit button-->
              <TheButton :lodding="loginStatus" class="btn btn-lg btn-primary w-100 mb-5">Login</TheButton>
            </div>
            <!--end::Actions-->
          </form>
          <!--end::Form-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Content-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Authentication - Sign-in-->
</div>
</template>

<style scoped>
.flex-root {
  min-height: 100vh;
}
</style>