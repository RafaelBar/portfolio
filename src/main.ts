import { createApp, h } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

createApp({ render: () => h(App) })
  .use(store)
  .use(router)
  .mount("#app");
