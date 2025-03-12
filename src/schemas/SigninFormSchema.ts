import { SigninFormatConstants } from "~schemas/SigninFormSchema.constants";

import { z } from "zod";

export const SigninFormSchema = z.object({
  email: z
    .string()
    .min(1, SigninFormatConstants.noEmailInput)
    .email(SigninFormatConstants.notanEmail)
    .refine((val) => val.endsWith("@theodo.com"), SigninFormatConstants.notaTheodoEmail),

  password: z.string().min(1, SigninFormatConstants.noPasswordInput).min(4, SigninFormatConstants.notaValidPassword),
});

export type SigninFormType = z.infer<typeof SigninFormSchema>;
