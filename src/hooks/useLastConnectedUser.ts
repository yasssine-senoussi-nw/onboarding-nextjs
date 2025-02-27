import { LastLoggedInUserSchema } from "~schemas/LastLoggedInUser";

import { ZodStorageBuilder } from "zod-storage";

type UseLastConnectedUserType = {
  get: () => string | null;
  set: (name: string) => void;
};

export const useLastConnectedUser = (): UseLastConnectedUserType => {
  const storage = new ZodStorageBuilder(LastLoggedInUserSchema).build();
  return {
    get: storage.name.get,
    set: storage.name.set,
  };
};
