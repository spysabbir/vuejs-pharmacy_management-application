import { axiosPrivate } from "./axiosInstance"

export default {
    getSupplier() {
        return axiosPrivate.get("/supplier");
    },
    addSupplier(payload) {
        return axiosPrivate.post("/supplier", payload);
    },
    editSupplier(payload) {
        return axiosPrivate.put("/supplier" + payload.id, payload);
    },
    deleteSupplier(id) {
        return axiosPrivate.delete("/supplier" + id);
    }
}