"use client";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import CreateDoctorScheduleModal from "./components/CreateDoctorScheduleModal";

import { useGetMyScheduleQuery } from "@/redux/api/doctorScheduleApi";
import DoctorScheduleTable from "./components/DoctorScheduleTable";

const DoctorSchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data } = useGetMyScheduleQuery({});
  const doctorSchedules = data?.data;
  const meta = data?.meta;
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <CreateDoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box>
        <DoctorScheduleTable doctorSchedules={doctorSchedules} meta={meta} />
      </Box>
    </Box>
  );
};

export default DoctorSchedulePage;
