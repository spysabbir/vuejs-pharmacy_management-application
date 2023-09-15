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
                    <h5 class="text-muted fw-normal mb-4">Create a free account.</h5>
                    <form class="forms-sample" @submit.prevent="handleRegister">
                      <div class="mb-3">
                        <label class="form-label">Full Name</label>
                        <input type="text" class="form-control" v-model="formData.name" ref="name" placeholder="Enter your full name">
                      </div>
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
                      <div>
                        <span class="btn btn-primary me-2 mb-2 mb-md-0 text-white" v-if="registerStatus">Submited ...</span>
                        <button type="submit" class="btn btn-primary text-white me-2 mb-2 mb-md-0" v-else>Register</button>
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

export default {
  data: () => ({
    formData: {
      name: "",
      email: "",
      password: "",
    },
    registerStatus: false,
  }),
  methods: {
    handleRegister() {
      if(!this.formData.name){
        this.$eventBus.emit("toast", {
          type: "danger",
          message: "Full name can not be empty.",
        })
        
        this.$refs.name.focus();
        return;
      }
      if(!this.formData.email){
        this.$eventBus.emit("toast", {
          type: "danger",
          message: "Email can not be empty.",
        })
        
        this.$refs.email.focus();
        return;
      }
      if(!this.formData.password){
        this.$eventBus.emit("toast", {
          type: "danger",
          message: "Password can not be empty.",
        })

        this.$refs.password.focus();
        return;
      }
      if(this.formData.password.length < 6){
        this.$eventBus.emit("toast", {
          type: "danger",
          message: "Password must be at least 6 characters long.",
        })

        this.$refs.password.focus();
        return;
      }

      this.registerStatus = true;
      axios.post("https://pharmacy.spysabbir.com/api/register", this.formData)
      .then((res) => {
        this.$eventBus.emit("toast", {
          type: "success",
          message: res.data.message,
        })

        localStorage.setItem("accessToken", res.data.accessToken);
        this.$router.push("/dashboard")
      }).catch(err => {
        let errorMessage = "Something went wrong.";
        if(err.response){
          errorMessage = err.response.data.message;
        }

        this.$eventBus.emit("toast", {
          type: "success",
          message: errorMessage,
        })
      }).finally(() => {
        this.registerStatus = false;
      });
    },
  },
}
</script>

<style>

</style>