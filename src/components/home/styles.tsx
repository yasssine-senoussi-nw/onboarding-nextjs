import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";

export const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "659px",
  maxWidth: "750px",
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

export const Title = styled(Text)({
  fontSize: "95px",
  lineHeight: "100px",
  fontWeight: 600,
  marginBottom: "35px",
});

export const Subtitle = styled(Text)({
  fontWeight: 500,
  lineHeight: "20px",
  fontSize: "18px",
  marginBottom: "33px",
});

export const Logo = styled(Image)({
  marginBottom: "32px",
  width: "295px",
  height: "63px",
});
