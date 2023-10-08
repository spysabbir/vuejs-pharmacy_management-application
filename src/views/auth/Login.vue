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
          <!--begin::Logo-->
          <a href="#" class="py-9">
            <img alt="Logo" src="/src/assets/media/logos/logo-3.svg" class="h-70px" />
          </a>
          <!--end::Logo-->
          <!--begin::Title-->
          <h1 class="fw-bolder fs-2qx pb-5 pb-md-10" style="color: #986923;">Welcome to Spy Pharmacy</h1>
          <!--end::Title-->
          <!--begin::Description-->
          <p class="fw-bold fs-2" style="color: #986923;">Discover Amazing Spy Pharmacy
          <br />with great build tools</p>
          <!--end::Description-->
        </div>
        <!--end::Content-->
        <!--begin::Illustration-->
        <div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px" style="background-image: url(/src/assets/media/illustrations/checkout.png)"></div>
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
          <form class="form w-100" @submit.prevent="handleLogin">
            <!--begin::Heading-->
            <div class="text-center mb-10">
              <!--begin::Title-->
              <h1 class="text-dark mb-3">Sign In to Metronic</h1>
              <!--end::Title-->
              <!--begin::Link-->
              <div class="text-gray-400 fw-bold fs-4">New Here?
              <router-link to="#" class="link-primary fw-bolder">Create an Account</router-link></div>
              <!--end::Link-->
            </div>
            <!--begin::Heading-->
            <!--begin::Input group-->
            <div class="fv-row mb-10">
              <!--begin::Label-->
              <label class="form-label fs-6 fw-bolder text-dark">Email</label>
              <!--end::Label-->
              <!--begin::Input-->
              <input class="form-control form-control-lg form-control-solid" type="text" v-model="formData.email" ref="email" placeholder="Enter your email" />
              <!--end::Input-->
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="fv-row mb-10">
              <!--begin::Wrapper-->
              <div class="d-flex flex-stack mb-2">
                <!--begin::Label-->
                <label class="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                <!--end::Label-->
                <!--begin::Link-->
                <router-link to="#" class="link-primary fs-6 fw-bolder">Forgot Password ?</router-link>
                <!--end::Link-->
              </div>
              <!--end::Wrapper-->
              <!--begin::Input-->
              <input class="form-control form-control-lg form-control-solid" type="password" v-model="formData.password" ref="password" placeholder="Enter your password" />
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

<script>
import axios from "axios";
import TheButton from "../../components/TheButton.vue";
import { setPrivateHeaders } from "../../service/axiosInstance";
import { showErrorMessage, showSuccessMessage } from "../../utils/functions";

export default {
  data: () => ({
    formData: {
      email: "sabbir@gmail.com",
      password: "123456",
    },
    loginStatus: false,
  }),
  computed: {

  },
  components: {
    TheButton,
  },
  methods: {
    handleLogin() {
      if(!this.formData.email){
        showErrorMessage("Email can not be empty!")
        this.$refs.email.focus();
        return;
      }
      if(!this.formData.password){
        showErrorMessage("Password can not be empty!")
        this.$refs.password.focus();
        return;
      }
      if(this.formData.password.length < 6){
        showErrorMessage("Password must be at least 6 characters long!")
        this.$refs.password.focus();
        return;
      }
      this.loginStatus = true;
      axios.post("https://pharmacy.spysabbir.com/api/login", this.formData)
      .then((res) => {
        showSuccessMessage(res);
        localStorage.setItem("accessToken", res.data.data.token);
        setPrivateHeaders();
        this.$router.push('/dashboard');
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.loginStatus = false;
      });
    },
  },
}
</script>

<style scoped>
.flex-root {
  min-height: 100vh;
}
</style>