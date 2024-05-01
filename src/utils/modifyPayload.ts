import { IPatientRegisterFormData } from "@/app/register/page";

export const modifyPayload = (values: IPatientRegisterFormData) => {
  const obj = { ...values };
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);
  return formData;
};
