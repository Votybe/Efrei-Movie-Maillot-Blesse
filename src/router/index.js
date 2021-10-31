import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Accueil.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/getallfilms",
    name: "GetAllFIlms",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GetAllFIlms.vue"),
  },

  {
    path: "/getallfilmstest",
    name: "GetAllFIlmsTest",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GetAllFIlmsTest.vue"),
  },
  {
    path: "/getallfilmstestdeux",
    name: "GetAllFilmsTestDeux",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/GetAllFilmsTestDeux.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
