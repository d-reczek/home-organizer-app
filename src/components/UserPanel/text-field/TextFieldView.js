import { TextField } from "@mui/material";
import { Theme } from "../../../common/theme/theme";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  input: {
    color: "#fff",
  },
  "& label.Mui-focused": {},
  "& .MuiInput-underline:after": {
    borderColor: "green",
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
      color: "white",
    },
    "&:hover fieldset": {
      borderColor: Theme.palette.primary.contrastText,
    },
    "&.Mui-focused fieldset": {},
  },
});

export const TextFieldView = ({ label, value, handleClick }) => {
  return (
    <CssTextField
      id="custom-css-outlined-input"
      fullWidth
      label={label}
      value={value}
      onClick={handleClick}
    />
  );
};
