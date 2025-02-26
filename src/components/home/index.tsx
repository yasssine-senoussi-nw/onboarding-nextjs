"use client";

import { BackgroundContainer, Container, Logo, Subtitle, Title } from "~components/home/styles";
import TranslateMessage from "~i18n/TranslateMessage";
import txKeys from "~i18n/translations";

import { Box, Stack } from "@mui/material";
import theodoLogo from "public/assets/theodo.png";

export default function Home(): JSX.Element {
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
          <Stack spacing="18px" direction="row"></Stack>
        </Container>
      </BackgroundContainer>
    </Box>
  );
}
