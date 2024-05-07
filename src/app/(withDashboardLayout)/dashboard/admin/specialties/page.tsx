"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SpecialistModal from "./components/SpecialistModal";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent={{ sm: "start", md: "space-between" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" label="Search Specialties" />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
