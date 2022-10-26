import TextField from "@mui/material/TextField";
import { ChangeEvent, ChangeEventHandler } from "react";

interface InputProps {
  id: string;
  type?: string;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

const Input: React.FC<InputProps> = ({ id, type, label, onChange, value }) => {
  return (
    <>
      <TextField
        type={type}
        id={id}
        label={label}
        variant="standard"
        onChange={onChange}
        fullWidth
        focused
        InputLabelProps={{ sx: { color: "white" } }}
        inputProps={{ sx: { color: "white" } }}
        value={value}
      />
    </>
  );
};

export default Input;
