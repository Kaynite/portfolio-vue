import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Skills from "../views/Skills.vue";
import Projects from "../views/Projects.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
