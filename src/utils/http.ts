import axios, { AxiosInstance } from "axios";

const API_KEY:string = "v7NhXg6knqlLHCKXMgVazNEoDUB0f4A75ctj1xp0";

export const http:AxiosInstance = axios.create({
  baseURL: "https://api.nasa.gov/neo/rest/v1/neo"
});

http.defaults.params = {};
http.defaults.params.api_key = API_KEY;