"use client";
import { useGetMyProfileQuery } from "@/redux/api/profile";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

import banner from "@/assets/images/banner.png";
import DoctorProfile from "./components/DoctorProfile";
import DoctorInformation from "./components/DoctorInformation";

const DoctorProfilePage = () => {
  const { data, isLoading } = useGetMyProfileQuery({});
  console.log(data);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "350px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          layout="responsive"
          objectFit="cover"
          src={banner}
          alt="banner"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          margin: "0px auto",
          maxWidth: "1000px",
        }}
      >
        <Box
          sx={{
            mt: "-100px",
            position: "absolute",
          }}
        >
          <Grid spacing={2} container>
            <Grid item lg={4}>
              <DoctorProfile data={data} />
            </Grid>
            <Grid item lg={8}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <DoctorInformation data={data} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default DoctorProfilePage;
