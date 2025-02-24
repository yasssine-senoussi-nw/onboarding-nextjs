import { BaseButton } from "~components/baseButton";

import { styled } from "@mui/material";

export const StyledPrimaryButton = styled(BaseButton)(({ theme }) => ({
  backgroundColor: "white",
  color: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  fontWeight: 600,
  fontFamily: "Neue Haas Grotesk Display Pro",
}));
