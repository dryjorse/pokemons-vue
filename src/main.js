import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createRedux } from "./storePlugin";
import { store } from "./store/store.ts";
import App from "./App.vue";
import "./assets/main.css";

const app = createApp(App);

const vueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, retry: 1 },
    },
  },
};

app.use(createRedux(store));
app.use(VueQueryPlugin, vueQueryPluginOptions);

app.mount("#app");
