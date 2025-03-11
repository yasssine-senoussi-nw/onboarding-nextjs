export type ClientRequestConfig = {
  params?: Record<string, unknown>;
  paramsSerializer?: (params: Record<string, unknown>) => string;
};
