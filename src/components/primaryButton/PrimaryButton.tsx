import { StyledPrimaryButton } from "~components/primaryButton/PrimaryButton.style";

interface PrimaryButtonProps {
  text: string;
  onClick: () => void;
}

export function PrimaryButton({ text, onClick }: PrimaryButtonProps): JSX.Element {
  return <StyledPrimaryButton text={text} onClick={onClick} />;
}
