import { createRouter, createWebHistory } from "vue-router";
import {authStore} from '../store/store'

import HomePage from "../views/Home.vue";
import LoginPage from "../views/auth/Login.vue";
import DashboardView from "../views/Dashboard.vue";
import OverviewView from "../views/dashboard/Overview.vue";
import ProfileView from "../views/dashboard/Profile.vue";
import Supplier from "../views/dashboard/Supplier.vue";
import Type from "../views/dashboard/Type.vue";
import Power from "../views/dashboard/Power.vue";
import Unit from "../views/dashboard/Unit.vue";
import Rack from "../views/dashboard/Rack.vue";
// import Medicine from "../views/dashboard/Medicine.vue";
import Customer from "../views/dashboard/Customer.vue";
// import PurchaseCreate from "../views/dashboard/purchase/PurchaseCreate.vue";
// import PurchaseList from "../views/dashboard/purchase/PurchaseList.vue";
// import SaleCreate from "../views/dashboard/sale/SaleCreate.vue";
// import SaleList from "../views/dashboard/sale/SaleList.vue";

const routes = [
  { 
    path: "/", 
    component: HomePage 
  },
  { 
    path: "/login", 
    component: LoginPage 
  },
  { 
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
    redirect: "/dashboard/overview",
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: OverviewView
      },
      {
        path: 'profile',
        name: 'Profile',
        component: ProfileView
      },
      { path: "supplier", component: Supplier },
      { path: "type", component: Type },
      { path: "power", component: Power },
      { path: "unit", component: Unit },
      { path: "rack", component: Rack },
    //   { path: "medicine", component: Medicine },
      { path: "customer", component: Customer },
    //   { path: "purchase/create", component: PurchaseCreate },
    //   { path: "purchase/list", component: PurchaseList },
    //   { path: "sale/create", component: SaleCreate },
    //   { path: "sale/list", component: SaleList },
    ]
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !authStore.isAuthenticated){
      next('/login')
  }else{
      next()
  }
})

export default router;
