import React, { useState } from "react";

import {
  StyledAvatar,
  StyledPopoverContent,
  StyledSection,
  UserNameText,
  UserRoleText,
} from "~components/avatar/MyAvatar.style";
import TranslateMessage from "~i18n/TranslateMessage";
import txKeys from "~i18n/translations";

import { List, MenuItem, Popover, Typography } from "@mui/material";

export function MyAvatar(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const user = {
    firstName: "John",
    lastName: "Doe",
    role: "Administrateur",
    avatarUrl: "<AVATAR_URL>",
  };

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  const handleLogout = () => {
    handleClose();
    // logout goes here
  };

  return (
    <>
      <StyledAvatar src={user.avatarUrl} onClick={handleAvatarClick} />

      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <StyledPopoverContent>
          <StyledSection>
            <UserNameText variant="subtitle1">
              {user.firstName} {user.lastName}
            </UserNameText>
            <UserRoleText variant="body2">{user.role}</UserRoleText>
          </StyledSection>

          <List disablePadding>
            <MenuItem onClick={handleClose}>
              <Typography variant="body2">
                <TranslateMessage txKey={txKeys.mySpace.settings} />
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Typography variant="body2">
                <TranslateMessage txKey={txKeys.mySpace.help} />
              </Typography>
            </MenuItem>
            <StyledSection />

            <MenuItem onClick={handleLogout}>
              <Typography variant="body2" color="error">
                <TranslateMessage txKey={txKeys.mySpace.logOut} />
              </Typography>
            </MenuItem>
          </List>
        </StyledPopoverContent>
      </Popover>
    </>
  );
}
