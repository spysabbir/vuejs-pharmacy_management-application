import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/Auth/Login.vue";
import DashboardPage from "../views/Dashboard.vue";
import Overview from "../views/dashboard/Overview.vue";
import Supplier from "../views/dashboard/Supplier.vue";
import Customer from "../views/dashboard/Customer.vue";
import Power from "../views/dashboard/Power.vue";
import Type from "../views/dashboard/Type.vue";
import Medicine from "../views/dashboard/Medicine.vue";

const routes = [
  { path: "/", component: LoginPage },
  {
    path: "/dashboard",
    component: DashboardPage,
    redirect: "/dashboard/overview",
    children: [
      { path: "overview", component: Overview },
      { path: "supplier", component: Supplier },
      { path: "customer", component: Customer },
      { path: "power", component: Power },
      { path: "type", component: Type },
      { path: "medicine", component: Medicine },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
