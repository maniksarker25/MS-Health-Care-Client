"use server";
import { cookies } from "next/headers";
import { authKey } from "@/constants/authKey";
import { redirect } from "next/navigation";
const setAccessTokenToCookies = (token: string, option?: any) => {
  cookies().set(authKey, token);
  if (option && option.redirect) {
    redirect(option.redirect);
  }
};

export default setAccessTokenToCookies;
