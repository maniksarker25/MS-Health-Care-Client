"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import CreateDoctorModal from "./components/CreateDoctorModal";

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box>
      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent={{ sm: "start", md: "space-between" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Button onClick={() => setIsModalOpen(true)}>Create Doctor</Button>
        <CreateDoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" label="Search Specialties" />
      </Stack>
    </Box>
  );
};

export default DoctorsPage;
