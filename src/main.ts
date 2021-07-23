import Vue from "vue";
import App from "./App.vue";
import { appleMusicCloneUI } from "./lib/root/plugin";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(appleMusicCloneUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
