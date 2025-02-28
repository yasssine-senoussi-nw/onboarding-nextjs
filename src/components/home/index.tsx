"use client";

import { BackgroundContainer, Container, KnownUserContainer, Logo, Subtitle, Title } from "~components/home/styles";
import { PrimaryButton } from "~components/primaryButton";
import { SecondaryButton } from "~components/secondaryButton";
import { useGlobalStorage } from "~hooks/globalStorage/useGlobalStorage";
import TranslateMessage from "~i18n/TranslateMessage";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";

import { Box, Stack, useTheme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import theodoLogo from "public/assets/theodo.png";

export default function Home(): JSX.Element {
  const translate = useTranslation();
  const globalStorage = useGlobalStorage();
  const router = useRouter();
  const theme = useTheme();

  const handleJoinClick = () => {
    router.push("/signin");
  };
  const handleSigninClick = () => {
    router.push("/signup");
  };

  globalStorage.userName.set("Yassine ");

  const userName = globalStorage.userName.get();
  return (
    <Box>
      <BackgroundContainer className="landing">
        <Container>
          {userName !== null && (
            <KnownUserContainer>
              <Link
                href={{
                  pathname: "/signin",
                  query: { prefilled: "true" },
                }}
              >
                Continue as <strong>{userName}</strong>
              </Link>
            </KnownUserContainer>
          )}

          <Logo src={theodoLogo} alt="Theodo" />

          <Title>
            <TranslateMessage txKey={txKeys.home.title} />
          </Title>
          <Subtitle>
            <TranslateMessage txKey={txKeys.home.subtitle} />
          </Subtitle>

          <Stack spacing={theme.spacingUnits.element} direction="row">
            <Link href="/signin">
              <SecondaryButton onClick={handleJoinClick} text={translate(txKeys.home.buttons.join)} />
            </Link>

            <Link href="/signup">
              <PrimaryButton onClick={handleSigninClick} text={translate(txKeys.home.buttons.signUp)} />
            </Link>
          </Stack>
        </Container>
      </BackgroundContainer>
    </Box>
  );
}
