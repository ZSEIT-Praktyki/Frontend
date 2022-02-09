import axios from "axios";
import { API } from "@utils/assets/constants/routes";
import { useState } from "react";

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
}

export default function useAuthenticate(type: "login" | "register") {
  const url = ROUTES[type];

  const [state, setState] = useState<StateProps>({});

  async function onSubmit({ email, password }: DataProps) {
    return axios
      .post(url, { email, password })
      .then(({ data, status }) => ({ data, status }));
  }

  async function onRegister(props: DataProps) {
    onSubmit(props).then(({ status }) => {
      if (status === 201) {
      }
    });
  }

  async function onLogin(props: DataProps) {
    onSubmit(props)
      .then(({ status }) => {
        if (status === 200) {
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return {
    onRegister,
    onLogin,
  };
}
