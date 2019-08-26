import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = ({
  input,
  label,
  placeholder,
  meta: { touched, error },
  ...other
}) => (
  <TextField
    label={label}
    placeholder={placeholder}
    error={!!(touched && error)}
    helperText={touched && error}
    {...input}
    {...other}
    fullWidth
  />
);

export default TextInput;
