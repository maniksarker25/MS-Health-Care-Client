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
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import MSForm from "@/components/Forms/MSForm";
import MSInput from "@/components/Forms/MSInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const patientValidationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(1, "Please enter your full name"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Please enter a valid email address"),
  contactNumber: z
    .string({ required_error: "Contact Number is required" })
    .regex(/^\d{11}$/, "Please provide a valid contact number"),
  address: z.string({ required_error: "Address is required" }),
});

export const patientRegisterValidationSchema = z.object({
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
  patient: patientValidationSchema,
});

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleRegister = async (values: FieldValues) => {
    setError("");
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
      } else {
        setError(res.message);
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
            <MSForm
              onSubmit={handleRegister}
              resolver={zodResolver(patientRegisterValidationSchema)}
            >
              <Grid container spacing={3} my={1}>
                <Grid item md={12}>
                  <MSInput
                    label="Name"
                    type="text"
                    fullWidth={true}
                    name="patient.name"
                  />
                </Grid>
                <Grid item md={6}>
                  <MSInput
                    label="Email"
                    type="email"
                    fullWidth={true}
                    name="patient.email"
                  />
                </Grid>
                <Grid item md={6}>
                  <MSInput
                    label="Password"
                    type="password"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <MSInput
                    label="Contact Number"
                    type="text"
                    name="patient.contactNumber"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <MSInput
                    label="Address"
                    type="text"
                    name="patient.address"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              {error && (
                <Box>
                  <Typography color={"red"}>{error}</Typography>
                </Box>
              )}
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
            </MSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
