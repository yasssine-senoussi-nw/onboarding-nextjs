"use client";

import { createContext, useContext, useEffect, useState } from "react";

import type { GlobalStorageType } from "~schemas/useGlobalStorage";
import { GlobalStorageSchema } from "~schemas/useGlobalStorage";

import type { ReactNode } from "react";
import { ZodStorageBuilder } from "zod-storage";
import type { ZodStorage } from "zod-storage/src/lib/types";

interface GlobalStorageContextType {
  storage: ZodStorage<GlobalStorageType> | undefined;
}

type GlobalStorageProviderProps = {
  storageProvider?: Storage;
  children?: ReactNode;
};

const GlobalStorageContext = createContext<GlobalStorageContextType | undefined>(undefined);

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

export function TestGlobalStorageProvider({ storageProvider, children }: GlobalStorageProviderProps): JSX.Element {
  const zodStorageBuilder = new ZodStorageBuilder(GlobalStorageSchema);
  if (storageProvider !== undefined) {
    zodStorageBuilder.withProvider(storageProvider);
  }
  const storage = zodStorageBuilder.build();

  return <GlobalStorageContext.Provider value={{ storage }}>{children}</GlobalStorageContext.Provider>;
}

export function useGlobalStorage(): ZodStorage<GlobalStorageType> {
  const context = useContext(GlobalStorageContext);
  if (context?.storage === undefined) {
    throw new Error("useGlobalStorage must be used within a GlobalStorageProvider");
  }
  return context.storage;
}
