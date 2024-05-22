import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/index.vue'
import Admin from './Layout/Wrapper/Admin/index.vue'
import Toaster from "@meforma/vue-toaster"
const app = createApp(App)

app.use(router)
app.use(router, Toaster)
app.component("default-layout", Default);
app.component("Ad-layout", Admin);

app.mount("#app")