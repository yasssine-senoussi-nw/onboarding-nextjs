"use client";

import { createContext } from "react";

import type { GlobalStorageType } from "~schemas/useGlobalStorage";

import type { ReactNode } from "react";
import type { ZodStorage } from "zod-storage/src/lib/types";

interface GlobalStorageContextType {
  storage: ZodStorage<GlobalStorageType> | undefined;
}

export type GlobalStorageProviderProps = {
  storageProvider?: Storage;
  children?: ReactNode;
};

export const GlobalStorageContext = createContext<GlobalStorageContextType | undefined>(undefined);
