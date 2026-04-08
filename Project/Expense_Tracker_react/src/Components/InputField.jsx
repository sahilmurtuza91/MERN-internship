import TextField from "@mui/material/TextField";
import { forwardRef } from "react";

const InputField = ({
  label,
  type = "text",
  placeHolder = "",
  name,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  ...props
}) => {

  return (
    <>
      {/* <label htmlFor={randomId.toString()}>{label}</label> */}
      <TextField
        label={label}
        type={type}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        variant="standard"
        fullWidth
        error={error}
        helperText={helperText}
        {...props}
      />
    </>
  );
};
export default InputField;
