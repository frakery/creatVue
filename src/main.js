// import './assets/main.css'

import { createApp } from 'vue'
import App from './WatchQA.vue'
import ChildVue from '@/components/Child.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.component('ChildComp',ChildVue)
app.use(ElementPlus)

app.mount('#app')

