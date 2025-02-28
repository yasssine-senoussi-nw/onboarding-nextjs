import { StyledSecondaryButton } from "~components/secondaryButton/SecondaryButton.style";

import type { ReactNode } from "react";

interface SecondaryButtonProps {
  className?: string;
  text: string;
  onClick: () => void;
  icon?: ReactNode;
}

export function SecondaryButton({ className, text, onClick, icon }: SecondaryButtonProps): JSX.Element {
  return <StyledSecondaryButton className={className ?? ""} text={text} onClick={onClick} icon={icon} />;
}
