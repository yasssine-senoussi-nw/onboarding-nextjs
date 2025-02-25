import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "41.188rem",
  maxWidth: "46.875rem",
});

export const BackgroundContainer = styled("div")({
  backgroundColor: "black",
  backgroundImage: "url(/assets/svg/background.svg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100wh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Text = styled(Typography)({
  color: "white",
  textAlign: "center",
});

export const Title = styled(Text)(({ theme }) => ({
  fontSize: "5.938rem",
  lineHeight: "6.25rem",
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: "2.188rem",
}));

export const Subtitle = styled(Text)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  lineHeight: "1.25rem",
  fontSize: "1.125rem",
  marginBottom: "2.063rem",
}));

export const Logo = styled(Image)({
  marginBottom: "2",
  width: "18.438rem",
  height: "3.938rem",
});
