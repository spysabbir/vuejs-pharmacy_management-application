import { axiosPrivate } from "./axiosInstance"

export default {
    // Customer
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
    },

    // Type
    getType() {
        return axiosPrivate.get("/type");
    },
    addType(payload) {
        return axiosPrivate.post("/type", payload);
    },
    editType(payload) {
        return axiosPrivate.put("/type/" + payload.id, payload);
    },
    deleteType(id) {
        return axiosPrivate.delete("/type/" + id);
    },

    // Power
    getPower() {
        return axiosPrivate.get("/power");
    },
    addPower(payload) {
        return axiosPrivate.post("/power", payload);
    },
    editPower(payload) {
        return axiosPrivate.put("/power/" + payload.id, payload);
    },
    deletePower(id) {
        return axiosPrivate.delete("/power/" + id);
    },
}