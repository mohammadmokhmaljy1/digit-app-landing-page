import axios from "axios";

const api = axios.create({
  baseURL: "http://92.113.27.167:4000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;