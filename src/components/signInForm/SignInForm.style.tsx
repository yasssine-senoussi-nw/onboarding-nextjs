import { PrimaryButton } from "~components/primaryButton";
import { SecondaryButton } from "~components/secondaryButton";
import { EyeIconSvg } from "~components/svg/EyeIconSvg";

import { Box, styled } from "@mui/material";

export const LoginWithEmailButton = styled(PrimaryButton)({
  width: "100%",
});

export const LoginWithSocialMediaButton = styled(SecondaryButton)({
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
