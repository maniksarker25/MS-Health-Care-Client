import MSDatePicker from "@/components/Forms/MSDatePicker";
import MSForm from "@/components/Forms/MSForm";
import MSInput from "@/components/Forms/MSInput";
import MSModal from "@/components/Shared/MSModal/MSModal";
import { TMSModalProps } from "@/types/modal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

const CreateScheduleModal = ({ open, setOpen }: TMSModalProps) => {
  const handleCreateSchedule = async (values: FieldValues) => {
    console.log(values);
  };
  return (
    <MSModal open={open} setOpen={setOpen} title={"Create Schedule"}>
      <MSForm onSubmit={handleCreateSchedule}>
        <Grid
          container
          spacing={2}
          sx={{
            width: "400px",
          }}
        >
          <Grid item md={12}>
            <MSDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <MSDatePicker name="endDate" label="End Date" />
          </Grid>
        </Grid>
        <Button type="submit">Create</Button>
      </MSForm>
    </MSModal>
  );
};

export default CreateScheduleModal;
