import { FieldValues } from "react-hook-form";

export const modifyPayload = (values: FieldValues) => {
  const obj = { ...values };
  const file = obj["file"];
  delete obj["file"];
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);
  formData.append("file", file as Blob);
  return formData;
};
