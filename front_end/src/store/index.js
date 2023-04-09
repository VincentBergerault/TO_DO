import Vuex from "vuex";
import router from "@/router";

export const store = new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("TODO_AUTH"), // initialize with stored value
    authToken: localStorage.getItem("TODO_AUTH") || null, // initialize with stored value
  },
  mutations: {
    login(state, authToken) {
      state.isLoggedIn = true;
      state.authToken = authToken;
      localStorage.setItem("TODO_AUTH", authToken);
      router.push("/");
    },
    logout(state) {
      state.isLoggedIn = false;
      state.authToken = null;
      document.cookie =
        "TODO_AUTH" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      localStorage.removeItem("TODO_AUTH");
      router.push("/login");
    },
  },
});
