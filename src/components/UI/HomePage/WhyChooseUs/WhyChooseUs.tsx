import { Box, Container, Grid, Typography } from "@mui/material";
import assets from "@/assets";
import chooseUsImg from "@/assets/choose-us.png";
import Image from "next/image";

const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];
const WhyChooseUs = () => {
  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>
        <Grid container spacing={3} my={5} alignItems={"center"}>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[0].imageSrc}
                  alt="serviceImg"
                  width={50}
                />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[0].title}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={300}
                  color="primary.body1"
                >
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
                margin: "20px 0px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[1].imageSrc}
                  alt="serviceImg"
                  width={50}
                />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[1].title}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={300}
                  color="primary.body1"
                >
                  {servicesData[1].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[2].imageSrc}
                  alt="serviceImg"
                  width={50}
                />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[2].title}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={300}
                  color="primary.body1"
                >
                  {servicesData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[3].imageSrc}
                  alt="serviceImg"
                  width={50}
                />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[3].title}
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={300}
                  color="primary.body1"
                >
                  {servicesData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            {" "}
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Image src={chooseUsImg} alt="choose-us" width={400} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyChooseUs;
