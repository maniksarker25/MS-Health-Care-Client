import { TLoginFormValue } from "@/app/login/page";

export const userLogin = async (data: TLoginFormValue) => {
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