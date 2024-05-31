"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import { z } from "zod";
import KeyIcon from "@mui/icons-material/Key";
import MSForm from "@/components/Forms/MSForm";
import MSInput from "@/components/Forms/MSInput";
import { FieldValues } from "react-hook-form";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import logoutUser from "@/services/actions/logoutUser";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const validationSchema = z.object({
  currentPassword: z.string().min(6, "Must be at least 6 characters long"),
  newPassword: z.string().min(6, "Must be at least 6 characters long"),
});
const ChangePasswordPage = () => {
  const router = useRouter();
  const [changePassword] = useChangePasswordMutation();
  const handleChangePassword = async (values: FieldValues) => {
    try {
      const res = await changePassword(values).unwrap();
      console.log(res);
      if (res === null) {
        logoutUser(router);
        toast.success("Password Changed Successfully");
        router.push("/login");
      } else {
        toast.error("Incorrect Current Password");
      }
    } catch (error) {
      toast.success("Incorrect Current Password");
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        boxShadow: 1,
        borderRadius: 1,
        mx: "auto",
        mt: {
          xs: 2,
          md: 5,
        },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Box
          sx={{
            "& svg": {
              width: 100,
              height: 100,
            },
          }}
        >
          <KeyIcon sx={{ color: "primary.main" }} />
        </Box>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: -1.5 }}>
          Change password
        </Typography>
      </Stack>
      <MSForm
        onSubmit={handleChangePassword}
        // defaultValues={{ oldPassword: "", newPassword: "" }}
        resolver={zodResolver(validationSchema)}
      >
        <Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ mb: "20px" }}>
            <MSInput
              name="currentPassword"
              type="password"
              label="Current Password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <MSInput
              name="newPassword"
              type="password"
              label="New Password"
              fullWidth
            />
          </Grid>
        </Grid>

        <Button type="submit" sx={{ width: "100%", my: 2 }}>
          Change Password
        </Button>
      </MSForm>
    </Box>
  );
};

export default ChangePasswordPage;
