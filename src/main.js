import { createApp } from "vue"
import { store } from "./store"
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
router.isReady().then(() => app.mount("#app"))

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("ServiceWorker registrado: ", registration);
      })
      .catch((error) => {
        console.log("Falha ao registrar ServiceWorker: ", error);
      });
  });
}