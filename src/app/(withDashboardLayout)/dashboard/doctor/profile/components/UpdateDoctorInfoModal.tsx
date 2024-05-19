import MSForm from "@/components/Forms/MSForm";
import MSInput from "@/components/Forms/MSInput";
import MSSelect from "@/components/Forms/MSSelect";
import MSFullScreenModal from "@/components/Shared/MSModal/MSFullScreenModal";
import { Gender } from "@/constants/common";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";

import { Button, Grid } from "@mui/material";
import MultipleSelectChip from "./MultipleSelectChip";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import {
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} from "@/redux/api/doctorApi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const validationSchema = z.object({
  experience: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number().int().optional()
  ),
  appointmentFee: z.preprocess(
    (x) => (x ? x : undefined),
    z.coerce.number().int().optional()
  ),
  name: z.string().optional(),
  contactNumber: z.string().optional(),
  registrationNumber: z.string().optional(),
  gender: z.string().optional(),
  qualification: z.string().optional(),
  currentWorkingPlace: z.string().optional(),
  designation: z.string().optional(),
});

const UpdateDoctorInfoModal = ({ open, setOpen, id }: TProps) => {
  const { data: doctorData, refetch, isSuccess } = useGetDoctorQuery(id);
  const { data: allSpecialties } = useGetAllSpecialtiesQuery({});
  const [updateDoctor, { isLoading: updating }] = useUpdateDoctorMutation();
  const [selectedSpecialtiesIds, setSelectedSpecialtiesIds] = useState([]);
  console.log(selectedSpecialtiesIds);
  console.log(doctorData);
  useEffect(() => {
    if (!isSuccess) return;

    setSelectedSpecialtiesIds(
      doctorData?.doctorSpecialties?.map((sp: any) => {
        return sp.specialtiesId;
      })
    );
  }, [isSuccess]);

  const handleDoctorInfoUpdate = async (values: FieldValues) => {
    const specialties = selectedSpecialtiesIds.map((specialtiesId: string) => ({
      specialtiesId,
      isDeleted: false,
    }));

    const excludedFields: Array<keyof typeof values> = [
      "email",
      "id",
      "role",
      "needPasswordChange",
      "status",
      "createdAt",
      "updatedAt",
      "isDeleted",
      "averageRating",
      "review",
      "profilePhoto",
      "registrationNumber",
      "schedules",
      "doctorSpecialties",
    ];
    const updatedValues = Object.fromEntries(
      Object.entries(values).filter(([key]) => {
        return !excludedFields.includes(key);
      })
    );
    updatedValues.specialties = specialties;

    try {
      const res = await updateDoctor({ body: updatedValues, id }).unwrap();
      if (res?.id) {
        toast.success("Doctor updated successfully");
        await refetch();
        setOpen(false);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <MSFullScreenModal
        open={open}
        setOpen={setOpen}
        title="Update Information"
      >
        <MSForm
          onSubmit={handleDoctorInfoUpdate}
          defaultValues={doctorData}
          resolver={zodResolver(validationSchema)}
        >
          <Grid container spacing={2} sx={{ my: 5 }}>
            <Grid item xs={12} sm={12} md={4}>
              <MSInput name="name" label="Name" sx={{ mb: 2 }} fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MSInput
                name="email"
                type="email"
                label="Email"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MSInput
                name="contactNumber"
                label="Contract Number"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MSInput
                name="address"
                label="Address"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MSInput
                name="registrationNumber"
                label="Registration Number"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MSInput
                name="experience"
                type="number"
                label="Experience"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MSSelect
                items={Gender}
                name="gender"
                label="Gender"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MSInput
                name="appointmentFee"
                type="number"
                label="Appointment Fee"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MSInput
                name="qualification"
                label="Qualification"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <MSInput
                name="currentWorkingPlace"
                label="Current Working Place"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MSInput
                name="designation"
                label="Designation"
                sx={{ mb: 2 }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MultipleSelectChip
                allSpecialties={allSpecialties}
                selectedIds={selectedSpecialtiesIds}
                setSelectedIds={setSelectedSpecialtiesIds}
              />
            </Grid>
          </Grid>

          <Button type="submit" disabled={updating}>
            Update
          </Button>
        </MSForm>
      </MSFullScreenModal>
    </div>
  );
};

export default UpdateDoctorInfoModal;
