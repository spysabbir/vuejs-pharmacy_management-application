<template>
    <li class="nav-item nav-category">Main</li>
        <li class="nav-item">
          <router-link to="overview" class="nav-link">
            <i class="link-icon" data-feather="box"></i>
            <span class="link-title">Dashboard</span>
          </router-link>
        </li>

        <li class="nav-item nav-category">web apps</li>
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
        </li>

        <li class="nav-item">
          <router-link to="supplier" class="nav-link">
            <i class="link-icon" data-feather="message-square"></i>
            <span class="link-title">Supplier</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="customer" class="nav-link">
            <i class="link-icon" data-feather="message-square"></i>
            <span class="link-title">Customer</span>
          </router-link>
        </li>

</template>