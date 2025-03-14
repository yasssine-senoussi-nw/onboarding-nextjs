import type { CustomAxiosRequestConfig } from "~axios/config/CustomAxiosRequestConfig";
import type { ClientRequestConfig } from "~axios/config/RequestConfig";
import { logAndGetUnknownError, throwError } from "~axios/ErrorHelper";
import { Urls } from "~services/urls";

import axios, { type AxiosError } from "axios";
import qs from "query-string";

const API_BASE_URL = process.env["NEXT_PUBLIC_API_BASE_URL"] ?? "";

const instance = axios.create({
  baseURL: API_BASE_URL,
  paramsSerializer: qs.stringify,
  withCredentials: true,
});

instance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (axios.isAxiosError(error)) {
      throwError(error);
    }
    throw logAndGetUnknownError(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const doRetry: boolean = originalRequest?.retry ?? false;

    if ([401, 403].includes(error.response?.status ?? 0) && !doRetry) {
      originalRequest.retry = true;

      try {
        await instance.post(Urls.refreshToken);

        return await instance(originalRequest);
      } catch (refreshError) {
        window.location.href = "/login"; // Redirection vers login
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

async function get<TData>(path: string, config?: ClientRequestConfig): Promise<TData> {
  const { data } = await instance.get<TData>(path, config);
  return data;
}

async function post<TData, TBody>(path: string, body?: TBody, config?: ClientRequestConfig): Promise<TData> {
  const { data } = await instance.post<TData>(path, body, config);
  return data;
}

async function deleteHttpMethod<TData>(path: string, config?: ClientRequestConfig): Promise<TData> {
  const { data } = await instance.delete<TData>(path, config);
  return data;
}

async function put<TData, TBody>(path: string, body?: TBody, config?: ClientRequestConfig): Promise<TData> {
  const { data } = await instance.put<TData>(path, body, config);
  return data;
}

async function patch<TData, TBody>(path: string, body?: TBody, config?: ClientRequestConfig): Promise<TData> {
  const { data } = await instance.patch<TData>(path, body, config);
  return data;
}

const apiClient = {
  get,
  post,
  delete: deleteHttpMethod,
  put,
  patch,
};
export default apiClient;
