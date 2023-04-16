import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
// import ScrollPicker from '../node_modules/vue3-scroll-picker.common';

const app = createApp(App)

app.use(createPinia())
// app.use(ScrollPicker)
app.use(router)

app.mount('#app')
