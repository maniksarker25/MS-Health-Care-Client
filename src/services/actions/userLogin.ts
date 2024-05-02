import { TLoginFormValue } from "@/app/login/page";
import { FieldValues } from "react-hook-form";

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/auth/login-user`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const userInfo = await res.json();
  return userInfo;
};
