import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useState } from "react";

import { Stack, Typography } from "@mui/material";
import MSModal from "@/components/Shared/MSModal/MSModal";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import MultipleSelect from "./MultipleSelect";
import LoadingButton from "@mui/lab/LoadingButton";
import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorScheduleApi";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateDoctorScheduleModal = ({ open, setOpen }: TProps) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedScheduleIds, setSelectedScheduleIds] = useState<string[]>([]);
  const query: Record<string, any> = {};

  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  const { data, refetch } = useGetAllSchedulesQuery(query);
  const schedules = data?.schedules;

  // create doctor mutation
  const [createDoctorSchedule, { isLoading }] =
    useCreateDoctorScheduleMutation();

  // create schedule
  const handleCreateDoctorSchedule = async () => {
    const toastId = toast.loading("Doctor schedule creating...");
    try {
      const res = await createDoctorSchedule({
        scheduleIds: selectedScheduleIds,
      }).unwrap();
      if (res?.count) {
        toast.success("Doctor schedule created successfully", { id: toastId });
        setOpen(false);
        refetch();
      } else {
        toast.error("Something went wrong", { id: toastId });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <MSModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <Stack direction={"column"} gap={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Controlled picker"
            value={dayjs(selectedDate)}
            disablePast
            onChange={(newValue) =>
              setSelectedDate(dayjs(newValue).toISOString())
            }
            sx={{ width: "100%" }}
          />
        </LocalizationProvider>
        {schedules?.length ? (
          <MultipleSelect
            schedules={schedules}
            selectedScheduleIds={selectedScheduleIds}
            setSelectedScheduleIds={setSelectedScheduleIds}
          />
        ) : (
          <Typography>There is no schedule is this day</Typography>
        )}

        <LoadingButton
          size="small"
          onClick={handleCreateDoctorSchedule}
          loading={isLoading}
          loadingIndicator="Submitting..."
          variant="contained"
        >
          <span>Submit</span>
        </LoadingButton>
      </Stack>
    </MSModal>
  );
};

export default CreateDoctorScheduleModal;
