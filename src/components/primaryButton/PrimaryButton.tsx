import { StyledPrimaryButton } from "~components/primaryButton/PrimaryButton.style";

import type { ReactNode } from "react";

interface PrimaryButtonProps {
  text: string;
  onClick: () => void;
  icon?: ReactNode;
  className?: string;
}

export function PrimaryButton(props: PrimaryButtonProps): JSX.Element {
  const { text, onClick, icon, className } = props;
  return <StyledPrimaryButton className={className ?? ""} text={text} onClick={onClick} icon={icon} />;
}
