"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";

interface IPatientData {
  name: string;
  email: string;

  contactNumber: string;
  address: string;
}

export interface IPatientRegisterFormData {
  password: string;
  patient: IPatientData;
}
const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPatientRegisterFormData>();
  const onSubmit: SubmitHandler<IPatientRegisterFormData> = async (values) => {
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res.success) {
        const result = await userLogin({
          email: values.patient.email,
          password: values.password,
        });
        if (result.success) {
          storeUserInfo(result?.data?.accessToken);
          toast.success(result.message);
          router.push("/");
        }
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image
                src={assets.svgs.logo}
                alt="register-logo"
                width={50}
                height={50}
              />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box textAlign={"center"}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3} my={1}>
                <Grid item md={12}>
                  <TextField
                    id="name"
                    label="Name"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("patient.email")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    {...register("password")}
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="contactNumber"
                    label="Contact Number"
                    type="text"
                    {...register("patient.contactNumber")}
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    id="address"
                    label="Address"
                    type="text"
                    {...register("patient.address")}
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth={true}
                sx={{
                  margin: "20px 0px",
                }}
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account?
                <Link className="text-[#1586FD]" href={"/login"}>
                  Login
                </Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
