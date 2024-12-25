import { instance } from "./api";
import { useMutation } from "@tanstack/react-query"
import getNotify from "./Notify";
import { getCookie, setCookie } from "./getCooce";
const { notify } = getNotify();

export const loginHok = (onSuccess, onError) => {
  return useMutation({
    mutationFn: (data) => instance.post("api/auth/login", data),
    onSuccess: (data) => {
      setCookie('role', data?.data.role)
      setCookie('token', data?.data.token)
      localStorage.setItem("myArray", JSON.stringify( data?.data));
      if (onSuccess) {
        onSuccess();
      }
    },
    onError: (error) => {
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
