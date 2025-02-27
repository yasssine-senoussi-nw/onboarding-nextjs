import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: theme.palette.common.white,
    fontSize: theme.typography.label.fontSize,
    fontWeight: theme.typography.label.fontWeight,
  },
  "& .MuiInput-root": {
    "&:before": {
      borderBottomColor: theme.palette.grey["700"],
      borderBottomWidth: "medium",
    },

    "&:after": {
      borderBottomColor: theme.palette.grey["700"],
    },

    "&:hover": {
      "&:before": {
        borderBottomColor: theme.palette.grey["700"],
      },

      "&:after": {
        borderBottomColor: theme.palette.grey["700"],
      },
    },
  },
}));
