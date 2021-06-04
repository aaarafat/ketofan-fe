import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import { $api } from "./services/api";
import { $auth } from "./services/auth";

createApp(App)
  .use(router)
  .use(store)
  .provide("api", $api)
  .provide("auth", $auth)
  .mount("#app");
