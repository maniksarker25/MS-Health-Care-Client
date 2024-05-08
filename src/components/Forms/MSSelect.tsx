import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
type TSelectProps = {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  items: string[];
};
const MSSelect = ({
  name,
  items,
  label,
  size = "small",
  required,
  fullWidth = true,
  sx,
}: TSelectProps) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{
            ...sx,
          }}
          size={size}
          select
          label={label}
          required={required}
          fullWidth={fullWidth}
          error={isError}
          helperText={
            isError ? (formState.errors[name]?.message as string) : ""
          }
        >
          {items.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default MSSelect;
