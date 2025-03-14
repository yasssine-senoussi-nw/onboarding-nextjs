import { UserInfoSchema } from "~schemas/userInfo/userInfoSchema";

import { z } from "zod";

export const GlobalStorageSchema = z.object({
  userInfo: UserInfoSchema,
});
export type GlobalStorageType = z.infer<typeof GlobalStorageSchema>;
