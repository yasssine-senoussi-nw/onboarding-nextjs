"use client";

import React, { useState } from "react";

import { MyAvatar } from "~components/avatar/MyAvatar";
import {
  StyledBalance,
  StyledBalanceCaption,
  StyledBalanceContainer,
  StyledHeader,
  StyledLogoContainer,
  StyledPurchaseCount,
  StyledPurchaseCountCaption,
  StyledToolbar,
} from "~components/header/Header.style";
import { OrangeTheodoLogoSvg } from "~components/svg/OrangeTheodoLogoSvg";
import { WhiteTheodoLogoSvg } from "~components/svg/WhiteTheodoLogoSvg";

import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton } from "@mui/material";

export function Header(): JSX.Element {
  const [logoSrc, setLogoSrc] = useState(WhiteTheodoLogoSvg);

  const handleLogoHover = () => {
    setLogoSrc(OrangeTheodoLogoSvg);
  };

  const handleLogoOut = () => {
    setLogoSrc(WhiteTheodoLogoSvg);
  };

  const balance = 60000.0;
  const totalPurchases = 1;

  return (
    <StyledHeader position="static">
      <StyledToolbar>
        <StyledLogoContainer onMouseEnter={handleLogoHover} onMouseLeave={handleLogoOut}>
          {logoSrc}
        </StyledLogoContainer>

        <Box display="flex" alignItems="center">
          <StyledBalanceContainer alignItems="flex-start">
            <StyledBalance>{balance}</StyledBalance>
            <StyledBalanceCaption variant="caption">Balance</StyledBalanceCaption>
          </StyledBalanceContainer>
          <StyledBalanceContainer>
            <StyledPurchaseCount>{totalPurchases}</StyledPurchaseCount>
            <StyledPurchaseCountCaption variant="caption">Total purchases</StyledPurchaseCountCaption>
          </StyledBalanceContainer>
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
            <AddIcon />
          </IconButton>
          <MyAvatar initials={"MA"} color={"grey"} />
        </Box>
      </StyledToolbar>
    </StyledHeader>
  );
}
