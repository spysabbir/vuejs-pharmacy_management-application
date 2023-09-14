import { createApp } from 'vue';
import App from './App.vue';

import mitt from 'mitt'
import router from './router';


let eventBus = mitt();

const app = createApp(App);

app.config.globalProperties.$eventBus = eventBus;

app.use(router);
app.mount('#app');