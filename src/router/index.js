import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      name: "homepage",
      path: "/",
      component: HomePage,
    },
    {
      name: "portfolio",
      path: "/portfolio",
      component: PortfolioPage,
    },
    {
      name: "project-detail",
      path: "/portfolio/:id",
      component: ProjectDetailPage,
    },
  ],
});

export { router };
