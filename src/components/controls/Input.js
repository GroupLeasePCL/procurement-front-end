import React from "react";
import { TextField } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

export default function Input(props) {
  const {
    name,
    label,
    value,
    error = null,
    onChange,
    size,
    color,
    ...other
  } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // const height = 26;
  // const offset = (34 - height) / 2;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      autoFocus={true}
      size={size || "small"}
      color={color || "third"}
      sx={{
        "& .MuiInputBase-input.Mui-disabled": {
          WebkitTextFillColor: colors.textMenu[1000],
        },
        "& .MuiFormLabel-root": {
          // color: "secondary.light",
        },
        "& .MuiFormLabel-root.Mui-focused": {
          // color: "primary.main",
        },
      }}
      InputProps={{
        sx: { fontSize: "1.3vh", height: "3.0vh" },
      }}
      InputLabelProps={{
        sx: {
          fontSize: "1.3vh",
          top: "-0.25vh",
          "&.MuiInputLabel-shrink": {
            top: 1,
          },
        },
      }}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}
