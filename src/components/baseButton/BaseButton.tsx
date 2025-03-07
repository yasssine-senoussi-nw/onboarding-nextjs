import { BaseStyledButton } from "~components/baseButton/BaseButton.style";

import type { ReactNode } from "react";

interface BaseButtonProps {
  className?: string;
  text: string;
  onClick: () => void;
  icon?: ReactNode;
}

export function BaseButton({ className, text, onClick, icon }: BaseButtonProps): JSX.Element {
  return (
    <BaseStyledButton className={className ?? ""} onClick={onClick}>
      {icon}
      {text}
    </BaseStyledButton>
  );
}
