import MSDatePicker from "@/components/Forms/MSDatePicker";
import MSForm from "@/components/Forms/MSForm";
import MSInput from "@/components/Forms/MSInput";
import MSModal from "@/components/Shared/MSModal/MSModal";
import { TMSModalProps } from "@/types/modal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

const CreateScheduleModal = ({ open, setOpen }: TMSModalProps) => {
  const handleCreateSchedule = async (values: FieldValues) => {};
  return (
    <MSModal open={open} setOpen={setOpen} title={"Create Schedule"}>
      <MSForm onSubmit={handleCreateSchedule}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <MSDatePicker name="startDate" />
          </Grid>
        </Grid>
        <Button type="submit">Create</Button>
      </MSForm>
    </MSModal>
  );
};

export default CreateScheduleModal;
