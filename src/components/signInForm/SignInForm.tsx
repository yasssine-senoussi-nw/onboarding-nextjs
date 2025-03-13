"use client";

import React, { useEffect, useState } from "react";

import {
  LoginWithEmailButton,
  LoginWithSocialMediaButton,
  SignInFormContainer,
  ViewPasswordIcon,
} from "~components/signInForm/SignInForm.style";
import TextInput from "~components/textInput";
import { useGlobalStorage } from "~hooks/globalStorage/useGlobalStorage";
import { useLoginMutation } from "~hooks/signin/useLoginMutation";
import TranslateMessage from "~i18n/TranslateMessage";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";
import { LoginResponseSchema } from "~schemas/login/loginResponseSchema";
import { SigninFormSchema, type SigninFormType } from "~schemas/signin/SigninFormSchema";
import { signinFormToSigninRequest } from "~services/payload/request/LoginRequest";
import { dummyFunction } from "~utils/dummyFunction";

import { zodResolver } from "@hookform/resolvers/zod";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Container, IconButton, InputAdornment, Link, Stack, Typography, useTheme } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField/TextField";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useSnackbar } from "notistack";
import theodoLogo from "public/assets/theodo.png";
import { Controller, useForm } from "react-hook-form";

export function SignInForm(): JSX.Element {
  const searchParams = useSearchParams();
  const globalStorage = useGlobalStorage();
  const translate = useTranslation();
  const theme = useTheme();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [passwordShow, setPasswordShow] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const prefilled = searchParams?.get("prefilled");
    if (prefilled === "true") {
      const lastEmail = globalStorage.email.get();
      if (lastEmail !== null) setEmail(lastEmail);
    }
  }, [globalStorage.email, searchParams]);

  const defaultFormValues: SigninFormType = {
    email,
    password: "",
  };

  const {
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm<SigninFormType>({
    resolver: zodResolver(SigninFormSchema),
    defaultValues: defaultFormValues,
    mode: "onBlur",
  });

  const { mutate } = useLoginMutation({
    onSuccess: (response) => {
      LoginResponseSchema.parse(response);
      globalStorage.email.set(response.email);
      router.push("/mySpace");
    },
    onError: () => {
      enqueueSnackbar("Incorrect email or password.", {
        variant: "error",
        autoHideDuration: 5000,
      });
    },
  });

  const onSubmit = (form: SigninFormType) => {
    try {
      const request = signinFormToSigninRequest(form);
      mutate(request);
    } catch (_) {
      setError("root", {
        type: "manual",
        message: "Identifiants incorrects",
      });
    }
  };

  // To handle the 'Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?' warning
  const SigninTextInput = React.forwardRef<typeof TextInput, TextFieldProps>((props, ref) => (
    <TextInput {...props} inputRef={ref} />
  ));
  // https://stackoverflow.com/a/67993106
  SigninTextInput.displayName = "SigninTextInput";

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
        <Box component="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <SigninTextInput
                  {...field}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  required={false}
                  fullWidth
                  label={translate(txKeys.auth.emailAddress)}
                  variant="standard"
                  autoComplete="email"
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <SigninTextInput
                  {...field}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                  required={false}
                  label={translate(txKeys.auth.password)}
                  type={passwordShow ? "text" : "password"}
                  variant="standard"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => {
                            setPasswordShow(!passwordShow);
                          }}
                          edge="end"
                        >
                          <ViewPasswordIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Stack>

          {errors.root !== undefined && (
            <Typography color="error" sx={{ mt: 2 }}>
              {errors.root.message}
            </Typography>
          )}

          <Stack spacing={theme.spacingUnits.element} width="100%" sx={{ mt: 4 }}>
            {/* Normal submit */}
            <LoginWithEmailButton type={"submit"}>
              <TranslateMessage txKey={txKeys.auth.signin} />
            </LoginWithEmailButton>
            {/* Login with google */}
            <LoginWithSocialMediaButton onClick={dummyFunction}>
              <GoogleIcon />
              <TranslateMessage txKey={txKeys.auth.continueWith.google} />
            </LoginWithSocialMediaButton>
            {/* Login with apple */}
            <LoginWithSocialMediaButton onClick={dummyFunction}>
              <AppleIcon />
              <TranslateMessage txKey={txKeys.auth.continueWith.apple} />
            </LoginWithSocialMediaButton>
          </Stack>
        </Box>

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
