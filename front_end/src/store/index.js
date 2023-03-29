import Vuex from "vuex";
import router from "@/router";

export const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
  },
  actions: {
    logout({ commit }) {
      // Clear the session cookie
      document.cookie =
        "TODO_AUTHENT=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      commit("setLoggedIn", false);
      router.push("/login");
    },
  },
});
