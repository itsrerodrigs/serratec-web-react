import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8081",
});

// Interceptor para lidar com erros
api.interceptors.response.use(
  response => response,
  error => {
    console.error("Erro na requisição:", error);
    return Promise.reject(error);
  }
);