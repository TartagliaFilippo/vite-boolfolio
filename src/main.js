import { createApp } from "vue";

// importo le router
import { router } from "./router";

// Bootstrap JS
import * as Bootstrap from "bootstrap";

import "./assets/scss/style.scss";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
