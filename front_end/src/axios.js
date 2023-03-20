import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5010", // Replace this with your API base URL
});

export default axiosInstance;
