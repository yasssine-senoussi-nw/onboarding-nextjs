import muiTheme from "./mui-theme";

import { ThemeProvider } from "@emotion/react";
import type { PropsWithChildren } from "react";

function MuiThemeProvider(props: PropsWithChildren<{}>): JSX.Element {
  const children = props.children ?? null;
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
}
export default MuiThemeProvider;
