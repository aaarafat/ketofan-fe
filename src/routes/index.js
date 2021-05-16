import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import HeaderLayout from "../layouts/HeaderLayout.vue";
import LifeAtKetofan from "../modules/About/LifeAtKetofan.vue";
import OurTeam from "../modules/About/OurTeam.vue";
import AboutUs from "../modules/About/AboutUS.vue";

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
  // {
  //   path: "/press",
  //   name: "press",
  //   component: Press,
  // },
  // {
  //   path: "/speciality",
  //   name: "speciality",
  //   component: Speciality,
  // },
  // {
  //   path: "/area",
  //   name: "area",
  //   component: Area,
  // },
  // {
  //   path: "/insurance",
  //   name: "insurance",
  //   component: Insurance,
  // },
  // {
  //   path: "/hospital",
  //   name: "hospital",
  //   component: Hospital,
  // },
  // {
  //   path: "/center",
  //   name: "center",
  //   component: Center,
  // },
  // {
  //   path: "/join-us",
  //   name: "join-us",
  //   component: JoinUs,
  // },
  // {
  //   path: "/contact-us",
  //   name: "contact-us",
  //   component: ContactUs,
  // },
  // {
  //   path: "/terms",
  //   name: "terms",
  //   component: Terms,
  // },
  // {
  //   path: "/terms",
  //   name: "terms",
  //   component: Terms,
  // },
  // {
  //   path: "/privacy-policy",
  //   name: "privacy-policy",
  //   component: PrivacyPolicy,
  // },
  // {
  //   path: "/doctors-privacy-policy",
  //   name: "doctors-privacy-policy",
  //   component: DoctorsPrivacyPolicy,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
