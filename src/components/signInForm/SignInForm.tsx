"use client";

import { useEffect, useState } from "react";

import {
  LoginWithEmailButton,
  LoginWithSocialMediaButton,
  SignInFormContainer,
  ViewPasswordIcon,
} from "~components/signInForm/SignInForm.style";
import TextInput from "~components/textInput";
import { useGlobalStorage } from "~hooks/globalStorage/useGlobalStorage";
import TranslateMessage from "~i18n/TranslateMessage";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import { dummyFunction } from "~utils/dummyFunction";

import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Container, IconButton, InputAdornment, Link, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import theodoLogo from "public/assets/theodo.png";

export function SignInForm(): JSX.Element {
  const searchParams = useSearchParams();
  const globalStorage = useGlobalStorage();
  const translate = useTranslation();
  const theme = useTheme();

  const [passwordShow, setPasswordShow] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const prefilled = searchParams?.get("prefilled");
    if (prefilled === "true") {
      const lastEmail = globalStorage.email.get();
      if (lastEmail !== null) setEmail(lastEmail);
    }
  }, [globalStorage.email, searchParams]);

  return (
    <Container maxWidth="sm">
      <SignInFormContainer>
        {/* Logo */}
        <Box sx={{ width: 120, height: 40, position: "relative" }}>
          <Image src={theodoLogo} alt="Theodo logo" fill style={{ objectFit: "contain" }} />
        </Box>

        <Typography variant="h4" component="h1" fontWeight="bold">
          <TranslateMessage txKey={txKeys.auth.welcomeBack} />
        </Typography>

        {/* Form */}
        <Box component="form" width="100%">
          <Stack spacing={3}>
            <TextInput
              fullWidth
              label={translate(txKeys.auth.emailAddress)}
              variant="standard"
              autoComplete="email"
              value={email}
            />

            <TextInput
              label={translate(txKeys.auth.password)}
              type={passwordShow ? "text" : "password"}
              variant="standard"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <ViewPasswordIcon
                        onClick={() => {
                          setPasswordShow(!passwordShow);
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Box>

        <Stack spacing={theme.spacingUnits.element} width="100%">
          <LoginWithEmailButton text={translate(txKeys.auth.signin)} onClick={dummyFunction} />
          <LoginWithSocialMediaButton
            text={translate(txKeys.auth.continueWith.google)}
            onClick={dummyFunction}
            icon={<GoogleIcon />}
          />
          <LoginWithSocialMediaButton
            text={translate(txKeys.auth.continueWith.apple)}
            onClick={dummyFunction}
            icon={<AppleIcon />}
          />
        </Stack>

        {/* Sign up */}
        <Typography variant="body2">
          <TranslateMessage txKey={txKeys.auth.dontHaveAccount} />
          <Link href="/signup" underline="hover" fontWeight="medium">
            <TranslateMessage txKey={txKeys.auth.signup} />
          </Link>
        </Typography>
      </SignInFormContainer>
    </Container>
  );
}
