import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

const getHeaders = (secure: boolean) => {
  let headers: HTTP.IHttpHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (secure) {
    headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
  return headers;
};

export const httpGet = (url: string, secure = false, config?: AxiosRequestConfig<any>) => {
  return instance.get(url, { ...config, headers: getHeaders(secure) });
};

export const httpPost = (
  url: string,
  data: any,
  secure = false,
  config?: AxiosRequestConfig<any>
) => {
  return instance.post(url, data, { ...config, headers: getHeaders(secure) });
};

export const httpPut = (
  url: string,
  data: any,
  secure = false,
  config?: AxiosRequestConfig<any>
) => {
  return instance.put(url, data, { ...config, headers: getHeaders(secure) });
};

export const httpPatch = (
  url: string,
  data: any,
  secure = false,
  config?: AxiosRequestConfig<any>
) => {
  return instance.patch(url, data, { ...config, headers: getHeaders(secure) });
};

export const httpDelete = (url: string, secure = false, config?: AxiosRequestConfig<any>) => {
  return instance.delete(url, { ...config, headers: getHeaders(secure) });
};
