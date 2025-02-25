import { BaseButton } from "~components/baseButton";

import { styled } from "@mui/material";

export const StyledSecondaryButton = styled(BaseButton)(({ theme }) => ({
  borderWidth: "0.125rem",
  borderStyle: "solid",
  borderColor: theme.palette.common.white,
  backgroundColor: "transparent",
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, .12)",
  },
}));
