<template>
    <!--begin::Toolbar-->
    <div class="toolbar" id="kt_toolbar">
							<!--begin::Container-->
							<div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
								<!--begin::Page title-->
								<div data-kt-place="true" data-kt-place-mode="prepend" data-kt-place-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex align-items-center me-3 flex-wrap mb-5 mb-lg-0 lh-1">
									<!--begin::Title-->
									<h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-3">Account Settings</h1>
									<!--end::Title-->
									<!--begin::Separator-->
									<span class="h-20px border-gray-200 border-start mx-4"></span>
									<!--end::Separator-->
									<!--begin::Breadcrumb-->
									<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
										<!--begin::Item-->
										<li class="breadcrumb-item text-muted">
											<a href="index.html" class="text-muted text-hover-primary">Home</a>
										</li>
										<!--end::Item-->
										<!--begin::Item-->
										<li class="breadcrumb-item">
											<span class="bullet bg-gray-200 w-5px h-2px"></span>
										</li>
										<!--end::Item-->
										<!--begin::Item-->
										<li class="breadcrumb-item text-muted">Account</li>
										<!--end::Item-->
										<!--begin::Item-->
										<li class="breadcrumb-item">
											<span class="bullet bg-gray-200 w-5px h-2px"></span>
										</li>
										<!--end::Item-->
										<!--begin::Item-->
										<li class="breadcrumb-item text-dark">Settings</li>
										<!--end::Item-->
									</ul>
									<!--end::Breadcrumb-->
								</div>
								<!--end::Page title-->
								<!--begin::Actions-->
								<div class="d-flex align-items-center py-1">
									<!--begin::Wrapper-->
									<div class="me-4">
										<!--begin::Menu-->
										<a href="#" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
										<!--begin::Svg Icon | path: icons/duotone/Text/Filter.svg-->
										<span class="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
											<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<rect x="0" y="0" width="24" height="24" />
													<path d="M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z" fill="#000000" />
												</g>
											</svg>
										</span>
										<!--end::Svg Icon-->Filter</a>
										<!--begin::Menu 1-->
										<div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true">
											<!--begin::Header-->
											<div class="px-7 py-5">
												<div class="fs-5 text-dark fw-bolder">Filter Options</div>
											</div>
											<!--end::Header-->
											<!--begin::Menu separator-->
											<div class="separator border-gray-200"></div>
											<!--end::Menu separator-->
											<!--begin::Form-->
											<div class="px-7 py-5">
												<!--begin::Input group-->
												<div class="mb-10">
													<!--begin::Label-->
													<label class="form-label fw-bold">Status:</label>
													<!--end::Label-->
													<!--begin::Input-->
													<div>
														<select class="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-allow-clear="true">
															<option></option>
															<option value="1">Approved</option>
															<option value="2">Pending</option>
															<option value="2">In Process</option>
															<option value="2">Rejected</option>
														</select>
													</div>
													<!--end::Input-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="mb-10">
													<!--begin::Label-->
													<label class="form-label fw-bold">Member Type:</label>
													<!--end::Label-->
													<!--begin::Options-->
													<div class="d-flex">
														<!--begin::Options-->
														<label class="form-check form-check-sm form-check-custom form-check-solid me-5">
															<input class="form-check-input" type="checkbox" value="1" />
															<span class="form-check-label">Author</span>
														</label>
														<!--end::Options-->
														<!--begin::Options-->
														<label class="form-check form-check-sm form-check-custom form-check-solid">
															<input class="form-check-input" type="checkbox" value="2" checked="checked" />
															<span class="form-check-label">Customer</span>
														</label>
														<!--end::Options-->
													</div>
													<!--end::Options-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="mb-10">
													<!--begin::Label-->
													<label class="form-label fw-bold">Notifications:</label>
													<!--end::Label-->
													<!--begin::Switch-->
													<div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
														<input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
														<label class="form-check-label">Enabled</label>
													</div>
													<!--end::Switch-->
												</div>
												<!--end::Input group-->
												<!--begin::Actions-->
												<div class="d-flex justify-content-end">
													<button type="reset" class="btn btn-sm btn-white btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
													<button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
												</div>
												<!--end::Actions-->
											</div>
											<!--end::Form-->
										</div>
										<!--end::Menu 1-->
										<!--end::Menu-->
									</div>
									<!--end::Wrapper-->
									<!--begin::Button-->
									<a href="#" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app" id="kt_toolbar_primary_button">Create</a>
									<!--end::Button-->
								</div>
								<!--end::Actions-->
							</div>
							<!--end::Container-->
						</div>
						<!--end::Toolbar-->
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
													<img src="assets/media/avatars/150-2.jpg" alt="image" />
													<div class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
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
															<a href="#">
																<!--begin::Svg Icon | path: icons/duotone/Design/Verified.svg-->
																<span class="svg-icon svg-icon-1 svg-icon-primary">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																		<path d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z" fill="#00A3FF" />
																		<path class="permanent" d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z" fill="white" />
																	</svg>
																</span>
																<!--end::Svg Icon-->
															</a>
															<a href="#" class="btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade to Pro</a>
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
													<!--begin::Actions-->
													<div class="d-flex my-4">
														<a href="#" class="btn btn-sm btn-light me-2" id="kt_user_follow_button">
															<!--begin::Svg Icon | path: icons/duotone/Navigation/Double-check.svg-->
															<span class="svg-icon svg-icon-3 d-none">
																<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																		<polygon points="0 0 24 0 24 24 0 24" />
																		<path d="M9.26193932,16.6476484 C8.90425297,17.0684559 8.27315905,17.1196257 7.85235158,16.7619393 C7.43154411,16.404253 7.38037434,15.773159 7.73806068,15.3523516 L16.2380607,5.35235158 C16.6013618,4.92493855 17.2451015,4.87991302 17.6643638,5.25259068 L22.1643638,9.25259068 C22.5771466,9.6195087 22.6143273,10.2515811 22.2474093,10.6643638 C21.8804913,11.0771466 21.2484189,11.1143273 20.8356362,10.7474093 L17.0997854,7.42665306 L9.26193932,16.6476484 Z" fill="#000000" fill-rule="nonzero" opacity="0.5" transform="translate(14.999995, 11.000002) rotate(-180.000000) translate(-14.999995, -11.000002)" />
																		<path d="M4.26193932,17.6476484 C3.90425297,18.0684559 3.27315905,18.1196257 2.85235158,17.7619393 C2.43154411,17.404253 2.38037434,16.773159 2.73806068,16.3523516 L11.2380607,6.35235158 C11.6013618,5.92493855 12.2451015,5.87991302 12.6643638,6.25259068 L17.1643638,10.2525907 C17.5771466,10.6195087 17.6143273,11.2515811 17.2474093,11.6643638 C16.8804913,12.0771466 16.2484189,12.1143273 15.8356362,11.7474093 L12.0997854,8.42665306 L4.26193932,17.6476484 Z" fill="#000000" fill-rule="nonzero" transform="translate(9.999995, 12.000002) rotate(-180.000000) translate(-9.999995, -12.000002)" />
																	</g>
																</svg>
															</span>
															<!--end::Svg Icon-->
															<!--begin::Indicator-->
															<span class="indicator-label">Follow</span>
															<span class="indicator-progress">Please wait...
															<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
															<!--end::Indicator-->
														</a>
														<a href="#" class="btn btn-sm btn-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">Hire Me</a>
														<!--begin::Menu-->
														<div class="me-0">
															<button class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
																<i class="bi bi-three-dots fs-3"></i>
															</button>
															<!--begin::Menu 3-->
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
																<!--begin::Heading-->
																<div class="menu-item px-3">
																	<div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
																</div>
																<!--end::Heading-->
																<!--begin::Menu item-->
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3">Create Invoice</a>
																</div>
																<!--end::Menu item-->
																<!--begin::Menu item-->
																<div class="menu-item px-3">
																	<a href="#" class="menu-link flex-stack px-3">Create Payment
																	<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
																</div>
																<!--end::Menu item-->
																<!--begin::Menu item-->
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3">Generate Bill</a>
																</div>
																<!--end::Menu item-->
																<!--begin::Menu item-->
																<div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start" data-kt-menu-flip="center, top">
																	<a href="#" class="menu-link px-3">
																		<span class="menu-title">Subscription</span>
																		<span class="menu-arrow"></span>
																	</a>
																	<!--begin::Menu sub-->
																	<div class="menu-sub menu-sub-dropdown w-175px py-4">
																		<!--begin::Menu item-->
																		<div class="menu-item px-3">
																			<a href="#" class="menu-link px-3">Plans</a>
																		</div>
																		<!--end::Menu item-->
																		<!--begin::Menu item-->
																		<div class="menu-item px-3">
																			<a href="#" class="menu-link px-3">Billing</a>
																		</div>
																		<!--end::Menu item-->
																		<!--begin::Menu item-->
																		<div class="menu-item px-3">
																			<a href="#" class="menu-link px-3">Statements</a>
																		</div>
																		<!--end::Menu item-->
																		<!--begin::Menu separator-->
																		<div class="separator my-2"></div>
																		<!--end::Menu separator-->
																		<!--begin::Menu item-->
																		<div class="menu-item px-3">
																			<div class="menu-content px-3">
																				<!--begin::Switch-->
																				<label class="form-check form-switch form-check-custom form-check-solid">
																					<!--begin::Input-->
																					<input class="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
																					<!--end::Input-->
																					<!--end::Label-->
																					<span class="form-check-label text-muted fs-6">Recuring</span>
																					<!--end::Label-->
																				</label>
																				<!--end::Switch-->
																			</div>
																		</div>
																		<!--end::Menu item-->
																	</div>
																	<!--end::Menu sub-->
																</div>
																<!--end::Menu item-->
																<!--begin::Menu item-->
																<div class="menu-item px-3 my-1">
																	<a href="#" class="menu-link px-3">Settings</a>
																</div>
																<!--end::Menu item-->
															</div>
															<!--end::Menu 3-->
														</div>
														<!--end::Menu-->
													</div>
													<!--end::Actions-->
												</div>
												<!--end::Title-->
												<!--begin::Stats-->
												<div class="d-flex flex-wrap flex-stack">
													<!--begin::Wrapper-->
													<div class="d-flex flex-column flex-grow-1 pe-8">
														<!--begin::Stats-->
														<div class="d-flex flex-wrap">
															<!--begin::Stat-->
															<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																<!--begin::Number-->
																<div class="d-flex align-items-center">
																	<!--begin::Svg Icon | path: icons/duotone/Navigation/Arrow-up.svg-->
																	<span class="svg-icon svg-icon-3 svg-icon-success me-2">
																		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																				<polygon points="0 0 24 0 24 24 0 24" />
																				<rect fill="#000000" opacity="0.5" x="11" y="5" width="2" height="14" rx="1" />
																				<path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fill-rule="nonzero" />
																			</g>
																		</svg>
																	</span>
																	<!--end::Svg Icon-->
																	<div class="fs-2 fw-bolder" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">0</div>
																</div>
																<!--end::Number-->
																<!--begin::Label-->
																<div class="fw-bold fs-6 text-gray-400">Earnings</div>
																<!--end::Label-->
															</div>
															<!--end::Stat-->
															<!--begin::Stat-->
															<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																<!--begin::Number-->
																<div class="d-flex align-items-center">
																	<!--begin::Svg Icon | path: icons/duotone/Navigation/Arrow-down.svg-->
																	<span class="svg-icon svg-icon-3 svg-icon-danger me-2">
																		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																				<polygon points="0 0 24 0 24 24 0 24" />
																				<rect fill="#000000" opacity="0.5" x="11" y="5" width="2" height="14" rx="1" />
																				<path d="M6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L11.2928932,11.2928932 C11.6714722,10.9143143 12.2810586,10.9010687 12.6757246,11.2628459 L18.6757246,16.7628459 C19.0828436,17.1360383 19.1103465,17.7686056 18.7371541,18.1757246 C18.3639617,18.5828436 17.7313944,18.6103465 17.3242754,18.2371541 L12.0300757,13.3841378 L6.70710678,18.7071068 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000003, 14.999999) scale(1, -1) translate(-12.000003, -14.999999)" />
																			</g>
																		</svg>
																	</span>
																	<!--end::Svg Icon-->
																	<div class="fs-2 fw-bolder" data-kt-countup="true" data-kt-countup-value="75">0</div>
																</div>
																<!--end::Number-->
																<!--begin::Label-->
																<div class="fw-bold fs-6 text-gray-400">Projects</div>
																<!--end::Label-->
															</div>
															<!--end::Stat-->
															<!--begin::Stat-->
															<div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																<!--begin::Number-->
																<div class="d-flex align-items-center">
																	<!--begin::Svg Icon | path: icons/duotone/Navigation/Arrow-up.svg-->
																	<span class="svg-icon svg-icon-3 svg-icon-success me-2">
																		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																			<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																				<polygon points="0 0 24 0 24 24 0 24" />
																				<rect fill="#000000" opacity="0.5" x="11" y="5" width="2" height="14" rx="1" />
																				<path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fill-rule="nonzero" />
																			</g>
																		</svg>
																	</span>
																	<!--end::Svg Icon-->
																	<div class="fs-2 fw-bolder" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">0</div>
																</div>
																<!--end::Number-->
																<!--begin::Label-->
																<div class="fw-bold fs-6 text-gray-400">Success Rate</div>
																<!--end::Label-->
															</div>
															<!--end::Stat-->
														</div>
														<!--end::Stats-->
													</div>
													<!--end::Wrapper-->
													<!--begin::Progress-->
													<div class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
														<div class="d-flex justify-content-between w-100 mt-auto mb-2">
															<span class="fw-bold fs-6 text-gray-400">Profile Compleation</span>
															<span class="fw-bolder fs-6">50%</span>
														</div>
														<div class="h-5px mx-3 w-100 bg-light mb-3">
															<div class="bg-success rounded h-5px" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													<!--end::Progress-->
												</div>
												<!--end::Stats-->
											</div>
											<!--end::Info-->
										</div>
										<!--end::Details-->
										<!--begin::Navs-->
										<div class="d-flex overflow-auto h-55px">
											<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
												<!--begin::Nav item-->
												<li class="nav-item">
													<a class="nav-link text-active-primary me-6" href="account/overview.html">Overview</a>
												</li>
												<!--end::Nav item-->
												<!--begin::Nav item-->
												<li class="nav-item">
													<a class="nav-link text-active-primary me-6 active" href="account/settings.html">Settings</a>
												</li>
												<!--end::Nav item-->
												<!--begin::Nav item-->
												<li class="nav-item">
													<a class="nav-link text-active-primary me-6" href="account/security.html">Security</a>
												</li>
												<!--end::Nav item-->
												<!--begin::Nav item-->
												<li class="nav-item">
													<a class="nav-link text-active-primary me-6" href="account/billing.html">Billing</a>
												</li>
												<!--end::Nav item-->
												<!--begin::Nav item-->
												<li class="nav-item">
													<a class="nav-link text-active-primary me-6" href="account/statements.html">Statements</a>
												</li>
												<!--end::Nav item-->
												<!--begin::Nav item-->
												<li class="nav-item">
													<a class="nav-link text-active-primary me-6" href="account/referrals.html">Referrals</a>
												</li>
												<!--end::Nav item-->
												<!--begin::Nav item-->
												<li class="nav-item">
													<a class="nav-link text-active-primary me-6" href="account/api-keys.html">API Keys</a>
												</li>
												<!--end::Nav item-->
											</ul>
										</div>
										<!--begin::Navs-->
									</div>
								</div>
								<!--end::Navbar-->
								<!--begin::Basic info-->
								<div class="card mb-5 mb-xl-10">
									<!--begin::Card header-->
									<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
										<!--begin::Card title-->
										<div class="card-title m-0">
											<h3 class="fw-bolder m-0">Profile Details</h3>
										</div>
										<!--end::Card title-->
									</div>
									<!--begin::Card header-->
									<!--begin::Content-->
									<div id="kt_account_profile_details" class="collapse show">
										<!--begin::Form-->
										<form id="kt_account_profile_details_form" class="form">
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
														<div class="image-input image-input-outline" data-kt-image-input="true" style="background-image: url(assets/media/avatars/blank.png)">
															<!--begin::Preview existing avatar-->
															<div class="image-input-wrapper w-125px h-125px" style="background-image: url(assets/media/avatars/150-2.jpg)"></div>
															<!--end::Preview existing avatar-->
															<!--begin::Label-->
															<label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
																<i class="bi bi-pencil-fill fs-7"></i>
																<!--begin::Inputs-->
																<input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
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
														<div class="form-text">Allowed file types: png, jpg, jpeg.</div>
														<!--end::Hint-->
													</div>
													<!--end::Col-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="row mb-6">
													<!--begin::Label-->
													<label class="col-lg-4 col-form-label required fw-bold fs-6">Full Name</label>
													<!--end::Label-->
													<!--begin::Col-->
													<div class="col-lg-8">
														<!--begin::Row-->
														<div class="row">
															<!--begin::Col-->
															<div class="col-lg-6 fv-row">
																<input type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="First name" value="Max" />
															</div>
															<!--end::Col-->
															<!--begin::Col-->
															<div class="col-lg-6 fv-row">
																<input type="text" name="lname" class="form-control form-control-lg form-control-solid" placeholder="Last name" value="Smith" />
															</div>
															<!--end::Col-->
														</div>
														<!--end::Row-->
													</div>
													<!--end::Col-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="row mb-6">
													<!--begin::Label-->
													<label class="col-lg-4 col-form-label required fw-bold fs-6">Company</label>
													<!--end::Label-->
													<!--begin::Col-->
													<div class="col-lg-8 fv-row">
														<input type="text" name="company" class="form-control form-control-lg form-control-solid" placeholder="Company name" value="Keenthemes" />
													</div>
													<!--end::Col-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="row mb-6">
													<!--begin::Label-->
													<label class="col-lg-4 col-form-label fw-bold fs-6">
														<span class="required">Contact Phone</span>
														<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Phone number must be active"></i>
													</label>
													<!--end::Label-->
													<!--begin::Col-->
													<div class="col-lg-8 fv-row">
														<input type="tel" name="phone" class="form-control form-control-lg form-control-solid" placeholder="Phone number" value="044 3276 454 935" />
													</div>
													<!--end::Col-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="row mb-6">
													<!--begin::Label-->
													<label class="col-lg-4 col-form-label fw-bold fs-6">Company Site</label>
													<!--end::Label-->
													<!--begin::Col-->
													<div class="col-lg-8 fv-row">
														<input type="text" name="website" class="form-control form-control-lg form-control-solid" placeholder="Company website" value="keenthemes.com" />
													</div>
													<!--end::Col-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="row mb-6">
													<!--begin::Label-->
													<label class="col-lg-4 col-form-label fw-bold fs-6">
														<span class="required">Country</span>
														<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Country of origination"></i>
													</label>
													<!--end::Label-->
													<!--begin::Col-->
													<div class="col-lg-8 fv-row">
														<select name="country" aria-label="Select a Country" data-control="select2" data-placeholder="Select a country..." class="form-select form-select-solid form-select-lg fw-bold">
															<option value="">Select a Country...</option>
															<option data-kt-flag="flags/afghanistan.svg" value="AF">Afghanistan</option>
															<option data-kt-flag="flags/aland-islands.svg" value="AX">Aland Islands</option>
															<option data-kt-flag="flags/albania.svg" value="AL">Albania</option>
															<option data-kt-flag="flags/algeria.svg" value="DZ">Algeria</option>
															<option data-kt-flag="flags/american-samoa.svg" value="AS">American Samoa</option>
															<option data-kt-flag="flags/andorra.svg" value="AD">Andorra</option>
															<option data-kt-flag="flags/angola.svg" value="AO">Angola</option>
															<option data-kt-flag="flags/anguilla.svg" value="AI">Anguilla</option>
															<option data-kt-flag="flags/antarctica.svg" value="AQ">Antarctica</option>
															<option data-kt-flag="flags/antigua-and-barbuda.svg" value="AG">Antigua and Barbuda</option>
															<option data-kt-flag="flags/argentina.svg" value="AR">Argentina</option>
															<option data-kt-flag="flags/armenia.svg" value="AM">Armenia</option>
															<option data-kt-flag="flags/aruba.svg" value="AW">Aruba</option>
															<option data-kt-flag="flags/australia.svg" value="AU">Australia</option>
															<option data-kt-flag="flags/austria.svg" value="AT">Austria</option>
															<option data-kt-flag="flags/azerbaijan.svg" value="AZ">Azerbaijan</option>
															<option data-kt-flag="flags/bahamas.svg" value="BS">Bahamas</option>
															<option data-kt-flag="flags/bahrain.svg" value="BH">Bahrain</option>
															<option data-kt-flag="flags/bangladesh.svg" value="BD">Bangladesh</option>
															<option data-kt-flag="flags/barbados.svg" value="BB">Barbados</option>
															<option data-kt-flag="flags/belarus.svg" value="BY">Belarus</option>
															<option data-kt-flag="flags/belgium.svg" value="BE">Belgium</option>
															<option data-kt-flag="flags/belize.svg" value="BZ">Belize</option>
															<option data-kt-flag="flags/benin.svg" value="BJ">Benin</option>
															<option data-kt-flag="flags/bermuda.svg" value="BM">Bermuda</option>
															<option data-kt-flag="flags/bhutan.svg" value="BT">Bhutan</option>
															<option data-kt-flag="flags/bolivia.svg" value="BO">Bolivia, Plurinational State of</option>
															<option data-kt-flag="flags/bonaire.svg" value="BQ">Bonaire, Sint Eustatius and Saba</option>
															<option data-kt-flag="flags/bosnia-and-herzegovina.svg" value="BA">Bosnia and Herzegovina</option>
															<option data-kt-flag="flags/botswana.svg" value="BW">Botswana</option>
															<option data-kt-flag="flags/bouvet-island.svg" value="BV">Bouvet Island</option>
															<option data-kt-flag="flags/brazil.svg" value="BR">Brazil</option>
															<option data-kt-flag="flags/british-indian-ocean-territory.svg" value="IO">British Indian Ocean Territory</option>
															<option data-kt-flag="flags/brunei.svg" value="BN">Brunei Darussalam</option>
															<option data-kt-flag="flags/bulgaria.svg" value="BG">Bulgaria</option>
															<option data-kt-flag="flags/burkina-faso.svg" value="BF">Burkina Faso</option>
															<option data-kt-flag="flags/burundi.svg" value="BI">Burundi</option>
															<option data-kt-flag="flags/cambodia.svg" value="KH">Cambodia</option>
															<option data-kt-flag="flags/cameroon.svg" value="CM">Cameroon</option>
															<option data-kt-flag="flags/canada.svg" value="CA">Canada</option>
															<option data-kt-flag="flags/cape-verde.svg" value="CV">Cape Verde</option>
															<option data-kt-flag="flags/cayman-islands.svg" value="KY">Cayman Islands</option>
															<option data-kt-flag="flags/central-african-republic.svg" value="CF">Central African Republic</option>
															<option data-kt-flag="flags/chad.svg" value="TD">Chad</option>
															<option data-kt-flag="flags/chile.svg" value="CL">Chile</option>
															<option data-kt-flag="flags/china.svg" value="CN">China</option>
															<option data-kt-flag="flags/christmas-island.svg" value="CX">Christmas Island</option>
															<option data-kt-flag="flags/cocos-island.svg" value="CC">Cocos (Keeling) Islands</option>
															<option data-kt-flag="flags/colombia.svg" value="CO">Colombia</option>
															<option data-kt-flag="flags/comoros.svg" value="KM">Comoros</option>
															<option data-kt-flag="flags/congo.svg" value="CG">Congo</option>
															<option data-kt-flag="flags/congo.svg" value="CD">Congo, the Democratic Republic of the</option>
															<option data-kt-flag="flags/cook-islands.svg" value="CK">Cook Islands</option>
															<option data-kt-flag="flags/costa-rica.svg" value="CR">Costa Rica</option>
															<option data-kt-flag="flags/ivory-coast.svg" value="CI">Côte d'Ivoire</option>
															<option data-kt-flag="flags/croatia.svg" value="HR">Croatia</option>
															<option data-kt-flag="flags/cuba.svg" value="CU">Cuba</option>
															<option data-kt-flag="flags/curacao.svg" value="CW">Curaçao</option>
															<option data-kt-flag="flags/cyprus.svg" value="CY">Cyprus</option>
															<option data-kt-flag="flags/czech-republic.svg" value="CZ">Czech Republic</option>
															<option data-kt-flag="flags/denmark.svg" value="DK">Denmark</option>
															<option data-kt-flag="flags/djibouti.svg" value="DJ">Djibouti</option>
															<option data-kt-flag="flags/dominica.svg" value="DM">Dominica</option>
															<option data-kt-flag="flags/dominican-republic.svg" value="DO">Dominican Republic</option>
															<option data-kt-flag="flags/ecuador.svg" value="EC">Ecuador</option>
															<option data-kt-flag="flags/egypt.svg" value="EG">Egypt</option>
															<option data-kt-flag="flags/el-salvador.svg" value="SV">El Salvador</option>
															<option data-kt-flag="flags/equatorial-guinea.svg" value="GQ">Equatorial Guinea</option>
															<option data-kt-flag="flags/eritrea.svg" value="ER">Eritrea</option>
															<option data-kt-flag="flags/estonia.svg" value="EE">Estonia</option>
															<option data-kt-flag="flags/ethiopia.svg" value="ET">Ethiopia</option>
															<option data-kt-flag="flags/falkland-islands.svg" value="FK">Falkland Islands (Malvinas)</option>
															<option data-kt-flag="flags/faroe-islands.svg" value="FO">Faroe Islands</option>
															<option data-kt-flag="flags/fiji.svg" value="FJ">Fiji</option>
															<option data-kt-flag="flags/finland.svg" value="FI">Finland</option>
															<option data-kt-flag="flags/france.svg" value="FR">France</option>
															<option data-kt-flag="flags/french-guiana.svg" value="GF">French Guiana</option>
															<option data-kt-flag="flags/french-polynesia.svg" value="PF">French Polynesia</option>
															<option data-kt-flag="flags/french-southern-territories.svg" value="TF">French Southern Territories</option>
															<option data-kt-flag="flags/gabon.svg" value="GA">Gabon</option>
															<option data-kt-flag="flags/gambia.svg" value="GM">Gambia</option>
															<option data-kt-flag="flags/georgia.svg" value="GE">Georgia</option>
															<option data-kt-flag="flags/germany.svg" value="DE">Germany</option>
															<option data-kt-flag="flags/ghana.svg" value="GH">Ghana</option>
															<option data-kt-flag="flags/gibraltar.svg" value="GI">Gibraltar</option>
															<option data-kt-flag="flags/greece.svg" value="GR">Greece</option>
															<option data-kt-flag="flags/greenland.svg" value="GL">Greenland</option>
															<option data-kt-flag="flags/grenada.svg" value="GD">Grenada</option>
															<option data-kt-flag="flags/guadeloupe.svg" value="GP">Guadeloupe</option>
															<option data-kt-flag="flags/guam.svg" value="GU">Guam</option>
															<option data-kt-flag="flags/guatemala.svg" value="GT">Guatemala</option>
															<option data-kt-flag="flags/guernsey.svg" value="GG">Guernsey</option>
															<option data-kt-flag="flags/guinea.svg" value="GN">Guinea</option>
															<option data-kt-flag="flags/guinea-bissau.svg" value="GW">Guinea-Bissau</option>
															<option data-kt-flag="flags/guyana.svg" value="GY">Guyana</option>
															<option data-kt-flag="flags/haiti.svg" value="HT">Haiti</option>
															<option data-kt-flag="flags/heard-island.svg" value="HM">Heard Island and McDonald Islands</option>
															<option data-kt-flag="flags/vatican-city.svg" value="VA">Holy See (Vatican City State)</option>
															<option data-kt-flag="flags/honduras.svg" value="HN">Honduras</option>
															<option data-kt-flag="flags/hong-kong.svg" value="HK">Hong Kong</option>
															<option data-kt-flag="flags/hungary.svg" value="HU">Hungary</option>
															<option data-kt-flag="flags/iceland.svg" value="IS">Iceland</option>
															<option data-kt-flag="flags/india.svg" value="IN">India</option>
															<option data-kt-flag="flags/indonesia.svg" value="ID">Indonesia</option>
															<option data-kt-flag="flags/iran.svg" value="IR">Iran, Islamic Republic of</option>
															<option data-kt-flag="flags/iraq.svg" value="IQ">Iraq</option>
															<option data-kt-flag="flags/ireland.svg" value="IE">Ireland</option>
															<option data-kt-flag="flags/isle-of-man.svg" value="IM">Isle of Man</option>
															<option data-kt-flag="flags/israel.svg" value="IL">Israel</option>
															<option data-kt-flag="flags/italy.svg" value="IT">Italy</option>
															<option data-kt-flag="flags/jamaica.svg" value="JM">Jamaica</option>
															<option data-kt-flag="flags/japan.svg" value="JP">Japan</option>
															<option data-kt-flag="flags/jersey.svg" value="JE">Jersey</option>
															<option data-kt-flag="flags/jordan.svg" value="JO">Jordan</option>
															<option data-kt-flag="flags/kazakhstan.svg" value="KZ">Kazakhstan</option>
															<option data-kt-flag="flags/kenya.svg" value="KE">Kenya</option>
															<option data-kt-flag="flags/kiribati.svg" value="KI">Kiribati</option>
															<option data-kt-flag="flags/north-korea.svg" value="KP">Korea, Democratic People's Republic of</option>
															<option data-kt-flag="flags/kuwait.svg" value="KW">Kuwait</option>
															<option data-kt-flag="flags/kyrgyzstan.svg" value="KG">Kyrgyzstan</option>
															<option data-kt-flag="flags/laos.svg" value="LA">Lao People's Democratic Republic</option>
															<option data-kt-flag="flags/latvia.svg" value="LV">Latvia</option>
															<option data-kt-flag="flags/lebanon.svg" value="LB">Lebanon</option>
															<option data-kt-flag="flags/lesotho.svg" value="LS">Lesotho</option>
															<option data-kt-flag="flags/liberia.svg" value="LR">Liberia</option>
															<option data-kt-flag="flags/libya.svg" value="LY">Libya</option>
															<option data-kt-flag="flags/liechtenstein.svg" value="LI">Liechtenstein</option>
															<option data-kt-flag="flags/lithuania.svg" value="LT">Lithuania</option>
															<option data-kt-flag="flags/luxembourg.svg" value="LU">Luxembourg</option>
															<option data-kt-flag="flags/macao.svg" value="MO">Macao</option>
															<option data-kt-flag="flags/macedonia.svg" value="MK">Macedonia, the former Yugoslav Republic of</option>
															<option data-kt-flag="flags/madagascar.svg" value="MG">Madagascar</option>
															<option data-kt-flag="flags/malawi.svg" value="MW">Malawi</option>
															<option data-kt-flag="flags/malaysia.svg" value="MY">Malaysia</option>
															<option data-kt-flag="flags/maldives.svg" value="MV">Maldives</option>
															<option data-kt-flag="flags/mali.svg" value="ML">Mali</option>
															<option data-kt-flag="flags/malta.svg" value="MT">Malta</option>
															<option data-kt-flag="flags/marshall-island.svg" value="MH">Marshall Islands</option>
															<option data-kt-flag="flags/martinique.svg" value="MQ">Martinique</option>
															<option data-kt-flag="flags/mauritania.svg" value="MR">Mauritania</option>
															<option data-kt-flag="flags/mauritius.svg" value="MU">Mauritius</option>
															<option data-kt-flag="flags/mayotte.svg" value="YT">Mayotte</option>
															<option data-kt-flag="flags/mexico.svg" value="MX">Mexico</option>
															<option data-kt-flag="flags/micronesia.svg" value="FM">Micronesia, Federated States of</option>
															<option data-kt-flag="flags/moldova.svg" value="MD">Moldova, Republic of</option>
															<option data-kt-flag="flags/monaco.svg" value="MC">Monaco</option>
															<option data-kt-flag="flags/mongolia.svg" value="MN">Mongolia</option>
															<option data-kt-flag="flags/montenegro.svg" value="ME">Montenegro</option>
															<option data-kt-flag="flags/montserrat.svg" value="MS">Montserrat</option>
															<option data-kt-flag="flags/morocco.svg" value="MA">Morocco</option>
															<option data-kt-flag="flags/mozambique.svg" value="MZ">Mozambique</option>
															<option data-kt-flag="flags/myanmar.svg" value="MM">Myanmar</option>
															<option data-kt-flag="flags/namibia.svg" value="NA">Namibia</option>
															<option data-kt-flag="flags/nauru.svg" value="NR">Nauru</option>
															<option data-kt-flag="flags/nepal.svg" value="NP">Nepal</option>
															<option data-kt-flag="flags/netherlands.svg" value="NL">Netherlands</option>
															<option data-kt-flag="flags/new-caledonia.svg" value="NC">New Caledonia</option>
															<option data-kt-flag="flags/new-zealand.svg" value="NZ">New Zealand</option>
															<option data-kt-flag="flags/nicaragua.svg" value="NI">Nicaragua</option>
															<option data-kt-flag="flags/niger.svg" value="NE">Niger</option>
															<option data-kt-flag="flags/nigeria.svg" value="NG">Nigeria</option>
															<option data-kt-flag="flags/niue.svg" value="NU">Niue</option>
															<option data-kt-flag="flags/norfolk-island.svg" value="NF">Norfolk Island</option>
															<option data-kt-flag="flags/northern-mariana-islands.svg" value="MP">Northern Mariana Islands</option>
															<option data-kt-flag="flags/norway.svg" value="NO">Norway</option>
															<option data-kt-flag="flags/oman.svg" value="OM">Oman</option>
															<option data-kt-flag="flags/pakistan.svg" value="PK">Pakistan</option>
															<option data-kt-flag="flags/palau.svg" value="PW">Palau</option>
															<option data-kt-flag="flags/palestine.svg" value="PS">Palestinian Territory, Occupied</option>
															<option data-kt-flag="flags/panama.svg" value="PA">Panama</option>
															<option data-kt-flag="flags/papua-new-guinea.svg" value="PG">Papua New Guinea</option>
															<option data-kt-flag="flags/paraguay.svg" value="PY">Paraguay</option>
															<option data-kt-flag="flags/peru.svg" value="PE">Peru</option>
															<option data-kt-flag="flags/philippines.svg" value="PH">Philippines</option>
															<option data-kt-flag="flags/pitcairn.svg" value="PN">Pitcairn</option>
															<option data-kt-flag="flags/poland.svg" value="PL">Poland</option>
															<option data-kt-flag="flags/portugal.svg" value="PT">Portugal</option>
															<option data-kt-flag="flags/puerto-rico.svg" value="PR">Puerto Rico</option>
															<option data-kt-flag="flags/qatar.svg" value="QA">Qatar</option>
															<option data-kt-flag="flags/réunion.svg" value="RE">Réunion</option>
															<option data-kt-flag="flags/romania.svg" value="RO">Romania</option>
															<option data-kt-flag="flags/russia.svg" value="RU">Russian Federation</option>
															<option data-kt-flag="flags/rwanda.svg" value="RW">Rwanda</option>
															<option data-kt-flag="flags/st-barts.svg" value="BL">Saint Barthélemy</option>
															<option data-kt-flag="flags/saint-helena.svg" value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
															<option data-kt-flag="flags/saint-kitts-and-nevis.svg" value="KN">Saint Kitts and Nevis</option>
															<option data-kt-flag="flags/st-lucia.svg" value="LC">Saint Lucia</option>
															<option data-kt-flag="flags/sint-maarten.svg" value="MF">Saint Martin (French part)</option>
															<option data-kt-flag="flags/saint-pierre.svg" value="PM">Saint Pierre and Miquelon</option>
															<option data-kt-flag="flags/st-vincent-and-the-grenadines.svg" value="VC">Saint Vincent and the Grenadines</option>
															<option data-kt-flag="flags/samoa.svg" value="WS">Samoa</option>
															<option data-kt-flag="flags/san-marino.svg" value="SM">San Marino</option>
															<option data-kt-flag="flags/sao-tome-and-prince.svg" value="ST">Sao Tome and Principe</option>
															<option data-kt-flag="flags/saudi-arabia.svg" value="SA">Saudi Arabia</option>
															<option data-kt-flag="flags/senegal.svg" value="SN">Senegal</option>
															<option data-kt-flag="flags/serbia.svg" value="RS">Serbia</option>
															<option data-kt-flag="flags/seychelles.svg" value="SC">Seychelles</option>
															<option data-kt-flag="flags/sierra-leone.svg" value="SL">Sierra Leone</option>
															<option data-kt-flag="flags/singapore.svg" value="SG">Singapore</option>
															<option data-kt-flag="flags/sint-maarten.svg" value="SX">Sint Maarten (Dutch part)</option>
															<option data-kt-flag="flags/slovakia.svg" value="SK">Slovakia</option>
															<option data-kt-flag="flags/slovenia.svg" value="SI">Slovenia</option>
															<option data-kt-flag="flags/solomon-islands.svg" value="SB">Solomon Islands</option>
															<option data-kt-flag="flags/somalia.svg" value="SO">Somalia</option>
															<option data-kt-flag="flags/south-africa.svg" value="ZA">South Africa</option>
															<option data-kt-flag="flags/south-georgia.svg" value="GS">South Georgia and the South Sandwich Islands</option>
															<option data-kt-flag="flags/south-korea.svg" value="KR">South Korea</option>
															<option data-kt-flag="flags/south-sudan.svg" value="SS">South Sudan</option>
															<option data-kt-flag="flags/spain.svg" value="ES">Spain</option>
															<option data-kt-flag="flags/sri-lanka.svg" value="LK">Sri Lanka</option>
															<option data-kt-flag="flags/sudan.svg" value="SD">Sudan</option>
															<option data-kt-flag="flags/suriname.svg" value="SR">Suriname</option>
															<option data-kt-flag="flags/svalbard.svg" value="SJ">Svalbard and Jan Mayen</option>
															<option data-kt-flag="flags/swaziland.svg" value="SZ">Swaziland</option>
															<option data-kt-flag="flags/sweden.svg" value="SE">Sweden</option>
															<option data-kt-flag="flags/switzerland.svg" value="CH">Switzerland</option>
															<option data-kt-flag="flags/syria.svg" value="SY">Syrian Arab Republic</option>
															<option data-kt-flag="flags/taiwan.svg" value="TW">Taiwan, Province of China</option>
															<option data-kt-flag="flags/tajikistan.svg" value="TJ">Tajikistan</option>
															<option data-kt-flag="flags/tanzania.svg" value="TZ">Tanzania, United Republic of</option>
															<option data-kt-flag="flags/thailand.svg" value="TH">Thailand</option>
															<option data-kt-flag="flags/timor-leste.svg" value="TL">Timor-Leste</option>
															<option data-kt-flag="flags/togo.svg" value="TG">Togo</option>
															<option data-kt-flag="flags/tokelau.svg" value="TK">Tokelau</option>
															<option data-kt-flag="flags/tonga.svg" value="TO">Tonga</option>
															<option data-kt-flag="flags/trinidad-and-tobago.svg" value="TT">Trinidad and Tobago</option>
															<option data-kt-flag="flags/tunisia.svg" value="TN">Tunisia</option>
															<option data-kt-flag="flags/turkey.svg" value="TR">Turkey</option>
															<option data-kt-flag="flags/turkmenistan.svg" value="TM">Turkmenistan</option>
															<option data-kt-flag="flags/turks-and-caicos.svg" value="TC">Turks and Caicos Islands</option>
															<option data-kt-flag="flags/tuvalu.svg" value="TV">Tuvalu</option>
															<option data-kt-flag="flags/uganda.svg" value="UG">Uganda</option>
															<option data-kt-flag="flags/ukraine.svg" value="UA">Ukraine</option>
															<option data-kt-flag="flags/united-arab-emirates.svg" value="AE">United Arab Emirates</option>
															<option data-kt-flag="flags/united-kingdom.svg" value="GB">United Kingdom</option>
															<option data-kt-flag="flags/united-states.svg" value="US">United States</option>
															<option data-kt-flag="flags/uruguay.svg" value="UY">Uruguay</option>
															<option data-kt-flag="flags/uzbekistan.svg" value="UZ">Uzbekistan</option>
															<option data-kt-flag="flags/vanuatu.svg" value="VU">Vanuatu</option>
															<option data-kt-flag="flags/venezuela.svg" value="VE">Venezuela, Bolivarian Republic of</option>
															<option data-kt-flag="flags/vietnam.svg" value="VN">Vietnam</option>
															<option data-kt-flag="flags/virgin-islands.svg" value="VI">Virgin Islands</option>
															<option data-kt-flag="flags/wallis-and-futuna.svg" value="WF">Wallis and Futuna</option>
															<option data-kt-flag="flags/western-sahara.svg" value="EH">Western Sahara</option>
															<option data-kt-flag="flags/yemen.svg" value="YE">Yemen</option>
															<option data-kt-flag="flags/zambia.svg" value="ZM">Zambia</option>
															<option data-kt-flag="flags/zimbabwe.svg" value="ZW">Zimbabwe</option>
														</select>
													</div>
													<!--end::Col-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="row mb-6">
													<!--begin::Label-->
													<label class="col-lg-4 col-form-label required fw-bold fs-6">Language</label>
													<!--end::Label-->
													<!--begin::Col-->
													<div class="col-lg-8 fv-row">
														<!--begin::Input-->
														<select name="language" aria-label="Select a Language" data-control="select2" data-placeholder="Select a language..." class="form-select form-select-solid form-select-lg">
															<option value="">Select a Language...</option>
															<option data-kt-flag="flags/indonesia.svg" value="id">Bahasa Indonesia - Indonesian</option>
															<option data-kt-flag="flags/malaysia.svg" value="msa">Bahasa Melayu - Malay</option>
															<option data-kt-flag="flags/canada.svg" value="ca">Català - Catalan</option>
															<option data-kt-flag="flags/czech-republic.svg" value="cs">Čeština - Czech</option>
															<option data-kt-flag="flags/netherlands.svg" value="da">Dansk - Danish</option>
															<option data-kt-flag="flags/germany.svg" value="de">Deutsch - German</option>
															<option data-kt-flag="flags/united-kingdom.svg" value="en">English</option>
															<option data-kt-flag="flags/united-kingdom.svg" value="en-gb">English UK - British English</option>
															<option data-kt-flag="flags/spain.svg" value="es">Español - Spanish</option>
															<option data-kt-flag="flags/philippines.svg" value="fil">Filipino</option>
															<option data-kt-flag="flags/france.svg" value="fr">Français - French</option>
															<option data-kt-flag="flags/gabon.svg" value="ga">Gaeilge - Irish (beta)</option>
															<option data-kt-flag="flags/greenland.svg" value="gl">Galego - Galician (beta)</option>
															<option data-kt-flag="flags/croatia.svg" value="hr">Hrvatski - Croatian</option>
															<option data-kt-flag="flags/italy.svg" value="it">Italiano - Italian</option>
															<option data-kt-flag="flags/hungary.svg" value="hu">Magyar - Hungarian</option>
															<option data-kt-flag="flags/netherlands.svg" value="nl">Nederlands - Dutch</option>
															<option data-kt-flag="flags/norway.svg" value="no">Norsk - Norwegian</option>
															<option data-kt-flag="flags/poland.svg" value="pl">Polski - Polish</option>
															<option data-kt-flag="flags/portugal.svg" value="pt">Português - Portuguese</option>
															<option data-kt-flag="flags/romania.svg" value="ro">Română - Romanian</option>
															<option data-kt-flag="flags/slovakia.svg" value="sk">Slovenčina - Slovak</option>
															<option data-kt-flag="flags/finland.svg" value="fi">Suomi - Finnish</option>
															<option data-kt-flag="flags/el-salvador.svg" value="sv">Svenska - Swedish</option>
															<option data-kt-flag="flags/virgin-islands.svg" value="vi">Tiếng Việt - Vietnamese</option>
															<option data-kt-flag="flags/turkey.svg" value="tr">Türkçe - Turkish</option>
															<option data-kt-flag="flags/greece.svg" value="el">Ελληνικά - Greek</option>
															<option data-kt-flag="flags/bulgaria.svg" value="bg">Български език - Bulgarian</option>
															<option data-kt-flag="flags/russia.svg" value="ru">Русский - Russian</option>
															<option data-kt-flag="flags/suriname.svg" value="sr">Српски - Serbian</option>
															<option data-kt-flag="flags/ukraine.svg" value="uk">Українська мова - Ukrainian</option>
															<option data-kt-flag="flags/israel.svg" value="he">עִבְרִית - Hebrew</option>
															<option data-kt-flag="flags/pakistan.svg" value="ur">اردو - Urdu (beta)</option>
															<option data-kt-flag="flags/argentina.svg" value="ar">العربية - Arabic</option>
															<option data-kt-flag="flags/argentina.svg" value="fa">فارسی - Persian</option>
															<option data-kt-flag="flags/mauritania.svg" value="mr">मराठी - Marathi</option>
															<option data-kt-flag="flags/india.svg" value="hi">हिन्दी - Hindi</option>
															<option data-kt-flag="flags/bangladesh.svg" value="bn">বাংলা - Bangla</option>
															<option data-kt-flag="flags/guam.svg" value="gu">ગુજરાતી - Gujarati</option>
															<option data-kt-flag="flags/india.svg" value="ta">தமிழ் - Tamil</option>
															<option data-kt-flag="flags/saint-kitts-and-nevis.svg" value="kn">ಕನ್ನಡ - Kannada</option>
															<option data-kt-flag="flags/thailand.svg" value="th">ภาษาไทย - Thai</option>
															<option data-kt-flag="flags/south-korea.svg" value="ko">한국어 - Korean</option>
															<option data-kt-flag="flags/japan.svg" value="ja">日本語 - Japanese</option>
															<option data-kt-flag="flags/china.svg" value="zh-cn">简体中文 - Simplified Chinese</option>
															<option data-kt-flag="flags/taiwan.svg" value="zh-tw">繁體中文 - Traditional Chinese</option>
														</select>
														<!--end::Input-->
														<!--begin::Hint-->
														<div class="form-text">Please select a preferred language, including date, time, and number formatting.</div>
														<!--end::Hint-->
													</div>
													<!--end::Col-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="row mb-6">
													<!--begin::Label-->
													<label class="col-lg-4 col-form-label required fw-bold fs-6">Time Zone</label>
													<!--end::Label-->
													<!--begin::Col-->
													<div class="col-lg-8 fv-row">
														<select name="timezone" aria-label="Select a Timezone" data-control="select2" data-placeholder="Select a timezone.." class="form-select form-select-solid form-select-lg">
															<option value="">Select a Timezone..</option>
															<option data-bs-offset="-39600" value="International Date Line West">(GMT-11:00) International Date Line West</option>
															<option data-bs-offset="-39600" value="Midway Island">(GMT-11:00) Midway Island</option>
															<option data-bs-offset="-39600" value="Samoa">(GMT-11:00) Samoa</option>
															<option data-bs-offset="-36000" value="Hawaii">(GMT-10:00) Hawaii</option>
															<option data-bs-offset="-28800" value="Alaska">(GMT-08:00) Alaska</option>
															<option data-bs-offset="-25200" value="Pacific Time (US &amp; Canada)">(GMT-07:00) Pacific Time (US &amp; Canada)</option>
															<option data-bs-offset="-25200" value="Tijuana">(GMT-07:00) Tijuana</option>
															<option data-bs-offset="-25200" value="Arizona">(GMT-07:00) Arizona</option>
															<option data-bs-offset="-21600" value="Mountain Time (US &amp; Canada)">(GMT-06:00) Mountain Time (US &amp; Canada)</option>
															<option data-bs-offset="-21600" value="Chihuahua">(GMT-06:00) Chihuahua</option>
															<option data-bs-offset="-21600" value="Mazatlan">(GMT-06:00) Mazatlan</option>
															<option data-bs-offset="-21600" value="Saskatchewan">(GMT-06:00) Saskatchewan</option>
															<option data-bs-offset="-21600" value="Central America">(GMT-06:00) Central America</option>
															<option data-bs-offset="-18000" value="Central Time (US &amp; Canada)">(GMT-05:00) Central Time (US &amp; Canada)</option>
															<option data-bs-offset="-18000" value="Guadalajara">(GMT-05:00) Guadalajara</option>
															<option data-bs-offset="-18000" value="Mexico City">(GMT-05:00) Mexico City</option>
															<option data-bs-offset="-18000" value="Monterrey">(GMT-05:00) Monterrey</option>
															<option data-bs-offset="-18000" value="Bogota">(GMT-05:00) Bogota</option>
															<option data-bs-offset="-18000" value="Lima">(GMT-05:00) Lima</option>
															<option data-bs-offset="-18000" value="Quito">(GMT-05:00) Quito</option>
															<option data-bs-offset="-14400" value="Eastern Time (US &amp; Canada)">(GMT-04:00) Eastern Time (US &amp; Canada)</option>
															<option data-bs-offset="-14400" value="Indiana (East)">(GMT-04:00) Indiana (East)</option>
															<option data-bs-offset="-14400" value="Caracas">(GMT-04:00) Caracas</option>
															<option data-bs-offset="-14400" value="La Paz">(GMT-04:00) La Paz</option>
															<option data-bs-offset="-14400" value="Georgetown">(GMT-04:00) Georgetown</option>
															<option data-bs-offset="-10800" value="Atlantic Time (Canada)">(GMT-03:00) Atlantic Time (Canada)</option>
															<option data-bs-offset="-10800" value="Santiago">(GMT-03:00) Santiago</option>
															<option data-bs-offset="-10800" value="Brasilia">(GMT-03:00) Brasilia</option>
															<option data-bs-offset="-10800" value="Buenos Aires">(GMT-03:00) Buenos Aires</option>
															<option data-bs-offset="-9000" value="Newfoundland">(GMT-02:30) Newfoundland</option>
															<option data-bs-offset="-7200" value="Greenland">(GMT-02:00) Greenland</option>
															<option data-bs-offset="-7200" value="Mid-Atlantic">(GMT-02:00) Mid-Atlantic</option>
															<option data-bs-offset="-3600" value="Cape Verde Is.">(GMT-01:00) Cape Verde Is.</option>
															<option data-bs-offset="0" value="Azores">(GMT) Azores</option>
															<option data-bs-offset="0" value="Monrovia">(GMT) Monrovia</option>
															<option data-bs-offset="0" value="UTC">(GMT) UTC</option>
															<option data-bs-offset="3600" value="Dublin">(GMT+01:00) Dublin</option>
															<option data-bs-offset="3600" value="Edinburgh">(GMT+01:00) Edinburgh</option>
															<option data-bs-offset="3600" value="Lisbon">(GMT+01:00) Lisbon</option>
															<option data-bs-offset="3600" value="London">(GMT+01:00) London</option>
															<option data-bs-offset="3600" value="Casablanca">(GMT+01:00) Casablanca</option>
															<option data-bs-offset="3600" value="West Central Africa">(GMT+01:00) West Central Africa</option>
															<option data-bs-offset="7200" value="Belgrade">(GMT+02:00) Belgrade</option>
															<option data-bs-offset="7200" value="Bratislava">(GMT+02:00) Bratislava</option>
															<option data-bs-offset="7200" value="Budapest">(GMT+02:00) Budapest</option>
															<option data-bs-offset="7200" value="Ljubljana">(GMT+02:00) Ljubljana</option>
															<option data-bs-offset="7200" value="Prague">(GMT+02:00) Prague</option>
															<option data-bs-offset="7200" value="Sarajevo">(GMT+02:00) Sarajevo</option>
															<option data-bs-offset="7200" value="Skopje">(GMT+02:00) Skopje</option>
															<option data-bs-offset="7200" value="Warsaw">(GMT+02:00) Warsaw</option>
															<option data-bs-offset="7200" value="Zagreb">(GMT+02:00) Zagreb</option>
															<option data-bs-offset="7200" value="Brussels">(GMT+02:00) Brussels</option>
															<option data-bs-offset="7200" value="Copenhagen">(GMT+02:00) Copenhagen</option>
															<option data-bs-offset="7200" value="Madrid">(GMT+02:00) Madrid</option>
															<option data-bs-offset="7200" value="Paris">(GMT+02:00) Paris</option>
															<option data-bs-offset="7200" value="Amsterdam">(GMT+02:00) Amsterdam</option>
															<option data-bs-offset="7200" value="Berlin">(GMT+02:00) Berlin</option>
															<option data-bs-offset="7200" value="Bern">(GMT+02:00) Bern</option>
															<option data-bs-offset="7200" value="Rome">(GMT+02:00) Rome</option>
															<option data-bs-offset="7200" value="Stockholm">(GMT+02:00) Stockholm</option>
															<option data-bs-offset="7200" value="Vienna">(GMT+02:00) Vienna</option>
															<option data-bs-offset="7200" value="Cairo">(GMT+02:00) Cairo</option>
															<option data-bs-offset="7200" value="Harare">(GMT+02:00) Harare</option>
															<option data-bs-offset="7200" value="Pretoria">(GMT+02:00) Pretoria</option>
															<option data-bs-offset="10800" value="Bucharest">(GMT+03:00) Bucharest</option>
															<option data-bs-offset="10800" value="Helsinki">(GMT+03:00) Helsinki</option>
															<option data-bs-offset="10800" value="Kiev">(GMT+03:00) Kiev</option>
															<option data-bs-offset="10800" value="Kyiv">(GMT+03:00) Kyiv</option>
															<option data-bs-offset="10800" value="Riga">(GMT+03:00) Riga</option>
															<option data-bs-offset="10800" value="Sofia">(GMT+03:00) Sofia</option>
															<option data-bs-offset="10800" value="Tallinn">(GMT+03:00) Tallinn</option>
															<option data-bs-offset="10800" value="Vilnius">(GMT+03:00) Vilnius</option>
															<option data-bs-offset="10800" value="Athens">(GMT+03:00) Athens</option>
															<option data-bs-offset="10800" value="Istanbul">(GMT+03:00) Istanbul</option>
															<option data-bs-offset="10800" value="Minsk">(GMT+03:00) Minsk</option>
															<option data-bs-offset="10800" value="Jerusalem">(GMT+03:00) Jerusalem</option>
															<option data-bs-offset="10800" value="Moscow">(GMT+03:00) Moscow</option>
															<option data-bs-offset="10800" value="St. Petersburg">(GMT+03:00) St. Petersburg</option>
															<option data-bs-offset="10800" value="Volgograd">(GMT+03:00) Volgograd</option>
															<option data-bs-offset="10800" value="Kuwait">(GMT+03:00) Kuwait</option>
															<option data-bs-offset="10800" value="Riyadh">(GMT+03:00) Riyadh</option>
															<option data-bs-offset="10800" value="Nairobi">(GMT+03:00) Nairobi</option>
															<option data-bs-offset="10800" value="Baghdad">(GMT+03:00) Baghdad</option>
															<option data-bs-offset="14400" value="Abu Dhabi">(GMT+04:00) Abu Dhabi</option>
															<option data-bs-offset="14400" value="Muscat">(GMT+04:00) Muscat</option>
															<option data-bs-offset="14400" value="Baku">(GMT+04:00) Baku</option>
															<option data-bs-offset="14400" value="Tbilisi">(GMT+04:00) Tbilisi</option>
															<option data-bs-offset="14400" value="Yerevan">(GMT+04:00) Yerevan</option>
															<option data-bs-offset="16200" value="Tehran">(GMT+04:30) Tehran</option>
															<option data-bs-offset="16200" value="Kabul">(GMT+04:30) Kabul</option>
															<option data-bs-offset="18000" value="Ekaterinburg">(GMT+05:00) Ekaterinburg</option>
															<option data-bs-offset="18000" value="Islamabad">(GMT+05:00) Islamabad</option>
															<option data-bs-offset="18000" value="Karachi">(GMT+05:00) Karachi</option>
															<option data-bs-offset="18000" value="Tashkent">(GMT+05:00) Tashkent</option>
															<option data-bs-offset="19800" value="Chennai">(GMT+05:30) Chennai</option>
															<option data-bs-offset="19800" value="Kolkata">(GMT+05:30) Kolkata</option>
															<option data-bs-offset="19800" value="Mumbai">(GMT+05:30) Mumbai</option>
															<option data-bs-offset="19800" value="New Delhi">(GMT+05:30) New Delhi</option>
															<option data-bs-offset="19800" value="Sri Jayawardenepura">(GMT+05:30) Sri Jayawardenepura</option>
															<option data-bs-offset="20700" value="Kathmandu">(GMT+05:45) Kathmandu</option>
															<option data-bs-offset="21600" value="Astana">(GMT+06:00) Astana</option>
															<option data-bs-offset="21600" value="Dhaka">(GMT+06:00) Dhaka</option>
															<option data-bs-offset="21600" value="Almaty">(GMT+06:00) Almaty</option>
															<option data-bs-offset="21600" value="Urumqi">(GMT+06:00) Urumqi</option>
															<option data-bs-offset="23400" value="Rangoon">(GMT+06:30) Rangoon</option>
															<option data-bs-offset="25200" value="Novosibirsk">(GMT+07:00) Novosibirsk</option>
															<option data-bs-offset="25200" value="Bangkok">(GMT+07:00) Bangkok</option>
															<option data-bs-offset="25200" value="Hanoi">(GMT+07:00) Hanoi</option>
															<option data-bs-offset="25200" value="Jakarta">(GMT+07:00) Jakarta</option>
															<option data-bs-offset="25200" value="Krasnoyarsk">(GMT+07:00) Krasnoyarsk</option>
															<option data-bs-offset="28800" value="Beijing">(GMT+08:00) Beijing</option>
															<option data-bs-offset="28800" value="Chongqing">(GMT+08:00) Chongqing</option>
															<option data-bs-offset="28800" value="Hong Kong">(GMT+08:00) Hong Kong</option>
															<option data-bs-offset="28800" value="Kuala Lumpur">(GMT+08:00) Kuala Lumpur</option>
															<option data-bs-offset="28800" value="Singapore">(GMT+08:00) Singapore</option>
															<option data-bs-offset="28800" value="Taipei">(GMT+08:00) Taipei</option>
															<option data-bs-offset="28800" value="Perth">(GMT+08:00) Perth</option>
															<option data-bs-offset="28800" value="Irkutsk">(GMT+08:00) Irkutsk</option>
															<option data-bs-offset="28800" value="Ulaan Bataar">(GMT+08:00) Ulaan Bataar</option>
															<option data-bs-offset="32400" value="Seoul">(GMT+09:00) Seoul</option>
															<option data-bs-offset="32400" value="Osaka">(GMT+09:00) Osaka</option>
															<option data-bs-offset="32400" value="Sapporo">(GMT+09:00) Sapporo</option>
															<option data-bs-offset="32400" value="Tokyo">(GMT+09:00) Tokyo</option>
															<option data-bs-offset="32400" value="Yakutsk">(GMT+09:00) Yakutsk</option>
															<option data-bs-offset="34200" value="Darwin">(GMT+09:30) Darwin</option>
															<option data-bs-offset="34200" value="Adelaide">(GMT+09:30) Adelaide</option>
															<option data-bs-offset="36000" value="Canberra">(GMT+10:00) Canberra</option>
															<option data-bs-offset="36000" value="Melbourne">(GMT+10:00) Melbourne</option>
															<option data-bs-offset="36000" value="Sydney">(GMT+10:00) Sydney</option>
															<option data-bs-offset="36000" value="Brisbane">(GMT+10:00) Brisbane</option>
															<option data-bs-offset="36000" value="Hobart">(GMT+10:00) Hobart</option>
															<option data-bs-offset="36000" value="Vladivostok">(GMT+10:00) Vladivostok</option>
															<option data-bs-offset="36000" value="Guam">(GMT+10:00) Guam</option>
															<option data-bs-offset="36000" value="Port Moresby">(GMT+10:00) Port Moresby</option>
															<option data-bs-offset="36000" value="Solomon Is.">(GMT+10:00) Solomon Is.</option>
															<option data-bs-offset="39600" value="Magadan">(GMT+11:00) Magadan</option>
															<option data-bs-offset="39600" value="New Caledonia">(GMT+11:00) New Caledonia</option>
															<option data-bs-offset="43200" value="Fiji">(GMT+12:00) Fiji</option>
															<option data-bs-offset="43200" value="Kamchatka">(GMT+12:00) Kamchatka</option>
															<option data-bs-offset="43200" value="Marshall Is.">(GMT+12:00) Marshall Is.</option>
															<option data-bs-offset="43200" value="Auckland">(GMT+12:00) Auckland</option>
															<option data-bs-offset="43200" value="Wellington">(GMT+12:00) Wellington</option>
															<option data-bs-offset="46800" value="Nuku'alofa">(GMT+13:00) Nuku'alofa</option>
														</select>
													</div>
													<!--end::Col-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="row mb-6">
													<!--begin::Label-->
													<label class="col-lg-4 col-form-label fw-bold fs-6">Currency</label>
													<!--end::Label-->
													<!--begin::Col-->
													<div class="col-lg-8 fv-row">
														<select name="currnecy" aria-label="Select a Timezone" data-control="select2" data-placeholder="Select a currency.." class="form-select form-select-solid form-select-lg">
															<option value="">Select a currency..</option>
															<option data-kt-flag="flags/united-states.svg" value="USD">
															<b>USD</b>&#160;-&#160;USA dollar</option>
															<option data-kt-flag="flags/united-kingdom.svg" value="GBP">
															<b>GBP</b>&#160;-&#160;British pound</option>
															<option data-kt-flag="flags/australia.svg" value="AUD">
															<b>AUD</b>&#160;-&#160;Australian dollar</option>
															<option data-kt-flag="flags/japan.svg" value="JPY">
															<b>JPY</b>&#160;-&#160;Japanese yen</option>
															<option data-kt-flag="flags/sweden.svg" value="SEK">
															<b>SEK</b>&#160;-&#160;Swedish krona</option>
															<option data-kt-flag="flags/canada.svg" value="CAD">
															<b>CAD</b>&#160;-&#160;Canadian dollar</option>
															<option data-kt-flag="flags/switzerland.svg" value="CHF">
															<b>CHF</b>&#160;-&#160;Swiss franc</option>
														</select>
													</div>
													<!--end::Col-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="row mb-6">
													<!--begin::Label-->
													<label class="col-lg-4 col-form-label required fw-bold fs-6">Communication</label>
													<!--end::Label-->
													<!--begin::Col-->
													<div class="col-lg-8 fv-row">
														<!--begin::Options-->
														<div class="d-flex align-items-center mt-3">
															<!--begin::Option-->
															<label class="form-check form-check-inline form-check-solid me-5">
																<input class="form-check-input" name="communication[]" type="checkbox" value="1" />
																<span class="fw-bold ps-2 fs-6">Email</span>
															</label>
															<!--end::Option-->
															<!--begin::Option-->
															<label class="form-check form-check-inline form-check-solid">
																<input class="form-check-input" name="communication[]" type="checkbox" value="2" />
																<span class="fw-bold ps-2 fs-6">Phone</span>
															</label>
															<!--end::Option-->
														</div>
														<!--end::Options-->
													</div>
													<!--end::Col-->
												</div>
												<!--end::Input group-->
												<!--begin::Input group-->
												<div class="row mb-0">
													<!--begin::Label-->
													<label class="col-lg-4 col-form-label fw-bold fs-6">Allow Marketing</label>
													<!--begin::Label-->
													<!--begin::Label-->
													<div class="col-lg-8 d-flex align-items-center">
														<div class="form-check form-check-solid form-switch fv-row">
															<input class="form-check-input w-45px h-30px" type="checkbox" id="allowmarketing" checked="checked" />
															<label class="form-check-label" for="allowmarketing"></label>
														</div>
													</div>
													<!--begin::Label-->
												</div>
												<!--end::Input group-->
											</div>
											<!--end::Card body-->
											<!--begin::Actions-->
											<div class="card-footer d-flex justify-content-end py-6 px-9">
												<button type="reset" class="btn btn-white btn-active-light-primary me-2">Discard</button>
												<button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">Save Changes</button>
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
									<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
										<div class="card-title m-0">
											<h3 class="fw-bolder m-0">Sign-in Method</h3>
										</div>
									</div>
									<!--end::Card header-->
									<!--begin::Content-->
									<div id="kt_account_signin_method" class="collapse show">
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
												<!--begin::Edit-->
												<div id="kt_signin_email_edit" class="flex-row-fluid d-none">
													<!--begin::Form-->
													<form id="kt_signin_change_email" class="form" novalidate="novalidate">
														<div class="row mb-6">
															<div class="col-lg-6 mb-4 mb-lg-0">
																<div class="fv-row mb-0">
																	<label for="emailaddress" class="form-label fs-6 fw-bolder mb-3">Enter New Email Address</label>
																	<input type="email" class="form-control form-control-lg form-control-solid" id="emailaddress" placeholder="Email Address" name="emailaddress" value="support@keenthemes.com" />
																</div>
															</div>
															<div class="col-lg-6">
																<div class="fv-row mb-0">
																	<label for="confirmemailpassword" class="form-label fs-6 fw-bolder mb-3">Confirm Password</label>
																	<input type="password" class="form-control form-control-lg form-control-solid" name="confirmemailpassword" id="confirmemailpassword" />
																</div>
															</div>
														</div>
														<div class="d-flex">
															<button id="kt_signin_submit" type="button" class="btn btn-primary me-2 px-6">Update Email</button>
															<button id="kt_signin_cancel" type="button" class="btn btn-color-gray-400 btn-active-light-primary px-6">Cancel</button>
														</div>
													</form>
													<!--end::Form-->
												</div>
												<!--end::Edit-->
												<!--begin::Action-->
												<div id="kt_signin_email_button" class="ms-auto">
													<button class="btn btn-light btn-active-light-primary">Change Email</button>
												</div>
												<!--end::Action-->
											</div>
											<!--end::Email Address-->
											<!--begin::Separator-->
											<div class="separator separator-dashed my-6"></div>
											<!--end::Separator-->
											<!--begin::Password-->
											<div class="d-flex flex-wrap align-items-center mb-10">
												<!--begin::Label-->
												<div id="kt_signin_password">
													<div class="fs-6 fw-bolder mb-1">Password</div>
													<div class="fw-bold text-gray-600">************</div>
												</div>
												<!--end::Label-->
												<!--begin::Edit-->
												<div id="kt_signin_password_edit" class="flex-row-fluid d-none">
													<!--begin::Form-->
													<form id="kt_signin_change_password" class="form" novalidate="novalidate">
														<div class="row mb-1">
															<div class="col-lg-4">
																<div class="fv-row mb-0">
																	<label for="currentpassword" class="form-label fs-6 fw-bolder mb-3">Current Password</label>
																	<input type="password" class="form-control form-control-lg form-control-solid" name="currentpassword" id="currentpassword" />
																</div>
															</div>
															<div class="col-lg-4">
																<div class="fv-row mb-0">
																	<label for="newpassword" class="form-label fs-6 fw-bolder mb-3">New Password</label>
																	<input type="password" class="form-control form-control-lg form-control-solid" name="newpassword" id="newpassword" />
																</div>
															</div>
															<div class="col-lg-4">
																<div class="fv-row mb-0">
																	<label for="confirmpassword" class="form-label fs-6 fw-bolder mb-3">Confirm New Password</label>
																	<input type="password" class="form-control form-control-lg form-control-solid" name="confirmpassword" id="confirmpassword" />
																</div>
															</div>
														</div>
														<div class="form-text mb-5">Password must be at least 8 character and contain symbols</div>
														<div class="d-flex">
															<button id="kt_password_submit" type="button" class="btn btn-primary me-2 px-6">Update Password</button>
															<button id="kt_password_cancel" type="button" class="btn btn-color-gray-400 btn-active-light-primary px-6">Cancel</button>
														</div>
													</form>
													<!--end::Form-->
												</div>
												<!--end::Edit-->
												<!--begin::Action-->
												<div id="kt_signin_password_button" class="ms-auto">
													<button class="btn btn-light btn-active-light-primary">Reset Password</button>
												</div>
												<!--end::Action-->
											</div>
											<!--end::Password-->
											<!--begin::Notice-->
											<div class="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
												<!--begin::Icon-->
												<!--begin::Svg Icon | path: icons/duotone/General/Shield-check.svg-->
												<span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
													<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
														<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
															<rect x="0" y="0" width="24" height="24" />
															<path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#000000" opacity="0.3" />
															<path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z" fill="#000000" />
														</g>
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--end::Icon-->
												<!--begin::Wrapper-->
												<div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
													<!--begin::Content-->
													<div class="mb-3 mb-md-0 fw-bold">
														<h4 class="text-gray-800 fw-bolder">Secure Your Account</h4>
														<div class="fs-6 text-gray-600 pe-7">Two-factor authentication adds an extra layer of security to your account. To log in, in addition you'll need to provide a 6 digit code</div>
													</div>
													<!--end::Content-->
													<!--begin::Action-->
													<a href="#" class="btn btn-primary px-6 align-self-center text-nowrap" data-bs-toggle="modal" data-bs-target="#kt_modal_two_factor_authentication">Enable</a>
													<!--end::Action-->
												</div>
												<!--end::Wrapper-->
											</div>
											<!--end::Notice-->
										</div>
										<!--end::Card body-->
									</div>
									<!--end::Content-->
								</div>
								<!--end::Sign-in Method-->
								<!--begin::Connected Accounts-->
								<div class="card mb-5 mb-xl-10">
									<!--begin::Card header-->
									<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_connected_accounts" aria-expanded="true" aria-controls="kt_account_connected_accounts">
										<div class="card-title m-0">
											<h3 class="fw-bolder m-0">Connected Accounts</h3>
										</div>
									</div>
									<!--end::Card header-->
									<!--begin::Content-->
									<div id="kt_account_connected_accounts" class="collapse show">
										<!--begin::Card body-->
										<div class="card-body border-top p-9">
											<!--begin::Notice-->
											<div class="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
												<!--begin::Icon-->
												<!--begin::Svg Icon | path: icons/duotone/Design/Select.svg-->
												<span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
													<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
														<path d="M18.5,8 C17.1192881,8 16,6.88071187 16,5.5 C16,4.11928813 17.1192881,3 18.5,3 C19.8807119,3 21,4.11928813 21,5.5 C21,6.88071187 19.8807119,8 18.5,8 Z M18.5,21 C17.1192881,21 16,19.8807119 16,18.5 C16,17.1192881 17.1192881,16 18.5,16 C19.8807119,16 21,17.1192881 21,18.5 C21,19.8807119 19.8807119,21 18.5,21 Z M5.5,21 C4.11928813,21 3,19.8807119 3,18.5 C3,17.1192881 4.11928813,16 5.5,16 C6.88071187,16 8,17.1192881 8,18.5 C8,19.8807119 6.88071187,21 5.5,21 Z" fill="#000000" opacity="0.3" />
														<path d="M5.5,8 C4.11928813,8 3,6.88071187 3,5.5 C3,4.11928813 4.11928813,3 5.5,3 C6.88071187,3 8,4.11928813 8,5.5 C8,6.88071187 6.88071187,8 5.5,8 Z M11,4 L13,4 C13.5522847,4 14,4.44771525 14,5 C14,5.55228475 13.5522847,6 13,6 L11,6 C10.4477153,6 10,5.55228475 10,5 C10,4.44771525 10.4477153,4 11,4 Z M11,18 L13,18 C13.5522847,18 14,18.4477153 14,19 C14,19.5522847 13.5522847,20 13,20 L11,20 C10.4477153,20 10,19.5522847 10,19 C10,18.4477153 10.4477153,18 11,18 Z M5,10 C5.55228475,10 6,10.4477153 6,11 L6,13 C6,13.5522847 5.55228475,14 5,14 C4.44771525,14 4,13.5522847 4,13 L4,11 C4,10.4477153 4.44771525,10 5,10 Z M19,10 C19.5522847,10 20,10.4477153 20,11 L20,13 C20,13.5522847 19.5522847,14 19,14 C18.4477153,14 18,13.5522847 18,13 L18,11 C18,10.4477153 18.4477153,10 19,10 Z" fill="#000000" />
													</svg>
												</span>
												<!--end::Svg Icon-->
												<!--end::Icon-->
												<!--begin::Wrapper-->
												<div class="d-flex flex-stack flex-grow-1">
													<!--begin::Content-->
													<div class="fw-bold">
														<div class="fs-6 text-gray-600">Two-factor authentication adds an extra layer of security to your account. To log in, in you'll need to provide a 4 digit amazing code.
														<a href="#" class="fw-bolder">Learn More</a></div>
													</div>
													<!--end::Content-->
												</div>
												<!--end::Wrapper-->
											</div>
											<!--end::Notice-->
											<!--begin::Items-->
											<div class="py-2">
												<!--begin::Item-->
												<div class="d-flex flex-stack">
													<div class="d-flex">
														<img src="assets/media/svg/brand-logos/google-icon.svg" class="w-30px me-6" alt="" />
														<div class="d-flex flex-column">
															<a href="#" class="fs-5 text-dark text-hover-primary fw-bolder">Google</a>
															<div class="fs-6 fw-bold text-gray-400">Plan properly your workflow</div>
														</div>
													</div>
													<div class="d-flex justify-content-end">
														<div class="form-check form-check-solid form-switch">
															<input class="form-check-input w-45px h-30px" type="checkbox" id="googleswitch" checked="checked" />
															<label class="form-check-label" for="googleswitch"></label>
														</div>
													</div>
												</div>
												<!--end::Item-->
												<div class="separator separator-dashed my-5"></div>
												<!--begin::Item-->
												<div class="d-flex flex-stack">
													<div class="d-flex">
														<img src="assets/media/svg/brand-logos/github.svg" class="w-30px me-6" alt="" />
														<div class="d-flex flex-column">
															<a href="#" class="fs-5 text-dark text-hover-primary fw-bolder">Github</a>
															<div class="fs-6 fw-bold text-gray-400">Keep eye on on your Repositories</div>
														</div>
													</div>
													<div class="d-flex justify-content-end">
														<div class="form-check form-check-solid form-switch">
															<input class="form-check-input w-45px h-30px" type="checkbox" id="githubswitch" checked="checked" />
															<label class="form-check-label" for="githubswitch"></label>
														</div>
													</div>
												</div>
												<!--end::Item-->
												<div class="separator separator-dashed my-5"></div>
												<!--begin::Item-->
												<div class="d-flex flex-stack">
													<div class="d-flex">
														<img src="assets/media/svg/brand-logos/slack-icon.svg" class="w-30px me-6" alt="" />
														<div class="d-flex flex-column">
															<a href="#" class="fs-5 text-dark text-hover-primary fw-bolder">Slack</a>
															<div class="fs-6 fw-bold text-gray-400">Integrate Projects Discussions</div>
														</div>
													</div>
													<div class="d-flex justify-content-end">
														<div class="form-check form-check-solid form-switch">
															<input class="form-check-input w-45px h-30px" type="checkbox" id="slackswitch" />
															<label class="form-check-label" for="slackswitch"></label>
														</div>
													</div>
												</div>
												<!--end::Item-->
											</div>
											<!--end::Items-->
										</div>
										<!--end::Card body-->
										<!--begin::Card footer-->
										<div class="card-footer d-flex justify-content-end py-6 px-9">
											<button class="btn btn-white btn-active-light-primary me-2">Discard</button>
											<button class="btn btn-primary">Save Changes</button>
										</div>
										<!--end::Card footer-->
									</div>
									<!--end::Content-->
								</div>
								<!--end::Connected Accounts-->
								<!--begin::Notifications-->
								<div class="card mb-5 mb-xl-10">
									<!--begin::Card header-->
									<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_email_preferences" aria-expanded="true" aria-controls="kt_account_email_preferences">
										<div class="card-title m-0">
											<h3 class="fw-bolder m-0">Email Preferences</h3>
										</div>
									</div>
									<!--begin::Card header-->
									<!--begin::Content-->
									<div id="kt_account_email_preferences" class="collapse show">
										<!--begin::Form-->
										<form class="form">
											<!--begin::Card body-->
											<div class="card-body border-top px-9 py-9">
												<!--begin::Option-->
												<label class="form-check form-check-custom form-check-solid align-items-start">
													<!--begin::Input-->
													<input class="form-check-input me-3" type="checkbox" name="email-preferences[]" value="1" />
													<!--end::Input-->
													<!--begin::Label-->
													<span class="form-check-label d-flex flex-column align-items-start">
														<span class="fw-bolder fs-5 mb-0">Successful Payments</span>
														<span class="text-muted fs-6">Receive a notification for every successful payment.</span>
													</span>
													<!--end::Label-->
												</label>
												<!--end::Option-->
												<!--begin::Option-->
												<div class="separator separator-dashed my-6"></div>
												<!--end::Option-->
												<!--begin::Option-->
												<label class="form-check form-check-custom form-check-solid align-items-start">
													<!--begin::Input-->
													<input class="form-check-input me-3" type="checkbox" name="email-preferences[]" checked="checked" value="1" />
													<!--end::Input-->
													<!--begin::Label-->
													<span class="form-check-label d-flex flex-column align-items-start">
														<span class="fw-bolder fs-5 mb-0">Payouts</span>
														<span class="text-muted fs-6">Receive a notification for every initiated payout.</span>
													</span>
													<!--end::Label-->
												</label>
												<!--end::Option-->
												<!--begin::Option-->
												<div class="separator separator-dashed my-6"></div>
												<!--end::Option-->
												<!--begin::Option-->
												<label class="form-check form-check-custom form-check-solid align-items-start">
													<!--begin::Input-->
													<input class="form-check-input me-3" type="checkbox" name="email-preferences[]" value="1" />
													<!--end::Input-->
													<!--begin::Label-->
													<span class="form-check-label d-flex flex-column align-items-start">
														<span class="fw-bolder fs-5 mb-0">Fee Collection</span>
														<span class="text-muted fs-6">Receive a notification each time you collect a fee from sales</span>
													</span>
													<!--end::Label-->
												</label>
												<!--end::Option-->
												<!--begin::Option-->
												<div class="separator separator-dashed my-6"></div>
												<!--end::Option-->
												<!--begin::Option-->
												<label class="form-check form-check-custom form-check-solid align-items-start">
													<!--begin::Input-->
													<input class="form-check-input me-3" type="checkbox" name="email-preferences[]" checked="checked" value="1" />
													<!--end::Input-->
													<!--begin::Label-->
													<span class="form-check-label d-flex flex-column align-items-start">
														<span class="fw-bolder fs-5 mb-0">Customer Payment Dispute</span>
														<span class="text-muted fs-6">Receive a notification if a payment is disputed by a customer and for dispute purposes.</span>
													</span>
													<!--end::Label-->
												</label>
												<!--end::Option-->
												<!--begin::Option-->
												<div class="separator separator-dashed my-6"></div>
												<!--end::Option-->
												<!--begin::Option-->
												<label class="form-check form-check-custom form-check-solid align-items-start">
													<!--begin::Input-->
													<input class="form-check-input me-3" type="checkbox" name="email-preferences[]" value="1" />
													<!--end::Input-->
													<!--begin::Label-->
													<span class="form-check-label d-flex flex-column align-items-start">
														<span class="fw-bolder fs-5 mb-0">Refund Alerts</span>
														<span class="text-muted fs-6">Receive a notification if a payment is stated as risk by the Finance Department.</span>
													</span>
													<!--end::Label-->
												</label>
												<!--end::Option-->
												<!--begin::Option-->
												<div class="separator separator-dashed my-6"></div>
												<!--end::Option-->
												<!--begin::Option-->
												<label class="form-check form-check-custom form-check-solid align-items-start">
													<!--begin::Input-->
													<input class="form-check-input me-3" type="checkbox" name="email-preferences[]" checked="checked" value="1" />
													<!--end::Input-->
													<!--begin::Label-->
													<span class="form-check-label d-flex flex-column align-items-start">
														<span class="fw-bolder fs-5 mb-0">Invoice Payments</span>
														<span class="text-muted fs-6">Receive a notification if a customer sends an incorrect amount to pay their invoice.</span>
													</span>
													<!--end::Label-->
												</label>
												<!--end::Option-->
												<!--begin::Option-->
												<div class="separator separator-dashed my-6"></div>
												<!--end::Option-->
												<!--begin::Option-->
												<label class="form-check form-check-custom form-check-solid align-items-start">
													<!--begin::Input-->
													<input class="form-check-input me-3" type="checkbox" name="email-preferences[]" value="1" />
													<!--end::Input-->
													<!--begin::Label-->
													<span class="form-check-label d-flex flex-column align-items-start">
														<span class="fw-bolder fs-5 mb-0">Webhook API Endpoints</span>
														<span class="text-muted fs-6">Receive notifications for consistently failing webhook API endpoints.</span>
													</span>
													<!--end::Label-->
												</label>
												<!--end::Option-->
											</div>
											<!--end::Card body-->
											<!--begin::Card footer-->
											<div class="card-footer d-flex justify-content-end py-6 px-9">
												<button class="btn btn-white btn-active-light-primary me-2">Discard</button>
												<button class="btn btn-primary px-6">Save Changes</button>
											</div>
											<!--end::Card footer-->
										</form>
										<!--end::Form-->
									</div>
									<!--end::Content-->
								</div>
								<!--end::Notifications-->
								<!--begin::Notifications-->
								<div class="card mb-5 mb-xl-10">
									<!--begin::Card header-->
									<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_notifications" aria-expanded="true" aria-controls="kt_account_notifications">
										<div class="card-title m-0">
											<h3 class="fw-bolder m-0">Notifications</h3>
										</div>
									</div>
									<!--begin::Card header-->
									<!--begin::Content-->
									<div id="kt_account_notifications" class="collapse show">
										<!--begin::Form-->
										<form class="form">
											<!--begin::Card body-->
											<div class="card-body border-top px-9 pt-3 pb-4">
												<!--begin::Table-->
												<div class="table-responsive">
													<table class="table table-row-dashed border-gray-300 align-middle gy-6">
														<tbody class="fs-6 fw-bold">
															<!--begin::Table row-->
															<tr>
																<td class="min-w-250px fs-4 fw-bolder">Notifications</td>
																<td class="w-125px">
																	<div class="form-check form-check-solid">
																		<input class="form-check-input" type="checkbox" value="" id="kt_settings_notification_email" checked="checked" data-kt-check="true" data-kt-check-target="[data-kt-settings-notification=email]" />
																		<label class="form-check-label ps-2" for="kt_settings_notification_email">Email</label>
																	</div>
																</td>
																<td class="w-125px">
																	<div class="form-check form-check-solid">
																		<input class="form-check-input" type="checkbox" value="" id="kt_settings_notification_phone" checked="checked" data-kt-check="true" data-kt-check-target="[data-kt-settings-notification=phone]" />
																		<label class="form-check-label ps-2" for="kt_settings_notification_phone">Phone</label>
																	</div>
																</td>
															</tr>
															<!--begin::Table row-->
															<!--begin::Table row-->
															<tr>
																<td>Billing Updates</td>
																<td>
																	<div class="form-check form-check-solid">
																		<input class="form-check-input" type="checkbox" value="1" id="billing1" checked="checked" data-kt-settings-notification="email" />
																		<label class="form-check-label ps-2" for="billing1"></label>
																	</div>
																</td>
																<td>
																	<div class="form-check form-check-solid">
																		<input class="form-check-input" type="checkbox" value="" id="billing2" checked="checked" data-kt-settings-notification="phone" />
																		<label class="form-check-label ps-2" for="billing2"></label>
																	</div>
																</td>
															</tr>
															<!--begin::Table row-->
															<!--begin::Table row-->
															<tr>
																<td>New Team Members</td>
																<td>
																	<div class="form-check form-check-solid">
																		<input class="form-check-input" type="checkbox" value="" id="team1" checked="checked" data-kt-settings-notification="email" />
																		<label class="form-check-label ps-2" for="team1"></label>
																	</div>
																</td>
																<td>
																	<div class="form-check form-check-solid">
																		<input class="form-check-input" type="checkbox" value="" id="team2" data-kt-settings-notification="phone" />
																		<label class="form-check-label ps-2" for="team2"></label>
																	</div>
																</td>
															</tr>
															<!--begin::Table row-->
															<!--begin::Table row-->
															<tr>
																<td>Completed Projects</td>
																<td>
																	<div class="form-check form-check-solid">
																		<input class="form-check-input" type="checkbox" value="" id="project1" data-kt-settings-notification="email" />
																		<label class="form-check-label ps-2" for="project1"></label>
																	</div>
																</td>
																<td>
																	<div class="form-check form-check-solid">
																		<input class="form-check-input" type="checkbox" value="" id="project2" checked="checked" data-kt-settings-notification="phone" />
																		<label class="form-check-label ps-2" for="project2"></label>
																	</div>
																</td>
															</tr>
															<!--begin::Table row-->
															<!--begin::Table row-->
															<tr>
																<td class="border-bottom-0">Newsletters</td>
																<td class="border-bottom-0">
																	<div class="form-check form-check-solid">
																		<input class="form-check-input" type="checkbox" value="" id="newsletter1" data-kt-settings-notification="email" />
																		<label class="form-check-label ps-2" for="newsletter1"></label>
																	</div>
																</td>
																<td class="border-bottom-0">
																	<div class="form-check form-check-solid">
																		<input class="form-check-input" type="checkbox" value="" id="newsletter2" data-kt-settings-notification="phone" />
																		<label class="form-check-label ps-2" for="newsletter2"></label>
																	</div>
																</td>
															</tr>
															<!--begin::Table row-->
														</tbody>
													</table>
												</div>
												<!--end::Table-->
											</div>
											<!--end::Card body-->
											<!--begin::Card footer-->
											<div class="card-footer d-flex justify-content-end py-6 px-9">
												<button class="btn btn-white btn-active-light-primary me-2">Discard</button>
												<button class="btn btn-primary px-6">Save Changes</button>
											</div>
											<!--end::Card footer-->
										</form>
										<!--end::Form-->
									</div>
									<!--end::Content-->
								</div>
								<!--end::Notifications-->
								<!--begin::Deactivate Account-->
								<div class="card">
									<!--begin::Card header-->
									<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_deactivate" aria-expanded="true" aria-controls="kt_account_deactivate">
										<div class="card-title m-0">
											<h3 class="fw-bolder m-0">Deactivate Account</h3>
										</div>
									</div>
									<!--end::Card header-->
									<!--begin::Content-->
									<div id="kt_account_deactivate" class="collapse show">
										<!--begin::Form-->
										<form id="kt_account_deactivate_form" class="form">
											<!--begin::Card body-->
											<div class="card-body border-top p-9">
												<!--begin::Notice-->
												<div class="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
													<!--begin::Icon-->
													<!--begin::Svg Icon | path: icons/duotone/Code/Warning-1-circle.svg-->
													<span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
														<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
															<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
															<rect fill="#000000" x="11" y="7" width="2" height="8" rx="1" />
															<rect fill="#000000" x="11" y="16" width="2" height="2" rx="1" />
														</svg>
													</span>
													<!--end::Svg Icon-->
													<!--end::Icon-->
													<!--begin::Wrapper-->
													<div class="d-flex flex-stack flex-grow-1">
														<!--begin::Content-->
														<div class="fw-bold">
															<h4 class="text-gray-800 fw-bolder">You Are Deactivating Your Account</h4>
															<div class="fs-6 text-gray-600">For extra security, this requires you to confirm your email or phone number when you reset yousignr password.
															<br />
															<a class="fw-bolder" href="#">Learn more</a></div>
														</div>
														<!--end::Content-->
													</div>
													<!--end::Wrapper-->
												</div>
												<!--end::Notice-->
												<!--begin::Form input row-->
												<div class="form-check form-check-solid fv-row">
													<input name="deactivate" class="form-check-input" type="checkbox" value="" id="deactivate" />
													<label class="form-check-label fw-bold ps-2 fs-6" for="deactivate">I confirm my account deactivation</label>
												</div>
												<!--end::Form input row-->
											</div>
											<!--end::Card body-->
											<!--begin::Card footer-->
											<div class="card-footer d-flex justify-content-end py-6 px-9">
												<button id="kt_account_deactivate_account_submit" type="submit" class="btn btn-danger fw-bold">Deactivate Account</button>
											</div>
											<!--end::Card footer-->
										</form>
										<!--end::Form-->
									</div>
									<!--end::Content-->
								</div>
								<!--end::Deactivate Account-->
								<!--begin::Modals-->
								<!--begin::Modal - Two-factor authentication-->
								<div class="modal fade" id="kt_modal_two_factor_authentication" tabindex="-1" aria-hidden="true">
									<!--begin::Modal header-->
									<div class="modal-dialog modal-dialog-centered mw-650px">
										<!--begin::Modal content-->
										<div class="modal-content">
											<!--begin::Modal header-->
											<div class="modal-header flex-stack">
												<!--begin::Title-->
												<h2>Choose An Authentication Method</h2>
												<!--end::Title-->
												<!--begin::Close-->
												<div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
													<!--begin::Svg Icon | path: icons/duotone/Navigation/Close.svg-->
													<span class="svg-icon svg-icon-1">
														<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
															<g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
																<rect fill="#000000" x="0" y="7" width="16" height="2" rx="1" />
																<rect fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1" />
															</g>
														</svg>
													</span>
													<!--end::Svg Icon-->
												</div>
												<!--end::Close-->
											</div>
											<!--begin::Modal header-->
											<!--begin::Modal body-->
											<div class="modal-body scroll-y pt-10 pb-15 px-lg-17">
												<!--begin::Options-->
												<div data-kt-element="options">
													<!--begin::Notice-->
													<p class="text-gray-400 fs-5 fw-bold mb-10">In addition to your username and password, you’ll have to enter a code (delivered via app or SMS) to log into your account.</p>
													<!--end::Notice-->
													<!--begin::Wrapper-->
													<div class="pb-10">
														<!--begin::Option-->
														<input type="radio" class="btn-check" name="auth_option" value="apps" checked="checked" id="kt_modal_two_factor_authentication_option_1" />
														<label class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-5" for="kt_modal_two_factor_authentication_option_1">
															<!--begin::Svg Icon | path: icons/duotone/Interface/Cog.svg-->
															<span class="svg-icon svg-icon-4x me-4">
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																	<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 2C10.8954 2 9.99994 2.89543 9.99994 4C9.99994 4.14834 9.89932 4.27718 9.75691 4.3187C9.19509 4.48248 8.65883 4.70622 8.15552 4.98253C8.02513 5.05412 7.86242 5.03411 7.75724 4.92893C6.97619 4.14788 5.70986 4.14788 4.92881 4.92893C4.14776 5.70998 4.14776 6.97631 4.92881 7.75736C5.03399 7.86254 5.05399 8.02525 4.98241 8.15564C4.70611 8.65893 4.48238 9.19516 4.3186 9.75695C4.27708 9.89937 4.14822 10 3.99988 10C2.89531 10 1.99988 10.8954 1.99988 12C1.99988 13.1046 2.89531 14 3.99988 14C4.14822 14 4.27708 14.1006 4.3186 14.2431C4.48238 14.8048 4.70611 15.3411 4.98241 15.8444C5.05399 15.9747 5.03399 16.1375 4.92881 16.2426C4.14776 17.0237 4.14776 18.29 4.92881 19.0711C5.70986 19.8521 6.97619 19.8521 7.75724 19.0711C7.86242 18.9659 8.02513 18.9459 8.15552 19.0175C8.65883 19.2938 9.19509 19.5175 9.75691 19.6813C9.89932 19.7228 9.99994 19.8517 9.99994 20C9.99994 21.1046 10.8954 22 11.9999 22C13.1045 22 13.9999 21.1046 13.9999 20C13.9999 19.8516 14.1006 19.7228 14.243 19.6813C14.8048 19.5175 15.341 19.2938 15.8442 19.0175C15.9746 18.9459 16.1373 18.9659 16.2425 19.0711C17.0236 19.8521 18.2899 19.8521 19.0709 19.0711C19.852 18.29 19.852 17.0237 19.0709 16.2426C18.9658 16.1375 18.9458 15.9747 19.0173 15.8444C19.2936 15.3411 19.5174 14.8048 19.6812 14.2431C19.7227 14.1006 19.8515 14 19.9999 14C21.1044 14 21.9999 13.1046 21.9999 12C21.9999 10.8954 21.1044 10 19.9999 10C19.8515 10 19.7227 9.89937 19.6812 9.75695C19.5174 9.19516 19.2936 8.65893 19.0173 8.15564C18.9458 8.02525 18.9658 7.86254 19.0709 7.75736C19.852 6.97631 19.852 5.70998 19.0709 4.92893C18.2899 4.14788 17.0236 4.14788 16.2425 4.92893C16.1373 5.03411 15.9746 5.05412 15.8442 4.98253C15.341 4.70625 14.8048 4.48252 14.243 4.31875C14.1006 4.27722 13.9999 4.14836 13.9999 4C13.9999 2.89543 13.1045 2 11.9999 2ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#12131A" />
																	<path fill-rule="evenodd" clip-rule="evenodd" d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#12131A" />
																</svg>
															</span>
															<!--end::Svg Icon-->
															<span class="d-block fw-bold text-start">
																<span class="text-dark fw-bolder d-block fs-3">Authenticator Apps</span>
																<span class="text-gray-400 fw-bold fs-6">Get codes from an app like Google Authenticator, Microsoft Authenticator, Authy or 1Password.</span>
															</span>
														</label>
														<!--end::Option-->
														<!--begin::Option-->
														<input type="radio" class="btn-check" name="auth_option" value="sms" id="kt_modal_two_factor_authentication_option_2" />
														<label class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center" for="kt_modal_two_factor_authentication_option_2">
															<!--begin::Svg Icon | path: icons/duotone/Interface/Comment.svg-->
															<span class="svg-icon svg-icon-4x me-4">
																<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																	<path opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M5.69477 2.48932C4.00472 2.74648 2.66565 3.98488 2.37546 5.66957C2.17321 6.84372 2 8.33525 2 10C2 11.6647 2.17321 13.1563 2.37546 14.3304C2.62456 15.7766 3.64656 16.8939 5 17.344V20.7476C5 21.5219 5.84211 22.0024 6.50873 21.6085L12.6241 17.9949C14.8384 17.9586 16.8238 17.7361 18.3052 17.5107C19.9953 17.2535 21.3344 16.0151 21.6245 14.3304C21.8268 13.1563 22 11.6647 22 10C22 8.33525 21.8268 6.84372 21.6245 5.66957C21.3344 3.98488 19.9953 2.74648 18.3052 2.48932C16.6859 2.24293 14.4644 2 12 2C9.53559 2 7.31411 2.24293 5.69477 2.48932Z" fill="#191213" />
																	<path fill-rule="evenodd" clip-rule="evenodd" d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H17C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7H7ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11H7Z" fill="#121319" />
																</svg>
															</span>
															<!--end::Svg Icon-->
															<span class="d-block fw-bold text-start">
																<span class="text-dark fw-bolder d-block fs-3">SMS</span>
																<span class="text-gray-400 fw-bold fs-6">We will send a code via SMS if you need to use your backup login method.</span>
															</span>
														</label>
														<!--end::Option-->
													</div>
													<!--end::Options-->
													<!--begin::Action-->
													<button class="btn btn-primary w-100" data-kt-element="options-select">Continue</button>
													<!--end::Action-->
												</div>
												<!--end::Options-->
												<!--begin::Apps-->
												<div class="d-none" data-kt-element="apps">
													<!--begin::Heading-->
													<h3 class="text-dark fw-bolder mb-7">Authenticator Apps</h3>
													<!--end::Heading-->
													<!--begin::Description-->
													<div class="text-gray-500 fw-bold fs-6 mb-10">Using an authenticator app like
													<a href="https://support.google.com/accounts/answer/1066447?hl=en" target="_blank">Google Authenticator</a>,
													<a href="https://www.microsoft.com/en-us/account/authenticator" target="_blank">Microsoft Authenticator</a>,
													<a href="https://authy.com/download/" target="_blank">Authy</a>, or
													<a href="https://support.1password.com/one-time-passwords/" target="_blank">1Password</a>, scan the QR code. It will generate a 6 digit code for you to enter below.
													<!--begin::QR code image-->
													<div class="pt-5 text-center">
														<img src="assets/media/misc/qr.png" alt="" class="mw-150px" />
													</div>
													<!--end::QR code image--></div>
													<!--end::Description-->
													<!--begin::Notice-->
													<div class="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6">
														<!--begin::Icon-->
														<!--begin::Svg Icon | path: icons/duotone/Code/Warning-1-circle.svg-->
														<span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																<circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10" />
																<rect fill="#000000" x="11" y="7" width="2" height="8" rx="1" />
																<rect fill="#000000" x="11" y="16" width="2" height="2" rx="1" />
															</svg>
														</span>
														<!--end::Svg Icon-->
														<!--end::Icon-->
														<!--begin::Wrapper-->
														<div class="d-flex flex-stack flex-grow-1">
															<!--begin::Content-->
															<div class="fw-bold">
																<div class="fs-6 text-gray-600">If you having trouble using the QR code, select manual entry on your app, and enter your username and the code:
																<div class="fw-bolder text-dark pt-2">KBSS3QDAAFUMCBY63YCKI5WSSVACUMPN</div></div>
															</div>
															<!--end::Content-->
														</div>
														<!--end::Wrapper-->
													</div>
													<!--end::Notice-->
													<!--begin::Form-->
													<form data-kt-element="apps-form" class="form" action="#">
														<!--begin::Input group-->
														<div class="mb-10 fv-row">
															<input type="text" class="form-control form-control-lg form-control-solid" placeholder="Enter authentication code" name="code" />
														</div>
														<!--end::Input group-->
														<!--begin::Actions-->
														<div class="d-flex flex-center">
															<button type="reset" data-kt-element="apps-cancel" class="btn btn-white me-3">Cancel</button>
															<button type="submit" data-kt-element="apps-submit" class="btn btn-primary">
																<span class="indicator-label">Submit</span>
																<span class="indicator-progress">Please wait...
																<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
															</button>
														</div>
														<!--end::Actions-->
													</form>
													<!--end::Form-->
												</div>
												<!--end::Options-->
												<!--begin::SMS-->
												<div class="d-none" data-kt-element="sms">
													<!--begin::Heading-->
													<h3 class="text-dark fw-bolder fs-3 mb-5">SMS: Verify Your Mobile Number</h3>
													<!--end::Heading-->
													<!--begin::Notice-->
													<div class="text-gray-400 fw-bold mb-10">Enter your mobile phone number with country code and we will send you a verification code upon request.</div>
													<!--end::Notice-->
													<!--begin::Form-->
													<form data-kt-element="sms-form" class="form" action="#">
														<!--begin::Input group-->
														<div class="mb-10 fv-row">
															<input type="text" class="form-control form-control-lg form-control-solid" placeholder="Mobile number with country code..." name="mobile" />
														</div>
														<!--end::Input group-->
														<!--begin::Actions-->
														<div class="d-flex flex-center">
															<button type="reset" data-kt-element="sms-cancel" class="btn btn-white me-3">Cancel</button>
															<button type="submit" data-kt-element="sms-submit" class="btn btn-primary">
																<span class="indicator-label">Submit</span>
																<span class="indicator-progress">Please wait...
																<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
															</button>
														</div>
														<!--end::Actions-->
													</form>
													<!--end::Form-->
												</div>
												<!--end::SMS-->
											</div>
											<!--begin::Modal body-->
										</div>
										<!--end::Modal content-->
									</div>
									<!--end::Modal header-->
								</div>
								<!--end::Modal - Two-factor authentication-->
								<!--end::Modals-->
							</div>
							<!--end::Container-->
						</div>
						<!--end::Post-->
</template>