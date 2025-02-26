interface UseStorageType {
  getItem: (key: string) => string | undefined;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
}

export function useStorage(): UseStorageType {
  return {
    getItem: (key: string): string | undefined => {
      return localStorage.getItem(key) ?? undefined;
    },
    setItem: (key: string, value: string): void => {
      localStorage.setItem(key, value);
    },
    removeItem: (key: string): void => {
      localStorage.removeItem(key);
    },
  };
}
