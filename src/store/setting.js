import { reactive } from 'vue'
import showAlert from '../helpers/alert'
import { authStore } from './store'

const setting = reactive({
    defaultSetting: {},
    fetchDefaultSetting() {
        authStore.fetchProtectedApi('default/settings', {}, 'GET')
        .then((res) => {
            this.defaultSetting = res.data;
        }).catch(err => {
            showAlert('error', err.response.data.message)
        })
    },
});

export { setting };