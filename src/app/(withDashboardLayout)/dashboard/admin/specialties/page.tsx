"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import CreateSpecialtyModal from "./components/CreateSpecialtyModal";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery(undefined);
  console.log(data);
  return (
    <Box>
      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent={{ sm: "start", md: "space-between" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <CreateSpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" label="Search Specialties" />
      </Stack>
      <Box>
        <h1>Display specialties</h1>
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
