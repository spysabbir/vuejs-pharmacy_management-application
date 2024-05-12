import { reactive } from 'vue'
import router from '../router'
import { purchase } from './purchase'
import { wishlist } from './wishlist'
const authStore = reactive({
    apiBase: 'https://backend-pharmacy-management.spysabbir.com/api/',
    // apiBase: 'http://127.0.0.1:8000/api/',
    isAuthenticated: localStorage.getItem('auth') == 1,
    user: JSON.parse(localStorage.getItem('user')),
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
            if (res.success) {
                authStore.isAuthenticated = true
                authStore.user = res.data
                localStorage.setItem('auth', 1)
                localStorage.setItem('user', JSON.stringify(res.data))
                location.href = "/dashboard";
            }
        });
    },
    logout() {
        authStore.isAuthenticated = false
        authStore.user = {}
        localStorage.setItem('auth', 0)
        localStorage.setItem('user', '{}')
        purchase.items = {}
        purchase.saveCartInLocalStorage()
        wishlist.items = []
        router.push('/login')
    },
    getUserToken() {
        return authStore.user.token
    }
})

export { authStore }