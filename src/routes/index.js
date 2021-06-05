import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import About from "../views/About.vue";
import SearchBy from "../views/SearchBy.vue";
import Search from "../views/Search.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import DoctorLayout from "../layouts/DoctorLayout.vue";
import HeaderLayout from "../layouts/HeaderLayout.vue";
import LifeAtKetofan from "../modules/About/LifeAtKetofan.vue";
import DoctorAppointments from "../modules/DoctorPanel/DoctorAppointments.vue";
import DoctorWorkingHours from "../modules/DoctorPanel/DoctorWorkingHours.vue";
import OurTeam from "../modules/About/OurTeam.vue";
import AboutUs from "../modules/About/AboutUS.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
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
    path: "/doctor",
    name: "DoctorLayout",
    component: DoctorLayout,
    children: [
      {
        path: "working-hours",
        name: "DoctorWorkingHours",
        component: DoctorWorkingHours,
      },
      {
        path: "appointments",
        name: "DoctorAppointments",
        component: DoctorAppointments,
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
      {
        path: "/speciality",
        name: "speciality",
        component: SearchBy,
      },
      {
        path: "/area",
        name: "area",
        component: SearchBy,
      },
      {
        path: "/insurance",
        name: "insurance",
        component: SearchBy,
      },
      {
        path: "/search/:speciality/:area/:insurance?",
        name: "search",
        component: Search,
      },
      {
        path: "/:catchAll(.*)",
        name: "not-found",
        component: NotFound,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
