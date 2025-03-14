import apiClient from "~axios/ApiClient";
import type { LoginRequest } from "~services/payload/request/LoginRequest";
import type { AuthenticatedUserResponse } from "~services/payload/response/AuthenticatedUserResponse";
import { Urls } from "~services/urls";

async function signin(request: LoginRequest): Promise<void> {
  await apiClient.post<AuthenticatedUserResponse, LoginRequest>(Urls.signin, request);
}

async function getAuthenticatedUser(): Promise<AuthenticatedUserResponse> {
  return apiClient.get<AuthenticatedUserResponse>(Urls.getAuthenticatedUser);
}

const authService = {
  signin,
  getAuthenticatedUser,
};
export default authService;
