import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { useState } from "react";
import UpdateDoctorInfoModal from "./UpdateDoctorInfoModal";

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),

  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
  width: "100%", // default for small devices
  [theme.breakpoints.up("md")]: {
    width: "45%", // for medium and up devices
  },
}));

const DoctorInformation = ({ data }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "15px",
        }}
      >
        <Typography variant="h5" color="primary.main" mb={2}>
          Personal Information
        </Typography>
        <Button onClick={() => setIsModalOpen(true)}>Update Information</Button>
      </Box>
      <UpdateDoctorInfoModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        id={data?.id}
      />
      <Stack direction={{ xs: "column", md: "row" }} gap={2} flexWrap={"wrap"}>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Role
          </Typography>
          <Typography>{data?.role}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Name
          </Typography>
          <Typography>{data?.name}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Email
          </Typography>
          <Typography>{data?.email}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography color="secondary" variant="caption">
            Gender
          </Typography>
          <Typography>{data?.gender}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Designation
          </Typography>
          <Typography>{data?.designation}</Typography>
        </StyledInformationBox>
      </Stack>

      <Typography variant="h5" my={2} color={"primary.main"}>
        Professional Information
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} flexWrap={"wrap"} gap={2}>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Appointment Fee
          </Typography>
          <Typography>{data?.appointmentFee}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Qualification
          </Typography>
          <Typography>{data?.qualification}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Current Working Place
          </Typography>
          <Typography>{data?.currentWorkingPlace}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Joined
          </Typography>
          <Typography>
            {data
              ? new Date(data.createdAt).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "2-digit",
                })
              : null}
          </Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Current Status
          </Typography>
          <Typography>{data?.status}</Typography>
        </StyledInformationBox>
        <StyledInformationBox>
          <Typography variant="caption" color="secondary">
            Average Rating
          </Typography>
          <Typography>{data?.averageRating}</Typography>
        </StyledInformationBox>
      </Stack>
    </>
  );
};

export default DoctorInformation;
