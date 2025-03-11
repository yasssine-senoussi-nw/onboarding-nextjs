import { EyeIconSvg } from "~components/svg/EyeIconSvg";

import { Box, Button, styled } from "@mui/material";

export const LoginWithEmailButton = styled(Button)({
  width: "100%",
});

export const LoginWithSocialMediaButton = styled(Button)({
  width: "100%",
});

export const ViewPasswordIcon = styled(EyeIconSvg)(({ theme }) => ({
  stroke: theme.palette.grey["300"],
}));

export const SignInFormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(theme.spacingUnits.element),
}));
