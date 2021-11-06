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
    path: "/creatoroffilm",
    name: "CreatorOfFilm",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreatorOfFilm.vue"),
  },
  {
    path: "/ameliorationavenir",
    name: "AméliorationAVenir",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AméliorationAVenir.vue"),
  },
  {
    path: "/movie/:id",
    component: () =>
      import(/* webpackChunkName: "inscription" */ "../views/Movie.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
