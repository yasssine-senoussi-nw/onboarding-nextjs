import { LeftArrowSvg } from "~components/svg/LeftArrowSvg";

import { Button, Stack, styled, Typography } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey["600"],
  padding: 0,
  minWidth: "auto",
  "&:hover": {
    color: theme.palette.grey["900"],
    backgroundColor: "transparent",
  },
}));

export const StyledStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: theme.typography.label.fontSize,
  lineHeight: theme.typography.label.lineHeight,
  textTransform: "none",
}));

export const StyledLeftArrowSvg = styled(LeftArrowSvg)(({ theme }) => ({
  fontSize: theme.typography.headline.fontSize,
}));
