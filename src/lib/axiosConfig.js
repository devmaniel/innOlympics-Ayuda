import axios from "axios";

const axiosConfig = axios.create({
  baseURL: window.location.protocol + "//ayuda.local/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosConfig;
