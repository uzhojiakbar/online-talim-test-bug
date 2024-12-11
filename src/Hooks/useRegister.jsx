import { instance } from "./api";
import {useMutation} from "@tanstack/react-query"
import getNotify from "./Notify";
const {notify} = getNotify();

export const useRegister = (onSuccess, onError) => {
  return useMutation({
    mutationFn: (data) => instance.post("/api/auth/register", data),
    onSuccess: (data) => {
      console.log(data?.data);
      if (onSuccess) {
        onSuccess();
        // localStorage.setItem(JSON.stringify('usersdata',data?.data))
      }
    },
    onError: (error) => {
      console.log(error);
      if (onError) {
        onError(error);
      } else {
        notify(
          "err",
          "Qandaydur xatolik. Iltimos keyinroq qayta urinib ko'ring."
        );
      }
    },
  });
};
