import { authKey } from "@/constants/authKey";
import { setToLocalStorage } from "@/utils/localStorage";

export const storeUserInfo = (accessToken: string) => {
  return setToLocalStorage(authKey, accessToken);
};
