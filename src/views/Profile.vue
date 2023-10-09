<template>
	<TheBreadcrumb title="Profile"></TheBreadcrumb>
	<!--begin::Post-->
	<div class="post d-flex flex-column-fluid" id="kt_post">
		<!--begin::Container-->
		<div id="kt_content_container" class="container">
			<!--begin::Navbar-->
			<div class="card mb-5 mb-xl-10">
				<div class="card-body pt-9 pb-0">
					<!--begin::Details-->
					<div class="d-flex flex-wrap flex-sm-nowrap mb-3">
						<!--begin: Pic-->
						<div class="me-7 mb-4">
							<div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
								<img src="/src/assets/media/avatars/150-2.jpg" alt="image" />
							</div>
						</div>
						<!--end::Pic-->
						<!--begin::Info-->
						<div class="flex-grow-1">
							<!--begin::Title-->
							<div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
								<!--begin::User-->
								<div class="d-flex flex-column">
									<!--begin::Name-->
									<div class="d-flex align-items-center mb-2">
										<a href="#" class="text-gray-800 text-hover-primary fs-2 fw-bolder me-1">Max Smith</a>
									</div>
									<!--end::Name-->
									<!--begin::Info-->
									<div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
										<a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
										<!--begin::Svg Icon | path: icons/duotone/General/User.svg-->
										<span class="svg-icon svg-icon-4 me-1">
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<polygon points="0 0 24 0 24 24 0 24" />
													<path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
													<path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
												</g>
											</svg>
										</span>
										<!--end::Svg Icon-->Developer</a>
										<a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
										<!--begin::Svg Icon | path: icons/duotone/Map/Marker1.svg-->
										<span class="svg-icon svg-icon-4 me-1">
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#000000" fill-rule="nonzero" />
												</g>
											</svg>
										</span>
										<!--end::Svg Icon-->SF, Bay Area</a>
										<a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
										<!--begin::Svg Icon | path: icons/duotone/Communication/Mail-at.svg-->
										<span class="svg-icon svg-icon-4 me-1">
											<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<path d="M11.575,21.2 C6.175,21.2 2.85,17.4 2.85,12.575 C2.85,6.875 7.375,3.05 12.525,3.05 C17.45,3.05 21.125,6.075 21.125,10.85 C21.125,15.2 18.825,16.925 16.525,16.925 C15.4,16.925 14.475,16.4 14.075,15.65 C13.3,16.4 12.125,16.875 11,16.875 C8.25,16.875 6.85,14.925 6.85,12.575 C6.85,9.55 9.05,7.1 12.275,7.1 C13.2,7.1 13.95,7.35 14.525,7.775 L14.625,7.35 L17,7.35 L15.825,12.85 C15.6,13.95 15.85,14.825 16.925,14.825 C18.25,14.825 19.025,13.725 19.025,10.8 C19.025,6.9 15.95,5.075 12.5,5.075 C8.625,5.075 5.05,7.75 5.05,12.575 C5.05,16.525 7.575,19.1 11.575,19.1 C13.075,19.1 14.625,18.775 15.975,18.075 L16.8,20.1 C15.25,20.8 13.2,21.2 11.575,21.2 Z M11.4,14.525 C12.05,14.525 12.7,14.35 13.225,13.825 L14.025,10.125 C13.575,9.65 12.925,9.425 12.3,9.425 C10.65,9.425 9.45,10.7 9.45,12.375 C9.45,13.675 10.075,14.525 11.4,14.525 Z" fill="#000000" />
											</svg>
										</span>
										<!--end::Svg Icon-->max@kt.com</a>
									</div>
									<!--end::Info-->
								</div>
								<!--end::User-->
							</div>
							<!--end::Title-->
						</div>
						<!--end::Info-->
					</div>
					<!--end::Details-->
				</div>
			</div>
			<!--end::Navbar-->
			<!--begin::Basic info-->
			<div class="card mb-5 mb-xl-10">
				<!--begin::Card header-->
				<div class="card-header border-0 cursor-pointer">
					<!--begin::Card title-->
					<div class="card-title m-0">
						<h3 class="fw-bolder m-0">Profile Details</h3>
					</div>
					<!--end::Card title-->
				</div>
				<!--begin::Card header-->
				<!--begin::Content-->
				<div id="kt_account_profile_details">
					<!--begin::Form-->
					<form class="form"  @submit.prevent="editUserData">
						<!--begin::Card body-->
						<div class="card-body border-top p-9">
							<!--begin::Input group-->
							<div class="row mb-6">
								<!--begin::Label-->
								<label class="col-lg-4 col-form-label fw-bold fs-6">Avatar</label>
								<!--end::Label-->
								<!--begin::Col-->
								<div class="col-lg-8">
									<!--begin::Image input-->
									<div class="image-input image-input-outline" data-kt-image-input="true" style="background-image: url(/src/assets/media/avatars/blank.png)">
										<!--begin::Preview existing avatar-->
										<div class="image-input-wrapper w-125px h-125px" style="background-image: url(/src/assets/media/avatars/150-2.jpg)"></div>
										<!--end::Preview existing avatar-->
										<!--begin::Label-->
										<label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
											<i class="bi bi-pencil-fill fs-7"></i>
											<!--begin::Inputs-->
											<input type="file" name="avatar" accept=".png, .jpg, .jpeg, .webp" />
											<input type="hidden" name="avatar_remove" />
											<!--end::Inputs-->
										</label>
										<!--end::Label-->
										<!--begin::Cancel-->
										<span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
											<i class="bi bi-x fs-2"></i>
										</span>
										<!--end::Cancel-->
										<!--begin::Remove-->
										<span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
											<i class="bi bi-x fs-2"></i>
										</span>
										<!--end::Remove-->
									</div>
									<!--end::Image input-->
									<!--begin::Hint-->
									<div class="form-text">Allowed file types: png, jpg, jpeg, webp.</div>
									<!--end::Hint-->
								</div>
								<!--end::Col-->
							</div>
							<!--end::Input group-->
							<!--begin::Input group-->
							<div class="row mb-6">
								<!--begin::Label-->
								<label class="col-lg-4 col-form-label required fw-bold fs-6">Name</label>
								<!--end::Label-->
								<!--begin::Col-->
								<div class="col-lg-8 fv-row">
									<input type="text" class="form-control form-control-lg form-control-solid" v-model="editUserData.name" ref="name" placeholder="Name" />
								</div>
								<!--end::Col-->
							</div>
							<!--end::Input group-->
							<!--begin::Input group-->
							<div class="row mb-6">
								<!--begin::Label-->
								<label class="col-lg-4 col-form-label required fw-bold fs-6">Email</label>
								<!--end::Label-->
								<!--begin::Col-->
								<div class="col-lg-8 fv-row">
									<input type="email" class="form-control form-control-lg form-control-solid" />
								</div>
								<!--end::Col-->
							</div>
							<!--end::Input group-->
						</div>
						<!--end::Card body-->
						<!--begin::Actions-->
						<div class="card-footer d-flex justify-content-end py-6 px-9">
							<button type="reset" class="btn btn-white btn-active-light-primary me-2">Discard</button>
							<TheButton class="btn btn-primary">Save Changes</TheButton>
						</div>
						<!--end::Actions-->
					</form>
					<!--end::Form-->
				</div>
				<!--end::Content-->
			</div>
			<!--end::Basic info-->
			<!--begin::Sign-in Method-->
			<div class="card mb-5 mb-xl-10">
				<!--begin::Card header-->
				<div class="card-header border-0 cursor-pointer">
					<div class="card-title m-0">
						<h3 class="fw-bolder m-0">Password Details</h3>
					</div>
				</div>
				<!--end::Card header-->
				<!--begin::Content-->
				<div id="kt_account_signin_method" class="collapse show">
					<!--begin::Form-->
					<form class="form">
						<!--begin::Card body-->
						<div class="card-body border-top p-9">
							<!--begin::Email Address-->
							<div class="d-flex flex-wrap align-items-center">
								<!--begin::Label-->
								<div id="kt_signin_email">
									<div class="fs-6 fw-bolder mb-1">Email Address</div>
									<div class="fw-bold text-gray-600">support@keenthemes.com</div>
								</div>
								<!--end::Label-->
							</div>
							<!--end::Email Address-->
							<!--begin::Separator-->
							<div class="separator separator-dashed my-6"></div>
							<!--end::Separator-->
							<!--begin::Password-->
								<div class="align-items-center mb-10">
									<!--begin::Edit-->
									<div class="flex-row-fluid">
										<!--begin::Form-->
										
											<div class="row mb-1">
												<div class="col-lg-4">
													<div class="fv-row mb-0">
														<label class="form-label fs-6 fw-bolder mb-3">Current Password</label>
														<input type="password" class="form-control form-control-lg form-control-solid" placeholder="Current Password"/>
													</div>
												</div>
												<div class="col-lg-4">
													<div class="fv-row mb-0">
														<label class="form-label fs-6 fw-bolder mb-3">New Password</label>
														<input type="password" class="form-control form-control-lg form-control-solid" placeholder="New Password"/>
													</div>
												</div>
												<div class="col-lg-4">
													<div class="fv-row mb-0">
														<label class="form-label fs-6 fw-bolder mb-3">Confirm New Password</label>
														<input type="password" class="form-control form-control-lg form-control-solid" placeholder="Confirm New Password"/>
													</div>
												</div>
											</div>
										<!--end::Form-->
									</div>
									<!--end::Edit-->
								</div>
							<!--end::Password-->
						</div>
						<!--end::Card body-->
						<!--begin::Action-->
						<div class="card-footer d-flex justify-content-end py-6 px-9">
							<button type="reset" class="btn btn-white btn-active-light-primary me-2">Discard</button>
							<TheButton class="btn btn-primary">Save Changes</TheButton>
						</div>
						<!--end::Action-->
					</form>
					<!--end::Form-->
				</div>
				<!--end::Content-->
			</div>
			<!--end::Sign-in Method-->
		</div>
		<!--end::Container-->
	</div>
	<!--end::Post-->
</template>

<script>
import TheBreadcrumb from '../components/TheBreadcrumb.vue';
import TheButton from '../components/TheButton.vue';
import { showErrorMessage, showSuccessMessage } from "../utils/functions";
import privateService from "../service/privateService";

export default {
  data: () => ({
    editUserData: {
      name: "",
    },
    userData: [],
    editingStatus: false,
    getUser: false,
  }),
  components: {
    TheBreadcrumb,
    TheButton,
  },
  mounted() {
    setTimeout(this.getUserData, 100)
  },
  methods: {
    getUserData(){
      this.getUser = true;
      privateService.getUserProfile()
      .then((res) => {
        this.userData = res.data.data;
      }).catch(err => {
        showErrorMessage(err);
      }).finally(() => {
        this.getUser = false;
      });
    },

    editUserData() {
      if(!this.editUserData.name){
        showErrorMessage("Name can not be empty!");
        this.$refs.name.focus();
        return;
      }
      this.editingStatus = true;
      privateService.editUserProfile(this.editUserData)
      .then((res) => {
        this.getUserData();
        showSuccessMessage(res);
      }).catch(err => {
        showErrorMessage(err)
      }).finally(() => {
        this.editingStatus = false;
      });
    },
  }
}
</script>