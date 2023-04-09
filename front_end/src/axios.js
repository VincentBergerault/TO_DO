import axios from "axios";
//import { store } from "@/store";

const axiosInstance = axios.create({
  baseURL:
    process.env.VUE_APP_DEV === "true"
      ? "http://" + process.env.VUE_APP_TODO_URL + "/api"
      : "https://" + process.env.VUE_APP_TODO_URL + "/api", // Replace this with your API base URL
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

/*
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      store.dispatch("logout");
    }
    return Promise.reject(error);
  }
);
*/

export default axiosInstance;
