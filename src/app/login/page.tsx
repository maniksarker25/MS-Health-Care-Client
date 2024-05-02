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

export type TLoginFormValue = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = async (data: FieldValues) => {
    try {
      const res = await userLogin(data);
      // console.log(res);
      if (res.success) {
        storeUserInfo(res?.data?.accessToken);
        toast.success(res.message);
        router.push("/");
      }
    } catch (error: any) {
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
            <MSForm onSubmit={handleLogin}>
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
                className="cursor-pointer"
                textAlign={"end"}
                component="p"
                fontWeight={600}
              >
                Forget Password
              </Typography>
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
                <Link className="text-[#1586FD]" href={"/register"}>
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
