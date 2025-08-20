/**
import Vue from "vue"
import App from "./App.vue"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import "@mdi/font/css/materialdesignicons.css"
import "./styles/main.css";


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app")

*/


import { createApp } from 'vue'
import "./registerServiceWorker"
import { store } from './store'
import { router } from "./router"
import { vuetify, vuetifyCustomRules } from "./plugins/vuetify"
import "@mdi/font/css/materialdesignicons.css"
import "./styles/main.css"
import App from "./App.vue"

const app = createApp(App)
app.use(store)
app.use(router)
app.use(vuetifyCustomRules)
app.use(vuetify)
app.config.productionTip = false
router.isReady().then(() => app.mount('#app'))