import MSModal from "@/components/Shared/MSModal/MSModal";
import { TextField } from "@mui/material";
import React from "react";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialistModal = ({ open, setOpen }: TProps) => {
  return (
    <MSModal open={open} setOpen={setOpen} title={"Create Specialty"}>
      <TextField />
    </MSModal>
  );
};

export default SpecialistModal;
