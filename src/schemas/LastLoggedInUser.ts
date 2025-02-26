import { z } from "zod";

export const LastLoggedInUserSchema = z.string().nullable();
export type LastLoggedInUserType = z.infer<typeof LastLoggedInUserSchema>;
