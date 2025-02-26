import { useEffect, useState } from "react";

import { LastLoggedInUserSchema, type LastLoggedInUserType } from "~schemas/LastLoggedInUser";

import { useStorage } from "./useStorage";

enum Constants {
  LAST_CONNECTED_FULLNAME_KEY = "LAST_CONNECTED_FULLNAME",
}

export default function useLastConnectedUser(): LastLoggedInUserType {
  const [user, setUser] = useState<LastLoggedInUserType>(null);
  const storage = useStorage();

  useEffect(() => {
    try {
      const storedValue = storage.getItem(Constants.LAST_CONNECTED_FULLNAME_KEY);
      const parsedUser = LastLoggedInUserSchema.parse(storedValue);
      setUser(parsedUser);
    } catch {
      setUser(null);
    }
  }, [storage]);

  return user;
}
