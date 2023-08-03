import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import VOtpInput from 'vue3-otp-input'
import i18n from './i18n.js'
import "./style.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(i18n)
app.component('v-otp-input', VOtpInput)
app.mount("#app");
