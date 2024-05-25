import { reactive } from 'vue'
import router from '../router'
import { purchase } from './purchase'
import { sale } from './sale'

const authStore = reactive({
    // apiBase: 'https://backend-pharmacy-management.spysabbir.com/api/',
    apiBase: 'http://localhost:8000/api/',

    isAuthenticated: localStorage.getItem('auth') == 1,
    user: JSON.parse(localStorage.getItem('user')),
    defaultSettings: JSON.parse(localStorage.getItem('defaultSettings')),
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
    authenticate(email, password) {
        authStore.fetchPublicApi('login', { email, password }, 'POST')
        .then(res => {
            authStore.isAuthenticated = true
            authStore.user = res.data
            localStorage.setItem('auth', 1)
            localStorage.setItem('user', JSON.stringify(res.data))
            location.href = "/dashboard";
        }).catch(err => {
            showAlert('error', err.message || 'Failed to authenticate user.');
        })
    },
    fetchDefaultSetting() {
        authStore.fetchProtectedApi('default/settings', {}, 'GET')
        .then((res) => {
            localStorage.setItem('defaultSettings', JSON.stringify(res.data));
		}).catch(err => {
			showAlert('error', err.message || 'Failed to fetch default settings.');
        })
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