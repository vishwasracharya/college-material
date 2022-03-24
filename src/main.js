import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/bootstrap.css'
import './assets/styles/custom.css'

const app = createApp(App)
app.use(router)
app.mount('#app')