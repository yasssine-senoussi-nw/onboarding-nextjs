import { NeueFonts } from "~app/muiThemeProvider/mui-theme-fonts";

import type { Theme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const muiTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    primary: {
      main: "#EB514E",
      light: "#EF7371",
      dark: "#BC413E",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#66666c",
      light: "#8b8b95",
      dark: "#868686",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#EB514E",
      light: "#EF7371",
      dark: "#BC413E",
      contrastText: "#FFFFFF",
    },
    grey: {
      50: "#A6A6A6",
      100: "#E0E0E0",
      200: "#CCCCCC",
      300: "#646464",
      400: "#999999",
      500: "#66666C",
      600: "#515151",
      700: "#404040",
      800: "#393939",
      900: "#232324",
    },
    background: {
      default: "#000000",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#CCCCCC",
    },
  },
  typography: {
    fontFamily: ["Neue Haas Grotesk Display Pro", "Arial", "sans-serif"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: NeueFonts,
    },
  },
});
export default muiTheme;
