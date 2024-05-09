import MSFileUploader from "@/components/Forms/MSFileUploader";
import MSForm from "@/components/Forms/MSForm";
import MSInput from "@/components/Forms/MSInput";
import MSModal from "@/components/Shared/MSModal/MSModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { TMSModalProps } from "@/types/modal";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid, Stack } from "@mui/material";

import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const CreateSpecialtyModal = ({ open, setOpen }: TMSModalProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleCreateSpecialty = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await createSpecialty(data).unwrap();
      if (res?.id) {
        toast.success("Specialty created successfully");
        setOpen(false);
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      console.error(error.message);
    }
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

export default CreateSpecialtyModal;
