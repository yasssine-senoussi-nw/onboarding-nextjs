import { Avatar } from "@mui/material";

interface MyAvatarProps {
  initials?: string;
  color?: string;
}

export function MyAvatar({ initials, color }: MyAvatarProps): JSX.Element {
  return <Avatar sx={{ bgcolor: color }}>{initials}</Avatar>;
}
