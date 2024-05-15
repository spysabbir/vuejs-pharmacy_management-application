<script setup>
import { ref, onBeforeMount } from 'vue';
import { authStore } from '../../store/store';

import showAlert from '../../helpers/alert';
import TheBreadcrumb from '../../components/TheBreadcrumb.vue';
import TheButton from '../../components/TheButton.vue';

	const defaultSetting = ref({});
	onBeforeMount(() => {
		authStore.fetchProtectedApi('default/settings', {}, 'GET')
        .then((res) => {
			defaultSetting.value = res.data;
		}).catch(err => {
			showAlert('error', err.message || 'Failed to fetch default settings.');
        })
	});

	const editDefaultSettingData = () => {
		if (!defaultSetting.value.app_name || !defaultSetting.value.app_email || !defaultSetting.value.app_phone || !defaultSetting.value.app_address || !defaultSetting.value.app_currency || !defaultSetting.value.app_currency_symbol || !defaultSetting.value.app_timezone) {
			showAlert('error', 'All fields are required.');
			return;
		}
		authStore.fetchProtectedApi('default/settings', defaultSetting.value, 'PUT')
		.then((res) => {
			showAlert('success', res.message || 'Default settings updated successfully.');
		}).catch(err => {
			showAlert('error', err.message || 'Failed to update default settings.');
		})
	}
</script>

<template>
	<TheBreadcrumb title="Default Settings"></TheBreadcrumb>
	<!--begin::Post-->
	<div class="post d-flex flex-column-fluid" id="kt_post">
		<!--begin::Container-->
		<div id="kt_content_container" class="container">
			<!--begin::Basic info-->
			<div class="card mb-5 mb-xl-10">
				<!--begin::Card header-->
				<div class="card-header border-0 cursor-pointer">
					<!--begin::Card title-->
					<div class="card-title m-0">
						<h3 class="fw-bolder m-0">Default Setting Details</h3>
					</div>
					<!--end::Card title-->
				</div>
				<!--begin::Card header-->
				<!--begin::Content-->
				<div id="kt_account_profile_details">
					<!--begin::Form-->
					<form class="form" @submit.prevent="editDefaultSettingData">
						<!--begin::Card body-->
						<div class="card-body border-top p-9">
							<!--begin::Input group-->
							<div class="row mb-6">
								<!--begin::Col-->
								<div class="col-lg-6 fv-row">
									<label class="col-form-label required fw-bold fs-6">App Name</label>
									<input type="text" class="form-control form-control-lg form-control-solid" v-model="defaultSetting.app_name" placeholder="Enter App Name" />
								</div>
								<!--end::Col-->
								<!--begin::Col-->
								<div class="col-lg-6 fv-row">
									<label class="col-form-label required fw-bold fs-6">App Email</label>
									<input type="email" class="form-control form-control-lg form-control-solid" v-model="defaultSetting.app_email" placeholder="Enter App Email" />
								</div>
								<!--end::Col-->
								<!--begin::Col-->
								<div class="col-lg-6 fv-row">
									<label class="col-form-label required fw-bold fs-6">App Phone</label>
									<input type="text" class="form-control form-control-lg form-control-solid" v-model="defaultSetting.app_phone" placeholder="Enter App Phone" />
								</div>
								<!--end::Col-->
								<!--begin::Col-->
								<div class="col-lg-6 fv-row">
									<label class="col-form-label required fw-bold fs-6">Address</label>
									<input type="text" class="form-control form-control-lg form-control-solid" v-model="defaultSetting.app_address" placeholder="Enter Address" />
								</div>
								<!--end::Col-->
								<!--begin::Col-->
								<div class="col-lg-6 fv-row">
									<label class="col-form-label required fw-bold fs-6">App Currency</label>
									<input type="text" class="form-control form-control-lg form-control-solid" v-model="defaultSetting.app_currency" placeholder="Enter App Currency" />
								</div>
								<!--end::Col-->
								<div class="col-lg-6 fv-row">
									<label class="col-form-label required fw-bold fs-6">App Currency Symbol</label>
									<input type="text" class="form-control form-control-lg form-control-solid" v-model="defaultSetting.app_currency_symbol" placeholder="Enter App Currency Symbol" />
								</div>
								<!--end::Col-->
								<!--end::Col-->
								<div class="col-lg-6 fv-row">
									<label class="col-form-label required fw-bold fs-6">App Timezone</label>
									<input type="text" class="form-control form-control-lg form-control-solid" v-model="defaultSetting.app_timezone" placeholder="Enter App Timezone" />
								</div>
								<!--end::Col-->
							</div>
							<!--end::Input group-->
						</div>
						<!--end::Card body-->
						<!--begin::Actions-->
						<div class="card-footer d-flex justify-content-end py-6 px-9">
							<button type="reset" class="btn btn-white btn-active-light-primary me-2">Discard</button>
							<TheButton class="btn btn-primary">Update Setting</TheButton>
						</div>
						<!--end::Actions-->
					</form>
					<!--end::Form-->
				</div>
				<!--end::Content-->
			</div>
			<!--end::Basic info-->
		</div>
		<!--end::Container-->
	</div>
	<!--end::Post-->
</template>