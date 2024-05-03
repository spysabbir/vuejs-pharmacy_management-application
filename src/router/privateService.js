import { axiosPrivate } from "./axiosInstance"

export default {

  
    editUserProfile(payload) {
        return axiosPrivate.patch("/profile/update/", payload);
    },
    editUserPassword(payload) {
        return axiosPrivate.put("/password/update/", payload);
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
    getPurchaseList() {
        return axiosPrivate.get("/purchase");
    },
    viewPurchaseData(id) {
        return axiosPrivate.get("/purchase/" + id);
    },
    deletePurchaseData(id) {
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

    // Sale
    sellingNowStore(payload) {
        return axiosPrivate.post("/sale", payload);
    },
    getSaleList() {
        return axiosPrivate.get("/sale");
    },
    viewSaleData(id) {
        return axiosPrivate.get("/sale/" + id);
    },
    deleteSaleList(id) {
        return axiosPrivate.delete("/sale/" + id);
    },
}