import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Login from '@/views/Login.vue'

createApp(App).use(router).mount('#app')
