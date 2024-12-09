import axios, { AxiosRequestConfig } from "axios";

export interface Response<T> {
  count: number;
  results: T[];
  next?: string;
}

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5001/" for localhost
  // baseURL: "https://api.rawg.io/api" for api
  baseURL: import.meta.env.VITE_API_URL,

  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<Response<T>>(this.endpoint, config)
      .then((response) => response.data);
  get = (id: string | number) =>
    axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((response) => response.data);
}

export default ApiClient;
