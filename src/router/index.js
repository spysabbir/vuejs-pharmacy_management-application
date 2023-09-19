import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/Auth/Login.vue";
import DashboardPage from "../views/Dashboard.vue";
import Overview from "../views/dashboard/Overview.vue";
import Supplier from "../views/dashboard/Supplier.vue";
import Type from "../views/dashboard/Type.vue";
import Power from "../views/dashboard/Power.vue";
import Unit from "../views/dashboard/Unit.vue";
import Medicine from "../views/dashboard/Medicine.vue";
import Customer from "../views/dashboard/Customer.vue";
import Purchase from "../views/dashboard/Purchase.vue";
import Sale from "../views/dashboard/Sale.vue";

const routes = [
  { path: "/", component: LoginPage },
  {
    path: "/dashboard",
    component: DashboardPage,
    redirect: "/dashboard/overview",
    children: [
      { path: "overview", component: Overview },
      { path: "supplier", component: Supplier },
      { path: "type", component: Type },
      { path: "power", component: Power },
      { path: "unit", component: Unit },
      { path: "medicine", component: Medicine },
      { path: "customer", component: Customer },
      { path: "purchase", component: Purchase },
      { path: "sale", component: Sale },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
