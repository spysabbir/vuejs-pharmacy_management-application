<script setup>
import { authStore } from "../store/store";
import { cart } from "../store/cart";
const auth = authStore;
</script>

<template>
<div id="kt_header" style="" class="header align-items-stretch">
  <!--begin::Container-->
  <div class="container-fluid d-flex align-items-stretch justify-content-between">
    <!--begin::Aside mobile toggle-->
    <div class="d-flex align-items-center d-lg-none ms-n3 me-1" title="Show aside menu">
      <div class="btn btn-icon btn-active-color-white" id="kt_aside_mobile_toggle">
        <i class="bi bi-list fs-1"></i>
      </div>
    </div>
    <!--end::Aside mobile toggle-->
    <!--begin::Mobile logo-->
    <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
      <router-link to="/dashboard" class="d-lg-none">
        <img alt="Logo" src="/src/assets/media/logos/logo-compact.svg" class="h-15px" />
      </router-link>
    </div>
    <!--end::Mobile logo-->
    <!--begin::Wrapper-->
    <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
      <!--begin::Navbar-->
      <div class="d-flex align-items-stretch" id="kt_header_nav">
        <!--begin::Menu wrapper-->
        <div class="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
        </div>
        <!--end::Menu wrapper-->
      </div>
      <!--end::Navbar-->
      <!--begin::Topbar-->
      <div class="d-flex align-items-stretch flex-shrink-0">
        <!--begin::Toolbar wrapper-->
        <div class="topbar d-flex align-items-stretch flex-shrink-0">
          <!--begin::Activities-->
          <div class="d-flex align-items-stretch">
            <!--begin::drawer toggle-->
            <div class="topbar-item px-3 px-lg-5" id="kt_activities_toggle">
              <i class="bi bi-box-seam fs-3"></i>
            </div>
            <!--end::drawer toggle-->
          </div>
          <!--end::Activities-->
          <!--begin::Chat-->
          <div class="d-flex align-items-stretch">
            <!--begin::Menu wrapper-->
            <div class="topbar-item position-relative px-3 px-lg-5" id="kt_drawer_chat_toggle">
              <i class="bi bi-chat-left-text fs-3"></i>
              <span class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 mt-4 start-50 animation-blink"></span>
            </div>
            <!--end::Menu wrapper-->
          </div>
          <!--end::Chat-->
          <!--begin::User-->
          <div class="d-flex align-items-stretch" id="kt_header_user_menu_toggle">
            <!--begin::Menu wrapper-->
            <div class="topbar-item cursor-pointer symbol px-3 px-lg-5 me-n3 me-lg-n5 symbol-30px symbol-md-35px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" data-kt-menu-flip="bottom">
              <img src="/src/assets/media/avatars/150-2.jpg" alt="metronic" />
            </div>
            <!--begin::Menu-->
            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <div class="menu-content d-flex align-items-center px-3">
                  <!--begin::Avatar-->
                  <div class="symbol symbol-50px me-5">
                    <img alt="Logo" src="/src/assets/media/avatars/150-2.jpg" />
                  </div>
                  <!--end::Avatar-->
                  <!--begin::Username-->
                  <div class="d-flex flex-column">
                    <div class="fw-bolder d-flex align-items-center fs-5">{{ auth.user?.name }}</div>
                  </div>
                  <!--end::Username-->
                </div>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu separator-->
              <div class="separator my-2"></div>
              <!--end::Menu separator-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <router-link to="/dashboard/profile" class="menu-link px-5">My Profile</router-link>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu separator-->
              <div class="separator my-2"></div>
              <!--end::Menu separator-->
              <!--begin::Menu item-->
              <div class="menu-item px-5 my-1">
                <a href="#" class="menu-link px-5">Account Settings</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <router-link to="#" class="menu-link px-5" @click="auth.logout()">Sign Out</router-link>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu-->
            <!--end::Menu wrapper-->
          </div>
          <!--end::User -->
          <!--begin::Heaeder menu toggle-->
          <div class="d-flex align-items-stretch d-lg-none px-3 me-n3" title="Show header menu">
            <div class="topbar-item" id="kt_header_menu_mobile_toggle">
              <i class="bi bi-text-left fs-1"></i>
            </div>
          </div>
          <!--end::Heaeder menu toggle-->
        </div>
        <!--end::Toolbar wrapper-->
      </div>
      <!--end::Topbar-->
    </div>
    <!--end::Wrapper-->
  </div>
  <!--end::Container-->
</div>
</template>