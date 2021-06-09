import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import About from "../views/About.vue";
import SearchBy from "../views/SearchBy.vue";
import Search from "../views/Search.vue";
import ContactUs from "../views/ContactUs.vue";
import ConfirmBooking from "../views/ConfirmBooking.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import DoctorLayout from "../layouts/DoctorLayout.vue";
import HeaderLayout from "../layouts/HeaderLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import LifeAtKetofan from "../modules/About/LifeAtKetofan.vue";
import DoctorAppointments from "../modules/DoctorPanel/DoctorAppointments.vue";
import DoctorWorkingHours from "../modules/DoctorPanel/DoctorWorkingHours.vue";
import DoctorsRequests from "../modules/AdminPanel/DoctorsRequests.vue";
import Feedbacks from "../modules/AdminPanel/Feedbacks.vue";
import OurTeam from "../modules/About/OurTeam.vue";
import AboutUs from "../modules/About/AboutUS.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import DoctorRequest from "../views/DoctorRequest.vue";
import { $auth } from "../services/auth";
import auth from "../store/modules/auth";

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
      {
        path: "/confirm/:doctorId/:id",
        name: "confirmBooking",
        component: ConfirmBooking,
      },
    ],
    beforeEnter: (to, from, next) => {
      if ($auth.getRole() === "doctor") next({ name: "DoctorAppointments" });
      else next();
    },
  },
  {
    path: "/doctor",
    name: "DoctorLayout",
    component: DoctorLayout,
    redirect: (to) => {
      return { path: "/doctor/appointments" };
    },
    children: [
      {
        path: "appointments",
        name: "DoctorWorkingHours",
        component: DoctorWorkingHours,
      },
      {
        path: "appointments",
        name: "DoctorAppointments",
        component: DoctorAppointments,
      },
    ],
    beforeEnter: (to, from, next) => {
      if ($auth.getRole() !== "doctor") next({ name: "Home" });
      else next();
    },
  },
  {
    path: "/admin",
    name: "AdminLayout",
    component: AdminLayout,
    redirect: (to) => {
      return { path: "/admin/feedbacks" };
    },
    children: [
      {
        path: "feedbacks",
        name: "Feedbacks",
        component: Feedbacks,
      },
      {
        path: "doctors-requests",
        name: "DoctorsRequests",
        component: DoctorsRequests,
      },
    ],
    beforeEnter: (to, from, next) => {
      if ($auth.getRole() !== "admin" && $auth.getRole() !== "super_admin")
        next({ name: "Home" });
      else next();
    },
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
        path: "/search/:specialization/:area/:insurance?",
        name: "search",
        component: Search,
      },
      {
        path: "/contact-us",
        name: "contact-us",
        component: ContactUs,
      },
      {
        path: "/doctor-request",
        name: "doctor-request",
        component: DoctorRequest,
      },
      {
        path: "/:catchAll(.*)",
        name: "not-found",
        component: NotFound,
      },
    ],
    beforeEnter: (to, from, next) => {
      if ($auth.getRole() === "doctor") next({ name: "DoctorAppointments" });
      else next();
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
