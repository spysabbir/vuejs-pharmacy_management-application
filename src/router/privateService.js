import { axiosPrivate } from "./axiosInstance"

export default {



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