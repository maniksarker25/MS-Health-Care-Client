import MSForm from "@/components/Forms/MSForm";
import MSInput from "@/components/Forms/MSInput";
import MSModal from "@/components/Shared/MSModal/MSModal";
import { TMSModalProps } from "@/types/modal";
import { Button } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

const CreateScheduleModal = ({ open, setOpen }: TMSModalProps) => {
  const handleCreateSchedule = async (values: FieldValues) => {};
  return (
    <MSModal open={open} setOpen={setOpen} title={"Create Schedule"}>
      <MSForm onSubmit={handleCreateSchedule}>
        <MSInput name="name" label="label" />
        <Button type="submit">Create</Button>
      </MSForm>
    </MSModal>
  );
};

export default CreateScheduleModal;
