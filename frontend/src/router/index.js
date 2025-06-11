import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "@/views/AuthPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "AuthPage",
      component: AuthPage,
    },
  ],
});

export default router;
