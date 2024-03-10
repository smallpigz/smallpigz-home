import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// pinia以及其持久化
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 全局样式
import '@/styles/global.scss'
import 'animate.css/animate.min.css' // 动画效果

const app = createApp(App)
app.use(router) // 路由
app.use(pinia) // 仓库
app.mount('#app') // 挂载
