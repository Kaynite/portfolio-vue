import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./fontawesome/css/all.min.css";
import "./scss/main.scss";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
