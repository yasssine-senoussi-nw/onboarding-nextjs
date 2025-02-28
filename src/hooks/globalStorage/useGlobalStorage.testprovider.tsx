import { GlobalStorageSchema } from "~schemas/useGlobalStorage";

import { GlobalStorageContext } from "./useGlobalStorage.context";

import type { PropsWithChildren } from "react";
import { ZodStorageBuilder } from "zod-storage";

class StorageImpl implements Storage {
  public length: number = 0;

  private readonly data: Map<string, string> = new Map();

  public clear(): void {
    this.data.clear();
    this.length = 0;
  }

  public getItem(key: string): string | null {
    return this.data.get(key) ?? null;
  }

  public key(index: number): string | null {
    if (index < 0 || index >= this.length) {
      return null;
    }
    return Array.from(this.data.keys())[index] ?? null;
  }

  public removeItem(key: string): void {
    if (this.data.has(key)) {
      this.data.delete(key);
      this.length--;
    }
  }

  public setItem(key: string, value: string): void {
    if (!this.data.has(key)) {
      this.length++;
    }
    this.data.set(key, value);
  }
}

export function TestGlobalStorageProvider({ children }: PropsWithChildren): JSX.Element {
  const zodStorageBuilder = new ZodStorageBuilder(GlobalStorageSchema);
  zodStorageBuilder.withProvider(new StorageImpl());
  const storage = zodStorageBuilder.build();

  return <GlobalStorageContext.Provider value={{ storage }}>{children}</GlobalStorageContext.Provider>;
}
