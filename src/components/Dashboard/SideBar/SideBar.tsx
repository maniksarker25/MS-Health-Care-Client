import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { generateDrawerItems } from "@/utils/generateDrawerItems";
import { TUserRole } from "@/types";
import SideBarItems from "./SideBarItems";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";
const SideBar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        component={Link}
        href={"/"}
        sx={{
          py: 1,
          mt: 1,
        }}
      >
        <Image src={assets.svgs.logo} alt="logo" width={40} height={40} />
        <Typography variant="h6" component={"h1"}>
          MS Health Care
        </Typography>
      </Stack>
      <List>
        {generateDrawerItems(userRole as TUserRole).map((item, index) => (
          <SideBarItems key={index} item={item}></SideBarItems>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
