import { instance } from "./api";
import {useMutation} from "@tanstack/react-query"
import getNotify from "./Notify";
import { setCookie } from "./getCooce";
const {notify} = getNotify();

export const loginHok = (onSuccess, onError) => {
  return useMutation({
    mutationFn: (data) => instance.post("api/auth/login", data),
    onSuccess: (data) => {
      console.log(data)
      setCookie('token',data?.data.token)
    //   setCookie("access",data?.data.access)
      if (onSuccess) {
        onSuccess();
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
export default loginHok
