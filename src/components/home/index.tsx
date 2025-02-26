"use client";

import { BackgroundContainer, Container, Logo, Subtitle, Title } from "~components/home/styles";
import { PrimaryButton } from "~components/primaryButton";
import { SecondaryButton } from "~components/secondaryButton";
import TranslateMessage from "~i18n/TranslateMessage";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";

import { Box, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import theodoLogo from "public/assets/theodo.png";

export default function Home(): JSX.Element {
  const translate = useTranslation();
  const router = useRouter();

  const handleJoinClick = () => {
    router.push("/signup");
  };
  const handleSigninClick = () => {
    router.push("/signin");
  };

  return (
    <Box>
      <BackgroundContainer className="landing">
        <Container>
          <Logo src={theodoLogo} alt="Theodo" />
          <Title>
            <TranslateMessage txKey={txKeys.home.title} />
          </Title>
          <Subtitle>
            <TranslateMessage txKey={txKeys.home.subtitle} />
          </Subtitle>
          <Stack spacing="1.125rem" direction="row">
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
