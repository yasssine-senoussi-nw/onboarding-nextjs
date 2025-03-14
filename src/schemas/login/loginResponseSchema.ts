import { z } from "zod";

export const LoginResponseSchema = z.object({
  id: z.string(),
  email: z.string(),
  role: z.string(),
});

export type LoginResponseType = z.infer<typeof LoginResponseSchema>;
