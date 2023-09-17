<template>
<div class="main-wrapper">

  <!-- sidebar -->
  <nav class="sidebar">
    <div class="sidebar-header">
      <a href="#" class="sidebar-brand">
        Spy <span>Pharmacy</span>
      </a>
      <div class="sidebar-toggler not-active">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="sidebar-body">
      <TheSideber></TheSideber>
    </div>
  </nav>
  <nav class="settings-sidebar">
    <div class="sidebar-body">
      <a href="#" class="settings-sidebar-toggler">
        <i data-feather="settings"></i>
      </a>
      <div class="theme-wrapper">
      
      </div>
    </div>
  </nav>
  <!-- sidebar -->

  <div class="page-wrapper">
      
    <!-- navbar -->
    <nav class="navbar">
      <a href="#" class="sidebar-toggler">
        <i data-feather="menu"></i>
      </a>
      <div class="navbar-content">
        <TheHeader></TheHeader>
      </div>
    </nav>
    <!-- navbar -->

    <div class="page-content">

      <router-view></router-view>

    </div>

    <!-- footer -->
    <footer class="footer d-flex flex-column flex-md-row align-items-center justify-content-between px-4 py-3 border-top small">
      <p class="text-muted mb-1 mb-md-0">Copyright © 2023 <a href="#" target="_blank">Spy Sabbir</a>.</p>
      <p class="text-muted">Handcrafted With <i class="mb-1 text-primary ms-1 icon-sm" data-feather="heart"></i></p>
    </footer>
    <!-- footer -->

  </div>
</div>
</template>

<script>
import TheSideber from '../components/TheSideber.vue';
import TheHeader from '../components/TheHeader.vue';
import { setPrivateHeaders } from "../service/axiosInstance";
export default {
  components: {
    TheSideber,
    TheHeader,
  },
  mounted() {
    setPrivateHeaders();
  }
}
</script>