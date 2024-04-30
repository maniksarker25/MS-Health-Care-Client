import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type TSpecialty = {
  id: string;
  title: string;
  icon: string;
};

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();
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
        <Stack direction={"row"} gap={5} mt={5}>
          {specialties?.map((specialty: TSpecialty) => (
            <Box
              key={specialty?.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245,245,245,1)",
                border: "1px solid rgba(250,250,250,1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  width: "60px",
                  height: "60px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid blue",
                  borderRadius: "10px",
                  padding: "40px 10px",
                },
              }}
            >
              <Image
                src={specialty.icon}
                alt="specialty-icon"
                width={100}
                height={100}
              />
              <Box mt={1}>
                <Typography variant="h6" fontWeight={500}>
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default Specialist;
