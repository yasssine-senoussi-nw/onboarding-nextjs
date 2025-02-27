import { NeueFonts } from "~app/muiThemeProvider/mui-theme-fonts";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  export interface Theme {
    spacingUnits: {
      maxWindowWidth: number;
      section: number;
      element: number;
      logo: number;
    };

    dimensions: {
      logo: {
        width: {
          xs: string;
          md: string;
        };
        height: {
          xs: string;
          md: string;
        };
      };
    };
  }

  export interface ThemeOptions {
    spacingUnits: {
      maxWindowWidth: number;
      section: number;
      element: number;
      logo: number;
    };

    dimensions: {
      logo: {
        width: {
          xs: string;
          md: string;
        };
        height: {
          xs: string;
          md: string;
        };
      };
    };
  }

  interface TypographyVariants {
    hero: React.CSSProperties;
    headline: React.CSSProperties;
    label: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    hero?: React.CSSProperties;
    headline?: React.CSSProperties;
    label: React.CSSProperties;
  }
}

const muiTheme = createTheme({
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
    fontWeightBold: 600,
    hero: {
      fontSize: "6rem",
      lineHeight: "6rem",
    },
    headline: {
      fontSize: "1.25rem",
      lineHeight: "1.25rem",
    },
    label: {
      fontSize: "1rem",
      lineHeight: "1rem",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: NeueFonts,
    },
  },

  spacingUnits: {
    maxWindowWidth: 100,
    section: 8, // 8 * 4px = 32px
    element: 3.5, // 3.5 * 4px = 14px
    logo: 2, // 2 * 4px = 8px
  },

  dimensions: {
    logo: {
      width: {
        xs: "12rem",
        md: "19rem",
      },
      height: {
        xs: "3rem",
        md: "4rem",
      },
    },
  },
});
export default muiTheme;
