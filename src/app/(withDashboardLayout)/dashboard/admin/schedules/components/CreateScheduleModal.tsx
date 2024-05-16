import MSDatePicker from "@/components/Forms/MSDatePicker";
import MSForm from "@/components/Forms/MSForm";
import MSInput from "@/components/Forms/MSInput";
import MSTimePicker from "@/components/Forms/MSTimePicker";
import MSModal from "@/components/Shared/MSModal/MSModal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { TMSModalProps } from "@/types/modal";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const CreateScheduleModal = ({ open, setOpen }: TMSModalProps) => {
  const [createSchedule] = useCreateScheduleMutation();
  const handleCreateSchedule = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);
    try {
      const res = await createSchedule(values).unwrap();

      if (res?.length) {
        toast.success("Schedule created successfully");
        setOpen(false);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error: any) {
      console.error(error.message);
      toast.error("Something went wrong");
    }
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
          <Grid item md={6}>
            <MSDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={6}>
            <MSDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <MSTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <MSTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button type="submit" sx={{ mt: "20px" }}>
            Create
          </Button>
        </Box>
      </MSForm>
    </MSModal>
  );
};

export default CreateScheduleModal;
