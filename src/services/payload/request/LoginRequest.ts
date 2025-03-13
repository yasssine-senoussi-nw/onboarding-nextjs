import type { SigninFormType } from "~schemas/signin/SigninFormSchema";

export type LoginRequest = {
  email: string;
  password: string;
};

export function signinFormToSigninRequest({ email, password }: SigninFormType): LoginRequest {
  return {
    email,
    password,
  };
}
