import Vue from "vue";
import VueRouter from "vue-router";
import defaultLayout from "@/components/layouts/halyk-default-layout.vue";
import home from "@/views/halyk-home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: defaultLayout,
    children: [
      {
        path: "/",
        name: "dashboard",
        component: home,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
