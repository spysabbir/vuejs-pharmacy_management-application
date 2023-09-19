import axios from "axios";

const API_BASE_URL = "https://pharmacy.spysabbir.com/api"

export const axiosPublic = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000,
});

export const axiosPrivate = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000,
});

axiosPrivate.interceptors.response.use({
    function(response) {
        return response;
    },
    function(error) {
        if(error.response && error.response.status == 401) {
            localStorage.removeItem("accessToken");
            location.href = "/";
        };

        return Promise.reject(error);
    },
});

export const setPrivateHeaders = () => {
    axiosPrivate.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
}