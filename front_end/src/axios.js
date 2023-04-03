import axios from "axios";
import { store } from "@/store";

const axiosInstance = axios.create({
  baseURL:
    process.env.VUE_APP_NODE_ENV === "development"
      ? "http://" + process.env.VUE_APP_TODO_BACKEND_URL
      : "https://" + process.env.VUE_APP_TODO_BACKEND_URL, // Replace this with your API base URL
  withCredentials: true, // enable sending cookies with requests
});

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

export default axiosInstance;
