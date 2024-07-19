import { createApp } from "vue"
import AppComponent from "./App.vue"
import { i18n, pinia, router } from "@/app/plugins"
import { vMaska } from "maska"

const app = createApp(AppComponent)

app.directive("maska", vMaska)

app.use(router)
app.use(i18n)
app.use(pinia)

app.mount("#app")
