import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Browse from "../views/Browse.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Browse",
    component: Browse,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
