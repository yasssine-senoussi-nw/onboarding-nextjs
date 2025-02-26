import { useEffect, useState } from "react";

import { LastLoggedInUserSchema, type LastLoggedInUserType } from "~schemas/LastLoggedInUser";

const lastConnectedFullNameStorageKey = "LAST_CONNECTED_FULLNAME";

export default function useLastConnectedUser(): LastLoggedInUserType {
  const [user, setUser] = useState<LastLoggedInUserType>(null);

  useEffect(() => {
    try {
      const storedValue = localStorage.getItem(lastConnectedFullNameStorageKey);
      const parsedUser = LastLoggedInUserSchema.parse(storedValue);
      setUser(parsedUser);
    } catch {
      setUser(null);
    }
  }, []);

  return user;
}
