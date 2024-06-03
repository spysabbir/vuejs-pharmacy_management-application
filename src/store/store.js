import { reactive } from 'vue'
import router from '../router'
import { purchase } from './purchase'
import { sale } from './sale'
import showAlert from './../helpers/alert';

const authStore = reactive({
    apiBase: 'https://backend-pharmacy-management.spysabbir.com/api/',

    isAuthenticated: localStorage.getItem('auth') == 1,
    user: JSON.parse(localStorage.getItem('user') || '{}'),
    defaultSettings: JSON.parse(localStorage.getItem('defaultSettings') || '{}'),
    async fetchPublicApi(endPoint = "", params = {}, requestType = "GET") {
        let request = {
            method: requestType.toUpperCase(),
            headers: {
                "Access-Control-Allow-Origin": "*",
                Accept: "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json",
            },
        }

        if (requestType.toUpperCase() == "POST" || "PUT" == requestType.toUpperCase()) {
            request.body = JSON.stringify(params);
        }

        const res = await fetch(authStore.apiBase + endPoint, request);

        const response = await res.json();
        return response;
    },
    async fetchProtectedApi(endPoint = "", params = {}, requestType = "GET") {
        const token = authStore.getUserToken()
        let request = {
            method: requestType.toUpperCase(),
            headers: {
                "Access-Control-Allow-Origin": "*",
                Accept: "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json",
                'Authorization': `Bearer ${token}`,
            },
        }

        if (requestType.toUpperCase() == "POST" || "PUT" == requestType.toUpperCase()) {
            request.body = JSON.stringify(params);
        }

        const res = await fetch(authStore.apiBase + endPoint, request);

        const response = await res.json();
        return response;
    },
    async authenticate(email, password) {
        try {
            const res = await authStore.fetchPublicApi('login', { email, password }, 'POST');
            authStore.isAuthenticated = true
            authStore.user = res.data
            localStorage.setItem('auth', 1)
            localStorage.setItem('user', JSON.stringify(res.data))

            await authStore.fetchDefaultSetting()
            
            location.href = "/dashboard";
        } catch (err) {
            showAlert('error', err.message || 'Failed to authenticate user.');
        }
    },
    async fetchDefaultSetting() {
        try {
            const res = await authStore.fetchProtectedApi('default/settings', {}, 'GET');
            authStore.defaultSettings = res.data
            localStorage.setItem('defaultSettings', JSON.stringify(res.data));
        } catch (err) {
            showAlert('error', err.message || 'Failed to fetch default settings.');
        }
    },
    logout() {
        authStore.isAuthenticated = false
        authStore.user = {}
        localStorage.setItem('defaultSettings', '{}')
        localStorage.setItem('auth', 0)
        localStorage.setItem('user', '{}')
        purchase.emptyCart()
        sale.emptyCart()
        router.push('/login')
    },
    getUserToken() {
        return authStore.user.token
    },
})
export { authStore }