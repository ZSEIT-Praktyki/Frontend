import axios from "axios";
import { API } from "@utils/assets/constants/routes";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { userActions } from "@utils/store/User/User";
import { axiosbase } from "@utils/helpers/axiosbase";

const ROUTES = {
  login: `${API}/user/login`,
  register: `${API}/user/register`,
};

interface DataProps {
  email: string;
  password: string;
}

interface StateProps {
  error?: {
    statusCode: number;
    message: string;
  };
  response?: {};

  loading: boolean;
}

export default function useAuthenticate(type: "login" | "register") {
  const url = ROUTES[type];

  const [state, setState] = useState<StateProps>({
    loading: false,
  });
  const router = useRouter();
  const dispatch = useDispatch();

  async function onSubmit({ email, password }: DataProps) {
    return axios
      .post(
        url,
        { email, password },
        {
          withCredentials: true,
        }
      )
      .then(({ data, status }) => ({ data, status }));
  }

  async function onRegister(props: DataProps) {
    onSubmit(props)
      .then(({ data }) => {
        if (data.StatusCode === 201 || data.statusCode === 200) {
          dispatch(userActions.setLoggedIn());
          router.push("/");
        }
      })
      .catch((err) => {
        if (typeof err?.response?.data !== "undefined") {
          setState((p) => ({ ...p, error: err?.response?.data }));
        } else {
          setState((p) => ({ ...p, error: { statusCode: 400, message: err } }));
        }
      });
  }

  async function onLogin(props: DataProps) {
    onSubmit(props)
      .then(({ data }) => {
        if (data.statusCode === 200) {
          console.log(data);

          dispatch(userActions.setLoggedIn());
          router.push("/");
        }
      })
      .catch((err) => {
        if (typeof err?.response?.data !== "undefined") {
          setState((p) => ({ ...p, error: err?.response?.data }));
        } else {
          setState((p) => ({ ...p, error: { statusCode: 400, message: err } }));
        }
      });
  }

  async function signOut() {
    try {
      await axiosbase.post("/user/signout");
    } catch (error) {}
  }

  return {
    onRegister,
    onLogin,
    state,
    signOut,
  };
}
