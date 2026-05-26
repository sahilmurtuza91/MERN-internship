import TextField from "@mui/material/TextField";

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
