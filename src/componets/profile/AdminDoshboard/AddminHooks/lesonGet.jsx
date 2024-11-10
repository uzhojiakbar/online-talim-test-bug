export const LessonGet = (onSuccess, onError) => {
    return useMutation({
      mutationFn: (data) => instance.post("/api/lessons", data),
      onSuccess: (data) => {
        console.log(data?.data);
  
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
  