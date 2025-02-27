import { createContext, useContext } from "react";

import type { GlobalStorageType } from "~schemas/GlobalStorage";
import { GlobalStorageSchema } from "~schemas/GlobalStorage";

import type { ReactNode } from "react";
import { ZodStorageBuilder } from "zod-storage";
import type { ZodStorage } from "zod-storage/src/lib/types";

interface GlobalStorageContextType {
  storage: ZodStorage<GlobalStorageType>;
}

type GlobalStorageProviderProps = {
  storageProvider?: Storage;
  children?: ReactNode;
};

const GlobalStorageContext = createContext<GlobalStorageContextType | undefined>(undefined);

export function GlobalStorageProvider({ storageProvider, children }: GlobalStorageProviderProps): JSX.Element {
  const zodStorageBuilder = new ZodStorageBuilder(GlobalStorageSchema);
  if (storageProvider !== undefined) {
    zodStorageBuilder.withProvider(storageProvider);
  }
  const storage = zodStorageBuilder.build();

  return <GlobalStorageContext.Provider value={{ storage }}>{children}</GlobalStorageContext.Provider>;
}

export function useGlobalStorage(): ZodStorage<GlobalStorageType> {
  const context = useContext(GlobalStorageContext);
  if (context === undefined) {
    throw new Error("useGlobalStorage must be used within a GlobalStorageProvider");
  }
  return context.storage;
}
