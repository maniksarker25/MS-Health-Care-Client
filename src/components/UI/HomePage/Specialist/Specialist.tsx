import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties");
  const specialties = await res.json();
  console.log(specialties);
  return (
    <Container>
      <Box
        sx={{
          margin: "140px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments Across Specialties
          </Typography>
          <Typography component={"p"} fontWeight={300} fontSize={"18px"}>
            Experienced Doctor Across All Specialties
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialist;
