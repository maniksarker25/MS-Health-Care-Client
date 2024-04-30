import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";

const Footer = () => {
  return (
    <Box bgcolor={"rgb(17, 26, 34)"} py={5}>
      <Container>
        <Stack direction={"row"} gap={4} justifyContent={"center"}>
          <Typography color={"#fff"} component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color={"#fff"} component={Link} href="/health-plans">
            Health Plans
          </Typography>
          <Typography color={"#fff"} component={Link} href="/medicine">
            Medicine
          </Typography>
          <Typography color={"#fff"} component={Link} href="/diagnostics">
            Diagnostics
          </Typography>
          <Typography color={"#fff"}>NGOs</Typography>
        </Stack>
        <Stack direction={"row"} gap={2} justifyContent={"center"} py={3}>
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
          <Image src={facebookIcon} alt="facebook" width={30} height={30} />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction={"row"}
          gap={2}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={3}
        >
          <Typography component={"p"} color={"white"}>
            &copy;2024 MS Health Care.All Rights Reserved
          </Typography>
          <Typography
            color={"white"}
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
          >
            M
            <Box component={"span"} color={"primary.main"}>
              S
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component={"p"} color={"white"}>
            Privacy Policy! Terms and conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
