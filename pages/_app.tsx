import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@utils/store/store";
import Layout from "@utils/Layout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { userActions } from "@utils/store/User/User";
import useUserCredentials from "@utils/hooks/useUserCredentials";

const stripePromise = loadStripe(
  "pk_test_51KHt5OJFFDDymwGwp9gsCogqhxvzYvyo2wJsIAwSrPflIZjFZn2OtUhBbQAwt9SNek6Ol2e7QZUSh86NJyNByl2m00scfwXXjW"
);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const val = localStorage.getItem("user");
    if (val !== null) {
      store.dispatch(userActions.setLoggedIn());
    }
  }, []);

  useUserCredentials();

  return (
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Elements>
  );
}

export default MyApp;
