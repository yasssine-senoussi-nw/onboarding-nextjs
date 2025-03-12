import type BaseError from "~errors/BaseError";
import authService from "~services/auth.service";
import type { LoginRequest } from "~services/payload/request/LoginRequest";
import type { LoginResponse } from "~services/payload/response/LoginResponse";

import type { UseMutationResult } from "react-query";
import { useMutation } from "react-query";

interface UseLoginMutationProps {
  onSuccess?: (response: LoginResponse) => void;
  onError?: (error: BaseError) => void;
}

export function useLoginMutation({
  onSuccess,
  onError,
}: UseLoginMutationProps): UseMutationResult<LoginResponse, BaseError, LoginRequest> {
  return useMutation<LoginResponse, BaseError, LoginRequest>(
    async (request: LoginRequest) => authService.signin(request),
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
