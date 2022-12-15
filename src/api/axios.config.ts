import axios from "axios";

const $axios = axios.create({
  baseURL: "https://api.github.com",
});

export default $axios;
