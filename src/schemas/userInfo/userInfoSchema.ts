import { z } from "zod";

export const UserInfoSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  role: z.string(),
  balance: z.number(),
});
