import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Cv from "@/views/CV.vue";

const routes = [
  {
    path: "/",
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
