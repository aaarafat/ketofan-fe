import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import { $api } from "./services/api";

createApp(App).use(router).use(store).provide("api", $api).mount("#app");
