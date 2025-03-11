import { z } from "zod";

export const SigninFormSchema = z.object({
  email: z
    .string()
    .min(1, "L'email est obligatoire")
    .email("Format d'email invalide")
    .refine((val) => val.endsWith("@theodo.com"), "L'email doit être @theodo.com"),

  password: z
    .string()
    .min(1, "Le mot de passe est obligatoire")
    .min(4, "Le mot de passe doit contenir au moins 4 caractères"),
});

export type SigninFormType = z.infer<typeof SigninFormSchema>;
