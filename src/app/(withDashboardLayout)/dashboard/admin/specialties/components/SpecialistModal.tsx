import MSFileUploader from "@/components/Forms/MSFileUploader";
import MSForm from "@/components/Forms/MSForm";
import MSInput from "@/components/Forms/MSInput";
import MSModal from "@/components/Shared/MSModal/MSModal";
import { Button, Grid, Stack } from "@mui/material";

import React from "react";
import { FieldValues } from "react-hook-form";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal = ({ open, setOpen }: TProps) => {
  const handleCreateSpecialty = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <MSModal open={open} setOpen={setOpen} title={"Create A New Specialty"}>
      <MSForm onSubmit={handleCreateSpecialty}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <MSInput name="title" label="Title" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <MSFileUploader name={"file"} label="Upload File" />
          </Grid>
        </Grid>
        <Stack direction={"row"} justifyContent={"end"}>
          <Button
            type="submit"
            sx={{
              mt: "10px",
            }}
          >
            Create
          </Button>
        </Stack>
      </MSForm>
    </MSModal>
  );
};

export default SpecialistModal;
