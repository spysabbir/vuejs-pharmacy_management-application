import { axiosPrivate } from "./axiosInstance"

export default {
    getCustomer() {
        return axiosPrivate.get("/customer");
    },
    addCustomer(payload) {
        return axiosPrivate.post("/customer", payload);
    },
    editCustomer(payload) {
        return axiosPrivate.put("/customer/" + payload.id, payload);
    },
    deleteCustomer(id) {
        return axiosPrivate.delete("/customer/" + id);
    }
}