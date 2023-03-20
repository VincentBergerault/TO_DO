import { createApp } from "vue";
import { store } from "./store";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";

createApp(App).use(store).use(vuetify).use(router).mount("#app");
