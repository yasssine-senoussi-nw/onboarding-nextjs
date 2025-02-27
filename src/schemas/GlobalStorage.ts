import { z } from "zod";

export const GlobalStorageSchema = z.object({
  userName: z.string().nullable(),
});
export type GlobalStorageType = z.infer<typeof GlobalStorageSchema>;
