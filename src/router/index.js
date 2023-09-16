import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "../views/Auth/Login.vue";
import DashboardPage from "../views/Dashboard.vue";
import Overview from "../views/dashboard/Overview.vue";
import Supplier from "../views/dashboard/Supplier.vue";
import Customer from "../views/dashboard/Customer.vue";
import Type from "../views/dashboard/Type.vue";
import Medicine from "../views/dashboard/Medicine.vue";

const routes = [
    {path: "/", component: LoginPage},
    {path: "/dashboard", component: DashboardPage, redirect: "/dashboard/overview",
        children: [
            {path: "/dashboard/overview", component: Overview},
            {path: "/dashboard/supplier", component: Supplier},
            {path: "/dashboard/customer", component: Customer},
            {path: "/dashboard/type", component: Type},
            {path: "/dashboard/medicine", component: Medicine},
        ]
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;