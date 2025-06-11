import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "@/views/AuthPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import HomePage from "@/views/HomePage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "AuthPage",
      component: AuthPage,
    },
    {
      path: "/signup",
      name: "SignUpPage",
      component: SignUpPage,
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage,
    },
  ],
});

export default router;
