"use client";
import React from "react";

import { Button } from "~components/elements/styled";
import txKeys from "~i18n/translations";
import { useTranslation } from "~i18n/useTranslation";

export function LandingEmotionButton(): JSX.Element {
  const translate = useTranslation();
  return <Button>{translate(txKeys.common.styledButton)}</Button>;
}
