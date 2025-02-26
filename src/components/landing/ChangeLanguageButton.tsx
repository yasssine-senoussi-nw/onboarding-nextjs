"use client";
import React from "react";

import TranslateMessage from "~i18n/TranslateMessage";
import txKeys from "~i18n/translations";
import { Language } from "~i18n/types";
import { useLanguage } from "~i18n/useLanguage";
import { fireAndNotifyOnError } from "~utils/notistackRef";

export default function ChangeLanguageButton(): JSX.Element {
  const [language, changeLanguage] = useLanguage();

  return (
    <button
      className="btn btn-blue"
      onClick={fireAndNotifyOnError(async () => changeLanguage(language === Language.FR ? Language.EN : Language.FR))}
    >
      <TranslateMessage txKey={txKeys.common.changeLanguage} />
    </button>
  );
}
