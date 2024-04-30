import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        alignItems: "center",
        my: "16",
      }}
    >
      <Box
        sx={{
          flex: "1",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "600px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Box
          sx={{
            mt: "150px",
          }}
        >
          <Typography variant="h3" component={"h1"} fontWeight={600}>
            Healthier Hearts{" "}
          </Typography>
          <Typography variant="h3" component={"h1"} fontWeight={600}>
            Come From
          </Typography>
          <Typography
            color={"primary.main"}
            variant="h3"
            component={"h1"}
            fontWeight={600}
          >
            Preventive Care
          </Typography>
          <Typography
            variant="h6"
            component={"p"}
            fontWeight={400}
            sx={{
              mt: "20px",
              mb: "40px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
            pariatur placeat. Quasi ipsum unde nesciunt commodi omnis molestias
            nam mollitia?
          </Typography>
          <Button>Make Appointment</Button>
          <Button
            variant="outlined"
            sx={{
              ml: "10px",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: "150px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "220px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} alt="arrow" width={100} height={100} />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Box mt={4}>
            <Image
              src={assets.images.doctor1}
              alt="doctor1"
              width={240}
              height={380}
            />
          </Box>
          <Box>
            <Image
              src={assets.images.doctor2}
              alt="doctor2"
              width={240}
              height={350}
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "230px",
            left: "150px",
          }}
        >
          <Image
            src={assets.images.doctor3}
            alt="doctor3"
            width={240}
            height={240}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: 0,
            zIndex: -1,
          }}
        >
          <Image
            src={assets.images.stethoscope}
            alt="doctor3"
            width={180}
            height={180}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
