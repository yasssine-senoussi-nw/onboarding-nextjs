import {
  StyledButton,
  StyledLeftArrowSvg,
  StyledStack,
  StyledTypography,
} from "~components/backButton/BackButton.style";
import TranslateMessage from "~i18n/TranslateMessage";
import txKeys from "~i18n/translations";

import { useRouter } from "next/navigation";

interface BackButtonProps {
  url: string;
}

export function BackButton({ url }: BackButtonProps): JSX.Element {
  const router = useRouter();

  return (
    <StyledButton
      variant="text"
      onClick={() => {
        router.push(url);
      }}
    >
      <StyledStack direction="column">
        <StyledLeftArrowSvg />
        <StyledTypography variant="caption">
          <TranslateMessage txKey={txKeys.common.back} />
        </StyledTypography>
      </StyledStack>
    </StyledButton>
  );
}
