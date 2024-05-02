import { FieldValues } from "react-hook-form";

export const modifyPayload = (values: FieldValues) => {
  const obj = { ...values };
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);
  return formData;
};
