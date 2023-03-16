/*
import * as Vue from "vue";
import { store } from "./store";
//
import vuetify from "./plugins/vuetify";
import App from "./App.vue";

const app = new Vue({
  el: "#app",
  store,
  vuetify,
  // router,
  components: { App },
});
app.mount("#app");
*/

import * as Vue from "vue";
import { store } from "./store";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:5010/",
});

Vue.createApp(App).use(store).use(vuetify).use(router).mount("#app");
