import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Cv from "@/views/CV.vue";
import Construction from "@/views/Construction.vue";

const routes = [
  {
    path: "/",
    name: "Construction",
    component: Construction,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/cv",
    name: "CV",
    component: Cv,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
