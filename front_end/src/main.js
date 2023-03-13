import { createApp } from "vue";
import { store } from "./store";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";

createApp(App).use(store).use(vuetify).mount("#app");
