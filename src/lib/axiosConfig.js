import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://ayuda.local/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Add this line to send cookies with requests
});

export default axiosConfig;
