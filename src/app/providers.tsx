"use client";

import React, { StrictMode } from "react";

import { TranslationProvider } from "~i18n";
import { StoreProvider } from "~store/provider";
import notistackRef from "~utils/notistackRef";
import { queryClient } from "~utils/queryClient";

import MuiThemeProvider from "./muiThemeProvider/MuiThemeProvider";
import { RootStyleRegistry } from "./styleRegistry";

import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { QueryClientProvider } from "react-query";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <RootStyleRegistry>
      <StrictMode>
        <StoreProvider>
          <TranslationProvider>
            <MuiThemeProvider>
              <CssBaseline />
              <SnackbarProvider ref={notistackRef} maxSnack={2}>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
              </SnackbarProvider>
            </MuiThemeProvider>
          </TranslationProvider>
        </StoreProvider>
      </StrictMode>
    </RootStyleRegistry>
  );
};
