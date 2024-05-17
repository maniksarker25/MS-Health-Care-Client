import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const DoctorProfile = ({ data }: any) => {
  return (
    <Box
      sx={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{}}>
        <Box
          sx={{
            width: "150px",
            height: "150px",
            position: "relative",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0px auto",
          }}
        >
          <Image
            src={data?.profilePhoto}
            width={150}
            height={150}
            alt="profilePhoto"
          />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            mt: "5px",
          }}
        >
          <Typography fontSize={"20px"} fontWeight={600}>
            {data?.name}
          </Typography>
          <Typography>{data?.designation}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mt: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid gray",
            paddingBottom: "5px",
            mb: "10px",
          }}
        >
          <Typography fontWeight={600}>Qualification:</Typography>
          <Typography>{data?.qualification}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid gray",
            paddingBottom: "5px",
            mb: "10px",
          }}
        >
          <Typography fontWeight={600}>Experience:</Typography>
          <Typography>{data?.experience}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid gray",
            paddingBottom: "5px",
            mb: "10px",
          }}
        >
          <Typography fontWeight={600}>Status:</Typography>
          <Typography>{data?.status}</Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "22px",
              mt: "30px",
            }}
          >
            Average Rating
          </Typography>
          <Rating name="read-only" value={data?.averageRating} readOnly />
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorProfile;
