import { EyeIconSvg } from "~components/eyeIcon/EyeIconSvg";
import { PrimaryButton } from "~components/primaryButton";
import { SecondaryButton } from "~components/secondaryButton";

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
