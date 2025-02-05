import axios from "axios";



const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Uses environment variable
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
