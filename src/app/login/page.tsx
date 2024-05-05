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
import { FieldValues } from "react-hook-form";
import { userLogin } from "@/services/actions/userLogin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.services";
import MSForm from "@/components/Forms/MSForm";
import MSInput from "@/components/Forms/MSInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export type TLoginFormValue = {
  email: string;
  password: string;
};

export const validationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Please enter valid email address!"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters!"),
});

const LoginPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = async (data: FieldValues) => {
    setError("");
    try {
      const res = await userLogin(data);
      // console.log(res);
      if (res.success) {
        storeUserInfo(res?.data?.accessToken);
        toast.success(res.message);
        router.push("/dashboard");
      } else {
        setError(res.message);
      }
    } catch (error: any) {
      console.log(error.message);
      console.log(error.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
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
                Login
              </Typography>
            </Box>
          </Stack>
          <Box textAlign={"center"}>
            <MSForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
            >
              <Grid container spacing={3} my={1}>
                <Grid item md={6}>
                  <MSInput
                    label="Email"
                    type="email"
                    size="small"
                    fullWidth={true}
                    name="email"
                  />
                </Grid>
                <Grid item md={6}>
                  <MSInput
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Typography
                sx={{
                  cursor: "pointer",
                }}
                textAlign={"end"}
                component="p"
                fontWeight={600}
              >
                Forget Password
              </Typography>
              {error && (
                <Box>
                  <Typography color={"red"}>{error}</Typography>
                </Box>
              )}
              <Button
                fullWidth={true}
                sx={{
                  margin: "20px 0px",
                }}
                type="submit"
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?
                <Link style={{ color: "#1586FD" }} href={"/register"}>
                  Create an account
                </Link>
              </Typography>
            </MSForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
