import axios from "axios";
let marketUrl = "https://dummyjson.com";

export const api = axios.create({
  baseURL: url,
  timeout: 60000,
});
