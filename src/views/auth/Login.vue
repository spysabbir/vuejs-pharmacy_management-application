<template>
	<div class="main-wrapper">
		<div class="page-wrapper full-page">
			<div class="page-content d-flex align-items-center justify-content-center">
				<div class="row w-100 mx-0 auth-page">
					<div class="col-md-8 col-xl-6 mx-auto">
						<div class="card">
							<div class="row">
                <div class="col-md-4 pe-md-0">
                  <div class="auth-side-wrapper">

                  </div>
                </div>
                <div class="col-md-8 ps-md-0">
                  <div class="auth-form-wrapper px-4 py-5">
                    <a href="#" class="noble-ui-logo logo-light d-block mb-2">Spy <span>Pharmacy</span></a>
                    <h5 class="text-muted fw-normal mb-4">Welcome back! Log in to your account.</h5>
                    <form class="forms-sample" @submit.prevent="handleLogin">
                      <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" v-model="formData.email" ref="email" placeholder="Enter your email">
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" v-model="formData.password" ref="password" placeholder="Enter your password">
                      </div>
                      <div class="form-check mb-3">
                        <input type="checkbox" class="form-check-input" id="authCheck">
                        <label class="form-check-label" for="authCheck">
                          Remember me
                        </label>
                      </div>
                      <div class="mb-3">
                        <TheButton :lodding="loginStatus">Login</TheButton>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "pinia";
import TheButton from "../../components/TheButton.vue";
import { setPrivateHeaders } from "../../service/axiosInstance";
import { showErrorMessage, showSuccessMessage } from "../../utils/functions";
import { useAuthStore } from "../../store/authStore";

export default {
  data: () => ({
    formData: {
      email: "sabbir@gmail.com",
      password: "123456",
    },
    loginStatus: false,
  }),
  computed: {
    ...mapState(useAuthStore, {
      authName: "name",
      authToken: "token",
      isLoggedIn: "isLoggedIn",
    })
  },
  components: {
    TheButton,
  },
  methods: {
    ...mapActions(useAuthStore, {
      login: "login",
    }),
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
        this.login(res.data.data);
        localStorage.setItem("accessToken", res.data.data.token);
        setPrivateHeaders();
        location.href = "/dashboard";
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.loginStatus = false;
      });
    },
  },
}
</script>

<style>

</style>