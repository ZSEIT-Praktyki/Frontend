import { axiosbase } from "@utils/helpers/axiosbase";
import store from "@utils/store/store";
import { userActions } from "@utils/store/User/User";
import axios from "axios";
import { useEffect } from "react";

export default function useUserCredentials() {
  const { isLoggedIn } = store.getState().user;

  useEffect(() => {
    const source = axios.CancelToken.source();

    if (isLoggedIn) {
      (async () => {
        try {
          const { data } = await axiosbase.get("/user/credentials", {
            cancelToken: source.token,
          });

          store.dispatch(userActions.setDetails(data));
        } catch (error) {
          console.warn(error);
        }
      })();
    }

    return () => {
      source?.cancel();
    };
  }, [isLoggedIn]);
}
