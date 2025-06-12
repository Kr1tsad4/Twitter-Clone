import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import LandingPage from "@/views/LandingPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
    },
    {
      path: "/signup",
      name: "SignUpPage",
      component: LandingPage,
    },
    {
      path: "/login",
      name: "SignInPage",
      component: LandingPage,
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage,
    },
  ],
});

export default router;
