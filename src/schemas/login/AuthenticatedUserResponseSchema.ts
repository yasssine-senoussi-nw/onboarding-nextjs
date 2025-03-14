import { z } from "zod";

export const AuthenticatedUserResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  role: z.string(),
  balance: z.number(),
});

export type AuthenticatedUserResponseType = z.infer<typeof AuthenticatedUserResponseSchema>;
