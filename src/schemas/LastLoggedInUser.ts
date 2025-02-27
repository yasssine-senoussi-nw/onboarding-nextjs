import { z } from "zod";

export const LastLoggedInUserSchema = z.object({
  name: z.string().nullable(),
});
