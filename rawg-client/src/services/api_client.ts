import axios, { AxiosRequestConfig } from "axios";
import { AnimeApiResponse } from "../entities/Anime";

const axiosInstance = axios.create({
  baseURL: "https://api.jikan.moe/v4", // Base URL for the Jikan API
});

class ApiClient {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<AnimeApiResponse>(this.endpoint, config)
      .then((response) => response.data);
}

export default ApiClient;
