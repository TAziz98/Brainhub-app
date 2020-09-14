import React from "react";
import { TextField } from "@material-ui/core";

const Input = ({ label, value, onChange, name, error, ...rest }) => {
  return (
    <TextField
      color="secondary"
      size="small"
      fullWidth
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      {...rest}
    />
  );
};

export default Input;
