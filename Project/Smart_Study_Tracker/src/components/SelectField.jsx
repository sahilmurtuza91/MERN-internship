import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function SelectField({ label, options=[], name, value, onChange, ...props }) {
  return (
    <FormControl variant="standard" fullWidth {...props}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} name={name} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;