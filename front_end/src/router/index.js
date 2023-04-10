import * as VueRouter from "vue-router";
import { store } from "@/store";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Goals from "../views/Goals.vue";
import Todo from "../views/Todo.vue";
import Tobuy from "../views/Tobuy.vue";

import axios from "@/axios.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/goals",
    name: "goals",
    component: Goals,
    meta: { requiresAuth: true },
  },
  {
    path: "/todo",
    name: "todo",
    component: Todo,
    meta: { requiresAuth: true },
  },
  {
    path: "/tobuy",
    name: "tobuy",
    component: Tobuy,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: (to, from, next) => {
      console.log("store.state.isLoggedIn");
      console.log(store.state.isLoggedIn);
      if (store.state.isLoggedIn) {
        next("/");
      } else {
        next();
      }
    },
  },
  { path: "/*", redirect: "/login" },
];

const router = new VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  base: process.env.VUE_APP_TODO_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  axios.get("/test");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // check if the route requires authentication
    if (!store.state.isLoggedIn) {
      // if the user is not authenticated, redirect to the login page
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      // if the user is authenticated, proceed to the route
      next();
    }
  } else {
    // if the route doesn't require authentication, proceed to the route
    next();
  }
});

export default router;
