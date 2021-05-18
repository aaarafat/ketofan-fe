import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import HeaderLayout from "../layouts/HeaderLayout.vue";
import LifeAtKetofan from "../modules/About/LifeAtKetofan.vue";
import OurTeam from "../modules/About/OurTeam.vue";
import AboutUs from "../modules/About/AboutUS.vue";
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
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
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/signup",
        name: "signup",
        component: Signup,
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
        name: "aboutLayout",
        component: About,
        children: [
          {
            path: "",
            name: "about",
            component: AboutUs,
          },
          {
            path: "/our-team",
            name: "our-team",
            component: OurTeam,
          },
          {
            path: "/life-at-ketofan",
            name: "life-at-ketofan",
            component: LifeAtKetofan,
          },
        ],
      },
    ],
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
