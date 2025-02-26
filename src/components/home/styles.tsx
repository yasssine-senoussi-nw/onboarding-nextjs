import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: theme.spacing(theme.spacingUnits.maxWindowWidth),
}));

export const BackgroundContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  backgroundImage: "url(/assets/svg/background.svg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textAlign: "center",
}));

export const Title = styled(Text)(({ theme }) => ({
  fontSize: theme.typography.hero.fontSize,
  lineHeight: theme.typography.hero.lineHeight,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: theme.spacing(theme.spacingUnits.section),
}));

export const Subtitle = styled(Text)(({ theme }) => ({
  fontSize: theme.typography.headline.fontSize,
  lineHeight: theme.typography.headline.lineHeight,
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: theme.spacing(theme.spacingUnits.element),
}));

export const Logo = styled(Image)(({ theme }) => ({
  marginBottom: theme.spacing(theme.spacingUnits.logo),
  width: theme.dimensions.logo.width.md,
  height: theme.dimensions.logo.height.md,
}));
