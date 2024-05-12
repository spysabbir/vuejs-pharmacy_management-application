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