<template>
<ul class="nav">
  <li class="nav-item nav-category">Main</li>
  <li class="nav-item" :class="{ 'active': this.$route.path === '/dashboard/overview' }">
    <router-link to="/dashboard/overview" class="nav-link" >
      <i class="link-icon" data-feather="box"></i>
      <span class="link-title">Dashboard</span>
    </router-link>
  </li>

  <!-- <li class="nav-item nav-category">web apps</li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="collapse" href="#emails" role="button" aria-expanded="false" aria-controls="emails">
      <i class="link-icon" data-feather="mail"></i>
      <span class="link-title">Email</span>
      <i class="link-arrow" data-feather="chevron-down"></i>
    </a>
    <div class="collapse" id="emails">
      <ul class="nav sub-menu">
        <li class="nav-item">
          <a href="pages/email/inbox.html" class="nav-link">Inbox</a>
        </li>
        <li class="nav-item">
          <a href="pages/email/read.html" class="nav-link">Read</a>
        </li>
        <li class="nav-item">
          <a href="pages/email/compose.html" class="nav-link">Compose</a>
        </li>
      </ul>
    </div>
  </li> -->

  <li class="nav-item" :class="{ 'active': this.$route.path === '/dashboard/supplier' }">
    <router-link to="/dashboard/supplier" class="nav-link">
      <i class="link-icon" data-feather="message-square"></i>
      <span class="link-title">Supplier</span>
    </router-link>
  </li>
  <li class="nav-item" :class="{ 'active': this.$route.path === '/dashboard/type' }">
    <router-link to="/dashboard/type" class="nav-link">
      <i class="link-icon" data-feather="message-square"></i>
      <span class="link-title">Type</span>
    </router-link>
  </li>
  <li class="nav-item" :class="{ 'active': this.$route.path === '/dashboard/power' }">
    <router-link to="/dashboard/power" class="nav-link">
      <i class="link-icon" data-feather="message-square"></i>
      <span class="link-title">Power</span>
    </router-link>
  </li>
  <li class="nav-item" :class="{ 'active': this.$route.path === '/dashboard/unit' }">
    <router-link to="/dashboard/unit" class="nav-link">
      <i class="link-icon" data-feather="message-square"></i>
      <span class="link-title">Unit</span>
    </router-link>
  </li>
  <li class="nav-item" :class="{ 'active': this.$route.path === '/dashboard/medicine' }">
    <router-link to="/dashboard/medicine" class="nav-link">
      <i class="link-icon" data-feather="message-square"></i>
      <span class="link-title">Medicine</span>
    </router-link>
  </li>
  <li class="nav-item" :class="{ 'active': this.$route.path === '/dashboard/customer' }">
    <router-link to="/dashboard/customer" class="nav-link">
      <i class="link-icon" data-feather="message-square"></i>
      <span class="link-title">Customer</span>
    </router-link>
  </li>
</ul>
</template>