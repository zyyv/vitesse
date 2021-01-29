import { createApp } from 'vue'
import App from './App.vue'
import route from '/@/route'
import store from '/@/store'
import '/@/styles/index.scss'

const app = createApp(App)
// app.use(Antd)
app.use(route).use(store).mount('#app')