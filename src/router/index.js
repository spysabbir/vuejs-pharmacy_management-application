import { createRouter, createWebHistory } from "vue-router";
import { authStore } from '../store/store';
import showAlert from './../helpers/alert';

import HomePage from "../views/Home.vue";
import LoginPage from "../views/auth/Login.vue";
import DashboardView from "../views/Dashboard.vue";
import OverviewView from "../views/dashboard/Overview.vue";
import ProfileView from "../views/dashboard/Profile.vue";
import DefaultSettings from "../views/dashboard/DefaultSettings.vue";
import Supplier from "../views/dashboard/Supplier.vue";
import Type from "../views/dashboard/Type.vue";
import Power from "../views/dashboard/Power.vue";
import Unit from "../views/dashboard/Unit.vue";
import Rack from "../views/dashboard/Rack.vue";
import Medicine from "../views/dashboard/Medicine.vue";
import Customer from "../views/dashboard/Customer.vue";
import Purchase from "../views/dashboard/purchase/Purchase.vue";
import PurchaseList from "../views/dashboard/purchase/PurchaseList.vue";
import PurchaseInvoice from "../views/dashboard/purchase/PurchaseInvoice.vue";
import Sale from "../views/dashboard/sale/Sale.vue";
import SaleList from "../views/dashboard/sale/SaleList.vue";
import SaleInvoice from "../views/dashboard/sale/SaleInvoice.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
    redirect: "/dashboard/overview",
    children: [
      { path: 'overview', name: 'Overview', component: OverviewView, meta: { requiresAuth: true } },
      { path: 'profile', name: 'Profile', component: ProfileView, meta: { requiresAuth: true } },
      { path: 'default/settings', name: 'DefaultSettings', component: DefaultSettings, meta: { requiresAuth: true } },
      { path: "supplier", component: Supplier, meta: { requiresAuth: true } },
      { path: "type", component: Type, meta: { requiresAuth: true } },
      { path: "power", component: Power, meta: { requiresAuth: true } },
      { path: "unit", component: Unit, meta: { requiresAuth: true } },
      { path: "rack", component: Rack, meta: { requiresAuth: true } },
      { path: "medicine", component: Medicine, meta: { requiresAuth: true } },
      { path: "customer", component: Customer, meta: { requiresAuth: true } },
      { path: "purchase", component: Purchase, meta: { requiresAuth: true } },
      { path: "purchase/list", component: PurchaseList, meta: { requiresAuth: true } },
      { path: "purchase/invoice/:id", component: PurchaseInvoice, meta: { requiresAuth: true } },
      { path: "sale", component: Sale, meta: { requiresAuth: true } },
      { path: "sale/list", component: SaleList, meta: { requiresAuth: true } },
      { path: "sale/invoice/:id", component: SaleInvoice, meta: { requiresAuth: true } },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    showAlert('error', 'You need to login to access this page.');
    next('/login');
  } else if (to.path === '/login' && authStore.isAuthenticated) {
    location.href = "/dashboard";
  } else {
    next();
  }
});

export default router;
