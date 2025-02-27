"use client";

import React, { StrictMode } from "react";

import { GlobalStorageProvider } from "~hooks/useGlobalStorage";
import { TranslationProvider } from "~i18n";
import { StoreProvider } from "~store/provider";
import notistackRef from "~utils/notistackRef";
import { queryClient } from "~utils/queryClient";

import MuiThemeProvider from "./muiThemeProvider/MuiThemeProvider";
import { RootStyleRegistry } from "./styleRegistry";

import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { QueryClientProvider } from "react-query";

export function Providers({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <RootStyleRegistry>
      <StrictMode>
        <StoreProvider>
          <GlobalStorageProvider>
            <TranslationProvider>
              <MuiThemeProvider>
                <CssBaseline />
                <SnackbarProvider ref={notistackRef} maxSnack={2}>
                  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                </SnackbarProvider>
              </MuiThemeProvider>
            </TranslationProvider>
          </GlobalStorageProvider>
        </StoreProvider>
      </StrictMode>
    </RootStyleRegistry>
  );
}
