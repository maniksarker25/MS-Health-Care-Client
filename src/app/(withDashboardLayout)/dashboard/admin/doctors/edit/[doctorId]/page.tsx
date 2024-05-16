"use client";
import MSForm from "@/components/Forms/MSForm";
import MSInput from "@/components/Forms/MSInput";
import MSSelect from "@/components/Forms/MSSelect";
import { Gender } from "@/constants/common";
import { modifyPayload } from "@/utils/modifyPayload";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TParams = {
  params: {
    doctorId: string;
  };
};
const DoctorUpdatePage = ({ params }: TParams) => {
  const handleUpdateDoctor = async (values: FieldValues) => {
    values.experience = Number(values.experience);
    values.appointmentFee = Number(values.appointmentFee);
    console.log(values);
    const data = await modifyPayload(values);
    // try {
    //   const res = await createDoctor(data).unwrap();
    //   if (res?.id) {
    //     toast.success("Doctor created successfully!!!");
    //     setOpen(false);
    //   }
    // } catch (error: any) {
    //   console.error(error.message);
    // }
  };
  return (
    <Box>
      <Typography variant="h5" component={"h4"}>
        Update Doctor Information
      </Typography>
      <MSForm onSubmit={handleUpdateDoctor}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <MSInput name="name" label="Name" fullWidth={true} sx={{ mb: 2 }} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MSInput
              name="email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <MSInput
              name="contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MSInput
              name="address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MSInput
              name="registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MSInput
              name="experience"
              type="number"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MSSelect
              items={Gender}
              name="gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MSInput
              name="appointmentFee"
              type="number"
              label="Appointment Fee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MSInput
              name="qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <MSInput
              name="currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MSInput
              name="designation"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit">Update</Button>
      </MSForm>
    </Box>
  );
};

export default DoctorUpdatePage;
