import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://" + process.env.VUE_APP_TODO_BACKEND_URL, // Replace this with your API base URL
});

export default axiosInstance;
