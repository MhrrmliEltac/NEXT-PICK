import { config } from "@/config/config";
import { path } from "@/utils/paths";
import axios from "axios";

let isRedirectingToLogin = false;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: config.headers,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest?.url?.includes(path.endpoints.auth.refreshToken)
    ) {
      if (!isRedirectingToLogin && window.location.pathname !== "/") {
        isRedirectingToLogin = true;
        window.location.href = "/";
      }
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.post(
          `${import.meta.env.VITE_API_URL}${path.endpoints.auth.refreshToken}`,
          {},
          {
            headers: {
              "x-api-key": import.meta.env.VITE_API_KEY,
            },
            withCredentials: true,
          }
        );
        if (refreshResponse.status === 200) {
          return api(originalRequest);
        }
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
      }

      if (!isRedirectingToLogin && window.location.pathname !== "/") {
        isRedirectingToLogin = true;
        window.location.href = "/";
      }
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default api;
