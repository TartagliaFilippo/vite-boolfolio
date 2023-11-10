import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";
import PortfolioFilterTypePage from "../pages/PortfolioFilterTypePage.vue";

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
    {
      name: "portfolio-filter-type",
      path: "/portfolio-filter-type/:type_id",
      component: PortfolioFilterTypePage,
    },
  ],
});

export { router };
