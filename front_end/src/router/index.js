// eslint-disable-next-line no-unused-vars
import * as VueRouter from "vue-router";
import MainFrame from "../views/MainFrame.vue";
import Login from "../views/Login.vue";

// eslint-disable-next-line no-unused-vars
const routes = [
  {
    path: "/",
    name: "home",
    component: MainFrame,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: MainFrame,
    meta: { requiresAuth: true }, // add this meta property to require authentication
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  base: process.env.TODO_FRONTEND_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("token"); // check if the user is authenticated

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // check if the route requires authentication
    if (!isAuthenticated) {
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

// Only use HTML5 history mode in production
if (process.env.NODE_ENV != "development") {
  console.log("caca");
  router.mode = "history";
}

export default router;
