"use client";
import { Box, Button } from "@mui/material";
import CreateScheduleModal from "./components/CreateScheduleModal";
import { useState } from "react";

const DoctorSchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
      <CreateScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
    </Box>
  );
};

export default DoctorSchedulePage;
