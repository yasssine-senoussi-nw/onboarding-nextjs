import { BaseStyledButton } from "~components/baseButton/BaseButton.style";

interface BaseButtonProps {
  className?: string;
  text: string;
  onClick: () => void;
  icon?: JSX.Element;
}

export function BaseButton({ className, text, onClick, icon }: BaseButtonProps): JSX.Element {
  return (
    <BaseStyledButton className={className ?? ""} onClick={onClick}>
      {icon}
      {text}
    </BaseStyledButton>
  );
}
