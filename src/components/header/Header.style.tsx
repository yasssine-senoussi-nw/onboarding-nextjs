import { Box, styled, Toolbar, Typography } from "@mui/material";

export const StyledHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey["900"],
  color: "white",
}));

export const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-between",
});

export const StyledLogoContainer = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));

export const StyledBalanceContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledBalance = styled(Typography)(({ theme }) => ({
  fontSize: "2.25rem",
  fontWeight: theme.typography.fontWeightBold,
}));

export const StyledBalanceCaption = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey["400"],
}));

export const StyledPurchaseCount = styled(Typography)(({ theme }) => ({
  fontSize: "2.25rem",
  fontWeight: theme.typography.fontWeightBold,
}));

export const StyledPurchaseCountCaption = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey["400"],
}));
