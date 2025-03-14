import { Avatar, Box, styled, Typography } from "@mui/material";

export const StyledAvatar = styled(Avatar)({
  cursor: "pointer",
});

export const StyledPopoverContent = styled(Box)(({ theme }) => ({
  paddingLeft: theme.dimensions.avatar.popup.padding.left,
  paddingRight: theme.dimensions.avatar.popup.padding.right,
  paddingTop: theme.dimensions.avatar.popup.padding.top,
  paddingBottom: theme.dimensions.avatar.popup.padding.bottom,
  display: "flex",
  flexDirection: "column",
  border: `${theme.dimensions.avatar.popup.border} ${theme.palette.divider}`,
  minWidth: theme.dimensions.avatar.popup.minWidth,
}));

export const UserNameText = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

export const UserRoleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: theme.typography.label.fontSize,
}));

export const StyledSection = styled(Box)(({ theme }) => ({
  borderBottom: `solid ${theme.palette.divider}`,
}));
