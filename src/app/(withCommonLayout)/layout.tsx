import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "screen",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default CommonLayout;
