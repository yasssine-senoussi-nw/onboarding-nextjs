import React from "react";

import { store } from "./configure";

import { Provider } from "react-redux";

export function StoreProvider({ children }: React.PropsWithChildren): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
