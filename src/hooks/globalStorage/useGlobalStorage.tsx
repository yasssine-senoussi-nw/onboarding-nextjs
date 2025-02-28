import { useContext } from "react";

import { GlobalStorageContext } from "~hooks/globalStorage/useGlobalStorage.context";
import type { GlobalStorageType } from "~schemas/useGlobalStorage";

import type { ZodStorage } from "zod-storage";

export function useGlobalStorage(): ZodStorage<GlobalStorageType> {
  const context = useContext(GlobalStorageContext);
  if (context?.storage === undefined) {
    throw new Error("useGlobalStorage must be used within a GlobalStorageProvider");
  }
  return context.storage;
}
