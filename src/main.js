import '@/assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import App from './App.vue'

import ElementPlus from 'element-plus'


const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)

app.mount('#app')
