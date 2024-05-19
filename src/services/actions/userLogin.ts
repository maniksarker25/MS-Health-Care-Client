import { FieldValues } from "react-hook-form";
import setAccessTokenToCookies from "./setAccessTokenToCookies";

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/auth/login-user`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      // cache: "no-store",
      credentials: "include",
    }
  );

  const userInfo = await res.json();

  if (userInfo?.data?.accessToken) {
    setAccessTokenToCookies(userInfo?.data?.accessToken, {
      redirect: "/dashboard",
    });
  }
  return userInfo;
};
