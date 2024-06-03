<script setup>
import TheSideber from '../components/TheSideber.vue';
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
</script>

<template>
<!--begin::Main-->

<!--begin::Root-->
<div class="d-flex flex-column flex-root">
  <!--begin::Page-->
  <div class="page d-flex flex-row flex-column-fluid">

    <!--begin::Aside-->
    <TheSideber></TheSideber>
    <!--end::Aside-->

    <!--begin::Wrapper-->
    <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

      <!--begin::Header-->
      <TheHeader></TheHeader>
      <!--end::Header-->

      <!--begin::Content-->
      <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <router-view></router-view>
      </div>
      <!--end::Content-->

      <!--begin::Footer-->
      <TheFooter></TheFooter>
      <!--end::Footer-->

    </div>
    <!--end::Wrapper-->

  </div>
  <!--end::Page-->
</div>
<!--end::Root-->

<!--begin::Drawers-->

<!--begin::Activities drawer-->
<div id="kt_activities" class="bg-white" data-kt-drawer="true" data-kt-drawer-name="activities" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_activities_toggle" data-kt-drawer-close="#kt_activities_close">
  <div class="card w-100">
    <!--begin::Header-->
    <div class="card-header pe-5" id="kt_activities_header">
      <h3 class="card-title fw-bolder text-dark">Activity Log</h3>
      <div class="card-toolbar">
        <button type="button" class="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
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
        </button>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body position-relative" id="kt_activities_body">
      <!--begin::Content-->
      <div id="kt_activities_scroll" class="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_activities_body" data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" data-kt-scroll-offset="5px">
        <!--begin::Timeline items-->
        <div class="timeline">
          <!--begin::Timeline item-->
          <div class="timeline-item">
            <!--begin::Timeline line-->
            <div class="timeline-line w-40px"></div>
            <!--end::Timeline line-->
            <!--begin::Timeline content-->
            <div class="timeline-content mb-10 mt-n1">
              
            </div>
            <!--end::Timeline content-->
          </div>
          <!--end::Timeline item-->
        </div>
        <!--end::Timeline items-->
      </div>
      <!--end::Content-->
    </div>
    <!--end::Body-->
    <!--begin::Footer-->
    <div class="card-footer py-5 text-center" id="kt_activities_footer">
      <a href="javascript:void(0)" class="btn btn-bg-white text-primary">View All Activities
        <!--begin::Svg Icon | path: icons/duotone/Navigation/Right-2.svg-->
        <span class="svg-icon svg-icon-3 svg-icon-primary">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <polygon points="0 0 24 0 24 24 0 24" />
              <rect fill="#000000" opacity="0.5" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width="2" height="9" rx="1" />
              <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
            </g>
          </svg>
        </span>
        <!--end::Svg Icon-->
      </a>
    </div>
    <!--end::Footer-->
  </div>
</div>
<!--end::Activities drawer-->

<!--begin::Chat drawer-->
<div id="kt_drawer_chat" class="bg-white" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle" data-kt-drawer-close="#kt_drawer_chat_close">
  <!--begin::Messenger-->
  <div class="card w-100" id="kt_drawer_chat_messenger">
    <!--begin::Card header-->
    <div class="card-header pe-5" id="kt_drawer_chat_messenger_header">
      <h3 class="card-title fw-bolder text-dark">Chat Box</h3>
      <div class="card-toolbar">
        <!--begin::Close-->
        <div class="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_chat_close">
          <!--begin::Svg Icon | path: icons/duotone/Navigation/Close.svg-->
          <span class="svg-icon svg-icon-2">
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
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->
    <!--begin::Card body-->
    <div class="card-body" id="kt_drawer_chat_messenger_body">
      <!--begin::Messages-->
      <div class="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">
        
      </div>
      <!--end::Messages-->
    </div>
    <!--end::Card body-->
    <!--begin::Card footer-->
    <div class="card-footer py-5 text-center" id="kt_drawer_chat_messenger_footer">
      <a href="javascript:void(0)" class="btn btn-bg-white text-primary">View All Chat
        <!--begin::Svg Icon | path: icons/duotone/Navigation/Right-2.svg-->
        <span class="svg-icon svg-icon-3 svg-icon-primary">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <polygon points="0 0 24 0 24 24 0 24" />
              <rect fill="#000000" opacity="0.5" transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000)" x="7.5" y="7.5" width="2" height="9" rx="1" />
              <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)" />
            </g>
          </svg>
        </span>
        <!--end::Svg Icon-->
      </a>
    </div>
    <!--end::Card footer-->
  </div>
  <!--end::Messenger-->
</div>
<!--end::Chat drawer-->

<!--begin::Exolore drawer toggle-->
<button id="kt_explore_toggle" class="btn btn-sm btn-white btn-active-primary shadow-sm position-fixed px-5 fw-bolder zindex-2 top-50 mt-10 end-0 transform-90 fs-6 rounded-top-0" title="Explore" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-trigger="hover">
  <span id="kt_explore_toggle_label">Explore</span>
</button>
<!--end::Exolore drawer toggle-->
<!--begin::Exolore drawer-->
<div id="kt_explore" class="bg-white" data-kt-drawer="true" data-kt-drawer-name="explore" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '375px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_explore_toggle" data-kt-drawer-close="#kt_explore_close">
  <!--begin::Card-->
  <div class="card shadow-none w-100">
    <!--begin::Header-->
    <div class="card-header" id="kt_explore_header">
      <h3 class="card-title fw-bolder text-gray-700">Explore</h3>
      <div class="card-toolbar">
        <button type="button" class="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_explore_close">
          <!--begin::Svg Icon | path: icons/duotone/Navigation/Close.svg-->
          <span class="svg-icon svg-icon-2">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
              <g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
                <rect fill="#000000" x="0" y="7" width="16" height="2" rx="1" />
                <rect fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1" />
              </g>
            </svg>
          </span>
          <!--end::Svg Icon-->
        </button>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body" id="kt_explore_body">
      <!--begin::Content-->
      <div id="kt_explore_scroll" class="scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_explore_body" data-kt-scroll-dependencies="#kt_explore_header, #kt_explore_footer" data-kt-scroll-offset="5px">
        
      </div>
      <!--end::Content-->
    </div>
    <!--end::Body-->
    <!--begin::Footer-->
    <div class="card-footer py-5 text-center" id="kt_explore_footer">
      <a href="javascript:void(0)" class="btn btn-primary">All</a>
    </div>
    <!--end::Footer-->
  </div>
  <!--end::Card-->
</div>
<!--end::Exolore drawer-->

<!--end::Drawers-->

<!--begin::Scrolltop-->
<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
  <!--begin::Svg Icon | path: icons/duotone/Navigation/Up-2.svg-->
  <span class="svg-icon">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <polygon points="0 0 24 0 24 24 0 24" />
        <rect fill="#000000" opacity="0.5" x="11" y="10" width="2" height="10" rx="1" />
        <path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fill-rule="nonzero" />
      </g>
    </svg>
  </span>
  <!--end::Svg Icon-->
</div>
<!--end::Scrolltop-->

<!--end::Main-->
</template>
