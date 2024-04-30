import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h4" component={Link} href="/" fontWeight={600}>
          M
          <Box component={"span"} color={"primary.main"}>
            S
          </Box>{" "}
          Health Care
        </Typography>

        <Stack direction={"row"} gap={4} justifyContent={"space-between"}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography>NGOs</Typography>
        </Stack>
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
