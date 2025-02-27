import { StyledTextField } from "~components/textInput/TextInput.style";

import type { TextFieldProps } from "@mui/material/TextField/TextField";

export default function TextInput(props?: TextFieldProps): JSX.Element {
  return <StyledTextField {...props} />;
}
