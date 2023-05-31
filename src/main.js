import { createApp } from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import {createPinia} from 'pinia'
import router from '../router/router.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')