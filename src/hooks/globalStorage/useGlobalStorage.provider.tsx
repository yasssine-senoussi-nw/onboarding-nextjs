import { useEffect, useState } from "react";

import type { GlobalStorageType } from "~schemas/useGlobalStorage";
import { GlobalStorageSchema } from "~schemas/useGlobalStorage";

import { GlobalStorageContext, type GlobalStorageProviderProps } from "./useGlobalStorage.context";

import { ZodStorageBuilder } from "zod-storage";
import type { ZodStorage } from "zod-storage/src/lib/types";

export function GlobalStorageProvider({ storageProvider, children }: GlobalStorageProviderProps): JSX.Element {
  const [storage, setStorage] = useState<ZodStorage<GlobalStorageType> | undefined>(undefined);

  useEffect(() => {
    const zodStorageBuilder = new ZodStorageBuilder(GlobalStorageSchema);
    if (storageProvider !== undefined) {
      zodStorageBuilder.withProvider(storageProvider);
    }
    setStorage(zodStorageBuilder.build());
  }, [storageProvider]);

  return <GlobalStorageContext.Provider value={{ storage }}>{children}</GlobalStorageContext.Provider>;
}
