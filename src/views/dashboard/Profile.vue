<script setup>
import { ref, onBeforeMount } from 'vue';
import { authStore } from '../../store/store';

import showAlert from '../../helpers/alert';
import TheBreadcrumb from '../../components/TheBreadcrumb.vue';
import TheButton from '../../components/TheButton.vue';

const userProfileData = ref({
  name: "",
  email: "",
});
const userPasswordData = ref({
  current_password: "",
  password: "",
  confirm_password: "",
});

const resetForm = () => {
  userPasswordData.value = {
    current_password: "",
    password: "",
    confirm_password: "",
  };
};

onBeforeMount(() => {
	const res = authStore.fetchProtectedApi('profile', {}, 'GET')
	res.then((result) => {
		userProfileData.value = result.data;
	});
});

const editUserProfileData = () => {
	const { name } = userProfileData.value;
	if (!name) {
		showAlert('error', "Please fill in all fields!");
		return;
	}

  	authStore.fetchProtectedApi('profile/update', userProfileData.value, 'PUT')
    .then((res) => {
      	showAlert('success', res.message || 'Profile updated successfully.');
    }).catch(err => {
      	showAlert('error', err.message || 'Failed to update profile.');
    })
};

const editUserPasswordData = () => {
	const { current_password, password, confirm_password } = userPasswordData.value;
	if (!current_password || !password || !confirm_password) {
		showAlert('error', "Please fill in all fields!");
		return;
	}
	if (password !== confirm_password) {
		showAlert('error', "Password and confirm password do not match!");
		return;
	}

  	authStore.fetchProtectedApi('password/update', userPasswordData.value, 'PUT')
    .then((res) => {
      	showAlert('success', res.message || 'Password updated successfully.');
      	resetForm();
    }).catch(err => {
      	showAlert('error', err.message || 'Failed to update password.');
    })
};
</script>

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
										<a href="#" class="text-gray-800 text-hover-primary fs-2 fw-bolder me-1">{{ userProfileData.name }}</a>
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
											<!--end::Svg Icon-->
											{{ userProfileData.name }}
										</a>
										<a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
											<!--begin::Svg Icon | path: icons/duotone/Communication/Mail-at.svg-->
											<span class="svg-icon svg-icon-4 me-1">
												<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<path d="M11.575,21.2 C6.175,21.2 2.85,17.4 2.85,12.575 C2.85,6.875 7.375,3.05 12.525,3.05 C17.45,3.05 21.125,6.075 21.125,10.85 C21.125,15.2 18.825,16.925 16.525,16.925 C15.4,16.925 14.475,16.4 14.075,15.65 C13.3,16.4 12.125,16.875 11,16.875 C8.25,16.875 6.85,14.925 6.85,12.575 C6.85,9.55 9.05,7.1 12.275,7.1 C13.2,7.1 13.95,7.35 14.525,7.775 L14.625,7.35 L17,7.35 L15.825,12.85 C15.6,13.95 15.85,14.825 16.925,14.825 C18.25,14.825 19.025,13.725 19.025,10.8 C19.025,6.9 15.95,5.075 12.5,5.075 C8.625,5.075 5.05,7.75 5.05,12.575 C5.05,16.525 7.575,19.1 11.575,19.1 C13.075,19.1 14.625,18.775 15.975,18.075 L16.8,20.1 C15.25,20.8 13.2,21.2 11.575,21.2 Z M11.4,14.525 C12.05,14.525 12.7,14.35 13.225,13.825 L14.025,10.125 C13.575,9.65 12.925,9.425 12.3,9.425 C10.65,9.425 9.45,10.7 9.45,12.375 C9.45,13.675 10.075,14.525 11.4,14.525 Z" fill="#000000" />
												</svg>
											</span>
											<!--end::Svg Icon-->
											{{ userProfileData.email }}
										</a>
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
					<form class="form" @submit.prevent="editUserProfileData">
						<!--begin::Card body-->
						<div class="card-body border-top p-9">
							<!--begin::Input group-->
							<div class="row mb-6">
								<!--begin::Label-->
								<label class="col-lg-4 col-form-label required fw-bold fs-6">Name</label>
								<!--end::Label-->
								<!--begin::Col-->
								<div class="col-lg-8 fv-row">
									<input type="text" class="form-control form-control-lg form-control-solid" v-model="userProfileData.name" placeholder="Enter Name" />
								</div>
								<!--end::Col-->
							</div>
							<!--end::Input group-->
						</div>
						<!--end::Card body-->
						<!--begin::Actions-->
						<div class="card-footer d-flex justify-content-end py-6 px-9">
							<button type="reset" class="btn btn-white btn-active-light-primary me-2">Discard</button>
							<TheButton class="btn btn-primary">Update Profile</TheButton>
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
					<form class="form" @submit.prevent="editUserPasswordData">
						<!--begin::Card body-->
						<div class="card-body border-top p-9">
							<!--begin::Email Address-->
							<div class="d-flex flex-wrap align-items-center">
								<!--begin::Label-->
								<div id="kt_signin_email">
									<div class="fs-6 fw-bolder mb-1">Email Address</div>
									<div class="fw-bold text-gray-600">{{ userProfileData.email }}</div>
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
														<input type="password" class="form-control form-control-lg form-control-solid" v-model="userPasswordData.current_password" placeholder="Current Password"/>
													</div>
												</div>
												<div class="col-lg-4">
													<div class="fv-row mb-0">
														<label class="form-label fs-6 fw-bolder mb-3">New Password</label>
														<input type="password" class="form-control form-control-lg form-control-solid" v-model="userPasswordData.password" placeholder="New Password"/>
													</div>
												</div>
												<div class="col-lg-4">
													<div class="fv-row mb-0">
														<label class="form-label fs-6 fw-bolder mb-3">Confirm New Password</label>
														<input type="password" class="form-control form-control-lg form-control-solid" v-model="userPasswordData.confirm_password" placeholder="Confirm New Password"/>
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
							<TheButton class="btn btn-primary">Update Password</TheButton>
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