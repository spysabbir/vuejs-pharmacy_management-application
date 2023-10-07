<template>
<!-- <ul class="nav">
  <li class="nav-item nav-category">Main</li>
  <li class="nav-item" :class="{ 'active': this.$route.path === '/dashboard/overview' }">
    <router-link to="/dashboard/overview" class="nav-link" >
      <i class="link-icon" data-feather="box"></i>
      <span class="link-title">Dashboard</span>
    </router-link>
  </li>
  <li class="nav-item nav-category">resource</li>
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
  <li class="nav-item" :class="{ 'active': this.$route.path === '/dashboard/rack' }">
    <router-link to="/dashboard/rack" class="nav-link">
      <i class="link-icon" data-feather="message-square"></i>
      <span class="link-title">Rack</span>
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

  <li class="nav-item nav-category">resource</li>
  <li class="nav-item" :class="{ 'active': this.$route.path === '/dashboard/purchase' }">
    <router-link to="/dashboard/purchase" class="nav-link">
      <i class="link-icon" data-feather="message-square"></i>
      <span class="link-title">Purchase</span>
    </router-link>
  </li>
  <li class="nav-item" :class="{ 'active': this.$route.path === '/dashboard/sale' }">
    <router-link to="/dashboard/sale" class="nav-link">
      <i class="link-icon" data-feather="message-square"></i>
      <span class="link-title">Sale</span>
    </router-link>
  </li>

</ul> -->

<div id="kt_aside" class="aside aside-dark aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
  <!--begin::Brand-->
  <div class="aside-logo flex-column-auto" id="kt_aside_logo">
    <!--begin::Logo-->
    <a href="index.html">
      <img alt="Logo" src="assets/media/logos/logo-default.svg" class="h-15px logo" />
    </a>
    <!--end::Logo-->
    <!--begin::Aside toggler-->
    <div id="kt_aside_toggle" class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize">
      <!--begin::Svg Icon | path: icons/duotone/Navigation/Angle-double-left.svg-->
      <span class="svg-icon svg-icon-1 rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <polygon points="0 0 24 0 24 24 0 24" />
            <path d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" fill="#000000" fill-rule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)" />
            <path d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.5" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)" />
          </g>
        </svg>
      </span>
      <!--end::Svg Icon-->
    </div>
    <!--end::Aside toggler-->
  </div>
  <!--end::Brand-->
  <!--begin::Aside menu-->
  <div class="aside-menu flex-column-fluid">
    <!--begin::Aside Menu-->
    <div class="hover-scroll-overlay-y my-2 py-5 py-lg-8" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
      <!--begin::Menu-->
      <div class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true">
        <div class="menu-item">
          <router-link :class="{ 'active': this.$route.path === '/dashboard/overview' }" class="menu-link" to="/dashboard/overview">
            <span class="menu-icon">
              <i class="bi bi-house fs-3"></i>
            </span>
            <span class="menu-title">Dashboard</span>
          </router-link>
        </div>
        <div class="menu-item">
          <div class="menu-content pt-8 pb-2">
            <span class="menu-section text-muted text-uppercase fs-8 ls-1">Crafted</span>
          </div>
        </div>
        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
          <span class="menu-link">
            <span class="menu-icon">
              <i class="bi bi-archive fs-3"></i>
            </span>
            <span class="menu-title">Pages</span>
            <span class="menu-arrow"></span>
          </span>
          <div class="menu-sub menu-sub-accordion menu-active-bg">
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Profile</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="pages/profile/overview.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Overview</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/profile/projects.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Projects</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/profile/campaigns.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Campaigns</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/profile/documents.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Documents</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/profile/connections.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Connections</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/profile/activity.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Activity</span>
                  </a>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Projects</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="pages/projects/list.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">My Projects</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/projects/project.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">View Project</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/projects/targets.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Targets</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/projects/budget.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Budget</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/projects/users.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Users</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/projects/files.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Files</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/projects/activity.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Activity</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/projects/settings.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Settings</span>
                  </a>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Wizards</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="pages/wizards/horizontal.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Horizontal</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/wizards/vertical.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Vertical</span>
                  </a>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Search</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="pages/search/horizontal.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Horizontal</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/search/vertical.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Vertical</span>
                  </a>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Blog</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="pages/blog/home.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Blog Home</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/blog/post.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Blog Post</span>
                  </a>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Company</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="pages/company/about.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">About Us</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/company/pricing.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Pricing</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/company/contact.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Contact Us</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/company/team.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Our Team</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/company/licenses.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Licenses</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/company/sitemap.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Sitemap</span>
                  </a>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Careers</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="pages/careers/list.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Careers List</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/careers/apply.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Careers Apply</span>
                  </a>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">FAQ</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="pages/faq/classic.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Classic</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="pages/faq/extended.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Extended</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
          <span class="menu-link">
            <span class="menu-icon">
              <i class="bi bi-person fs-2"></i>
            </span>
            <span class="menu-title">Account</span>
            <span class="menu-arrow"></span>
          </span>
          <div class="menu-sub menu-sub-accordion menu-active-bg">
            <div class="menu-item">
              <a class="menu-link" href="account/overview.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Overview</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="account/settings.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Settings</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="account/security.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Security</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="account/billing.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Billing</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="account/statements.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Statements</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="account/referrals.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Referrals</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="account/api-keys.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">API Keys</span>
              </a>
            </div>
          </div>
        </div>
        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
          <span class="menu-link">
            <span class="menu-icon">
              <i class="bi bi-sticky fs-3"></i>
            </span>
            <span class="menu-title">Authentication</span>
            <span class="menu-arrow"></span>
          </span>
          <div class="menu-sub menu-sub-accordion menu-active-bg">
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Basic Flow</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/basic/sign-in.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Sign-in</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/basic/sign-up.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Sign-up</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/basic/two-steps.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Two-steps</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/basic/password-reset.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Password Reset</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/basic/new-password.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">New Password</span>
                  </a>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Aside Flow</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/aside/sign-in.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Sign-in</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/aside/sign-up.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Sign-up</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/aside/two-steps.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Two-steps</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/aside/password-reset.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Password Reset</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/aside/new-password.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">New Password</span>
                  </a>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Dark Flow</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/dark/sign-in.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Sign-in</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/dark/sign-up.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Sign-up</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/dark/two-steps.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Two-steps</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/dark/password-reset.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Password Reset</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/flows/dark/new-password.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">New Password</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="authentication/extended/multi-steps-sign-up.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Multi-steps Sign-up</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="authentication/extended/free-trial-sign-up.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Free Trial Sign-up</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="authentication/extended/coming-soon.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Coming Soon</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="authentication/general/welcome.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Welcome Message</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="authentication/general/verify-email.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Verify Email</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="authentication/general/password-confirmation.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Password Confirmation</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="authentication/general/deactivation.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Account Deactivation</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="authentication/general/error-404.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Error 404</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="authentication/general/error-500.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Error 500</span>
              </a>
            </div>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Email Templates</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="authentication/email/verify-email.html" target="blank">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Verify Email</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/email/invitation.html" target="blank">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Account Invitation</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/email/password-reset.html" target="blank">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Password Reset</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="authentication/email/password-change.html" target="blank">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Password Changed</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
          <span class="menu-link">
            <span class="menu-icon">
              <i class="bi bi-shield-check fs-3"></i>
            </span>
            <span class="menu-title">Modals</span>
            <span class="menu-arrow"></span>
          </span>
          <div class="menu-sub menu-sub-accordion menu-active-bg">
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">General</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="modals/general/invite-friends.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Invite Friends</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="modals/general/view-users.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">View Users</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="modals/general/upgrade-plan.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Upgrade Plan</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="modals/general/share-earn.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Share &amp; Earn</span>
                  </a>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Forms</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="modals/forms/new-target.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">New Target</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="modals/forms/new-card.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">New Card</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="modals/forms/new-address.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">New Address</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="modals/forms/create-api-key.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Create API Key</span>
                  </a>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Wizards</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="modals/wizards/two-factor-authentication.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Two Factor Auth</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="modals/wizards/create-app.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Create App</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="modals/wizards/create-account.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Create Account</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="modals/wizards/create-project.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Create Project</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="modals/wizards/offer-a-deal.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Offer a Deal</span>
                  </a>
                </div>
              </div>
            </div>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
              <span class="menu-link">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Search</span>
                <span class="menu-arrow"></span>
              </span>
              <div class="menu-sub menu-sub-accordion menu-active-bg">
                <div class="menu-item">
                  <a class="menu-link" href="modals/search/users.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Users</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="menu-link" href="modals/search/select-location.html">
                    <span class="menu-bullet">
                      <span class="bullet bullet-dot"></span>
                    </span>
                    <span class="menu-title">Select Location</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
          <span class="menu-link">
            <span class="menu-icon">
              <i class="bi bi-layers fs-3"></i>
            </span>
            <span class="menu-title">Widgets</span>
            <span class="menu-arrow"></span>
          </span>
          <div class="menu-sub menu-sub-accordion menu-active-bg">
            <div class="menu-item">
              <a class="menu-link" href="widgets/lists.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Lists</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="widgets/statistics.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Statistics</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="widgets/charts.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Charts</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="widgets/mixed.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Mixed</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="widgets/tables.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Tables</span>
              </a>
            </div>
            <div class="menu-item">
              <a class="menu-link" href="widgets/feeds.html">
                <span class="menu-bullet">
                  <span class="bullet bullet-dot"></span>
                </span>
                <span class="menu-title">Feeds</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--end::Menu-->
    </div>
  </div>
  <!--end::Aside menu-->
  <!--begin::Footer-->
  <div class="aside-footer flex-column-auto pt-5 pb-7 px-5" id="kt_aside_footer">
    <a href="documentation/getting-started.html" class="btn btn-custom btn-primary w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" title="Check out over 200 in-house components, plugins and ready for use solutions">
      <span class="btn-label">Docs &amp; Components</span>
      <!--begin::Svg Icon | path: icons/duotone/General/Clipboard.svg-->
      <span class="svg-icon btn-icon svg-icon-2">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <rect x="0" y="0" width="24" height="24" />
            <path d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z" fill="#000000" opacity="0.3" />
            <path d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z" fill="#000000" />
            <rect fill="#000000" opacity="0.3" x="7" y="10" width="5" height="2" rx="1" />
            <rect fill="#000000" opacity="0.3" x="7" y="14" width="9" height="2" rx="1" />
          </g>
        </svg>
      </span>
      <!--end::Svg Icon-->
    </a>
  </div>
  <!--end::Footer-->
</div>
</template>