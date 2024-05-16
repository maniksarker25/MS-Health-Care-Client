"use client";
import { Box, Button } from "@mui/material";
import CreateScheduleModal from "./components/CreateScheduleModal";
import { useState } from "react";
import ScheduleTable from "./components/ScheduleTable";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSchedulesQuery({});
  const schedules = data?.schedules;
  const meta = data?.meta;
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <CreateScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box
        sx={{
          mt: "20px",
        }}
      >
        {!isLoading && schedules && meta ? (
          <ScheduleTable schedules={schedules} meta={meta} />
        ) : (
          <h1>Loading.....</h1>
        )}
      </Box>
    </Box>
  );
};

export default SchedulesPage;
