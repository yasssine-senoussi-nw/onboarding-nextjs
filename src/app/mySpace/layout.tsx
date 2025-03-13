"use client";

import { Header } from "~components/header/Header";

import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";

export default function MySpaceLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
}
