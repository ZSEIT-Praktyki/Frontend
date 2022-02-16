import { axiosbase } from "@utils/helpers/axiosbase";
import { userActions } from "@utils/store/User/User";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function useCheckCookie() {
  const [cookie, setCookie] = useState<"OK" | "EXPIRED" | "">("");

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await axiosbase.post("/user/cookie");
        setCookie("OK");
      } catch (error) {
        setCookie("EXPIRED");
        dispatch(userActions.setLoggedOut());
      }
    })();
  }, []);

  return { cookie };
}
