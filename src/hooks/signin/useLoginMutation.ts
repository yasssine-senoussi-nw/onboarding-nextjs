import type BaseError from "~errors/BaseError";
import authService from "~services/auth.service";
import type { LoginRequest } from "~services/payload/request/LoginRequest";
import type { AuthenticatedUserResponse } from "~services/payload/response/AuthenticatedUserResponse";

import type { UseMutationResult } from "react-query";
import { useMutation } from "react-query";

interface UseLoginMutationProps {
  onSuccess?: (response: AuthenticatedUserResponse) => void;
  onError?: (error: BaseError) => void;
}

export function useLoginMutation({
  onSuccess,
  onError,
}: UseLoginMutationProps): UseMutationResult<AuthenticatedUserResponse, BaseError, LoginRequest> {
  return useMutation<AuthenticatedUserResponse, BaseError, LoginRequest>(
    async (request: LoginRequest) => {
      await authService.signin(request);
      return authService.getAuthenticatedUser();
    },
    {
      onSuccess: (data) => {
        if (onSuccess !== undefined) {
          onSuccess(data);
        }
      },
      onError: (error) => {
        if (onError !== undefined) {
          onError(error);
        }
      },
    },
  );
}
