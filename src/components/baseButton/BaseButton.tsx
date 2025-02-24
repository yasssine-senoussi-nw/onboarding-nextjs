import { BaseStyledButton } from "~components/baseButton/BaseButton.style";

interface BaseButtonProps {
  text: string;
  onClick: () => void;
  icon?: JSX.Element;
}

export function BaseButton({ text, onClick, icon }: BaseButtonProps): JSX.Element {
  return (
    <BaseStyledButton onClick={onClick}>
      {icon}
      {text}
    </BaseStyledButton>
  );
}
