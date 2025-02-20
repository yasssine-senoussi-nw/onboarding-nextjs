"use client";

import theodoLogo from "~assets/theodo-logo.png";
import { BackgroundContainer, Container, Logo, Subtitle, Title } from "~components/home/styles";
import TranslateMessage from "~i18n/TranslateMessage";
import txKeys from "~i18n/translations";

import { Box, Stack } from "@mui/material";
import type { FC } from "react";

const Home: FC = () => {
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
};

export default Home;
