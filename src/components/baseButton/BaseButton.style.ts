import { ButtonBase, styled } from "@mui/material";

export const BaseStyledButton = styled(ButtonBase)`
  width: 8.625rem;
  height: 3.5rem;
  padding: 0.625rem 0.813rem;
  border-radius: 3.75rem;
  font-size: 1.125rem;
  // https://github.com/yasssine-senoussi-nw/onboarding-nextjs/pull/5#discussion_r1967456288
  // @youssef-bensadik-nw:
  // needs a display property to show icon and text inline + a gap between them.
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;
