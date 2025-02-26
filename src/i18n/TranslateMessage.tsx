"use client";
/* eslint-disable-next-line no-restricted-imports */
import { Trans, useTranslation } from "react-i18next";

interface ITranslateMessageProps {
  txKey: string;
  values?: Record<string, unknown>;
  components?: Readonly<Record<string, React.ReactElement>> | readonly React.ReactElement[];
  count?: number;
  context?: string;
  defaults?: string;
  nameSpace?: string;
  shouldUnescape?: boolean;
}

export default function TranslateMessage({ txKey, ...props }: ITranslateMessageProps): JSX.Element {
  const translation = useTranslation();
  return <Trans t={translation.t} i18nKey={txKey} {...props} />;
}
