import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import HeaderLayout from "../layouts/HeaderLayout.vue";

const routes = [
  {
    path: "",
    name: "DefaultLayout",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ],
  },
  {
    path: "",
    name: "HeaderLayout",
    component: HeaderLayout,
    children: [
      {
        path: "/about",
        name: "About",
        component: Home,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
