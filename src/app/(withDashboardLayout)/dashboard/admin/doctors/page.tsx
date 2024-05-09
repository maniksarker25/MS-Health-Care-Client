"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import CreateDoctorModal from "./components/CreateDoctorModal";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import DoctorTable from "./components/DoctorTable";
import { useDebounce } from "@/redux/hooks";

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  // debounce
  const debouncedTerm = useDebounce({
    searchQuery: searchTerm,
    delay: 600,
  });
  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }
  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  const doctors = data?.doctors;
  const meta = data?.meta;

  return (
    <Box>
      <Stack
        direction={{ sm: "column", md: "row" }}
        justifyContent={{ sm: "start", md: "space-between" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Button onClick={() => setIsModalOpen(true)}>Create Doctor</Button>
        <CreateDoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          label="Search Specialties"
        />
      </Stack>
      <Box
        sx={{
          mt: "20px",
        }}
      >
        {!isLoading && doctors && meta ? (
          <DoctorTable doctors={doctors} meta={meta} />
        ) : (
          <h1>Loading.....</h1>
        )}
      </Box>
    </Box>
  );
};

export default DoctorsPage;
