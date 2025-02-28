import { Box, styled } from "@mui/material";
import Image from "next/image";

export const ImageContainer = styled(Box)({
  position: "relative",
  height: "100%",
});

export const StyledImage = styled(Image)({
  aspectRatio: "32 / 25",
  objectFit: "fill",
});
