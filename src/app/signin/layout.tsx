"use client";

import AuthImage from "~components/authImage/AuthImage";
import { SignInForm } from "~components/signInForm/SignInForm";

import { Grid } from "@mui/material";
import microphoneImage from "public/assets/microphone.jpg";

export default function SignInPage(): JSX.Element {
  return (
    <Grid container component="main" sx={{ minHeight: "100vh" }}>
      <Grid
        item
        md={6}
        sx={{
          display: { xs: "none", md: "block" },
          position: "relative",
        }}
      >
        <AuthImage src={microphoneImage} />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.paper",
        }}
      >
        <SignInForm />
      </Grid>
    </Grid>
  );
}
