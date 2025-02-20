import muiTheme from "./mui-theme";

import { ThemeProvider } from "@emotion/react";
import type { PropsWithChildren } from "react";

function MuiThemeProvider({ children }: PropsWithChildren): JSX.Element {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
}
export default MuiThemeProvider;
