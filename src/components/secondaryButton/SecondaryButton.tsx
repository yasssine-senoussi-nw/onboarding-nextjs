import { StyledSecondaryButton } from "~components/secondaryButton/SecondaryButton.style";

interface SecondaryButtonProps {
  text: string;
  onClick: () => void;
}

export function SecondaryButton({ text, onClick }: SecondaryButtonProps): JSX.Element {
  return <StyledSecondaryButton text={text} onClick={onClick} />;
}
