<template>
<form class="search-form">
  <div class="input-group">
    <div class="input-group-text">
      <i data-feather="search"></i>
    </div>
    <input type="text" class="form-control" id="navbarForm" placeholder="Search here...">
  </div>
</form>

<ul class="navbar-nav">
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <img class="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="profile">
    </a>
    <div class="dropdown-menu p-0" aria-labelledby="profileDropdown">
      <div class="d-flex flex-column align-items-center border-bottom px-5 py-3">
        <div class="mb-3">
          <img class="wd-80 ht-80 rounded-circle" src="https://via.placeholder.com/80x80" alt="">
        </div>
        <div class="text-center">
          <p class="tx-16 fw-bolder">Amiah Burton</p>
          <p class="tx-12 text-muted">amiahburton@gmail.com</p>
        </div>
      </div>
      <ul class="list-unstyled p-1">
        <li class="dropdown-item py-2">
          <a href="pages/general/profile.html" class="text-body ms-0">
            <i class="me-2 icon-md" data-feather="user"></i>
            <span>Profile</span>
          </a>
        </li>
        <li class="dropdown-item py-2">
          <router-link to="#" class="text-body ms-0" @click="logout">
            <i class="me-2 icon-md" data-feather="log-out"></i>
            <span>Log Out</span>
          </router-link>
        </li>
      </ul>
    </div>
  </li>
</ul>
</template>

<script>
export default {
  data: () => ({
    
  }),
  methods: {
    logout() {
      localStorage.removeItem("accessToken");
      location.href = "/";
    }
  }
}
</script>