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

export const setPrivateHeaders = () => {
    axiosPrivate.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
}