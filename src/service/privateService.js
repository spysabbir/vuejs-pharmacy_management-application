import { axiosPrivate } from "./axiosInstance"

export default {

    // Overview
    getOverview() {
        return axiosPrivate.get("/overview");
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

    // Medicine
    getMedicine() {
        return axiosPrivate.get("/medicine");
    },
    addMedicine(payload) {
        return axiosPrivate.post("/medicine", payload);
    },
    editMedicine(payload) {
        return axiosPrivate.put("/medicine/" + payload.id, payload);
    },
    deleteMedicine(id) {
        return axiosPrivate.delete("/medicine/" + id);
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

    // Unit
    getUnit() {
        return axiosPrivate.get("/unit");
    },
    addUnit(payload) {
        return axiosPrivate.post("/unit", payload);
    },
    editUnit(payload) {
        return axiosPrivate.put("/unit/" + payload.id, payload);
    },
    deleteUnit(id) {
        return axiosPrivate.delete("/unit/" + id);
    },

    // Rack
    getRack() {
        return axiosPrivate.get("/rack");
    },
    addRack(payload) {
        return axiosPrivate.post("/rack", payload);
    },
    editRack(payload) {
        return axiosPrivate.put("/rack/" + payload.id, payload);
    },
    deleteRack(id) {
        return axiosPrivate.delete("/rack/" + id);
    },

    // Purchase
    purchasingNowStore(payload) {
        return axiosPrivate.post("/purchase", payload);
    },
    getPurchaseHistory() {
        return axiosPrivate.get("/purchase");
    },
    deletePurchaseHistory(id) {
        return axiosPrivate.delete("/purchase/" + id);
    },

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
}