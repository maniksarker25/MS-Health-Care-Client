"use client";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import CreateDoctorScheduleModal from "./components/CreateDoctorScheduleModal";

import { useGetMyScheduleQuery } from "@/redux/api/doctorScheduleApi";
import DoctorScheduleTable from "./components/DoctorScheduleTable";
import AddIcon from "@mui/icons-material/Add";
const DoctorSchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const query: Record<string, any> = {};

  query["page"] = page;
  query["limit"] = limit;
  const { data } = useGetMyScheduleQuery({ ...query });
  const doctorSchedules = data?.data;
  const meta = data?.meta;
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)} endIcon={<AddIcon />}>
        Create Schedule
      </Button>
      <CreateDoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box
        sx={{
          mt: "20px",
        }}
      >
        <DoctorScheduleTable
          doctorSchedules={doctorSchedules}
          meta={meta}
          page={page}
          setPage={setPage}
          limit={limit}
        />
      </Box>
    </Box>
  );
};

export default DoctorSchedulePage;
