import apiClient from "~axios/ApiClient";
import type { LoginRequest } from "~services/payload/request/LoginRequest";
import type { LoginResponse } from "~services/payload/response/LoginResponse";
import { Urls } from "~services/urls";

async function signin(request: LoginRequest): Promise<LoginResponse> {
  return apiClient.post<LoginResponse, LoginRequest>(Urls.signin, request);
}

const authService = {
  signin,
};
export default authService;
