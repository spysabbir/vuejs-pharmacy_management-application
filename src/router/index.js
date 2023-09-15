import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "../views/Auth/Login.vue";
import DashboardPage from "../views/Dashboard.vue";
const Overview = () => import("../views/dashboard/Overview.vue");
const Supplier = () => import("../views/dashboard/Supplier.vue");
const Customer = () => import("../views/dashboard/Customer.vue");

const routes = [
    {path: "/", component: LoginPage},
    {path: "/dashboard", component: DashboardPage, redirect: "dashboard/overview", children: [
        {path: "overview", component: Overview},
        {path: "supplier", component: Supplier},
        {path: "customer", component: Customer},
    ]},
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;